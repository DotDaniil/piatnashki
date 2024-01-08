/* eslint-disable */
import React from "react";
import { Provider } from "mobx-react";
import Head from "next/head";
import "./index.css";
import appStore from "../store/appstore";

function Piatnashki({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Пятнашки</title>
        <link rel='icon' href='/icon.png' sizes='32x32' type='image/png' />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Island+Moments&display=swap');
        </style>
      </Head>
      <Provider appStore={appStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default Piatnashki;
