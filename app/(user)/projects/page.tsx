// Description: This is the main file for the projects page.
// It imports the project data from the json file and renders the project cards.
import ProjectText from "@/assets/projectText.png";
// import framer-motion
import { MotionDiv } from "@/components/MotionDiv";

import { projects } from "@/sanity/lib/projectData";

import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

// Create a function that returns the JSX for the projects page
const Projects = () => {
  return (
    <section className="bg-slate-200">
      <div className="mx-auto min-h-full w-5/6 pb-20 pt-32">
        {/* Create a div that contains the title of the page */}
        <MotionDiv
          className="mb-12 flex place-content-center md:mb-16"
          duration={0.8}
          x={-100}
        >
          <div className="relative z-10">
            <div className=" after:top-15 before:absolute before:-right-8 before:-top-5 before:content-bang after:absolute after:-left-80 after:z-[-1] after:content-drops">
              <Image
                src={ProjectText.src}
                alt="Projects"
                width={700}
                height={500}
              />
            </div>
          </div>
        </MotionDiv>
        {/* Map through the project data and render a project card for each project */}
        <div className="z-30 grid place-content-center justify-items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
