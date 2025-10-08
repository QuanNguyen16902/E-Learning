import { Env } from "@/@shared/config/env";
import { userRepo } from "../repositories/user-repository";
import { db } from "../models/db";
import { eq } from "drizzle-orm";
import {
  compareToken,
  hashPassword,
  hashToken,
  randomToken,
  verifyPassword,
} from "@/@shared/initialization/crypto";
import { users } from "@/infra/db/drizzle/schema";
import jwt from "jsonwebtoken";

function signAccessToken(userId: string) {
  return jwt.sign({ sub: userId, type: "access" }, Env.JWT_ACCESS_SECRET, {
    expiresIn: Env.JWT_ACCESS_EXPIRES_IN,
  });
}
function signRefreshToken(userId: string) {
  return jwt.sign({ sub: userId, type: "refresh" }, Env.JWT_REFRESH_SECRET, {
    expiresIn: Env.JWT_REFRESH_EXPIRES_IN,
  });
}

export const AuthService = {
  async register({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name?: string;
  }) {
    const exists = await userRepo.findByEmail(email);
    if (exists) throw new Error("Email already in use");
    const passwordHash = await hashPassword(password);
    const user = await userRepo.create({
      email,
      passwordHash,
      name: name ?? null,
    });

    const plain = randomToken(32);
    const tokenHash = await hashToken(plain);
    await userRepo.upsertToken(user.id, "EMAIL_VERIFY", tokenHash, 60 * 24);

    return { user, emailVerifyToken: plain };
  },

  async verifyEmail({ email, token }: { email: string; token: string }) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error("User not found");
    const t = await userRepo.findValidToken(user.id, "EMAIL_VERIFY");
    if (!t) throw new Error("Token invalid or expired");
    const ok = await compareToken(token, t.tokenHash);
    if (!ok) throw new Error("Token mismatch");
    await userRepo.consumeToken(t.id);
    await userRepo.markEmailVerified(user.id);
    return { ok: true };
  },

  async login({ email, password }: { email: string; password: string }) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");
    const ok = await verifyPassword(password, user.passwordHash);
    if (!ok) throw new Error("Invalid credentials");
    if (!user.emailVerifiedAt) throw new Error("Email not verified");
    const accessToken = signAccessToken(user.id);
    const refreshToken = signRefreshToken(user.id);
    return { user, accessToken, refreshToken };
  },

  async startPasswordReset(email: string) {
    const user = await userRepo.findByEmail(email);
    if (!user) return { ok: true };
    const plain = randomToken(32);
    const tokenHash = await hashToken(plain);
    await userRepo.upsertToken(user.id, "PASSWORD_RESET", tokenHash, 60);
    return { emailResetToken: plain };
  },

  async resetPassword({
    email,
    token,
    password,
  }: {
    email: string;
    token: string;
    password: string;
  }) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error("User not found");
    const t = await userRepo.findValidToken(user.id, "PASSWORD_RESET");
    if (!t) throw new Error("Token invalid or expired");
    const ok = await compareToken(token, t.tokenHash);
    if (!ok) throw new Error("Token mismatch");
    await userRepo.consumeToken(t.id);
    const passwordHash = await hashPassword(password);
    await db
      .update(users)
      .set({ passwordHash, updatedAt: new Date() })
      .where(eq(users.id, user.id));
    return { ok: true };
  },
};
