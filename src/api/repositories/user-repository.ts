import { db } from "../models/db";
import { eq, and, gt, isNull, desc } from "drizzle-orm";
import { users, tokens } from "@/infra/db/drizzle/schema";

export const userRepo = {
  async findByEmail(email: string) {
    const rows = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    return rows[0] ?? null;
  },
  async create(data: {
    email: string;
    passwordHash: string;
    name?: string | null;
  }) {
    const rows = await db
      .insert(users)
      .values({
        email: data.email,
        passwordHash: data.passwordHash,
        name: data.name ?? null,
      })
      .returning();
    return rows[0];
  },
  async markEmailVerified(userId: string) {
    const rows = await db
      .update(users)
      .set({ emailVerifiedAt: new Date(), updatedAt: new Date() })
      .where(eq(users.id, userId))
      .returning();
    return rows[0];
  },
  async upsertToken(
    userId: string,
    type: "EMAIL_VERIFY" | "PASSWORD_RESET",
    tokenHash: string,
    minutesTTL: number
  ) {
    const expiresAt = new Date(Date.now() + minutesTTL * 60 * 1000);
    const rows = await db
      .insert(tokens)
      .values({ userId, type, tokenHash, expiresAt })
      .returning();
    return rows[0];
  },
  async findValidToken(
    userId: string,
    type: "EMAIL_VERIFY" | "PASSWORD_RESET"
  ) {
    const now = new Date();
    const rows = await db
      .select()
      .from(tokens)
      .where(
        and(
          eq(tokens.userId, userId),
          eq(tokens.type, type),
          gt(tokens.expiresAt, now),
          isNull(tokens.usedAt)
        )
      )
      .orderBy(desc(tokens.createdAt))
      .limit(1);
    return rows[0] ?? null;
  },
  async consumeToken(id: string) {
    const rows = await db
      .update(tokens)
      .set({ usedAt: new Date() })
      .where(eq(tokens.id, id))
      .returning();
    return rows[0];
  },
};
