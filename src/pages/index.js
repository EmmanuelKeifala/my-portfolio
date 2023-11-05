import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePicture from '../../public/images/profile.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import {LinkArrow} from '@/components/Icons';
export default function Home() {
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
              {/* <Image
                src={profilePicture}
                alt="Emmanuel Keifala"
                className="w-full h-auto "
              /> */}
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={
                  'Transforming Vision into Reality Through Code and Design.'
                }
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a proficient full-stack artisan of the digital realm, I am
                wholeheartedly committed to bringing your concepts to life in
                the form of cutting-edge web creations. Take a journey through
                my recent masterpieces and thought-provoking publications,
                illuminating my mastery in the realms of React.js and the art of
                webcraft.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href={'/dummy.pdf'}
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
      </main>
    </>
  );
}
