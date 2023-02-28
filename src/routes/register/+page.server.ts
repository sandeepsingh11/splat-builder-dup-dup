import { error, fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from "./$types"
import { PUBLIC_API_URL } from "$env/static/public";
import { goto } from '$app/navigation';


export const load: PageServerLoad = async ({cookies}) => {
  const token = cookies.get('sb_token');
  console.log('load --> ' + token);

  return {
    token
  }
}

const register: Action = async ({ request, cookies }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const passwordConf = formData.get('password_confirmation');
  const formToken = formData.get('_token');
  
  const token = cookies.get('sb_token');
  console.log('action --> ' + formToken +  ' - ' + token);

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
    throw error(res.status, res.statusText);
  }

  
  throw redirect(303, '/login')
}

export const actions: Actions = { register }
