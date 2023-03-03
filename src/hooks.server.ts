import type { Handle } from "@sveltejs/kit";
import { getSession } from "$lib/Session";

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies } = event;
    const sid = cookies.get('sb_session');

    console.log('=== hooks ===');
    console.log(sid);

    if (sid) {
        const session = getSession(sid);
        console.log(session);

        if (session) {
            event.locals.username = session.username
        }
        else {
            cookies.delete('sb_session');
        }
    }

    const res = await resolve(event);
    return res;
}