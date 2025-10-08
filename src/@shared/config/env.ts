export const Env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  DATABASE_URL: req("DATABASE_URL"),
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN ?? "15m",
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  APP_BASE_URL: req("APP_BASE_URL"),
  RESEND_API_KEY: req("RESEND_API_KEY"),
  MAIL_FROM: req("MAIL_FROM"),
};

function req(k: string): string {
  const v = process.env[k];
  if (!v) throw new Error(`Missing env ${k}`);
  return v;
}
