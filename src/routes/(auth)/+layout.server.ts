import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async ({ locals, url }) => {
    // redirect if user is logged in
    if (
        locals.username &&
        url.pathname !== '/logout'
    ) {
        throw redirect(302, '/dashboard');
    }
}