import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, {useRef, useState, useEffect} from 'react';
import {motion, useMotionValue} from 'framer-motion';
import {client} from '@/client';

import PortableText from '@sanity/block-content-to-react';
import Dialog from '@/components/Dialog';
import {useRouter} from 'next/navigation';

const TextComponent = ({blocks}) => {
  return <PortableText blocks={blocks} />;
};

const FramerImage = motion(Image);
const MovingImg = ({title, img, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  function handleMouse(event) {
    ref.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set();
  }
  function handleMouseLeave(event) {
    ref.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className=" capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        width={500}
        height={500}
        style={{x: x, y: y}}
        ref={ref}
        src={img}
        alt={title}
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 0.2}}}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
        priority
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
    </Link>
  );
};
const ArticlesCard = ({img, title, date, link, summary}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const openDialog = content => {
    setIsDialogOpen(true);
    setDialogContent(content);
    document.body.classList.add('modal-open');
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogContent(null);
    document.body.classList.remove('modal-open');
  };
  return (
    <motion.li
      initial={{y: 200}}
      whileInView={{y: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
      viewport={{once: true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
      onClick={() => openDialog(summary)}>
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
      {isDialogOpen && (
        <Dialog title={title} onClose={closeDialog} onOk={closeDialog}>
          <p className="text-sm mb-2 ">
            <TextComponent blocks={dialogContent} />
          </p>
        </Dialog>
      )}
    </motion.li>
  );
};
const FeautredArticle = ({img, title, time, summary, link}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const router = useRouter();

  const openDialog = content => {
    setIsDialogOpen(true);
    setDialogContent(content);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogContent(null);
  };

  return (
    <li
      className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative"
      onClick={() => openDialog(summary)}>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          width={500}
          height={500}
        />
      </Link>
      <Link href={link}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">
        <TextComponent blocks={summary} />
      </p>
      {isDialogOpen && (
        <Dialog title={title} onClose={() => router.push('/articles')}>
          <p className="text-sm mb-2 ">
            <TextComponent blocks={dialogContent} />
          </p>
        </Dialog>
      )}
      <span className="text-primary font-semibold ">{time}</span>
    </li>
  );
};

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = `*[_type == "articles"]{
  _id, author,title,time ,
"imageUrl": avatar.asset->url, type, tags, slug, content
}
`;
    client.fetch(query).then(data => {
      setArticles(data);
    });
  }, []);
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
            {articles?.map(article => {
              if (article.type === 'featured') {
                return (
                  <FeautredArticle
                    key={article._id}
                    title={article.title}
                    summary={article.content}
                    time={article.time}
                    img={article.imageUrl}
                    link={'/articles?showDialog=y'}
                  />
                );
              }
            })}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            {articles?.map(article => {
              if (article.type === 'normal') {
                return (
                  <ArticlesCard
                    key={article._id}
                    title={article.title}
                    summary={article.content}
                    time={article.time}
                    date={article.time}
                    img={article.imageUrl}
                    link={'/articles?showDialog=y'}
                  />
                );
              }
            })}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
