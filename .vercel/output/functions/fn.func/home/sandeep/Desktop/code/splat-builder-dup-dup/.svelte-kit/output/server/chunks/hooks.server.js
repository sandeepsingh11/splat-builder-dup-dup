import { d as db } from "./database.js";
const handle = async ({ event, resolve }) => {
  const { cookies } = event;
  const token = cookies.get("sb_session");
  if (token) {
    const user = await db.user.findUnique({
      where: { token },
      select: { username: true, id: true }
    });
    if (user) {
      event.locals.username = user.username;
      event.locals.id = user.id;
    } else {
      cookies.delete("sb_session");
    }
  }
  return await resolve(event);
};
export {
  handle
};
