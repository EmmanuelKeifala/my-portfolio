import AnimatedText from '@/components/AnimatedText';
import {GithubIcon} from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';
import {useState} from 'react';
import {useEffect} from 'react';
import {client} from '@/client';
const FramerImage = motion(Image);

const FeaturedProjects = ({type, title, summary, img, link, github}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 mt-5 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          width={500}
          height={500}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={`${link}`}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({title, type, img, link, github}) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          width={500}
          height={500}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex flex-row-reverse items-center justify-between">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold">
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == "works"]{
  _id,title,type,"imageUrl":imgUrl.asset -> url,projectLink, codeLink, description 
}
`;
    client.fetch(query).then(data => {
      setProjects(data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Emmanuel Keifala | Projects</title>
        <meta
          name="description"
          content="full stack developer portfolio projects"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Unlocking Innovation Beyond Boundaries" />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              {projects?.map(project => {
                if (project?.type === 'featured') {
                  return (
                    <FeaturedProjects
                      key={project._id}
                      title={project.title}
                      summary={project.description}
                      link={project.projectLink}
                      type={project.type}
                      img={project.imageUrl}
                      github={project.codeLink}
                    />
                  );
                }
              })}
            </div>
            <div className="col-span-6">
              {projects?.map(project => {
                if (project?.type === 'normal') {
                  return (
                    <Project
                      key={project._id}
                      title={project.title}
                      link={project.projectLink}
                      type={project.type}
                      img={project.imageUrl}
                      github={project.codeLink}
                    />
                  );
                }
              })}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
