import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ cookies }) => {
  const sid = cookies.get("sb_session");
  if (sid) {
    cookies.delete("sb_session");
  }
  throw redirect(303, "/login");
};
export {
  load
};
