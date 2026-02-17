import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ================= COUNTER HOOK ================= */
function useCounter(target, start, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = target / (duration / 20);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);

    return () => {
      clearInterval(timer);
      setCount(0);
    };
  }, [target, duration, start]);

  return count;
}

/* ================= COMPONENT ================= */
export default function OurWorkExperience() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const yearCount = useCounter(25, startCount);
  const projectCount = useCounter(150, startCount);

  /* ===== OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          setStartCount(false);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

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

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20  md:overflow-visible overflow-hidden"
    >
      {/* Decorative Line */}
      <motion.div
        className="absolute top-20 sm:top-28 md:top-35 left-4 sm:left-6 md:left-8 w-16 sm:w-20 md:w-auto"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/images/OurWork/Vector_Line.png"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="containers"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title */}
        <motion.div className="mb-8 sm:mb-12 md:mb-16" variants={titleVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary)] font-black tracking-wider ml-0 sm:ml-8 md:ml-12 lg:ml-18">
            OUR WORK
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* LEFT COLUMN */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Image 1 with Hover Effect */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="rounded-2xl sm:rounded-3xl overflow-hidden relative"
                initial="rest"
                whileHover="hover"
              >
                <motion.img
                  src="/images/OurWork/image_01.png"
                  alt="NE Signs Business Card"
                  className="w-full h-auto object-cover"
                  variants={imageHoverVariants}
                />
                <motion.img
                  src="/images/Hero/Img-4.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={overlayVariants}
                />
              </motion.div>
            </motion.div>

            {/* 25 YEARS Counter */}
            <motion.div variants={itemVariants}>
              <div className="flex gap-3 sm:gap-4 md:gap-5 items-start justify-center md:justify-start">
                <motion.h3
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.5, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.5,
                  }}
                >
                  {yearCount}
                </motion.h3>
                <motion.div
                  className="flex flex-col justify-start mt-1 sm:mt-0 sm:-mt-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <p
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight ml-1 sm:ml-2 md:ml-3"
                    style={{
                      WebkitTextStroke: "1px rgba(139, 115, 85, 0.6)",
                      color: "transparent",
                    }}
                  >
                    Y E A R
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[var(--color-primary)] font-black leading-tight whitespace-nowrap">
                    E X P E R I E N C E
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="md:col-span-6 lg:col-span-3">
            <motion.div variants={itemVariants}>
              <motion.div
                className="rounded-2xl sm:rounded-3xl overflow-hidden relative h-64 sm:h-80 md:h-full min-h-[300px]"
                initial="rest"
                whileHover="hover"
              >
                <motion.img
                  src="/images/OurWork/image_02.png"
                  alt="NE Signs Mug"
                  className="w-full h-full object-cover"
                  variants={imageHoverVariants}
                />
                <motion.img
                  src="/images/Hero/Img-3.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={overlayVariants}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-6 lg:col-span-4 space-y-8 text-center">
            {/* 150+ PROJECTS Counter */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-primary)] font-bold leading-none"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.8,
                }}
              >
                {projectCount}+
              </motion.h3>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1, duration: 0.6 }}
              >
                PROJECT DONE
              </motion.p>
            </motion.div>

            {/* Image 3 */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="rounded-2xl sm:rounded-3xl overflow-hidden relative h-48 sm:h-64 md:h-full min-h-[200px]"
                initial="rest"
                whileHover="hover"
              >
                <motion.img
                  src="/images/OurWork/image_03.png"
                  alt="NE Signs Rollup Banner"
                  className="w-full h-full object-cover"
                  variants={imageHoverVariants}
                />
                <motion.img
                  src="/images/Hero/Img-5.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={overlayVariants}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
            Over The Years, We've Turned Countless Ideas Into High-Quality
            Prints That Leave A Lasting Impression. From Small Personal Projects
            To Large Corporate Campaigns, Our Team Blends Creativity With
            Precision To Deliver Outstanding Results Every Time.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
