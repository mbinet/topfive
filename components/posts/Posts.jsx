import { useState, useEffect } from "react";
import PostBlock from "./PostBlock";
import getPhPosts from "./data";

function Posts() {
  const [phState, setPhState] = useState({
    error: null,
    isLoaded: false,
    posts: null,
  });

  useEffect(() => {
    getPhPosts().then(
      (response) => {
        setPhState({
          isLoaded: true,
          posts: response,
        });
      },
      (error) => {
        setPhState({
          isLoaded: true,
          error,
        });
      }
    );
  });

  // for future TechCrunch support
  // const [tcState, setTcState] = useState({
  //   error: null,
  //   isLoaded: false,
  //   posts: null,
  // });

  return (
    <div>
      <PostBlock
        posts={phState.posts}
        error={phState.error}
        isLoaded={phState.isLoaded}
      />
    </div>
  );
}

export default Posts;
