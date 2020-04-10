import getJson from "../utils/getJson";

const bearer = process.env.PH_BEARER;

const parsePosts = (posts) =>
  posts.slice(0, 5).map((post) => ({
    discussionUrl: post.discussion_url,
    id: post.id,
    imageUrl: post.thumbnail.image_url,
    points: post.votes_count,
    subtitle: post.tagline,
    title: post.name,
    url: post.redirect_url,
  }));

const getPhPosts = async () => {
  const params = {
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
  };

  // For faster loading time in dev mode, use this data
  // const res = await getJson("./fakePhData.json", params);
  const res = await getJson("https://api.producthunt.com/v1/posts", params);
  return parsePosts(res.posts);
};

export default getPhPosts;
