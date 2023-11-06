import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {client} from '@/client';

const Skill = ({name, x, y}) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6  shadow-dark cursor-pointer absolute"
      whileHover={{
        scale: 1.05,
      }}
      initial={{x: 0, y: 0}}
      whileInView={{x: x, y: y}}
      viewport={{once: true}}
      transition={{duration: 3}}>
      {name}
    </motion.div>
  );
};
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then(data => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8  shadow-dark cursor-pointer"
          whileHover={{
            scale: 1.05,
          }}>
          Web
        </motion.div>
        {skills.map(skill => (
          <Skill
            key={skill._id}
            name={skill.name}
            x={skill.positionX}
            y={skill.positionY}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
