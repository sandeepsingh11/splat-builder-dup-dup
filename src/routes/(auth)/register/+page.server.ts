import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from "./$types"
import { PUBLIC_API_URL } from "$env/static/public";


export const load: PageServerLoad = async () => {
}

const register: Action = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const passwordConf = formData.get('password_confirmation');

  if (
    !username ||
    !email ||
    !password ||
    !passwordConf ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    password !== passwordConf
  ) return fail(400, { invalid: true });

  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': username,
      'email': email,
      'password': password,
      'password_confirmation': passwordConf
    })
  };
  const res = await fetch(`${PUBLIC_API_URL}/register`, header);

  if (res.ok || res.status === 422) {
    const text = await res.text();
    const output = text ? JSON.parse(text) : {};
    console.log(output);
  }
  else {
    throw fail(res.status, { error: true });
  }

  
  throw redirect(303, '/login')
}

export const actions: Actions = { register }
