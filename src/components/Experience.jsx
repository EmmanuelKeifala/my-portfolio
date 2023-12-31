import React, {useState, useEffect} from 'react';
import {motion, useScroll} from 'framer-motion';
import {useRef} from 'react';
import LiIcon from './LiIcon';
import {client} from '@/client';
const Details = ({position, company, companyLink, time, work}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        className=""
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}>
        <h3 className=" capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary">
            @{company}{' '}
          </a>
          <span className=" capitalize font-medium text-dark/75">{time}</span>
          <p className="font-medium w-full">{work}</p>
        </h3>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then(data => {
      setExperiences(data);
    });
  }, []);
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experiences?.map(experience => (
            <Details
              key={experience._id}
              position={experience.position}
              company={experience.works[0].company}
              time={experience.year}
              work={experience.works[0].desc}
              companyLink={'wwww.google.com'}
            />
          ))}
          {/* <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization. "
            companyLink={'wwww.google.com'}
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
