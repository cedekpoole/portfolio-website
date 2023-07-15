// Description: About page
import AboutText from "@/assets/about-text.png";
import Summary from "@/assets/summary-text.png";
import TechIcon from "@/components/TechIcon";
import ActionButton from "@/components/ActionButton";

import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";

const About = () => {
  return (
    <section className="md:pb-12">
      <div className="mx-auto w-5/6 py-28">
        <div className="flex place-content-center">
          <MotionDiv className="relative z-10" duration={0.8} x={0}>
            {/* PAGE TITLE */}
            <div className="before:absolute before:-right-3 before:top-2 before:content-bang after:absolute after:-left-[110%] after:z-[-1] md:after:content-waves">
              <Image src={AboutText} alt="About Page Title" width={400} />
            </div>
          </MotionDiv>
        </div>
        {/* CONTAINER */}
        <div className="justify-between md:flex">
          {/* SUMMARY SECTION */}
          <MotionDiv
            className="relative z-20 flex-col items-end justify-end p-10 md:flex"
            duration={0.8}
            y={100}
          >
            <div className="flex before:absolute before:-bottom-10 md:w-[60%] mx-auto md:before:content-line2">
              <Image src={Summary} alt="Summary" className="mb-3 mx-auto" />
            </div>
            <p className="mb-3 text-gray-300 md:w-[60%]">
              React.js fanatic who is currently building projects using
              TailwindCSS and TypeScript; interested in also learning more about
              back-end development. This website was built using Next.js, and Sanity io - a headless CMS -  has been used as means to easily update project data!
            </p>
            <p className="mb-7 md:w-[60%] md:p-3">
              Completed an intensive 16 week front-end web development
              certification provided by Trilogy Education, achieving an overall
              score of 100%. Check out{" "}
              <Link
                href="https://webdev-blog-cedekpoole.vercel.app"
                target="_blank"
                className="underline decoration-primary-100 transition duration-200 hover:text-primary-100"
              >
                my blog
              </Link>{" "}
              to see what I'm currently working on.
            </p>
            <div className="flex justify-evenly">
              <Link href="/CV.pdf" download>
                <ActionButton>Download CV</ActionButton>
              </Link>
            </div>
          </MotionDiv>
          {/* SKILLS (TECH ICONS) */}
          <div className="mt-5">
            <TechIcon />
          </div>
        </div>
      </div>
      {/* DOWNLOAD CV ARROW */}
      <div className="relative z-10">
        <div className="before:absolute before:-top-28 before:right-[15%] before:z-[-1] md:before:content-arrow2"></div>
      </div>
    </section>
  );
};

export default About;
