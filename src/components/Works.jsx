/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "./hoc";
import { github, live } from "../assets";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="group bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(128,77,238,0.4)]">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-image_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="live"
                  className="w-10 h-20 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-[#2f80ed] group-hover:to-[#56ccf2] group-hover:bg-clip-text group-hover:text-transparent group-hover:underline decoration-[#56ccf2]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A collection of projects showcasing my journey as a software
          developer. From building scalable backend systems to crafting
          intuitive user experiences, each project reflects my approach to
          solving real-world problems through clean code, thoughtful
          architecture, and modern technologies. Explore the work, technologies,
          and ideas behind each creation.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/NischalKShaj?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[#915eff]/60 px-6 py-3 font-medium text-white transition-colors duration-300 hover:border-[#56ccf2] hover:text-[#56ccf2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#56ccf2]"
        >
          More works on GitHub <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
