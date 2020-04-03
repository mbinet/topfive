const PostItem = props => (
  <div className="container">
    <img src={props.image_url} className="thumbnail" />
    <div className="number">{props.number}</div>
    <div>
      <div className="title">
        <a href={props.link}>{props.title}</a>
      </div>
      <i>{props.subtitle}</i>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        margin-bottom: 24px;
      }
      .thumbnail {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 24px;
      }
      .number {
        display: flex;
        align-self: center;
        margin-right: 24px;
      }
      .title {
        margin-bottom: 12px;
      }
    `}</style>
  </div>
);

export default PostItem;
