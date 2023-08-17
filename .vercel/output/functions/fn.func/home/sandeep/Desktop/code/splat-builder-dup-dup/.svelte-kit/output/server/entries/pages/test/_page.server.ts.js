const PUBLIC_API_URL = "http://127.0.0.1:8000/api";
const load = async (request) => {
  const res = await request.fetch(`${PUBLIC_API_URL}/test`);
  const message = await res.json();
  return {
    message,
    url: PUBLIC_API_URL
  };
};
export {
  load
};
