import { c as create_ssr_component, d as escape, e as each, b as add_attribute } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="${"text-2xl font-bold text-center mb-8"}">${escape(data.locals.username)}&#39;s gears</h2>

${data.gears.length > 0 ? `<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start w-full lg:w-10/12 xl:w-11/12 mx-auto mb-8 px-4 md:px-8"}">${each(data.gears, (gear) => {
    return `<div class="${"bg-gray-700 rounded-md shadow-lg transform hover:-translate-y-2 transition-transform"}">
                <div class="${"p-4 bg-purple-400 rounded-tl-md rounded-tr-md text-center text-lg font-semibold"}"><h3>${escape(gear.title ? gear.title : "(no title)")}</h3></div>
    
                
                <div class="${"p-4"}"><img src="${"/gears/" + escape(gear.gear, true) + ".png"}"${add_attribute("alt", gear.gear, 0)} class="${"gear-img mx-auto"}"></div>
    
                
                <div class="${"grid grid-cols-4 items-end"}"><div class="${"mx-auto p-2"}"><img src="${"/skills/" + escape(gear.skill1, true) + ".png"}"${add_attribute("alt", gear.skill1, 0)} width="${"64"}" height="${"64"}" class="${"mx-auto"}"></div>
                    <div class="${"mx-auto p-2"}"><img src="${"/skills/" + escape(gear.skill2, true) + ".png"}"${add_attribute("alt", gear.skill2, 0)} width="${"50"}" height="${"50"}" class="${"mx-auto"}"></div>
                    <div class="${"mx-auto p-2"}"><img src="${"/skills/" + escape(gear.skill3, true) + ".png"}"${add_attribute("alt", gear.skill3, 0)} width="${"50"}" height="${"50"}" class="${"mx-auto"}"></div>
                    <div class="${"mx-auto p-2"}"><img src="${"/skills/" + escape(gear.skill4, true) + ".png"}"${add_attribute("alt", gear.skill4, 0)} width="${"50"}" height="${"50"}" class="${"mx-auto"}">
                    </div></div>
    
                
                <div><p class="${"bg-gray-100 p-3"}">${escape(gear.description ? gear.description : "(no description)")}</p></div>

                
                <div class="${"flex justify-evenly"}"><div class="${"w-full"}"><a href="${"gears/build/edit"}" class="${"block"}"><div class="${"bg-secondary-400 w-full py-2 rounded-bl-md text-center"}">Edit</div>
                        </a></div>
    
                    <form action="${""}" method="${"post"}" class="${"w-full"}"><button type="${"submit"}" class="${"bg-red-400 w-full py-2 rounded-br-md"}">Delete</button>
                    </form></div>
            </div>`;
  })}</div>` : `<p class="${"text-xl text-center italic font-semibold mt-8"}">You do not have any gear yet...<a href="${"/gears/build"}">Go create one!</a></p>`}`;
});
export {
  Page as default
};
