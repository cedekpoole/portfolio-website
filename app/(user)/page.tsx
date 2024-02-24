// Description: Home page for the website with a hero image and a brief description of myself.
// The page also contains a button that links to the contact page.
import Hero from "@/assets/hero.png";
import HomePageText from "@/assets/home-text.png";
import HomeTitle from "@/assets/home-title.png";
import ActionButton from "@/components/ActionButton";
import { MotionDiv } from "@/components/MotionDiv";

import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";

// import link and image next component
import Link  from "next/link";

export const revalidate = 60; // revalidate every 60 seconds

const Home = () => {
  return (
    <section className="gap-16 bg-slate-200 py-32 md:py-24 md:pb-0 scroll-smooth">
      {/* HERO IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="md:basis:-3/5 z-10">
          {/* HEADINGS */}
          <MotionDiv
          duration={0.5}
          x={-50}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 after:absolute after:-left-8 after:-top-5 after:scale-x-[-1] after:content-bang md:before:content-webdevtext">
                <img className="mt-4" src={HomeTitle.src} alt="Homepage Title" />
              </div>
            </div>
            <p className="p-5 text-sm">
              A front-end web developer and philosophy graduate with an affinity
              for problem solving. A quick and adaptable learner for all things
              tech related, with a passion in creating engaging websites.
              Available for both freelance and full-time opportunities :)
            </p>
          </MotionDiv>
          {/* CONTACT ME BUTTON */}
          <div className="relative mt-4">
            <MotionDiv duration={1} y={50} className="before:absolute before:-right-8 after:absolute after:-top-5 after:left-52 after:content-bang sm:before:content-arrow">
              <div
              >
                <Link href="/contact">
                  <ActionButton>Contact Me</ActionButton>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div className="md:z-10">
          <img src={Hero.src} alt="Profile Image" className="md:mt-20" />
        </div>
      </div>
      {/* NAME IMG + PROJECT PORTFOLIO TITLE IMG */}
      <div className="relative">
        <div className="before:absolute before:-bottom-10 before:right-5 md:before:content-portfoliotext before:z-20">
          <img className="mt-14" src={HomePageText.src} alt="Homepage Text" />
        </div>
      </div>
      <div className="-mt-10 md:mt-0">
        <Projects />
      </div>
      <div className="-mt-20">
        <About/>
      </div>
      <div className="-mt-28 md:-mt-15">
      <Contact />
      </div>
    </section>
  );
};

export default Home;
