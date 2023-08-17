import { d as db } from "../../../../chunks/database.js";
import { a as _translations, _ as _weapons } from "../../../../chunks/translations.js";
const load = async ({ locals }) => {
  const weaponLocal = _translations.USen.WeaponName_Main;
  const subLocal = _translations.USen.WeaponName_Sub;
  const specialLocal = _translations.USen.WeaponName_Special;
  const weapons = Object.entries(_weapons);
  const weaponNames = Object.keys(_weapons);
  const loadoutsWithGears = await db.loadout.findMany({
    where: {
      userId: locals.id
    },
    include: {
      gears: {
        select: {
          gear: {
            select: {
              skill1: true,
              skill2: true,
              skill3: true,
              skill4: true,
              gear: true
            }
          },
          gearType: true
        }
      }
    },
    orderBy: { id: "desc" }
  });
  let loadouts = [];
  loadoutsWithGears.forEach((loadout) => {
    let gears = [null, null, null];
    loadout.gears.forEach((gear) => {
      const gearObj = {
        skill1: gear.gear.skill1,
        skill2: gear.gear.skill2,
        skill3: gear.gear.skill3,
        skill4: gear.gear.skill4,
        gear: gear.gear.gear
      };
      if (gear.gearType === "H") {
        gears.splice(0, 1, gearObj);
      } else if (gear.gearType === "C") {
        gears.splice(1, 1, gearObj);
      } else if (gear.gearType === "S") {
        gears.splice(2, 1, gearObj);
      }
    });
    let weaponObj = {
      weaponName: loadout.weapon,
      weaponLocalName: "",
      subName: "",
      subLocalName: "",
      specialName: "",
      specialLocalName: ""
    };
    const weaponIndex = weaponNames.findIndex((weaponName) => loadout.weapon === weaponName);
    if (weaponIndex !== -1) {
      weaponObj = {
        weaponName: loadout.weapon,
        weaponLocalName: weaponLocal[loadout.weapon],
        subName: weapons[weaponIndex][1].Sub,
        subLocalName: subLocal[weapons[weaponIndex][1].Sub],
        specialName: weapons[weaponIndex][1].Special,
        specialLocalName: specialLocal[weapons[weaponIndex][1].Special]
      };
    }
    loadouts.push({
      id: loadout.id,
      title: loadout.title,
      description: loadout.description,
      rm: loadout.rm,
      cb: loadout.cb,
      sz: loadout.sz,
      tc: loadout.tc,
      ...weaponObj,
      createdAt: loadout.createdAt,
      updatedAt: loadout.updatedAt,
      gears
    });
  });
  return {
    locals,
    loadouts
  };
};
export {
  load
};
