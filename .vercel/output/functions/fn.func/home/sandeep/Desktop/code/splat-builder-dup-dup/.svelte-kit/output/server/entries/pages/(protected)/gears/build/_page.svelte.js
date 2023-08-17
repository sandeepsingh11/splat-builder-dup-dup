import { c as create_ssr_component, h as createEventDispatcher, d as escape, b as add_attribute, v as validate_component, e as each } from "../../../../../chunks/index2.js";
import { S as SearchSelect, a as SkillBubble, E as EffectStat } from "../../../../../chunks/EffectStat.js";
const SkillIcon_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".skill-icon.svelte-yo32dm{filter:drop-shadow(1px 1px 0 black)\n                drop-shadow(-1px -1px 0 white)}",
  map: null
};
const SkillIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  let { isMain } = $$props;
  const skillKey = Object.keys(skill);
  createEventDispatcher();
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  if ($$props.isMain === void 0 && $$bindings.isMain && isMain !== void 0)
    $$bindings.isMain(isMain);
  $$result.css.add(css$1);
  return `<img src="${"/skills/" + escape(skillKey[0], true) + ".png"}"${add_attribute("alt", skill[skillKey[0]], 0)} class="${"draggable bank skill-icon svelte-yo32dm"}" draggable="${"true"}">`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#sub-img.svelte-dmmotn,#special-img.svelte-dmmotn{filter:drop-shadow(1px 1px 0 black)\n                drop-shadow(-1px -1px 0 white)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { selectedGearId = "Hed_ACC003" } = $$props;
  let { selectedGearName = "Tentaclinger Earring" } = $$props;
  let { selectedWeaponId = "Blaster_LightLong_00" } = $$props;
  let { selectedWeaponName = "Rapid Blaster Pro" } = $$props;
  let { selectedSubId = "PoisonMist" } = $$props;
  let { selectedSubName = "Toxic Mist" } = $$props;
  let { selectedSpecialId = "SpBlower" } = $$props;
  let { selectedSpecialName = "Ink Vac" } = $$props;
  let { skillBubbles = data.skillBubbles } = $$props;
  let { mainSkills = data.mainSkills } = $$props;
  let { nonMainSkills = data.nonMainSkills } = $$props;
  let stats = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.selectedGearId === void 0 && $$bindings.selectedGearId && selectedGearId !== void 0)
    $$bindings.selectedGearId(selectedGearId);
  if ($$props.selectedGearName === void 0 && $$bindings.selectedGearName && selectedGearName !== void 0)
    $$bindings.selectedGearName(selectedGearName);
  if ($$props.selectedWeaponId === void 0 && $$bindings.selectedWeaponId && selectedWeaponId !== void 0)
    $$bindings.selectedWeaponId(selectedWeaponId);
  if ($$props.selectedWeaponName === void 0 && $$bindings.selectedWeaponName && selectedWeaponName !== void 0)
    $$bindings.selectedWeaponName(selectedWeaponName);
  if ($$props.selectedSubId === void 0 && $$bindings.selectedSubId && selectedSubId !== void 0)
    $$bindings.selectedSubId(selectedSubId);
  if ($$props.selectedSubName === void 0 && $$bindings.selectedSubName && selectedSubName !== void 0)
    $$bindings.selectedSubName(selectedSubName);
  if ($$props.selectedSpecialId === void 0 && $$bindings.selectedSpecialId && selectedSpecialId !== void 0)
    $$bindings.selectedSpecialId(selectedSpecialId);
  if ($$props.selectedSpecialName === void 0 && $$bindings.selectedSpecialName && selectedSpecialName !== void 0)
    $$bindings.selectedSpecialName(selectedSpecialName);
  if ($$props.skillBubbles === void 0 && $$bindings.skillBubbles && skillBubbles !== void 0)
    $$bindings.skillBubbles(skillBubbles);
  if ($$props.mainSkills === void 0 && $$bindings.mainSkills && mainSkills !== void 0)
    $$bindings.mainSkills(mainSkills);
  if ($$props.nonMainSkills === void 0 && $$bindings.nonMainSkills && nonMainSkills !== void 0)
    $$bindings.nonMainSkills(nonMainSkills);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form method="${"post"}" class="${"w-full md:w-1/2 lg:w-4/5 px-4 md:px-0 md:mx-auto"}"><div class="${"mb-8"}"><h1 class="${"text-2xl font-bold text-center"}">Create Gear</h1></div>

    
    <div class="${"mb-4 lg:w-2/5 mx-auto"}"><label for="${"gear-title"}" class="${"block"}">Gear name:</label>
        <input type="${"text"}" name="${"gear-title"}" id="${"gear-title"}" class="${"w-full rounded focus:ring-primary-400 focus:border-primary-400"}"></div>

    
    <div class="${"mb-4 lg:w-2/5 mx-auto"}"><label for="${"gear-desc"}" class="${"block"}">Gear description:</label>
        <textarea name="${"gear-desc"}" id="${"gear-desc"}" cols="${"30"}" rows="${"3"}" class="${"w-full rounded focus:ring-primary-400 focus:border-primary-400"}" style="${"height: 110px;"}"></textarea></div>

    <div class="${"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"}">
        <div class="${"mb-6"}">
            <div>
                ${validate_component(SearchSelect, "SearchSelect").$$render(
      $$result,
      {
        itemList: data.gearList,
        itemType: "gear",
        selectedItemId: selectedGearId,
        selectedItemName: selectedGearName
      },
      {
        selectedItemId: ($$value) => {
          selectedGearId = $$value;
          $$settled = false;
        },
        selectedItemName: ($$value) => {
          selectedGearName = $$value;
          $$settled = false;
        }
      },
      {}
    )}

                
                <div><img src="${"/gears/" + escape(selectedGearId, true) + ".png"}"${add_attribute("alt", selectedGearName, 0)} class="${"mx-auto"}"></div></div>

            
            <div class="${"grid grid-cols-4 justify-items-center items-end mb-4"}">${each(skillBubbles, (skillBubble) => {
      return `${validate_component(SkillBubble, "SkillBubble").$$render($$result, { skill: skillBubble }, {}, {})}`;
    })}</div>

            
            <div class="${"grid grid-cols-7 mb-6"}">${each(nonMainSkills, (nonMainSkill) => {
      return `${validate_component(SkillIcon, "SkillIcon").$$render($$result, { skill: nonMainSkill, isMain: false }, {}, {})}`;
    })}</div>

            <hr class="${"w-4/5 mx-auto border-primary-400 border-t-2"}">

            
            <div class="${"grid grid-cols-7 mt-6"}">${each(mainSkills, (mainSkill) => {
      return `${validate_component(SkillIcon, "SkillIcon").$$render($$result, { skill: mainSkill, isMain: true }, {}, {})}`;
    })}</div>

            
            <input type="${"submit"}" class="${"p-2 bg-transparent text-primary-700 rounded-md border border-primary-700 mb-2 cursor-pointer transition-colors hover:bg-primary-500 hover:text-white hover:border-primary-500"}" value="${"Create"}"></div>

        
        <div>
            <div>
                ${validate_component(SearchSelect, "SearchSelect").$$render(
      $$result,
      {
        itemList: data.weaponList,
        itemType: "weapon",
        selectedItemId: selectedWeaponId,
        selectedItemName: selectedWeaponName,
        selectedSubId,
        selectedSubName,
        selectedSpecialId,
        selectedSpecialName
      },
      {
        selectedItemId: ($$value) => {
          selectedWeaponId = $$value;
          $$settled = false;
        },
        selectedItemName: ($$value) => {
          selectedWeaponName = $$value;
          $$settled = false;
        },
        selectedSubId: ($$value) => {
          selectedSubId = $$value;
          $$settled = false;
        },
        selectedSubName: ($$value) => {
          selectedSubName = $$value;
          $$settled = false;
        },
        selectedSpecialId: ($$value) => {
          selectedSpecialId = $$value;
          $$settled = false;
        },
        selectedSpecialName: ($$value) => {
          selectedSpecialName = $$value;
          $$settled = false;
        }
      },
      {}
    )}

                
                <div id="${"weapon-container"}" class="${"grid grid-cols-1 grid-cols-2 gap-x-4"}"><img id="${"weapon-img"}" class="${"justify-self-center"}" src="${"/weapon_flat/Path_Wst_" + escape(selectedWeaponId, true) + ".png"}"${add_attribute("alt", selectedWeaponName, 0)} width="${"128px"}" height="${"128px"}">
                    <div class="${"grid grid-cols-2 items-center gap-x-2"}"><img id="${"sub-img"}" src="${"/subspe/Wsb_" + escape(selectedSubId, true) + "00.png"}"${add_attribute("alt", selectedSubName, 0)} class="${"justify-self-center svelte-dmmotn"}" width="${"64px"}" height="${"64px"}">
                        <img id="${"special-img"}" src="${"/subspe/Wsp_" + escape(selectedSpecialId, true) + "00.png"}"${add_attribute("alt", selectedSpecialName, 0)} class="${"justify-self-center svelte-dmmotn"}" width="${"64px"}" height="${"64px"}"></div></div></div>

            
            <div>${stats.length > 0 ? `${each(stats, (stat) => {
      return `
                        <div class="${"flex justify-start items-center gap-1 mt-4"}"><img src="${"/skills/" + escape(stat.name, true) + ".png"}"${add_attribute("alt", stat.name, 0)} width="${"32px"}">

                            <h5>${escape(stat.name)}</h5></div>

                        
                        <div class="${"grid grid-cols-2 gap-2 items-end"}">${each(stat.effects, (effect) => {
        return `${validate_component(EffectStat, "EffectStat").$$render($$result, { effect }, {}, {})}`;
      })}
                        </div>`;
    })}` : ``}</div></div></div>
</form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
