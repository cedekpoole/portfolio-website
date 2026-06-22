// Description: About page
import AboutText from "@/assets/about-text.png";
import TechIcon from "@/components/TechIcon";
import ActionButton from "@/components/ActionButton";

import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";

const targetRoles = [
  "Data Analyst",
  "BI / Insight Analyst",
  "Analytics Engineering",
  "Junior Data Engineering",
];

const aboutSections = [
  {
    label: "Background",
    text: "I am a Philosophy graduate and MSc Data Science student with an affinity for problem solving. While I still very much enjoy analysing continental philosophy, my main focus is now within the world of data. I am interested in how messy, ambiguous information can be cleaned, structured, analysed and turned into something useful.",
  },
  {
    label: "Data focus",
    text: "Through my MSc, I have been developing skills in SQL, Python, statistics, machine learning and data analysis, while becoming increasingly drawn to the engineering side of data work. Before moving into data science, I completed an intensive Front-End Development certification and a 12-week Front-End Software Development Internship with Goodwright, a company that develops software for scientists.",
  },
  {
    label: "Looking for",
    text: "I am now building my data portfolio and looking for roles in London where I can work with real data, continue learning, and help turn complexity into clarity.",
  },
];

const About = () => {
  return (
    <section className="relative [overflow-x:clip] md:pb-12">
      <Image
        src="/waves.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[210px] top-[calc(42.75rem+30px)] z-0 hidden translate-x-1/2 rotate-[130deg] md:block"
        width={343}
        height={274}
      />
      <div className="mx-auto w-5/6 py-28">
        <div className="flex place-content-center">
          <MotionDiv className="relative z-10" duration={0.8} x={0}>
            {/* PAGE TITLE */}
            <div className="before:absolute before:-right-3 before:top-2 before:content-bang after:absolute after:-left-[110%] after:z-[-1] md:after:content-waves">
              <Image src={AboutText.src} alt="About" width={400} height={400} />
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
            <div className="mb-8 mt-4 flex flex-wrap gap-2 before:absolute before:-bottom-10 md:w-[60%] md:before:content-line2">
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-sm border border-primary-100/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-100"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="relative space-y-7 md:w-[60%]">
              {aboutSections.map((section) => (
                <div
                  key={section.label}
                  className="border-l-2 border-primary-100/70 pl-5"
                >
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-primary-100">
                    {section.label}
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-evenly">
              <Link href="/CV.pdf" download>
                <ActionButton>Download CV</ActionButton>
              </Link>
            </div>
          </MotionDiv>
          {/* SKILLS (TECH ICONS) */}
          <div className="mt-5">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.28em] text-primary-100">
              Toolkit
            </p>
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
