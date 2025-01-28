import { db } from "$lib/server/db/db";
import type { PageServerLoad } from "./$types";
import { eq, and, ne } from "drizzle-orm";
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

        // Get specific listings you want to reference
        let competitors = await db.query.directory.findMany({
            where: and(eq(directory.category, listing.category),
            ne(directory.id, listing.id)),

            orderBy: (directory, { desc }) => [
                desc(directory.created)
            ],

            limit: 10

        });

        return { 
            listing,
            competitors
        };
    } catch (err) {
        console.error('Error fetching listing:', err);
        throw error(500, {
            message: 'Internal server error'
        });
    }
};


