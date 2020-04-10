import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import PostItem from "./PostItem";

const Img = styled.img`
  display: flex;
  height: 40px;
  margin: auto;
  margin-bottom: 16px;
`;

const PostBlock = ({ error, image, isLoaded, posts }) => {
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Chargement… jrigole</div>;
  }
  return (
    <div>
      <Img src={image.src} alt={image.alt} />
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
    </div>
  );
};

PostBlock.propTypes = {
  error: PropTypes.objectOf(Error),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
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
  isLoaded: PropTypes.bool.isRequired,
};

PostBlock.defaultProps = {
  error: null,
  posts: null,
};

export default PostBlock;
