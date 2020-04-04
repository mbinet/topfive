const bearer = process.env.PH_BEARER;

export async function getPhPosts() {
  const params = {
    headers: {
      Authorization: "Bearer " + bearer
    }
  };

  let res = await getJson("https://api.producthunt.com/v1/posts", params);
  return parsePhPosts(res.posts);
}

let parsePhPosts = posts =>
  posts.slice(0, 5).map(post => ({
    id: post.id,
    title: post.name,
    subtitle: post.tagline,
    number: post.votes_count,
    image_url: post.thumbnail.image_url,
    link: post.discussion_url
  }));

async function getJson(url, params) {
  return await (await fetch(url, params)).json();
}
