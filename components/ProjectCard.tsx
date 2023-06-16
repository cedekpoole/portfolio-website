import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";
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
    x={25}
  >
    <div className="flex flex-col rounded-lg border border-slate-200 bg-slate-200 shadow-xl hover:scale-105">
    <Image className="h-56 rounded-t-lg object-cover" src={urlFor(project.mainImage).url()} alt={project.title} width={550} height={550}/>
      <div className="flex flex-col content-between p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
          {project.title}
        </h5>
        <p className="mb-5 text-sm font-normal text-gray-200">{project.description}</p>
        <div className="mt-auto flex justify-between">
          <Link href={project.liveProject} target="_blank">
            <button className="rounded-md bg-green-200 px-5 py-2 transition duration-500 hover:bg-primary-100 hover:text-white">
              Online
            </button>
          </Link>
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
