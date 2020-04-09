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
  }, []);

  // for future TechCrunch support
  // const [tcState, setTcState] = useState({
  //   error: null,
  //   isLoaded: false,
  //   posts: null,
  // });

  return (
    <>
      <div className="blocks">
        <PostBlock
          posts={phState.posts}
          error={phState.error}
          isLoaded={phState.isLoaded}
        />
        <PostBlock
          posts={phState.posts}
          error={phState.error}
          isLoaded={phState.isLoaded}
        />
        <PostBlock
          posts={phState.posts}
          error={phState.error}
          isLoaded={phState.isLoaded}
        />
        <PostBlock
          posts={phState.posts}
          error={phState.error}
          isLoaded={phState.isLoaded}
        />
        <PostBlock
          posts={phState.posts}
          error={phState.error}
          isLoaded={phState.isLoaded}
        />
      </div>
      <style jsx>{`
        .blocks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 32px;
        }
      `}</style>
    </>
  );
}

export default Posts;
