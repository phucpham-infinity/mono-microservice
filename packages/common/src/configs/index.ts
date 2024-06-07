import { config } from 'dotenv';
config();

export const {
  NODE_ENV,
  PORT,
  API_VERSION,
  ORIGIN,
  CREDENTIALS,
  SECRET_KEY,
  DB_BASE_PORT,
  DB_BASE_HOST,
  DB_BASE_USER,
  DB_BASE_PASSWORD,
  DB_BASE_DATABASE
} = process.env;
