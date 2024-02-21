import ProjectCard from '@/components/ProjectCard';
import React from 'react'
import { projectDetails} from '../../../data';

const Projects = () => {
  return (
    <div className='w-[100vw] pt-20'>
        <div className="w-[100vw] gap-20 flex flex-col">
            <div className='w-[100vw] flex justify-center items-center font-semibold text-6xl'>Projects</div>
                <div className="w-[100vw] flex flex-col justify-center items-center gap-20">
                  {projectDetails.map((project,index)=>(
                    <ProjectCard key={index} details={project}/>
                  ))}
                </div>           
        </div>
    </div>
  )
}

export default Projects;