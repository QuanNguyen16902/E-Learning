import type { NextRequest } from "next/server";
import { AuthController } from "@/api/controllers/auth-controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  return AuthController.verify(req as any);
}

export function POST() {
  return new Response("Method Not Allowed", { status: 405 });
}
