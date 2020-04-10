const parsePosts = (posts) =>
  posts.slice(0, 5).map((post) => ({
    id: post.id,
    imageUrl: `https://source.unsplash.com/40x40/?${post.title.replace(
      " ",
      ","
    )}`,
    link: post.url,
    number: post.points,
    subtitle: post.title,
    title: post.domain,
  }));

const getJson = async (url, params) => {
  const res = await (await fetch(url, params)).json();
  return res;
};

const getHnPosts = async () => {
  // Hacker News API is a nightmare, this one isn't maintained though
  const res = await getJson("https://api.hnpwa.com/v0/news/1.json");
  return parsePosts(res);
};

export default getHnPosts;
