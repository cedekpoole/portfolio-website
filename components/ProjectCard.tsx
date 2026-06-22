import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

type Props = {
  project: Project;
};

const getProjectTags = (project: Project) => {
  const text = `${project.title} ${project.description}`.toLowerCase();

  if (
    text.includes("tfl") ||
    text.includes("bigquery") ||
    text.includes("dbt")
  ) {
    return ["SQL", "BigQuery", "dbt"];
  }

  if (text.includes("statistical") || text.includes("regression")) {
    return ["R", "Regression", "Modelling"];
  }

  if (text.includes("support-2") || text.includes("quality of life")) {
    return ["R", "Clinical Data", "Analysis"];
  }

  if (text.includes("rna-seq") || text.includes("highcharts")) {
    return ["React", "Highcharts", "npm"];
  }

  if (text.includes("classical ml") || text.includes("random forest")) {
    return ["Python", "Machine Learning", "Models"];
  }

  if (
    text.includes("readme") ||
    text.includes("node.js") ||
    text.includes("inquirer")
  ) {
    return ["Node.js", "CLI", "npm"];
  }

  return ["Data", "Analysis"];
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const tags = getProjectTags(project);

  return (
    <MotionDiv className="z-20 flex" duration={0.8}>
      <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-300 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(190,49,68,0.18)]">
        {/* Accent bar */}
        <div className="h-[3px] w-full flex-shrink-0 bg-primary-100" />

        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            className="h-52 w-full object-cover"
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            width={650}
            height={650}
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
          />
        </div>

        {/* Body */}
        <div className="flex flex-grow flex-col p-5">
          <h5 className="mb-3 text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 [text-wrap:balance] group-hover:text-primary-100">
            {project.title}
          </h5>
          <p className="flex-grow text-sm leading-relaxed text-gray-100">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-gray-200/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-100 transition-colors duration-300 group-hover:border-primary-100/70 group-hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
            <Link
              href={project.liveProject}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-100 transition-colors duration-200 hover:text-primary-100"
            >
              View Project
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3 w-3"
              />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="text-gray-100 transition-all duration-200 hover:scale-110 hover:text-primary-100"
            >
              <FontAwesomeIcon aria-hidden="true" icon={faGithub} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
