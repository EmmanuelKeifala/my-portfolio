import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import aboutImage from '../../public/images/about.png';
import {useRef} from 'react';
import {useInView, useMotionValue, useSpring} from 'framer-motion';
import {useEffect} from 'react';
import Skills from '@/components/Skills';

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', latest => {
      console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>Emmanuel Keifala | About Page</title>
        <meta name="description" content="Emmanuel Keifala's About Page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={'Dedication Ignites Purpose!'}
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hey, I'm Emmanuel Keifala, a web developer and web manager
                driven by the fervor to craft stunning, functional, and
                user-centric digital encounters. With a year of hands-on
                experience in the industry, I perpetually seek novel and
                inventive approaches to breathe life into my clients' visions.
              </p>
              <p className="my-4 font-medium">
                I firmly uphold the belief that design transcends mere
                aesthetics; it's the art of problem-solving and the cultivation
                of intuitive, enjoyable user journeys.
              </p>
              <p className="font-medium">
                Whether I'm engaged in the architecture of a website, a mobile
                app, or any other digital creation, I bring unwavering
                commitment to design excellence and user-centric philosophy to
                every endeavor. I eagerly anticipate the prospect of channeling
                my skills and ardor into your forthcoming project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={aboutImage}
                alt="Emmanuel"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  working experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
