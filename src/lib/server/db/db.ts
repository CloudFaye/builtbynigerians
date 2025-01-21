import { Database } from 'sqlite3';

import { directory } from './schema';
import { drizzle } from 'drizzle-orm/singlestore';
import { createClient } from '@libsql/client';



const sqlite = new Database('data/database.sqlite');
export const db = drizzle('sqlite:data/database.sqlite');
