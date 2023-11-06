import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import articlePic from '../../public/images/articles/pagination component in reactjs.jpg';
const FeautredArticle = ({img, title, time, summary, link}) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className="text-primary font-semibold ">{time}</span>
    </li>
  );
};
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
      <main className="w-full mb-16 flex flex-col overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={'Empowering Change Through Words'}
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeautredArticle
              title={
                'Build A Custom Pagination Component In Reactjs From Scratch'
              }
              summary={
                'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              }
              time={'9 min read'}
              img={articlePic}
              link={'/'}
            />
            <li>Feautred Articles</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
