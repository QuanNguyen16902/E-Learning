CREATE TYPE "public"."TokenType" AS ENUM('EMAIL_VERIFY', 'PASSWORD_RESET');--> statement-breakpoint
CREATE TABLE "Users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"passwordHash" varchar(255) NOT NULL,
	"name" varchar(255),
	"emailVerifiedAt" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "drizzle"."users1" SET SCHEMA "public";
--> statement-breakpoint
ALTER TABLE "users1" RENAME TO "Token";--> statement-breakpoint
ALTER TABLE "Token" DROP CONSTRAINT "users1_email_unique";--> statement-breakpoint
ALTER TABLE "Token" ADD COLUMN "type" "TokenType" NOT NULL;--> statement-breakpoint
ALTER TABLE "Token" ADD COLUMN "userId" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "Token" ADD COLUMN "tokenHash" text NOT NULL;--> statement-breakpoint
ALTER TABLE "Token" ADD COLUMN "expiresAt" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "Token" ADD COLUMN "usedAt" timestamp;--> statement-breakpoint
ALTER TABLE "Token" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
CREATE INDEX "token_user_type_idx" ON "Token" USING btree ("userId","type");--> statement-breakpoint
ALTER TABLE "Token" DROP COLUMN "email";--> statement-breakpoint
ALTER TABLE "Token" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "Token" DROP COLUMN "updated_at";--> statement-breakpoint
ALTER TABLE "Token" DROP COLUMN "last_login_at";