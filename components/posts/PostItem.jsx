import PropTypes from "prop-types";
import { Avatar, Badge, Divider, Link, Typography } from "@material-ui/core";

const PostItem = ({ imageUrl, number, link, title, subtitle }) => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <div className="container">
        <Badge
          badgeContent={number}
          color={number > 400 ? "error" : "primary"}
          max={9999}
        >
          <Avatar src={imageUrl} className="" alt="thumbnail" />
        </Badge>
        <div>
          <Link href={link} onClick={preventDefault}>
            {title}
          </Link>
          <Typography variant="body2">{subtitle}</Typography>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            padding: 12px;
          }
          .thumbnail {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 24px;
          }
        `}</style>
      </div>
      <Divider />
    </>
  );
};

PostItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PostItem;
