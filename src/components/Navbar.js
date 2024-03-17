"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  HashnodeIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icon";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const linkItems = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/projects", title: "Projects" },
    { href: "/contact", title: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleOpenNav = ()=>{
    setIsOpen((prev)=>!prev)
  }

  const pathName = usePathname();
  console.log(pathName);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  //for showing navbar on scroll down and hiding when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`sticky top-0 transition-all duration-500 ${
        isVisible ? "" : "-translate-y-full"
      } bg-[#DDEAFD] z-20`}
    >
      <div className="relative w-[100vw] vsm:px-2 sm:px-4 md:px-10 lg:px-15 py-5 flex items-center justify-between h-15 ">
        <div className="flex flex-row justify-around items-center gap-4 w-1/3 vsm:hidden sm:hidden md:flex">
          {linkItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`${
                pathName === item.href && "bg-black text-white"
              } px-1 py-0.5 rounded-md`}
              prefetch
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <Logo />
        </div>
        <motion.div
          className="flex flex-row justify-center items-center gap-5 h-10 w-1/3  vsm:hidden sm:hidden md:flex md:gap-8 "
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.a
            href="https://github.com/kalkeshwar"
            target="_blank"
            className="h-[100%] w-[25px] flex items-center"
            animate={{ y: [5, 0] }}
            whileHover={{
              y: -5,
            }}
          >
            <GithubIcon className={`w-full`} />
          </motion.a>
          <motion.a
            href=""
            target="_blank"
            className="h-[100%] w-[25px] flex items-center"
            animate={{ y: [5, 0] }}
            whileHover={{
              y: -5,
            }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/Kalkeshwar1"
            target="_blank"
            className="h-[100%] w-[25px] flex items-center"
            animate={{ y: [5, 0] }}
            whileHover={{
              y: -5,
            }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href=""
            target="_blank"
            className="h-[100%] w-[25px] flex items-center"
            animate={{ y: [5, 0] }}
            whileHover={{
              y: -5,
            }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href=""
            target="_blank"
            className=" h-[100%] w-[25px] flex items-center"
            animate={{ y: [5, 0] }}
            whileHover={{
              y: -5,
            }}
          >
            <HashnodeIcon />
          </motion.a>
        </motion.div>
        {
          !isOpen?(
            <div className='md:hidden vsm:flex flex-col gap-1 relative right-5' onClick={handleOpenNav}>
              <div className='w-6 h-1 bg-black'></div>
              <div className='w-6 h-1 bg-black'></div>
              <div className='w-6 h-1 bg-black'></div>
            </div>
          ):(
            <div className='relative top-0 w-7 h-1 right-5 md:hidden z-50' onClick={handleOpenNav}>
              <div className='w-7 h-1 bg-white rotate-45 absolute top-0 left-0'></div>
              <div className='w-7 h-1 bg-white -rotate-45 absolute top-0 right-0'></div>
            </div>
          )
        }
        <div
          className={`absolute top-0 left-0 w-screen h-screen bg-black flex flex-col px-40 py-20 items-center justify-start gap-10 self-center md:hidden z-30 ${
            isOpen ? "vsm:flex" : "vsm:hidden"
          }`}
        >
          {linkItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-full flex items-center justify-center"
              whileTap={{ backgroundColor: "gray" }}
            >
              <Link href={item.href} className="w-full text-white">
                {" "}
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
