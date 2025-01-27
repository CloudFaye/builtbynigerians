import { db } from "$lib/server/db/db";
import type { PageServerLoad } from "./$types";
import { eq } from "drizzle-orm";
import { directory } from "$lib/server/db/schema";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
    const id = Number(params.id);
    
    try {
        const listing = await db.query.directory.findFirst({
            where: eq(directory.id, id )
        });

        if (!listing) {
            throw error(404, {
                message: 'Listing not found'
            });
        }

        return { 
            listing 
        };
    } catch (err) {
        console.error('Error fetching listing:', err);
        throw error(500, {
            message: 'Internal server error'
        });
    }
};