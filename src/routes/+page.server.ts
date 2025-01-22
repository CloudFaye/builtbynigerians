import { db } from "$lib/server/db/db";
import { asc } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import { directory } from "$lib/server/db/schema";


//function to query database to return all data
export const load: PageServerLoad = async () => {
   //const created = new Date().toISOString();
   const listings = await db.query.directory.findMany({
    orderBy: [asc(directory.id)]
   });

   return { listings }
};


//function to handle forms
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
   },
  



};
