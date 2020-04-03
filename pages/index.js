import Head from "next/head";
import Posts from "../components/posts/Posts";

const Home = () => (
  <div className="container">
    <Head>
      <title>Top5</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Top 5 today</h1>
      <Posts />
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 50px 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .thumbnail {
        width: 80px;
        height: 80px;
      }
    `}</style>

    <style jsx global>{`
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
    `}</style>
  </div>
);

export default Home;
