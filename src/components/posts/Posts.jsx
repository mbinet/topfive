import { useState, useEffect } from "react";
import styled from "styled-components";
import PostBlock from "./PostBlock";
import getPhPosts from "../../services/productHuntData";
import getHnPosts from "../../services/hackerNewsData";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  color: red;
`;

function Posts() {
  // ProductHunt
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

  // Hacker news
  const [hnState, setHnState] = useState({
    error: null,
    isLoaded: false,
    posts: null,
  });
  useEffect(() => {
    getHnPosts().then(
      (response) => {
        setHnState({
          isLoaded: true,
          posts: response,
        });
      },
      (error) => {
        setHnState({
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
        error={phState.error}
        image={{ src: "/images/producthunt.png", alt: "product hunt logo" }}
        isLoaded={phState.isLoaded}
        posts={phState.posts}
      />
      <PostBlock
        error={hnState.error}
        image={{ src: "/images/hackernews.png", alt: "hacker news logo" }}
        isLoaded={hnState.isLoaded}
        posts={hnState.posts}
      />
    </Container>
  );
}

export default Posts;
