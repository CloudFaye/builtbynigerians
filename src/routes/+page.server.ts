import { db } from "$lib/server/db/db";
import { Column, asc, eq, ne } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import { directory } from "$lib/server/db/schema";
import axios from 'axios'
import { LINK_PREVIEW } from "$env/static/private";


interface LinkPreview {
   title: string;
   description: string;
   image: string
   url: string
   
}




//function to query database to all the listings
export const load: PageServerLoad = async () => {

   // Here i'm querying the db for all its data

    const allListings = await db.query.directory.findMany({
    orderBy: [asc(directory.name)]});

      // Only process one empty image at a time to avoid API spam
      const emptyImageListing = allListings.find(listing => !listing.image);
      if (emptyImageListing) {
         await updateListingImage(emptyImageListing.id, emptyImageListing.url);
      }

      


  return { allListings }





}; 


























/* const options = {
   method: 'GET',
   headers: {Authorization: 'Bearer RNPoGfB0WRm5Q7Jj2q1t5Jb0v5zTcfuht1SZb11vplA='}
 };
 
 fetch('https://api.brandfetch.io/v2/brands/figma.com', options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err)); */
  



async function fetchPreviewImage(url:string): Promise<string | null > {
   try {
         const response = await axios.get<LinkPreview>( `https://api.linkpreview.net/?key=${LINK_PREVIEW}&q=${url}`,
         { timeout: 5000 });
         return response.data.image || null;
   } catch (error){
      console.error(`Failed to fetch image for ${url}:` , error);
      return null
   }
}

function isValidUrl(url: string): boolean {
   try{
      new URL(url);
      return true;
   } catch {
      return false
   }
}

async function updateListingImage(listingId: number, url: string): Promise<boolean> {
   try {
       if (!isValidUrl(url)) {
           console.error(`Invalid URL: ${url}`);
           return false;
       }

       const imageUrl = await fetchPreviewImage(url);
       if (!imageUrl) return false;

       await db.update(directory)
           .set({ image: imageUrl })
           .where(eq(directory.id, listingId));
           
       return true;
   } catch (err) {
       console.error(`Failed to update listing ${listingId}:`, err);
       return false;
   }
}






