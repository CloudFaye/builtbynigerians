// @ts-nocheck
import { db } from './db';
import { directory } from './schema';

// Insert a new listing
export const insertListing = async (name: string, image: string, category: string, details: string) => {
    const created = new Date().toISOString();
    await db.insert(directory).values({ name, image, category, details, created }).execute();
};

// Get all listings
export const getListings = async () => {
    return (await db.select().from(directory)).entries();
};

// Example usage
//(async () => {
 //   await insertListing( 'bbn', '', 'webapp', 'details');
 //   const listings = await getListings();
 //   console.log(listings);