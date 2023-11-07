import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import {LinkArrow} from '@/components/Icons';
import HireMe from '@/components/HireMe';
import {useState, useEffect} from 'react';
import {client} from '@/client';
export default function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const query = `*[_type == "home"]{
"fileUrl": file.asset->url, subTitle,"imageUrl": imgUrl.asset->url,title, _id
}
`;
    client.fetch(query).then(data => {
      setHome(data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Emmanuel Keifala</title>
        <meta name="description" content="full stack developer portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                width={500}
                height={500}
                src={home[0]?.imageUrl}
                alt="Emmanuel Keifala"
                className="w-full h-auto"
                priority={true}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center ml-40">
              <AnimatedText
                text={home[0]?.title}
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">{home[0]?.subTitle}</p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href={`${home[0]?.fileUrl}`}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                  download={true}>
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:emmanuelkeifala@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="EmTech" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
