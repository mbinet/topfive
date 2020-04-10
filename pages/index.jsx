import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Posts from "../src/components/posts/Posts";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
});

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
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
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </MuiThemeProvider>
);

export default Home;
