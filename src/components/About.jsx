import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";
import MoleculeCanvas from "../components/canvas/MoleculeCanvas";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Corrected ServiceCard component
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-white font-bold text-[20px] text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> About Me.</h2>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[16px] max-w-xl leading-[28px]"
        >
          Hey! I’m Nischal — a full-stack developer with a strong interest in
          building scalable, well-structured web applications.
          <br />
          <br />
          I enjoy working across the stack, solving real problems, and turning
          ideas into reliable, efficient systems. I’m always curious, always
          learning, and excited by challenges that push me to grow.
          <br />
          <br />
          <a
            href={`#contact`}
            className="relative inline-block text-white transition-colors duration-300
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:h-[2px] after:w-0 after:bg-white
             after:transition-all after:duration-300
             hover:after:w-full"
          >
            Let’s build something meaningful.
          </a>
        </motion.p>

        <div className="w-full lg:w-1/2 h-[400px]">
          <MoleculeCanvas />
        </div>
      </div>

      <div className="-mt-10">
        <p className="italic">“Programs must be written for people to read.”</p>
        <p className="italic text-sm">— Harold Abelson</p>
      </div>
      <div className="mt-6 flex gap-6">
        <a
          href="https://www.linkedin.com/in/nischal-k-shaj-71407126b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white transition text-2xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/NischalKShaj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/_._nischal_._/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
