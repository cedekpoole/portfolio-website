import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import urlFor from "@/sanity/lib/urlFor";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <MotionDiv
    className="z-20 flex"
    duration={0.8}
  >
    <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden group">
    <Link href={project.liveProject} target="_blank" className="relative">
    <img className="h-56 rounded-t-lg object-cover transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-50" src={urlFor(project.mainImage).url()} alt={project.title} width={650} height={650}/>
    </Link>
      <div className="flex flex-col justify-between p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
          {project.title}
        </h5>
        <p className="mb-3 text-sm font-normal text-gray-200">{project.description}</p>
        <div className="self-end">
          <Link href={project.github} target="_blank">
            <button className="pr-4">
              <FontAwesomeIcon
                className="duration-200 hover:scale-105 hover:text-primary-100"
                icon={faGithub}
                size="2x"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </MotionDiv>
  );
};

export default ProjectCard;
