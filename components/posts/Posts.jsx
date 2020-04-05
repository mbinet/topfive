import PostBlock from "./PostBlock";
import getPhPosts from "./data";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phError: null,
      isPhLoaded: false,
      phPosts: null,
      // for future TechCrunch support
      // tcError: null,
      // isTcLoaded: false,
      // tcPosts: null,
    };
  }

  componentDidMount() {
    getPhPosts().then(
      (response) => {
        this.setState({
          isPhLoaded: true,
          phPosts: response,
        });
      },
      (error) => {
        this.setState({
          isPhLoaded: true,
          phError: error,
        });
      }
    );
  }

  render() {
    const { phError, isPhLoaded, phPosts } = this.state;
    return (
      <div>
        <PostBlock posts={phPosts} error={phError} isLoaded={isPhLoaded} />
      </div>
    );
  }
}

export default Posts;
