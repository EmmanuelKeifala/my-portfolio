import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import {useRouter} from 'next/router';
import {GithubIcon, LinkedInIcon, TwitterIcon} from './Icons';
import {motion} from 'framer-motion';
import {useState} from 'react';

const CustomLinks = ({href, title, className = ''}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLinks = ({href, title, className = '', toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}>
        <span
          className={`bg-dark block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}></span>
        <span
          className={`bg-dark  block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
        <span
          className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-between gap-10 flex-wrap">
          <CustomLinks href={'/'} title="Home" />
          <CustomLinks href={'/about'} title="About" />
          <CustomLinks href={'/projects'} title="Projects" />
          <CustomLinks href={'/articles'} title="Articles" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap gap-5 text-3xl">
          <motion.a
            href="https://twitter.com/Emmanuel_Kel_"
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className="w-6">
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/EmmanuelKeifala"
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className="w-6">
            <GithubIcon />
          </motion.a>
          <motion.a
            href={'/'}
            target={'_blank'}
            title="LinkedIn"
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className="w-6">
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[70vw]  flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32"
          initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%'}}
          animate={{scale: 1, opacity: 1}}
          transition={{duration: 0.3}}>
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLinks href={'/'} title="Home" toggle={handleClick} />
            <CustomMobileLinks
              href={'/about'}
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLinks
              href={'/projects'}
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLinks
              href={'/articles'}
              title="Articles"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center gap-8 flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/Emmanuel_Kel_"
              target={'_blank'}
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
              className="w-6">
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/EmmanuelKeifala"
              target={'_blank'}
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
              className="w-6 bg-light rounded-full">
              <GithubIcon />
            </motion.a>
            <motion.a
              href={'/'}
              target={'_blank'}
              title="LinkedIn"
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
              className="w-6">
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
