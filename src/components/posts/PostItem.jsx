import PropTypes from "prop-types";
import { Avatar, Badge, Divider, Link, Typography } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 16px;
`;

const SBadge = styled(Badge)`
  align-self: center;
  margin-right: 24px;
`;

const PostItem = ({
  discussionUrl,
  imageUrl,
  url,
  points,
  subtitle,
  title,
}) => (
  <>
    <Container>
      <Link href={discussionUrl}>
        <SBadge
          badgeContent={points}
          color={points > 400 ? "error" : "primary"}
          max={9999}
        >
          <Avatar src={imageUrl} alt="thumbnail" />
        </SBadge>
      </Link>
      <div>
        <Link href={url}>{title}</Link>
        <Typography variant="body2">{subtitle}</Typography>
      </div>
    </Container>
    <Divider />
  </>
);

PostItem.propTypes = {
  discussionUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostItem;
