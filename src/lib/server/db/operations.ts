import { db } from './db';
import { directory } from './schema';

// Inserting a new listing
export const getListings = async () => {
    (await db.select().from(directory));
};
(async () => {
    
    const listings = await getListings();
    console.log(listings);
})();
