import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DB_BASE_DATABASE, DB_BASE_HOST, DB_BASE_PASSWORD, DB_BASE_PORT, DB_BASE_USER } from '@repo/common/src/configs';

export const pgPool = new Pool({
  host: DB_BASE_PORT ?? '103.56.163.217',
  port: DB_BASE_HOST ? +Number(DB_BASE_HOST) : 5432,
  user: DB_BASE_USER ?? 'admin',
  password: DB_BASE_PASSWORD ?? 'admin@123',
  database: DB_BASE_DATABASE ?? 'mcom'
});

export const pgDb = (schema: any) => drizzle(pgPool, { schema });
