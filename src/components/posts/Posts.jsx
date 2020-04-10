import { useState, useEffect } from "react";
import styled from "styled-components";
import PostBlock from "./PostBlock";
import getPhPosts from "../../services/productHuntData";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  color: red;
`;

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
    <Container>
      <PostBlock
        posts={phState.posts}
        error={phState.error}
        isLoaded={phState.isLoaded}
      />
    </Container>
  );
}

export default Posts;
