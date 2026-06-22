"use client";

import { FaPython, FaReact } from "react-icons/fa";
import { SiPostgresql, SiR, SiJupyter, SiPandas, SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { motion } from "framer-motion";

const icons = [
  { Icon: FaPython,      label: "Python"     },
  { Icon: SiPostgresql,  label: "SQL"        },
  { Icon: SiR,           label: "R"          },
  { Icon: SiJupyter,     label: "Jupyter"    },
  { Icon: SiPandas,      label: "Pandas"     },
  { Icon: BsGit,         label: "Git"        },
  { Icon: FaReact,       label: "React"      },
  { Icon: SiTypescript,  label: "TypeScript" },
  { Icon: SiJavascript,  label: "JavaScript" },
  { Icon: SiTailwindcss, label: "Tailwind"   },
];

const TechIcon = () => {
  return (
    <div className="mx-auto mt-7 flex max-w-[360px] flex-wrap justify-center gap-8 md:mx-0 md:w-[320px]">
      {icons.map(({ Icon, label }, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: index * 0.1 + 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="group flex flex-col items-center gap-2">
            <div className="relative before:absolute before:-bottom-4 before:left-1 before:content-line">
              <Icon className="h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-100" />
            </div>
            <span className="mt-5 text-[10px] font-medium uppercase tracking-widest text-gray-200 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
              {label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechIcon;
