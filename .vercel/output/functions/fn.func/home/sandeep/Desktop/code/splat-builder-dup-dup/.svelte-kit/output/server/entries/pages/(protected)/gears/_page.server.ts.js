import { d as db } from "../../../../chunks/database.js";
const load = async ({ locals }) => {
  const gears = await db.gear.findMany({
    where: { userId: locals.id },
    orderBy: { id: "desc" }
  });
  return {
    locals,
    gears
  };
};
export {
  load
};
