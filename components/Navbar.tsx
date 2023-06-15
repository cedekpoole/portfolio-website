'use client'

// Description: This file contains the navbar component
import useMediaQuery from "@/hooks/useMediaQuery";
// import CV from "@/assets/curriculum-vitae.pdf";
import Logo from "@/assets/logo.png";
import ActionButton from "@/components/ActionButton";
import { useEffect, useState } from "react";

// Import icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

// Import link and image component
import Link  from "next/link";
import Image from "next/image";


// Import framer-motion
import { motion } from "framer-motion";


// Navbar component with prop 'isTopOfPage' to determine if navbar should be transparent or not
const Navbar = () => {

    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);

      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const flexBetween = "flex items-center justify-between";
  const navLink =
    "hover:text-primary-100 focus:text-primary-100 transition duration-500";

  // use media query hook to determine if screen is above 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // State to determine if menu is toggled
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // if not top of page, set navbar background to gray-20
  const navbarBackground = isTopOfPage ? "" : "bg-gray-20 drop-shadow";

  return (
    <nav className="navbar">
      <div
        className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT HAND SIDE (LOGO) */}
            <Link href="/">
              <Image src={Logo} className="h-13 w-14" alt="Logo" />
            </Link>
            {/* RIGHT SIDE 
             if viewport is above 1060px, display links in the navbar 
             else show hamburger menu that displays links when clicked */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} text-md gap-8 text-gray-300`}>
                  <Link className={`${navLink}`} href="/">
                    Home
                  </Link>
                  <Link className={`${navLink}`} href="/projects">
                    Projects
                  </Link>
                  <Link className={`${navLink}`} href="/about">
                    About
                  </Link>
                  <Link className={`${navLink}`} href="/contact">
                    Contact Me
                  </Link>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link
                    href="https://discordapp.com/users/1003033771618086922"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6 text-gray-300 hover:text-primary-100"
                      icon={faDiscord}
                      fade
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/cam-edek-poole/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6 text-gray-300 hover:text-primary-100"
                      icon={faLinkedin}
                      fade
                    />
                  </Link>
                  <Link href="https://github.com/cedekpoole" target="_blank">
                    <FontAwesomeIcon
                      className="h-6 w-6 text-gray-300 hover:text-primary-100"
                      icon={faGithub}
                      fade
                    />
                  </Link>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: 100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <a href="" download>
                      <ActionButton>Download CV</ActionButton>
                    </a>
                  </motion.div>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-primary-100 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-slate-500 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white">
            <Link
              href="/"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className={`${navLink}`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className={`${navLink}`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className={`${navLink}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className={`${navLink}`}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
