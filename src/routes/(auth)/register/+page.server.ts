import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from "./$types"
import { db } from '$lib/server/database';


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
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    password !== passwordConf
  ) return fail(400, { invalid: true });

  await db.user.create({
    data: {
      username: username,
      email: email,
      password: password,
      token: crypto.randomUUID()
    }
  });

  
  throw redirect(303, '/login')
}

export const actions: Actions = { register }
