import React from "react";
import { Provider } from "mobx-react";
import Head from "next/head";
import "./index.css";
import appStore from "../store/appstore";

function Piatnashki({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Head>
        <title>Пятнашки</title>
        <link rel='icon' href='/icon.png' sizes='32x32' type='image/png' />
      </Head>
      <Provider appStore={appStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default Piatnashki;
