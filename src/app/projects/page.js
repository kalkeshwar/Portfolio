import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { projectDetails } from "../../../data";
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/Navbar";

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <div className="w-screen pt-20 bg-gradient-to-b from-blue-100 to-red-100 min-h-[100vh]">
        <div className="w-[100vw] gap-20 flex flex-col">
          <div className="w-[100vw] flex justify-center items-center font-semibold text-6xl">
            Projects
          </div>
          <div className="w-[100vw] flex vsm:flex-col md:flex-row justify-center items-center gap-20 flex-wrap p-10 vsm:p-5">
            {projectDetails.map((project, index) => (
              <ProjectCard key={index} details={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
