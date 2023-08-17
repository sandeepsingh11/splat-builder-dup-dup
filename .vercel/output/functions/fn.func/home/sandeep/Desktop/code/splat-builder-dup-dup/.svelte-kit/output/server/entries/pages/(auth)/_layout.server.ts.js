import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals, url }) => {
  if (locals.username && url.pathname !== "/logout") {
    throw redirect(302, "/dashboard");
  }
};
export {
  load
};
