import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import {useRef} from 'react';
import {useInView, useMotionValue, useSpring} from 'framer-motion';
import {useEffect} from 'react';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import {useState} from 'react';
import {client} from '@/client';

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
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]{
  description3, projectsCompleted,clientSatisfied,workingExperience,description2, title,description1,
    
"imageUrl": imgUrl.asset->url
}
`;
    client.fetch(query).then(data => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Emmanuel Keifala | About Page</title>
        <meta name="description" content="Emmanuel Keifala's About Page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={abouts[0]?.title} className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">{abouts[0]?.description1}</p>
              <p className="my-4 font-medium">{abouts[0]?.description2}</p>
              <p className="font-medium">{abouts[0]?.description3}</p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                width={500}
                height={500}
                src={abouts[0]?.imageUrl}
                alt="Emmanuel"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={abouts[0]?.clientSatisfied} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={abouts[0]?.projectsCompleted} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers
                    value={
                      abouts[0]?.workingExperience == 0
                        ? 0
                        : `${abouts[0]?.workingExperience}`
                    }
                  />
                  {abouts[0]?.workingExperience > 0 && '+'}
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  working experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
