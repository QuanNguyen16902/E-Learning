import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/infra/db/drizzle/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: { url: process.env.SUPABASE_DB_URL! },
});