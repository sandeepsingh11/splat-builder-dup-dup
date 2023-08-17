import { c as create_ssr_component, d as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p>Lookin&#39; fresh ${escape(data.username)}</p>`;
});
export {
  Page as default
};
