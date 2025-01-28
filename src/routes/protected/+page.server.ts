import { db } from "$lib/server/db/db";
import { Column, asc, eq } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import { directory } from "$lib/server/db/schema";
import { error, fail } from "@sveltejs/kit";




//function to query database to return all data
export const load: PageServerLoad = async () => {
    //get all
    const allListings = await db.query.directory.findMany({
     orderBy: [asc(directory.name)]
    })
 
    //create date
    let created = new Date().toISOString();
 
    //update items in db
     const updateListings = await db.update(directory)
       .set({ created: '' })
       .where(eq(directory.created, ' '))
       .returning({updatedDetails: directory.created});
 
 
    //console.log (allListings)
    return { allListings }
    
  
       //update image column with each individual logos
 
    /*  for ( const listing of allListings){
          if (!listing.image){
             const logo = await fetchLogo(listing.url);
             if (logo){
                await db.update(directory)
                .set({ image: logo})
                .where(eq(directory.name, ''))
             }
          }
       } */
      
 
 
 };  
 


//function to handle CRUD operations through forms
export const actions: Actions = {
    default: async ({ request }) => {
       const data = await request.formData();
 
       const name = String(data.get('name'));
       const category = String(data.get('category'));
       //const image = String(data.get('image'));
       const details = String(data.get('details'));
       const created = new Date().toISOString();
       const url = String(data.get('url'));


       
        await db.insert(directory).values({
            name,
            category,
            image: '', 
            created, 
            details,
            url 
         })
       
 
      return { success: true
      }
 
      
   }
   };

//get logos from each listing website
 /*const fetchLogo = async (url: string) => {
   try {
      const response = await fetch (`${url}/favicon.svg`);
      if (response.ok){
         return await response.text();
      } else {
         console.error(`failed to get logo from ${url}`);
         return null
      }
   } catch (e) {
      console.error(`Error fetching logo from ${url}:`, e);
      return null;
   }
   }; */










