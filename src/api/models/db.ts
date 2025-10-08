import { drizzle } from 'drizzle-orm/node-postgres';
import { Env } from '@/@shared/config/env';
import { Pool } from 'pg';

const globalForDb = global as unknown as { pool?: Pool };
const pool = globalForDb.pool || new Pool({ connectionString: Env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
if (process.env.NODE_ENV !== 'production') globalForDb.pool = pool;
export const db = drizzle(pool);