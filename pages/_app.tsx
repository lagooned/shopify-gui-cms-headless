import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ShopProvider from '../context/shop/ShopProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ShopProvider>
    <Component {...pageProps} />
  </ShopProvider>
);

export default MyApp;
