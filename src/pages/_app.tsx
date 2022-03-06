import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/Global";
import { LayoutNextPage } from "next";

type AppPropsWithLayout = AppProps & {
  Component: LayoutNextPage;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
