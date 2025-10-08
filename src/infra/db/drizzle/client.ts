import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";
import { users } from "./schema";

config({ path: ".env" });

const sql = drizzle(process.env.DATABASE_URL!);
export const db = drizzle(sql, {
  schema: { users }, // Chỉ định schema để Drizzle biết dùng schema nào
});