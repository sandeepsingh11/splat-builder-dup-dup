import { c as create_ssr_component, d as escape, e as each, b as add_attribute } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="${"text-2xl font-bold text-center mb-8"}">${escape(data.locals.username)}&#39;s loadouts</h2>

${data.loadouts.length > 0 ? `<div class="${"grid grid-cols-1 w-full lg:w-10/12 xl:w-11/12 mx-auto mb-8 px-4 md:px-8"}">${each(data.loadouts, (loadout) => {
    return `<div class="${"bg-gray-700 rounded-md mb-6 shadow-lg transform hover:-translate-y-2 transition-transform"}">
                <div class="${"p-4 bg-purple-400 rounded-tl-md rounded-tr-md text-center text-lg font-semibold"}"><h3>${escape(loadout.title ? loadout.title : "(no title)")}</h3></div>

                
                <div class="${"flex justify-center mt-2"}">${loadout.rm ? `<img src="${"/game_modes/rm.png"}" alt="${"Rainmaker"}" class="${"mx-2"}" style="${"width: 32px; height: 32px"}">` : ``}
                    
                    ${loadout.cb ? `<img src="${"/game_modes/cb.png"}" alt="${"Clam blitz"}" class="${"mx-2"}" style="${"width: 32px; height: 32px"}">` : ``}
                    
                    ${loadout.sz ? `<img src="${"/game_modes/sz.png"}" alt="${"Splat zones"}" class="${"mx-2"}" style="${"width: 32px; height: 32px"}">` : ``}
                
                    ${loadout.tc ? `<img src="${"/game_modes/tc.png"}" alt="${"Tower control"}" class="${"mx-2"}" style="${"width: 32px; height: 32px"}">` : ``}</div>

                
                <div class="${"grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4"}">
                    <div class="${"mx-auto"}"><img src="${"/weapon_flat/Path_Wst_" + escape(loadout.weaponName, true) + ".png"}"${add_attribute("alt", loadout.weaponLocalName, 0)} class="${"mx-auto p-4"}" style="${"width: 200px; height: 200px"}">
                        
                        <div class="${"grid grid-cols-2 gap-2 p-2"}"><img src="${"/subspe/Wsp_" + escape(loadout.specialName, true) + "00.png"}"${add_attribute("alt", loadout.specialLocalName, 0)} class="${"mx-auto"}" style="${"width: 64px; height: 64px"}">
                            
                            <img src="${"/subspe/Wsb_" + escape(loadout.subName, true) + "00.png"}"${add_attribute("alt", loadout.subLocalName, 0)} class="${"mx-auto"}" style="${"width: 64px; height: 64px"}">
                        </div></div>

                    
                    ${each(loadout.gears, (gear) => {
      return `<div class="${"p-4"}"><img src="${"/gears/" + escape(gear ? gear.gear : "Dummy", true) + ".png"}" alt="${""}" class="${"gear-img mx-auto"}" style="${"width: 128px; height: 128px"}">

                            <div class="${"mx-auto p-2"}"><img src="${"/skills/" + escape(gear ? gear.skill1 : "Unknown", true) + ".png"}" alt="${""}" width="${"64px"}" height="${"64px"}" class="${"mx-auto"}">
                                <div class="${"flex justify-evenly"}"><img src="${"/skills/" + escape(gear ? gear.skill2 : "Unknown", true) + ".png"}" alt="${""}" width="${"50px"}" height="${"50px"}" class="${"mx-auto"}">
                                    <img src="${"/skills/" + escape(gear ? gear.skill3 : "Unknown", true) + ".png"}" alt="${""}" width="${"50px"}" height="${"50px"}" class="${"mx-auto"}">
                                    <img src="${"/skills/" + escape(gear ? gear.skill4 : "Unknown", true) + ".png"}" alt="${""}" width="${"50px"}" height="${"50px"}" class="${"mx-auto"}">
                                </div></div>
                        </div>`;
    })}</div>

                
                <div><p class="${"bg-gray-100 p-3"}">${escape(loadout.description !== "" ? loadout.description : "(no description)")}</p></div>
            </div>`;
  })}</div>` : `<p class="${"text-xl text-center italic font-semibold mt-8"}">You do not have any loadouts yet...<a href="${"/loadouts/build"}">Go build one!</a></p>`}`;
});
export {
  Page as default
};
