import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./Icon";

const ProjectCard = (props) => {
  const { name, websiteUrl, description, techUsed, imageUrl,githubUrl } = props.details;

  return (
    <div className="">
      <div className=" md:w-[40vw] vsm:w-[100vw] relative">
        <div className="border-2 absolute rounded-md border-black p-2 md:w-[98.5%] vsm:w-[90%] md:h-[50vh] xl:h-[60vh] vsm:h-[60vh] flex flex-col z-[3] bg-gradient-to-b from-blue-100 to-red-100">
          {/* {imagesection} */}
          <div className="w-full relative md:h-[50%] vsm:h-[30vh] rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt=""
              layout="fill"
              objectFit="cover"
              className="md:object-contain"
            />
          </div>
          {/* {info Section} */}
          <div className="flex flex-col justify-center gap-5 md:my-5">
            <div className="flex flex-col">
              <div className="font-bold vsm:text-md md:text-[1rem]">{name}</div>
              <div className="w-full flex flex-row md:gap-5 vsm:gap-1 flex-wrap">
                {techUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="vsm:text-sm md:text-md font-medium font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="vsm:text-sm md:text-[.9rem] flex flex-wrap flex-row font-medium">
              {description}
            </div>
            <div className="flex flex-row gap-20 justify-between">
              <Link href={githubUrl} target="__blank"><GithubIcon className={`w-[30px]`} /></Link>
              <Link
                href={websiteUrl}
                target="__blank"
                className="bg-black text-white p-1 rounded-md vsm:text-sm md:text-md"
              >
                Website
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black w-[101.5%] vsm:w-[92.4%] md:w-[100.2%] vsm:h-[61vh] md:h-[50.6vh] xl:h-[61vh] top-1 left-1 z-[2] rounded-2xl "></div>
      </div>
    </div>
  );
};

export default ProjectCard;
