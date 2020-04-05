import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostBlock = ({ error, isLoaded, posts }) => {
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Chargement… jrigole</div>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          number={post.number}
          imageUrl={post.imageUrl}
          link={post.link}
        />
      ))}
    </ul>
  );
};

PostBlock.propTypes = {
  error: PropTypes.objectOf(Error),
  isLoaded: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      number: PropTypes.number,
      imageUrl: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

PostBlock.defaultProps = {
  error: null,
  posts: null,
};

export default PostBlock;
