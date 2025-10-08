import { AuthController } from "@/api/controllers/auth-controller";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  return AuthController.login(req as any);
}

export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
