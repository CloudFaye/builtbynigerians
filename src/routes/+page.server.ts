import { db } from "$lib/server/db/db";
import { asc, eq, sql } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import { directory } from "$lib/server/db/schema";


//function to query database to return all data
export const load: PageServerLoad = async () => {
   //get all
   const allListings = await db.query.directory.findMany({
    orderBy: [asc(directory.name)]
   })
   let created = new Date().toISOString();
   const updateListings = await db.update(directory)
    .set({ details: 'Portfolio inspired game for designers to trade design stocks' })
    .where(eq(directory.details, 'Fun design games by Faye'))
    .returning({updatedDetails: directory.details})

   return { allListings }

   
   
};



//function to handle CRUD operations through forms
export const actions: Actions = {
   default: async ({ request }) => {
      const data = await request.formData();

      const name = String(data.get('name'));
      const category = String(data.get('category'));
      const image = String(data.get('image'));
      const details = String(data.get('details'));
      const created = new Date().toISOString();

     

      await db.insert(directory).values({
         name,
         category,
         image, 
         created, 
         details 
      })
   }
  };


