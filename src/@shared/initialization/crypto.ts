import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';


export function randomToken(bytes = 32) { return crypto.randomBytes(bytes).toString('hex'); }
export async function hashToken(token: string) { const salt = await bcrypt.genSalt(10); return bcrypt.hash(token, salt); }
export async function compareToken(token: string, tokenHash: string) { return bcrypt.compare(token, tokenHash); }
export async function hashPassword(password: string) { const salt = await bcrypt.genSalt(10); return bcrypt.hash(password, salt); }
export async function verifyPassword(password: string, hash: string) { return bcrypt.compare(password, hash); }