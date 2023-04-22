import type { Handle } from "@sveltejs/kit";
import { getSession } from "$lib/Session";
import { db } from "$lib/server/database";

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies } = event;
    const token = cookies.get('sb_session');

    console.log('=== hooks ===');
    console.log(token);

    if (token) {
        const user = await db.user.findUnique({
            where: { token: token },
            select: { username: true }
        });

        if (user) {
            event.locals.username = user.username;
        }
        else {
            cookies.delete('sb_session');
        }
    }

    // if (sid) {
    //     const session = getSession(sid);
    //     console.log(session);

    //     if (session) {
    //         event.locals.username = session.username
    //     }
    //     else {
    //         cookies.delete('sb_session');
    //     }
    // }

    return await resolve(event);
}