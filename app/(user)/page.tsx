// Description: Home page for the website with a hero image and a brief description of myself.
// The page also contains a button that links to the contact page.
import Hero from "@/assets/hero.png";
import HomePageText from "@/assets/home-text.png";
import ActionButton from "@/components/ActionButton";
import { MotionDiv } from "@/components/MotionDiv";

import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";

import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // revalidate every 60 seconds

const Home = () => {
  return (
    <section className="gap-16 scroll-smooth bg-slate-200 py-20 sm:py-24 md:pb-0">
      {/* HERO IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 md:basis-3/5">
          {/* HEADINGS */}
          <MotionDiv duration={0.5} x={-50}>
            <div className="relative">
              <div className="after:absolute after:-left-8 after:-top-5 after:scale-x-[-1] after:content-bang">
                <div className="mt-4">
                  <h1 className="text-4xl font-bold leading-tight text-gray-200 sm:text-5xl">
                    Cameron Poole
                  </h1>
                  <p className="mt-2 text-lg font-bold tracking-wide text-primary-100 sm:text-xl">
                    Data Engineer · Data Analyst · Analytics Engineer
                  </p>
                </div>
              </div>
            </div>
            <p className="p-5 text-sm leading-relaxed">
              Philosophy graduate and MSc Data Science student, moving towards
              data analytics, analytics engineering and junior data engineering.
              I like turning messy information into something clearer, cleaner
              and more usable. Currently working with SQL and Python, and
              building a portfolio around data analysis, modelling, pipelines
              and data quality.
            </p>
          </MotionDiv>
          {/* CONTACT ME BUTTON */}
          <div className="relative mt-4">
            <MotionDiv
              duration={1}
              y={50}
              className="before:absolute before:-right-8 md:before:-right-24 lg:before:-right-8 after:absolute after:-top-5 after:left-52 after:content-bang sm:before:content-arrow"
            >
              <div>
                <Link href="/contact">
                  <ActionButton>Contact Me</ActionButton>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div className="md:z-10">
          <Image
            src={Hero.src}
            alt="Cameron Poole"
            className="md:mt-20"
            width={600}
            height={600}
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1060px) 45vw, 500px"
          />
        </div>
      </div>
      {/* NAME IMG + PROJECT PORTFOLIO TITLE IMG */}
      <div className="relative">
        <div className="before:absolute before:-bottom-20 before:right-5 before:z-20 md:before:content-portfoliotext">
          <div className="relative h-0 w-full md:h-24">
            <Image
              className="mt-14 hidden md:block"
              src={HomePageText.src}
              alt=""
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="-mt-10 md:mt-10">
        <Projects />
      </div>
      <div className="-mt-28">
        <About />
      </div>
      <div className="-mt-28 md:-mt-12">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
