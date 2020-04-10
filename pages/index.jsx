import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Posts from "../components/posts/Posts";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 40px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Home = () => (
  <Container>
    <GlobalStyle />
    <Head>
      <title>Top5</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <H1>Top 5 today</H1>
      <Posts />
    </Main>
  </Container>
);

export default Home;
