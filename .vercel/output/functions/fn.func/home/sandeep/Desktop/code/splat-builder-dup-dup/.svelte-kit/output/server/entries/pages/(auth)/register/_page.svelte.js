import { c as create_ssr_component } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"flex justify-center items-center min-h-screen"}"><div class="${"lg:w-4/12 md:w-8/12 w-11/12 bg-white my-4 p-6 rounded-lg shadow-md"}"><div id="${"registration-header"}"><h1 class="${"mb-6 text-3xl font-bold text-center"}">Registration</h1></div>

        <form action="${"?/register"}" method="${"POST"}">${form?.error ? `<div class="${"text-red-500 mt-2 text-sm font-bold text-center"}">Something went wrong. Please try again</div>` : ``}

            <div class="${"mb-5"}"><label class="${"block text-sm"}" for="${"username"}">Username</label>
                <input class="${"p-2.5 rounded-lg shadow-sm border-2 border-gray-300 focus:border-indigo-600 block mt-1 w-full"}" id="${"username"}" type="${"text"}" name="${"username"}" required value="${""}"></div>

            <div class="${"mb-5"}"><label class="${"block text-sm"}" for="${"email"}">Email</label>
                <input class="${"p-2.5 rounded-lg shadow-sm border-2 border-gray-300 focus:border-indigo-600 block mt-1 w-full"}" id="${"email"}" type="${"email"}" name="${"email"}" required value="${""}">
                <div class="${"text-sm text-gray-500"}">Used for password resets</div></div>

            <div class="${"mb-5"}"><label class="${"block text-sm"}" for="${"password"}">Password</label>
                <input class="${"p-2.5 rounded-lg shadow-sm border-2 border-gray-300 focus:border-indigo-600 block mt-1 w-full"}" id="${"password"}" type="${"password"}" name="${"password"}" required value="${""}"></div>

            <div class="${"mb-5"}"><label class="${"block text-sm"}" for="${"password_confirmation"}">Retype password</label>
                <input class="${"p-2.5 rounded-lg shadow-sm border-2 border-gray-300 focus:border-indigo-600 block mt-1 w-full"}" id="${"password_confirmation"}" type="${"password"}" name="${"password_confirmation"}" required value="${""}"></div>

            <div class="${"mb-6"}"><button type="${"submit"}" class="${"w-full bg-indigo-700 px-4 py-2 border border-transparent rounded text-white hover:bg-indigo-600 focus:bg-indigo-600 focus:ring focus:ring-indigo-300 disabled:opacity-25 transition duration-150"}">Register
                </button></div></form>
    
        <div class="${"text-center"}"><a href="${"/login"}" class="${"cursor:pointer text-indigo-800 hover:text-indigo-600 hover:underline transition-colors text-sm opacity-75"}">Have an account? Login here
            </a></div></div></div>`;
});
export {
  Page as default
};
