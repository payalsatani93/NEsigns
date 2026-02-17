import { ArrowDownRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutCompany() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const labelVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const decorLineVariants = {
    hidden: { opacity: 0, x: -50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const arrowVariants = {
    rest: { rotate: 0, scale: 1 },
    hover: {
      rotate: 45,
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative flex items-center  md:overflow-visible overflow-hidden">
      {/* Golden Background left side  Patch */}
      <div
        className="absolute md:w-[508px] md:h-[508px] w-100 h-100
             top-[0] left-[0]
             bg-[var(--color-patch)]
             opacity-100
             blur-[300px]
             overflow-visible
             pointer-events-none"
      />
      {/* LEFT DECORATIVE LINE */}
      <motion.div
        className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 
        w-8 sm:w-12 md:w-16 xl:w-auto opacity-50 md:opacity-100"
        variants={decorLineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src="/images/Hero/DecorLine.png"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* RIGHT CONTOUR GRAPHIC */}
      <motion.div
        className="absolute right-20 wave-container 
        opacity-50"
        variants={waveVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img
          src="/images/Wave.png"
          alt=""
          className="wave-animation w-100 h-100"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="containers relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-5xl mx-auto xl:ml-[640px] xl:mx-0 lg:pr-16">
          {/* Small label */}
          <motion.div
            className="flex items-center justify-center xl:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
            variants={labelVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.span
              className="text-xs sm:text-sm md:text-[15px] tracking-[0.2em] sm:tracking-[0.3em] text-[var(--color-gradient)] uppercase"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={
                isInView
                  ? { opacity: 1, letterSpacing: "0.3em" }
                  : { opacity: 0, letterSpacing: "0.1em" }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ABOUT COMPANY
            </motion.span>
            <motion.span
              className="text-[var(--color-gradient)] text-base sm:text-lg arrow-bounce"
              variants={arrowVariants}
            >
              <ArrowDownRight />
            </motion.span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-extrabold text-white mb-4 sm:mb-6 text-center xl:text-left px-4 lg:px-0"
            variants={headingVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ display: "inline-block" }}
            >
              Customized Printing to
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ display: "inline-block" }}
            >
              Achieve Your
            </motion.span>

            <motion.span
              className="text-[var(--color-primary)] ml-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                delay: 0.7,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              style={{ display: "inline-block" }}
            >
              Business Goals
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[#bdbdbd] text-sm sm:text-base md:text-[16px] leading-relaxed lg:ml-10 text-center xl:text-left px-4 lg:px-0"
            variants={textVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              We create tailored printing solutions designed to make your brand
              stand out and your message clear. From eye-catching designs to
              premium materials, every print is crafted to support your
              marketing goals, engage your audience, and drive real results for
              your business.
            </motion.span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
