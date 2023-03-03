import { PUBLIC_API_URL } from '$env/static/public'
import { setCookie } from '$lib/Session'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')
        const remember = data.get('remember')

        if (
            typeof username !== 'string' ||
            typeof password !== 'string' ||
            !username ||
            !password
        ) {
            return fail(400, { invalid: true })
        }


        const header = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
            })
        };
        const res = await fetch(`${PUBLIC_API_URL}/login`, header);

        if (!res.ok) {
            return fail(res.status, { credentials: true });
        }

        const text = await res.text();
        const json = text ? JSON.parse(text) : {};

        // set cookie
        setCookie(json.data.user.username, cookies);


        // redirect the user
        throw redirect(302, '/dashboard')
    }
}


