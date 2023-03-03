import type { Cookies } from '@sveltejs/kit'
import { randomBytes } from "node:crypto";


const sessionObj = new Map<string, Session>();

export type Session = {
    username: string,
    expires: number
}

export function setCookie(username: string, cookies: Cookies) {
    // set cookie to expire after a month
    const maxAge = 60 * 60 * 24 * 30;
    const sid = createSession(username, maxAge);
    const opts = {
        maxAge
    };

    cookies.set('sb_session', sid, opts);
}

function createSession(username: string, maxAge: number) {
    let sid = '';

    sid = randomBytes(32).toString('hex');

    sessionObj.set(sid, {
        username,
        expires: Date.now() + maxAge
    });

    return sid;
}

export function getSession(sid: string) {
    const session = sessionObj.get(sid)

    if (session) {
        if (Date.now() > session.expires) {
            sessionObj.delete(sid);

            return undefined;
        }
        else {
            return session;
        }
    }
    else {
        return undefined;
    }
}

export function deleteSession(sid: string) {
    sessionObj.delete(sid);
}
