import React from 'react';
import Layout from '../Layout';


function MyApp({ Component, pageProps }) {
  return (
  
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
  
  );
}

export default MyApp;
