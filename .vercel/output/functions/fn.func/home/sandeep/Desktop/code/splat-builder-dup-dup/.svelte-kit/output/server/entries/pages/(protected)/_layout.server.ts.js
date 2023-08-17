import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (!locals.username) {
    throw redirect(302, "/login");
  }
};
export {
  load
};
