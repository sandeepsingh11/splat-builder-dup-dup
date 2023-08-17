import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/database.js";
const load = async () => {
};
const register = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConf = formData.get("password_confirmation");
  if (!username || !email || !password || !passwordConf || typeof username !== "string" || typeof email !== "string" || typeof password !== "string" || password !== passwordConf)
    return fail(400, { invalid: true });
  await db.user.create({
    data: {
      username,
      email,
      password,
      token: crypto.randomUUID()
    }
  });
  throw redirect(303, "/login");
};
const actions = { register };
export {
  actions,
  load
};
