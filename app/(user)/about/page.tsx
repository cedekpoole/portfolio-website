// Description: About page
import AboutText from "@/assets/about-text.png";
import Summary from "@/assets/summary-text.png";
import TechIcon from "@/components/TechIcon";
import ActionButton from "@/components/ActionButton";

import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";

const About = () => {
  return (
    <section className="md:pb-12">
      <div className="mx-auto w-5/6 py-28">
        <div className="flex place-content-center">
          <MotionDiv className="relative z-10" duration={0.8} x={0}>
            {/* PAGE TITLE */}
            <div className="before:absolute before:-right-3 before:top-2 before:content-bang after:absolute after:-left-[110%] after:z-[-1] md:after:content-waves">
              <Image
                src={AboutText.src}
                alt="About Page Title"
                width={400}
                height={400}
              />
            </div>
          </MotionDiv>
        </div>
        {/* CONTAINER */}
        <div className="justify-between md:flex">
          {/* SUMMARY SECTION */}
          <MotionDiv
            className="relative z-20 flex-col items-end justify-end md:flex md:p-10"
            duration={0.8}
            y={100}
          >
            <div className="mx-auto flex before:absolute before:-bottom-10 md:w-[60%] md:before:content-line2">
              <Image
                src={Summary.src}
                alt="Summary"
                className="mx-auto mb-3 mt-3 md:mt-0"
                width={100}
                height={100}
              />
            </div>
            <p className="mb-3 text-gray-300 md:w-[60%]">
              Graduated from Trilogy Education’s Front-End Web Development
              Program, achieving an overall score of 100%. Also completed an
              internship with Goodwright, focusing on data visualisation for
              scientific applications, utilising technologies such as React.js,
              TailwindCSS and Highcharts.
            </p>
            <p className="mb-7 md:w-[60%] md:p-3">
              Currently learning the MERN stack as means to learn more about
              backend development (Node.js, Express and MongoDB). My next
              project will be a Full-Stack Philosophical Debate and Learning
              platform named "DialectiQ". Check out{" "}
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
