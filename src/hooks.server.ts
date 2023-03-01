import type { Handle } from "@sveltejs/kit";
import { getSession } from "$lib/Session";

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies } = event;
    const sid = cookies.get('sb_session');

    if (sid) {
        const session = getSession(sid);

        if (session) {
            event.locals.username = session.username
        }
    }

    const res = await resolve(event);
    return res;
}