import { AuthController } from "@/api/controllers/auth-controller";
export async function POST(req: Request) {
    // to JSON NextRequest tương đương
  return AuthController.register(req);
}
