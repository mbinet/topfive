const getJson = async (url, params) => {
  const res = await (await fetch(url, params)).json();
  return res;
};

export default getJson;
