const bearer = process.env.PH_BEARER;

const parsePhPosts = (posts) =>
  posts.slice(0, 5).map((post) => ({
    id: post.id,
    title: post.name,
    subtitle: post.tagline,
    number: post.votes_count,
    imageUrl: post.thumbnail.image_url,
    link: post.discussion_url,
  }));

const getJson = async (url, params) => {
  const res = await (await fetch(url, params)).json();
  return res;
};

const getPhPosts = async () => {
  const params = {
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
  };

  const res = await getJson("https://api.producthunt.com/v1/posts", params);
  return parsePhPosts(res.posts);
};

export default getPhPosts;
