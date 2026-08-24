import { motion, useReducedMotion } from "motion/react";

import MagneticButton from "../ui/MagneticButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();

  const reducedVariants = {
    hidden: {
      opacity: 1,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={shouldReduceMotion ? undefined : containerVariants}
      className="max-w-5xl"
    >
      <motion.div
        variants={shouldReduceMotion ? reducedVariants : itemVariants}
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent">
          01 / Raymundo Chavez · Full-Stack Developer
        </p>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? reducedVariants : itemVariants}
      >
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Ideas que se convierten
          <span className="block text-muted">en software real.</span>
        </h1>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? reducedVariants : itemVariants}
      >
        <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Creo aplicaciones web de principio a fin, desde la experiencia de
          usuario hasta la lógica, los datos y su puesta en producción.
        </p>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? reducedVariants : itemVariants}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <MagneticButton strength={10}>
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-accent"
          >
            Ver mi trabajo
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </MagneticButton>

        <MagneticButton strength={8}>
          <a
            href="https://github.com/raychavezdev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-surface-light"
          >
            GitHub
            <span
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
}
