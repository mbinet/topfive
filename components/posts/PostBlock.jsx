import PostItem from "./PostItem";

const PostBlock = ({ error, isLoaded, posts }) => {
  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement… jrigole</div>;
  } else {
    return (
      <ul>
        {posts.map(post => (
          <PostItem
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            number={post.number}
            image_url={post.image_url}
            link={post.link}
          />
        ))}
      </ul>
    );
  }
};

export default PostBlock;
