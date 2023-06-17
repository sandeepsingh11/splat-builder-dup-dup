import bcrypt from 'bcrypt'
import { db } from '$lib/server/database'
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

        // verify credentials
        let user = await db.user.findUnique({where: { username }});

        if (!user) return fail(400, { invalid: true });
        
        const userPw = bcrypt.compare(password, user.password);

        if (!userPw) return fail(400, { invalid: true });

        // update token
        user = await db.user.update({
            where: { username: user.username },
            data: { token: crypto.randomUUID() }
        });

        // set cookie
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


