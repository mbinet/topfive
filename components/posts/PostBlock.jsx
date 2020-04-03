import PostItem from "./PostItem";

const PostBlock = props => {
  if (props.error) {
    return <div>Erreur : {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Chargement… jrigole</div>;
  } else {
    return (
      <ul>
        {props.posts.map(post => (
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
