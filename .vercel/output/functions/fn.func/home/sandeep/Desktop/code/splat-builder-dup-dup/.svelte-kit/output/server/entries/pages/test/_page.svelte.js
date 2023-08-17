import { c as create_ssr_component, d as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { effects } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.effects === void 0 && $$bindings.effects && effects !== void 0)
    $$bindings.effects(effects);
  return `<div class="${"bg-slate-800 text-white "}"><h1 class="${"text-2xl"}">Welcome to Splat Builder</h1>
    <p>${escape(data.url)}</p>
    <p>${escape(data.message.message)}</p>
    
    <div class="${"flex flex-wrap"}"><div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Sploosh-o-matic</h2>
            0AP
            <pre><code id="${"0-0ap"}"></code></pre>
            10AP
            <pre><code id="${"0-10ap"}"></code></pre>
            13AP
            <pre><code id="${"0-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Rapid Blaster</h2>
            0AP
            <pre><code id="${"240-0ap"}"></code></pre>
            10AP
            <pre><code id="${"240-10ap"}"></code></pre>
            13AP
            <pre><code id="${"240-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Splat Roller</h2>
            0AP
            <pre><code id="${"1010-0ap"}"></code></pre>
            10AP
            <pre><code id="${"1010-10ap"}"></code></pre>
            13AP
            <pre><code id="${"1010-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Splat Charger</h2>
            0AP
            <pre><code id="${"2010-0ap"}"></code></pre>
            10AP
            <pre><code id="${"2010-10ap"}"></code></pre>
            13AP
            <pre><code id="${"2010-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Splat Dulies</h2>
            0AP
            <pre><code id="${"5010-0ap"}"></code></pre>
            10AP
            <pre><code id="${"5010-10ap"}"></code></pre>
            13AP
            <pre><code id="${"5010-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Ink Brush</h2>
            0AP
            <pre><code id="${"1100-0ap"}"></code></pre>
            10AP
            <pre><code id="${"1100-10ap"}"></code></pre>
            13AP
            <pre><code id="${"1100-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Heavy Splating</h2>
            0AP
            <pre><code id="${"4010-0ap"}"></code></pre>
            10AP
            <pre><code id="${"4010-10ap"}"></code></pre>
            13AP
            <pre><code id="${"4010-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Slosher</h2>
            0AP
            <pre><code id="${"3000-0ap"}"></code></pre>
            10AP
            <pre><code id="${"3000-10ap"}"></code></pre>
            13AP
            <pre><code id="${"3000-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Tenta Brella</h2>
            0AP
            <pre><code id="${"6010-0ap"}"></code></pre>
            10AP
            <pre><code id="${"6010-10ap"}"></code></pre>
            13AP
            <pre><code id="${"6010-13ap"}"></code></pre></div>
        <div style="${"padding: 5px"}"><h2 class="${"text-2xl underline decoration-dashed mt-6"}">Splatana Wiper</h2>
            0AP
            <pre><code id="${"8010-0ap"}"></code></pre>
            10AP
            <pre><code id="${"8010-10ap"}"></code></pre>
            13AP
            <pre><code id="${"8010-13ap"}"></code></pre></div></div></div>`;
});
export {
  Page as default
};
