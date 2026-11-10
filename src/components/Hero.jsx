import { useEffect } from "react";
import { motion } from "framer-motion";
import useTyped from "./hooks/useTyped";
import { styles } from "../style";
import ApiLifecycleDiagram from "./ApiLifecycle";

const Hero = () => {
  const typedText = useTyped(
    [
      "scalable backend systems",
      "real-time applications",
      "production-ready products",
      "high-performance APIs",
    ],
    120,
    80,
  );

  useEffect(() => {
    if (window.innerWidth >= 1024) return undefined;

    const timer = window.setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection || window.scrollY > 0) return;

      window.history.replaceState(null, "", "#about");
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative mx-auto min-h-screen w-full">
      <div
        className={`mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-10 ${styles.paddingX} pb-28 pt-32 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12`}
      >
        <div className="relative z-10 w-full">
          <div className="flex items-start gap-5">
            <div className="mt-4 flex shrink-0 flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-[#915EFF]" />
              <div className="h-28 w-1 violet-gradient sm:h-40 lg:h-56" />
            </div>
            <div className="min-w-0">
              <h1 className="mt-2 text-[clamp(2.75rem,5.5vw,5rem)] font-black leading-[1.08] text-white">
                Hi, I&apos;m <span className="text-[#915eff]">Nischal</span>
              </h1>
              <p className="mt-4 min-h-[2.5em] text-xl font-medium leading-relaxed text-white-100 sm:text-2xl">
                I build <span className="text-[#915eff]">{typedText}</span>
              </p>
            </div>
          </div>
          <p className="ml-9 mt-5 max-w-md text-sm leading-6 text-secondary sm:text-base">
            Full-stack developer building dependable digital products, from
            thoughtful interfaces to scalable backend systems.
          </p>
        </div>
        <div className="relative z-10 hidden w-full lg:block">
          <ApiLifecycleDiagram />
        </div>
      </div>

      <div className="absolute bottom-5 hidden w-full items-center justify-center lg:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
