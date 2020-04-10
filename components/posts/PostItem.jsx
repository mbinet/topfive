import PropTypes from "prop-types";
import { Avatar, Badge, Divider, Link, Typography } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 12px;
`;

const SBadge = styled(Badge)`
  align-self: center;
  margin-right: 24px;
`;

const PostItem = ({ imageUrl, link, number, subtitle, title }) => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Container>
        <SBadge
          badgeContent={number}
          color={number > 400 ? "error" : "primary"}
          max={9999}
        >
          <Avatar src={imageUrl} alt="thumbnail" />
        </SBadge>
        <div>
          <Link href={link} onClick={preventDefault}>
            {title}
          </Link>
          <Typography variant="body2">{subtitle}</Typography>
        </div>
      </Container>
      <Divider />
    </>
  );
};

PostItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostItem;
