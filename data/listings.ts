
import { drizzle } from 'drizzle-orm/libsql';

import { directory} from '../src/lib/server/db/schema';
import { connect } from 'drizzle-orm/libsql';
const db = drizzle(connect({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
    directory,
  
}));

export const get = async () => {
  try {
    const listings = await db.select().from(directory).all();
    return {
      status: 200,
      body: { directory }
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: 'Failed to fetch products' }
    };
  }
};

