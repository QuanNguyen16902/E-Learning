import { Env } from "@/@shared/config/env";
import { Resend } from "resend";
const resend = new Resend(Env.RESEND_API_KEY);

export const MailService = {
  async sendEmailVerification(email: string, token: string) {
    const url = `${Env.APP_BASE_URL}/api/auth/verify?token=${encodeURIComponent(
      token
    )}&email=${encodeURIComponent(email)}`;
    await resend.emails.send({
      from: Env.MAIL_FROM,
      to: email,
      subject: "Verify your email",
      html: `<p>Verify your email by clicking the link below:</p><p><a href="${url}">Verify Email</a></p>`,
    });
  },
  async sendPasswordReset(email: string, token: string) {
    const url = `${Env.APP_BASE_URL}/reset-password?token=${encodeURIComponent(
      token
    )}&email=${encodeURIComponent(email)}`;
    await resend.emails.send({
      from: Env.MAIL_FROM,
      to: email,
      subject: "Reset your password",
      html: `<p>Click the link below to reset your password:</p><p><a href="${url}">Reset Password</a></p>`,
    });
  },
};
