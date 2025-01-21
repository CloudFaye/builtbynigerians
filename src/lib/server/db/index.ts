import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/singlestore';
import { createClient } from '@libsql/client';
import { Database } from 'sqlite3';



import { env } from '$env/dynamic/private';
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!dev && !env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');
const client = createClient({ url: env.DATABASE_URL, authToken: env.DATABASE_AUTH_TOKEN });


const sqlite = new Database('data/database.sqlite');
export const db = drizzle('sqlite:data/database.sqlite');

