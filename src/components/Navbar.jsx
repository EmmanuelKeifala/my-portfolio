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
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
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
      <div className="min-w-[70vw]  flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2">
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

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
