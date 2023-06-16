"use client";

import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiJquery,
  SiFirebase,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

const icons = [
  SiJavascript,
  AiFillHtml5,
  FaReact,
  SiBootstrap,
  SiTypescript,
  FaCss3Alt,
  SiJquery,
  SiFirebase,
  SiTailwindcss,
  FaNodeJs,
  FaNpm,
  BsGit,
];

import { motion } from "framer-motion";

// Create an icon component with an animation effect for the about page
const TechIcon = () => {
  return (
    <div className="mx-auto mt-7 flex max-w-[400px] flex-wrap justify-center gap-14 md:mx-0 md:w-[300px]">
      {icons.map((Icon, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: `${index * 0.1 + 0.5}` }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <div className="before:absolute before:-bottom-4 before:left-1 before:content-line">
              {
                <Icon className="h-10 w-10 duration-500 hover:scale-[1.02] hover:text-primary-100" />
              }
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechIcon;
