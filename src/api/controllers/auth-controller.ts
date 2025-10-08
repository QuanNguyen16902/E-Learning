import { NextRequest, NextResponse } from "next/server";
import {
  RegisterSchema,
  LoginSchema,
  ForgotSchema,
  ResetSchema,
} from "@/@shared/types/auth";
import { AuthService } from "../services/auth-service";
import { MailService } from "../services/mail-service";
import { serialize, parse } from "cookie";
function setAuthCookies(
  res: NextResponse,
  accessToken: string,
  refreshToken: string
) {
  const access = serialize("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 15,
  });
  const refresh = serialize("refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  res.headers.append("Set-Cookie", access);
  res.headers.append("Set-Cookie", refresh);
}

export const AuthController = {
  async register(req: NextRequest) {
    try {
      const body = await req.json();
      const dto = RegisterSchema.parse(body);
      const { user, emailVerifyToken } = await AuthService.register(dto);
      await MailService.sendEmailVerification(user.email, emailVerifyToken);
      return NextResponse.json(
        { message: "Registered. Please verify your email." },
        { status: 201 }
      );
    } catch (e: any) {
      return NextResponse.json(
        { error: e.message ?? "Bad request" },
        { status: 400 }
      );
    }
  },

  async verify(req: NextRequest) {
    try {
      const { searchParams } = new URL(req.url);
      const token = searchParams.get("token");
      const email = searchParams.get("email");
      if (!token || !email) throw new Error("Missing token/email");
      await AuthService.verifyEmail({ email, token });
      return NextResponse.json({ message: "Email verified" });
    } catch (e: any) {
      return NextResponse.json(
        { error: e.message ?? "Bad request" },
        { status: 400 }
      );
    }
  },

  async login(req: NextRequest) {
    try {
      const body = await req.json();
      const dto = LoginSchema.parse(body);
      const { user, accessToken, refreshToken } = await AuthService.login(dto);
      const res = NextResponse.json({
        user: { id: user.id, email: user.email, name: user.name },
      });
      setAuthCookies(res, accessToken, refreshToken);
      return res;
    } catch (e: any) {
      return NextResponse.json(
        { error: e.message ?? "Bad request" },
        { status: 400 }
      );
    }
  },

  async me(_req: NextRequest) {
    return NextResponse.json({ ok: true });
  },

  async forgotPassword(req: NextRequest) {
    try {
      const body = await req.json();
      const { email } = ForgotSchema.parse(body);
      const { emailResetToken } = await AuthService.startPasswordReset(email);
      if (emailResetToken)
        await MailService.sendPasswordReset(email, emailResetToken);
      return NextResponse.json({
        message: "If the email exists, a reset link has been sent.",
      });
    } catch (e: any) {
      return NextResponse.json(
        { error: e.message ?? "Bad request" },
        { status: 400 }
      );
    }
  },

  async resetPassword(req: NextRequest) {
    try {
      const body = await req.json();
      const { token, password } = ResetSchema.parse(body);
      const { searchParams } = new URL(req.url);
      const email = searchParams.get("email");
    } catch (e: string | any) {
      return NextResponse.json(
        { error: e.message ?? "Bad request" },
        { status: 400 }
      );
    }
  },
};
