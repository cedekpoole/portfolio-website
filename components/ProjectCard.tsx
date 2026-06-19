import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <MotionDiv className="z-20 flex" duration={0.8}>
      <div className="group flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 bg-gray-300 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
        <Link href={project.liveProject} target="_blank" rel="noopener noreferrer" className="relative">
          <Image
            className="h-56 transform rounded-t-lg object-cover transition duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-40"
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            width={650}
            height={650}
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
          />
        </Link>
        <div className="flex flex-col justify-between p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary-100">
            {project.title}
          </h5>
          <p className="mb-3 text-sm font-normal text-gray-100">
            {project.description}
          </p>
          <div className="self-end">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <button className="pr-4">
                <FontAwesomeIcon
                  aria-hidden="true"
                  className="text-gray-100 transition duration-200 hover:scale-105 hover:text-primary-100"
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
