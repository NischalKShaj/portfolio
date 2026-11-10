import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { styles } from "../style";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";
import MoleculeCanvas from "../components/canvas/MoleculeCanvas";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const TypewriterCode = ({ lines }) => {
  const [typedCode, setTypedCode] = useState("");
  const code = lines.join("\n");

  useEffect(() => {
    setTypedCode("");
    let characterIndex = 0;
    const timer = window.setInterval(
      () => {
        characterIndex += 1;
        setTypedCode(code.slice(0, characterIndex));

        if (characterIndex >= code.length) {
          window.clearInterval(timer);
        }
      },
      60000 / (350 * 5),
    );

    return () => window.clearInterval(timer);
  }, [code]);

  return (
    <pre className="whitespace-pre-wrap break-words p-4 font-mono text-xs leading-6 text-[#a5f3fc]">
      {typedCode}
      <span className="animate-pulse text-[#56ccf2]" aria-hidden="true">
        ▍
      </span>
    </pre>
  );
};

TypewriterCode.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ServiceCard = ({
  title,
  description,
  technologies,
  projectExamples,
  codeLabel,
  codeSample,
  icon,
  index,
  selected,
  onSelect,
}) => {
  const detailsId = `service-details-${index}`;

  return (
    <motion.div
      layout
      variants={fadeIn("right", "spring", index * 0.15, 0.65)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className={`min-w-0 ${
        selected
          ? "basis-full"
          : "basis-full sm:basis-[calc(50%_-_0.875rem)] lg:basis-[calc(25%_-_1.3125rem)]"
      }`}
    >
      <button
        type="button"
        aria-expanded={selected}
        aria-controls={selected ? detailsId : undefined}
        onClick={onSelect}
        className={`group w-full green-pink-gradient p-[1px] rounded-[20px] text-left transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#56ccf2] ${
          selected
            ? "shadow-[0_0_30px_rgba(86,204,242,0.45)]"
            : "shadow-card hover:shadow-[0_0_18px_rgba(86,204,242,0.25)]"
        }`}
      >
        <span
          className={`bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex ${
            selected
              ? "flex-col items-center gap-6 lg:flex-row lg:items-start"
              : "justify-evenly items-center flex-col"
          }`}
        >
          <span
            className={`flex flex-col items-center ${
              selected ? "w-full lg:w-1/3" : ""
            }`}
          >
            <img
              src={icon}
              alt=""
              className={`h-16 w-16 object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                selected ? "rotate-12 scale-110" : ""
              }`}
            />
            <span className="text-white font-bold text-[20px] text-center">
              {title}
            </span>
            <span className="mt-2 inline-flex items-center gap-2 text-[#56ccf2] text-sm">
              See what I do
              <FaArrowRight
                aria-hidden="true"
                className={`transition-transform duration-300 group-hover:translate-x-1 ${
                  selected ? "rotate-90" : ""
                }`}
              />
            </span>
          </span>
          {selected && (
            <span
              id={detailsId}
              className="grid w-full gap-6 border-t border-white/10 pt-5 text-left lg:flex-1 lg:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
            >
              <span>
                <span className="block text-sm leading-6 text-secondary">
                  {description}
                </span>
                <span className="mt-4 block text-sm font-semibold text-white">
                  Technologies
                </span>
                <span className="mt-2 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-primary px-3 py-1 text-xs text-[#56ccf2]"
                    >
                      {technology}
                    </span>
                  ))}
                </span>
                <span className="mt-4 block text-sm font-semibold text-white">
                  Relevant projects
                </span>
                <span className="mt-2 block text-sm text-secondary">
                  {projectExamples.join(" · ")}
                </span>
              </span>
              <span className="block overflow-hidden rounded-xl border border-white/10 bg-[#080817]">
                <span className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs text-secondary">
                    {codeLabel}
                  </span>
                </span>
                <TypewriterCode lines={codeSample} />
              </span>
            </span>
          )}
        </span>
      </button>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectExamples: PropTypes.arrayOf(PropTypes.string).isRequired,
  codeLabel: PropTypes.string.isRequired,
  codeSample: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const About = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [serviceOrder, setServiceOrder] = useState(services);

  const selectService = (service) => {
    setServiceOrder((currentOrder) => {
      const selectedIndex = currentOrder.findIndex(
        (item) => item.title === service.title,
      );

      if (selectedIndex <= 0) return currentOrder;

      return [
        ...currentOrder.slice(selectedIndex),
        ...currentOrder.slice(0, selectedIndex),
      ];
    });
    setSelectedService((current) =>
      current === service.title ? null : service.title,
    );
  };

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

      <div className="mt-6 lg:-mt-10">
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
        <button
          onClick={() => {
            const message = encodeURIComponent(
              "Hi Nischal, I'm ready to invest in building something solid and scalable. I'd like to explore working with you.",
            );

            window.open(`https://wa.me/919544291856?text=${message}`, "_blank");
          }}
          className="text-secondary hover:text-white transition text-2xl"
        >
          <FaWhatsapp />
        </button>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-7">
        {serviceOrder.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            selected={selectedService === service.title}
            onSelect={() => selectService(service)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
