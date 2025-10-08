import { index, pgEnum, pgSchema, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

// const mySchema = pgSchema("drizzle")
// export const users = mySchema.table("users", {
//     id: uuid("id").primaryKey().defaultRandom(),
//     email: text("email").notNull().unique(),
//     createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
//     updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
//     lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
// });
// export type DbUser = typeof users.$inferInsert;

import { sql } from 'drizzle-orm';


export const tokenType = pgEnum('TokenType', ['EMAIL_VERIFY', 'PASSWORD_RESET']);


export const users = pgTable('Users', {
id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
email: varchar('email', { length: 255 }).notNull().unique(),
passwordHash: varchar('passwordHash', { length: 255 }).notNull(),
name: varchar('name', { length: 255 }),
emailVerifiedAt: timestamp('emailVerifiedAt', { mode: 'date' }),
createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow().notNull(),
});


export const tokens = pgTable('Token', {
id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
type: tokenType('type').notNull(),
userId: uuid('userId').notNull(),
tokenHash: text('tokenHash').notNull(),
expiresAt: timestamp('expiresAt', { mode: 'date' }).notNull(),
usedAt: timestamp('usedAt', { mode: 'date' }),
createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
}, (t) => ({
userTypeIdx: index('token_user_type_idx').on(t.userId, t.type),
}));