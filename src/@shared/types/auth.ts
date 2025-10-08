import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1).optional(),
});
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export const ForgotSchema = z.object({ email: z.string().email() });
export const ResetSchema = z.object({
  token: z.string().min(10),
  password: z.string().min(8),
});
export type RegisterDTO = z.infer<typeof RegisterSchema>;
export type LoginDTO = z.infer<typeof LoginSchema>;
