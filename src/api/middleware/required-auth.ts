import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { Env } from '@/@shared/config/env';

export function getAuthUserId(req: NextRequest): string | null {
const cookie = req.headers.get('cookie') ?? '';
const match = /access_token=([^;]+)/.exec(cookie);
if (!match) return null;
try {
const payload = jwt.verify(decodeURIComponent(match[1]), Env.JWT_ACCESS_SECRET) as any;
return payload.sub as string;
} catch { return null; }
}