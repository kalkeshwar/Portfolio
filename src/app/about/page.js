"use client";
import React, { useState } from "react";
import Skills from "@/components/Skills";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Education } from "../../../data";
import TransitionEffect from "@/components/TransitionEffect";

const MobileSkillBox = ({ name }) => {
  return <div className="p-1 px-2 bg-black text-white rounded-md">{name}</div>;
};

const About = () => {
  const [ind, setInd] = useState(0);

  const handleIndex = (index) => {
    setInd(index);
  };

  return (
    <>
      <TransitionEffect />
      <div className="bg-gradient-to-b from-blue-100 to-red-100 flex flex-col">
        <Navbar />
        <div className="w-[100vw] h-[90vh] flex flex-col my-10">
          <div className="font-bold text-6xl w-full text-center">About</div>
          <div className="flex flex-row w-full h-full justify-center items-center">
            <motion.div
              className="flex flex-col px-10 gap-10 md:w-1/2 vsm:w-full"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.h2 className="text-xl font-serif font-bold">
                A Little more about Me...
              </motion.h2>
              <motion.div className="font-serif md:text-xl">
                Hello! I&apos;m Kalkeshwar Yamsani, a final-year Computer
                Science student at Sreenidhi Institutes of Science and
                Technology, deeply passionate about Web development. Constantly
                learning new technologies, my strengths include attention to
                detail, creativity, and emotional intelligence. I thrive on
                challenges, constantly seeking ways to push the boundaries of
                what&apos;s possible in the digital realm. While I&apos;m a
                perpetual learner with a keen eye for detail, my creative
                approach and emotional intelligence are key assets. Join me on
                this exciting journey where curiosity meets capability!
              </motion.div>
            </motion.div>
            {/* profilecard */}
            <div className=" md:w-1/2 h-full p-10 md:flex justify-center items-center vsm:hidden">
              <motion.div
                className="relative w-[100%] h-[100%] p-24 "
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/totalicon.svg"
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="w-full flex items-center justify-center">
          <div className=" border-black border-2 w-[80%] rounded-lg p-5 flex flex-col gap-5 shadow-black">
            <div className="text-4xl font-bold underline">Education</div>
            <div className="w-full flex flex-row items-center md:gap-12 vsm:gap-2">
              {Education.map((item, index) => (
                <div
                  className={`${
                    index === ind
                      ? "bg-black text-white rounded-md p-2 font-bold"
                      : "text-black font-bold"
                  } cursor-pointer text-sm`}
                  key={index}
                  onClick={() => handleIndex(index)}
                >
                  {item.Course}
                </div>
              ))}
            </div>
            <div className="bg-black w-full h-[1px]"></div>
            <div>
              {Education[ind].Institution && (
                <div>
                  <span className="font-bold">Institution : </span>{" "}
                  <span className="font-mono">
                    {Education[ind].Institution}
                  </span>
                </div>
              )}
              {Education[ind].Course && (
                <div>
                  <span className="font-bold">Course : </span>{" "}
                  <span className="font-mono">{Education[ind].Course}</span>
                </div>
              )}
              {Education[ind].Stream && (
                <div>
                  <span className="font-bold">Stream : </span>{" "}
                  <span className="font-mono">{Education[ind].Stream}</span>
                </div>
              )}
              {Education[ind].year && (
                <div>
                  <span className="font-bold">Year : </span>{" "}
                  <span className="font-mono">{Education[ind].year}</span>
                </div>
              )}
              {Education[ind].place && (
                <div>
                  <span className="font-bold">Location : </span>{" "}
                  <span className="font-mono">{Education[ind].place}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="vsm:hidden sm:flex md:flex">
          <Skills />
        </div>
        <div className="w-full flex md:hidden p-10">
          <div className="flex flex-row gap-5 flex-wrap">
            <MobileSkillBox name="javascript" />
            <MobileSkillBox name="ReactJs" />
            <MobileSkillBox name="NodeJs" />
            <MobileSkillBox name="MongoDB" />
            <MobileSkillBox name="Python" />
            <MobileSkillBox name="HTML" />
            <MobileSkillBox name="Tailwind CSS" />
            <MobileSkillBox name="Data Structures and Algorithm" />
            <MobileSkillBox name="Docker" />
            <MobileSkillBox name="NextJs" />
            <MobileSkillBox name="Redux" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;