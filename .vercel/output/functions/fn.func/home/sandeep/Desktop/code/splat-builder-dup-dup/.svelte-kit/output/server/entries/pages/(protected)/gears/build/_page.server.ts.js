import { _ as _weapons, a as _translations } from "../../../../../chunks/translations.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
import { d as db } from "../../../../../chunks/database.js";
const load = async () => {
  const translations = _translations["USen"];
  const gearTranslations = {
    ...translations.GearName_Head,
    ...translations.GearName_Clothes,
    ...translations.GearName_Shoes
  };
  let gearList = [];
  const translatedGearEntries = Object.entries(gearTranslations);
  translatedGearEntries.forEach((gearEntry) => {
    gearList.push({ id: gearEntry[0], name: gearEntry[1] });
  });
  const weapons = _weapons;
  const subTranslations = translations.WeaponName_Sub;
  const specialTranslations = translations.WeaponName_Special;
  let weaponList = [];
  const translatedWeaponEntries = Object.entries(translations.WeaponName_Main);
  translatedWeaponEntries.forEach((weaponEntry) => {
    if (weapons[weaponEntry[0]]) {
      weaponList.push({
        id: weaponEntry[0],
        name: weaponEntry[1],
        subId: weapons[weaponEntry[0]]["Sub"],
        subName: subTranslations[weapons[weaponEntry[0]]["Sub"]],
        specialId: weapons[weaponEntry[0]]["Special"],
        specialName: specialTranslations[weapons[weaponEntry[0]]["Special"]]
      });
    }
  });
  const skillBubbles = [
    {
      number: 1,
      id: "Unknown",
      name: "Unknown",
      isMain: true
    },
    {
      number: 2,
      id: "Unknown",
      name: "Unknown",
      isMain: false
    },
    {
      number: 3,
      id: "Unknown",
      name: "Unknown",
      isMain: false
    },
    {
      number: 4,
      id: "Unknown",
      name: "Unknown",
      isMain: false
    }
  ];
  let mainSkills = [];
  let nonMainSkills = [];
  const skillEntries = Object.entries(translations.GearPowerName);
  skillEntries.forEach((skillEntry) => {
    if (skillEntry[0] === "Action_Up" || skillEntry[0] === "ComeBack" || skillEntry[0] === "DeathMarking" || skillEntry[0] === "EndAllUp" || skillEntry[0] === "Exorcist" || skillEntry[0] === "ExSkillDouble" || skillEntry[0] === "MinorityUp" || skillEntry[0] === "ObjectEffect_Up" || skillEntry[0] === "SomersaultLanding" || skillEntry[0] === "SquidMoveSpatter_Reduction" || skillEntry[0] === "StartAllUp" || skillEntry[0] === "SuperJumpSign_Hide" || skillEntry[0] === "ThermalInk") {
      mainSkills.push({ [skillEntry[0]]: skillEntry[1] });
    } else if (skillEntry[0] === "None")
      ;
    else {
      nonMainSkills.push({ [skillEntry[0]]: skillEntry[1] });
    }
  });
  return {
    gearList,
    weaponList,
    skillBubbles,
    mainSkills,
    nonMainSkills
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    let title = formData.get("gear-title");
    let desc = formData.get("gear-desc");
    const skill1 = formData.get("skill-1");
    const skill2 = formData.get("skill-2");
    const skill3 = formData.get("skill-3");
    const skill4 = formData.get("skill-4");
    const gear = formData.get("select-gear");
    const weapon = formData.get("select-weapon");
    title = title ? title : "";
    desc = desc ? desc : "";
    if (!skill1 || !skill2 || !skill3 || !skill4 || !gear || !weapon || typeof skill1 !== "string" || typeof skill2 !== "string" || typeof skill3 !== "string" || typeof skill4 !== "string" || typeof gear !== "string" || typeof weapon !== "string" || typeof title !== "string" || typeof desc !== "string") {
      return fail(400, { invalid: true });
    }
    await db.gear.create({
      data: {
        userId: locals.id,
        title,
        description: desc,
        skill1,
        skill2,
        skill3,
        skill4,
        gear,
        weapon
      }
    });
    throw redirect(302, "/gears");
  }
};
export {
  actions,
  load
};
