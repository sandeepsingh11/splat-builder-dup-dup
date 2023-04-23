import { db } from "$lib/server/database";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    // get user's gears
    const gears = await db.gear.findMany({
        where: {userId: locals.id}, 
        orderBy: {id: 'desc'}
    });

    return {
        locals,
        gears
    }
};