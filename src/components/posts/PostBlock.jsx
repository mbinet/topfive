import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import PostItem from "./PostItem";

const PostBlock = ({ error, isLoaded, posts }) => {
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Chargement… jrigole</div>;
  }
  return (
    <Paper elevation={6}>
      {posts.map((post) => (
        <PostItem
          discussionUrl={post.discussionUrl}
          imageUrl={post.imageUrl}
          key={post.id}
          url={post.url}
          points={post.points}
          subtitle={post.subtitle}
          title={post.title}
        />
      ))}
    </Paper>
  );
};

PostBlock.propTypes = {
  error: PropTypes.objectOf(Error),
  isLoaded: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      discussionUrl: PropTypes.string,
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      points: PropTypes.number,
      subtitle: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

PostBlock.defaultProps = {
  error: null,
  posts: null,
};

export default PostBlock;
