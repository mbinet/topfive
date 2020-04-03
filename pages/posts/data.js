const bearer = process.env.PH_BEARER;

export async function getPhPosts() {
  var params = {
    headers: {
      Authorization: "Bearer " + bearer
    }
  };

  return fetch("https://api.producthunt.com/v1/posts", params)
    .then(res => res.json())
    .then(
      result => {
        return parsePhPosts(result.posts);
      },
      error => {
        return {
          error
        };
      }
    );
}

var parsePhPosts = posts => {
  return posts.slice(0, 5).map(post => ({
    id: post.id,
    title: post.name,
    subtitle: post.tagline,
    number: post.votes_count,
    image_url: post.thumbnail.image_url,
    link: post.discussion_url
  }));
};
