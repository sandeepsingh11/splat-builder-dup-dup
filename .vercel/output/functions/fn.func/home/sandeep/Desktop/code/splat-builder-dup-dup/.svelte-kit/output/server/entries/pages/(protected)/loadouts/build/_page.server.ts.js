import { _ as _weapons, a as _translations } from "../../../../../chunks/translations.js";
import { d as db } from "../../../../../chunks/database.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
const load = async ({ locals }) => {
  const localization = _translations["USen"];
  const headLocalization = localization.GearName_Head;
  const clothesLocalization = localization.GearName_Clothes;
  const shoesLocalization = localization.GearName_Shoes;
  const skillLocalization = localization.GearPowerName;
  const userGearsDb = await db.gear.findMany({
    where: { userId: locals.id },
    orderBy: { id: "desc" }
  });
  let userGears = [];
  let headGears = [];
  let clothesGears = [];
  let shoesGears = [];
  userGearsDb.forEach((gear) => {
    if (gear.gear.includes("Hed_")) {
      userGears.push({
        id: gear.id.toString(),
        name: gear.gear,
        localizedName: headLocalization[gear.gear],
        skill1: { name: gear.skill1, localizedName: skillLocalization[gear.skill1] },
        skill2: { name: gear.skill2, localizedName: skillLocalization[gear.skill2] },
        skill3: { name: gear.skill3, localizedName: skillLocalization[gear.skill3] },
        skill4: { name: gear.skill4, localizedName: skillLocalization[gear.skill4] }
      });
      headGears.push({
        id: gear.id.toString(),
        name: gear.title ? gear.title : "(no title)"
      });
    } else if (gear.gear.includes("Clt_")) {
      userGears.push({
        id: gear.id.toString(),
        name: gear.gear,
        localizedName: clothesLocalization[gear.gear],
        skill1: { name: gear.skill1, localizedName: skillLocalization[gear.skill1] },
        skill2: { name: gear.skill2, localizedName: skillLocalization[gear.skill2] },
        skill3: { name: gear.skill3, localizedName: skillLocalization[gear.skill3] },
        skill4: { name: gear.skill4, localizedName: skillLocalization[gear.skill4] }
      });
      clothesGears.push({
        id: gear.id.toString(),
        name: gear.title ? gear.title : "(no title)"
      });
    } else {
      userGears.push({
        id: gear.id.toString(),
        name: gear.gear,
        localizedName: shoesLocalization[gear.gear],
        skill1: { name: gear.skill1, localizedName: skillLocalization[gear.skill1] },
        skill2: { name: gear.skill2, localizedName: skillLocalization[gear.skill2] },
        skill3: { name: gear.skill3, localizedName: skillLocalization[gear.skill3] },
        skill4: { name: gear.skill4, localizedName: skillLocalization[gear.skill4] }
      });
      shoesGears.push({
        id: gear.id.toString(),
        name: gear.title ? gear.title : "(no title)"
      });
    }
  });
  const userGearsSorted = [
    headGears,
    clothesGears,
    shoesGears
  ];
  const selectedHeadGear = userGearsSorted[0].length > 0 ? userGears.find((headGear) => headGear.id === userGearsSorted[0][0].id) : null;
  const selectedClothesGear = userGearsSorted[1].length > 0 ? userGears.find((clothesGear) => clothesGear.id === userGearsSorted[1][0].id) : null;
  const selectedShoesGear = userGearsSorted[2].length > 0 ? userGears.find((shoesGear) => shoesGear.id === userGearsSorted[2][0].id) : null;
  let weapons = [];
  const localizedWeapons = localization.WeaponName_Main;
  const localizedSubs = localization.WeaponName_Sub;
  const localizedSpecials = localization.WeaponName_Special;
  const weaponObjs = Object.entries(_weapons);
  weaponObjs.forEach((weaponObj) => {
    weapons.push({
      id: weaponObj[0],
      name: localizedWeapons[weaponObj[0]],
      subId: weaponObj[1].Sub,
      subName: localizedSubs[weaponObj[1].Sub],
      specialId: weaponObj[1].Special,
      specialName: localizedSpecials[weaponObj[1].Special]
    });
  });
  const selectedWeapon = weapons[0];
  let skillBubbles = [];
  for (let i = 0; i < 12; i++) {
    const r = i % 4;
    const skillIndex = r === 0 ? "skill1" : r === 1 ? "skill2" : r === 3 ? "skill3" : "skill4";
    if (i < 4) {
      if (selectedHeadGear) {
        skillBubbles[i] = {
          number: i + 1,
          id: selectedHeadGear[skillIndex].name,
          name: selectedHeadGear[skillIndex].localizedName,
          isMain: r === 0 ? true : false
        };
      } else {
        skillBubbles[i] = {
          number: i + 1,
          id: "Unknown",
          name: "Unknown",
          isMain: r === 0 ? true : false
        };
      }
    } else if (i >= 4 && i < 8) {
      if (selectedClothesGear) {
        skillBubbles[i] = {
          number: i + 1,
          id: selectedClothesGear[skillIndex].name,
          name: selectedClothesGear[skillIndex].localizedName,
          isMain: r === 0 ? true : false
        };
      } else {
        skillBubbles[i] = {
          number: i + 1,
          id: "Unknown",
          name: "Unknown",
          isMain: r === 0 ? true : false
        };
      }
    } else {
      if (selectedShoesGear) {
        skillBubbles[i] = {
          number: i + 1,
          id: selectedShoesGear[skillIndex].name,
          name: selectedShoesGear[skillIndex].localizedName,
          isMain: r === 0 ? true : false
        };
      } else {
        skillBubbles[i] = {
          number: i + 1,
          id: "Unknown",
          name: "Unknown",
          isMain: r === 0 ? true : false
        };
      }
    }
  }
  return {
    userGears,
    userGearsSorted,
    selectedHeadGear,
    selectedClothesGear,
    selectedShoesGear,
    weapons,
    selectedWeapon,
    skillBubbles
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const title = formData.get("loadout-title");
    const desc = formData.get("loadout-desc");
    let rm = formData.get("loadout-mode-rm") || false;
    let cb = formData.get("loadout-mode-cb") || false;
    let sz = formData.get("loadout-mode-sz") || false;
    let tc = formData.get("loadout-mode-tc") || false;
    let hGear = formData.get("select-head");
    let cGear = formData.get("select-clothes");
    let sGear = formData.get("select-shoes");
    const weapon = formData.get("select-weapon");
    rm = !!rm;
    cb = !!cb;
    sz = !!sz;
    tc = !!tc;
    if (!weapon || typeof weapon !== "string" || typeof title !== "string" || typeof desc !== "string") {
      return fail(400, { invalid: true });
    }
    const loadout = await db.loadout.create({
      data: {
        userId: locals.id,
        title,
        description: desc,
        rm,
        cb,
        sz,
        tc,
        weapon
      }
    });
    if (hGear) {
      await db.gearsOnLoadouts.create({
        data: {
          loadoutId: loadout.id,
          gearId: parseInt(hGear),
          gearType: "H"
        }
      });
    }
    if (cGear) {
      await db.gearsOnLoadouts.create({
        data: {
          loadoutId: loadout.id,
          gearId: parseInt(cGear),
          gearType: "C"
        }
      });
    }
    if (sGear) {
      await db.gearsOnLoadouts.create({
        data: {
          loadoutId: loadout.id,
          gearId: parseInt(sGear),
          gearType: "S"
        }
      });
    }
    throw redirect(302, "/loadouts");
  }
};
export {
  actions,
  load
};
