import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

const articles = () => {
  return (
    <>
      <Head>
        <title>Emmanuel Keifala | Articles</title>
        <meta
          name="description"
          content="full stack developer portfolio articles"
        />
      </Head>
      <main>
        <Layout>
          <AnimatedText text={'Empowering Change Through Words'} />
        </Layout>
      </main>
    </>
  );
};

export default articles;
