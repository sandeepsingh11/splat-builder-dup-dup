import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    // redirect if user is not logged in
    if (!locals.username) {
        throw redirect(302, '/login');
    }
}