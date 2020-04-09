import { StylesProvider } from "@material-ui/core/styles";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Component
        {...pageProps} // eslint-disable-line react/jsx-props-no-spreading
      />
    </StylesProvider>
  );
}

export default MyApp;
