
import 'bootstrap/dist/css/bootstrap.css';
import '@splidejs/react-splide/css';
import 'tippy.js/dist/tippy.css';
import '../styles/lib.scss';
import '../styles/theme-red.css';
import '../styles/style.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../containers/Layout';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  return (
    <>
      <Head>
        <title>App landing page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
