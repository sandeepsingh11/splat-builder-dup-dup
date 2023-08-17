import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../chunks/index2.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { showDropdown = false } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.showDropdown === void 0 && $$bindings.showDropdown && showDropdown !== void 0)
    $$bindings.showDropdown(showDropdown);
  return `<nav class="${"relative bg-primary-500 text-white flex justify-between"}">
  <ul class="${"flex items-center"}"><li><a href="${"/"}" class="${"block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"}">SB
      </a></li></ul>

  
  <ul class="${"md:flex items-center hidden"}">
    ${!data?.username ? `${each(data.guestRoutes, (route) => {
    return `<a${add_attribute("href", route.url, 0)} class="${"block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"}">${escape(route.name)}
        </a>`;
  })}` : ``}

    
    ${data?.username ? `${each(data.authRoutes, (route) => {
    return `<a${add_attribute("href", route.url, 0)} class="${"block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"}">${escape(route.name)}
        </a>`;
  })}

      
      <div class="${"relative"}"><button class="${"block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"}">Profile
        </button>

        ${showDropdown ? `<ul class="${"absolute top-full right-0 bg-primary-500 mt-1 rounded text-left z-20"}">${each(data.dropdownRoutes, (route) => {
    return `<a${add_attribute("href", route.url, 0)} class="${"block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors py-2 px-4 rounded-t-md rounded-b-md"}" data-sveltekit-preload-data="${"off"}" data-sveltekit-reload>${escape(route.name)}
              </a>`;
  })}</ul>` : ``}</div>` : ``}</ul></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
