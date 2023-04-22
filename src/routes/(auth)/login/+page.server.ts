import bcrypt from 'bcrypt'
import { PUBLIC_API_URL } from '$env/static/public'
import { db } from '$lib/server/database'
import { setCookie } from '$lib/Session'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        const username = data.get('username');
        const password = data.get('password');
        const remember = data.get('remember')

        if (
            typeof username !== 'string' ||
            typeof password !== 'string' ||
            !username ||
            !password
        ) {
            return fail(400, { invalid: true })
        }


        // const header = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         'username': username,
        //         'password': password,
        //     })
        // };
        // const res = await fetch(`${PUBLIC_API_URL}/login`, header);

        // if (!res.ok) {
        //     return fail(res.status, { credentials: true });
        // }

        // const text = await res.text();
        // const json = text ? JSON.parse(text) : {};

        // // set cookie
        // setCookie(json.data.user.username, cookies);

        const user = await db.user.findUnique({where: { username }});

        if (!user) return fail(400, { invalid: true });
        
        const userPw = bcrypt.compare(password, user.password);

        if (!userPw) return fail(400, { invalid: true });

        cookies.set('sb_session', user.token, {
            // send cookie for every page
            path: '/',
            // server side only cookie so you can't use `document.cookie`
            httpOnly: true,
            // only requests from same site can send cookies
            // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
            sameSite: 'strict',
            // only sent over HTTPS in production
            secure: process.env.NODE_ENV === 'production',
            // set cookie to expire after a month
            maxAge: 60 * 60 * 24 * 30,
        });


        // redirect the user
        throw redirect(302, '/dashboard')
    }
}


