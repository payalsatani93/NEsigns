import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
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

  const slideInRight = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const rotateIn = {
    hidden: { rotate: -180, scale: 0, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const fadeDownLeft = {
    hidden: { x: 80, y: -80, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden px-4 sm:py-10 py-5"
    >
      {/* Top Right Small Patch */}
      <div
        className="absolute md:w-[400px] md:h-[400px] w-50 h-50
             top-0 right-0
             bg-[var(--color-patch)]
             opacity-100
             rounded-full
             blur-[190px]
             pointer-events-none"
      />

      {/* Left Star Decoration */}
      <motion.div variants={fadeRight} className="absolute hero-star">
        <div>
          <img
            src="/images/Hero/Hero_Star.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="container py-10 relative z-10 mt-5 md:mt-10 lg:mt-10 mb-5 sm:mb-10 md:mb-20 lg:mb-35">
        <div className="max-w-full xl:max-w-5xl">
          <div>
            {/* Heading */}
            <motion.h1
              variants={slideInRight}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              PRICE <span className="text-yellow-500">GUARANTEE</span>
            </motion.h1>

            {/* Outlined Text */}
            <motion.h2
              variants={slideInLeft}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight"
              style={{
                WebkitTextStroke: "1px white",
                color: "transparent",
                textShadow: "none",
              }}
            >
              FOR ALL OF OUR SERVICES
            </motion.h2>

            {/* Description Text */}
            <motion.p
              variants={fadeUp}
              className="text-white text-xs sm:text-sm md:text-base lg:text-sm leading-relaxed tracking-wide max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl"
            >
              WE PLACE A GREAT VALUE ON THE CALIBER OF{" "}
              <span className="text-yellow-500 font-bold">OUR GOODS</span>. NE
              SIGNS BLENDS QUICK TURNAROUND TIME WITH A KEEN EYE TOWARDS{" "}
              <span className="text-yellow-500 font-bold">QUALITY</span>. FOR{" "}
              <span className="text-yellow-500 font-bold">COMPANIES</span> OF
              ALL SIZES, WE ARE COMMITTED TO OFFERING{" "}
              <span className="text-yellow-500 font-bold">PREMIUM</span>{" "}
              PRINTING, GRAPHIC DESIGN, AND SIGNAGE{" "}
              <span className="text-yellow-500 font-bold">SOLUTIONS</span>.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Top Right Decorative Shapes */}
      {/* <motion.div 
        variants={rotateIn}
        className="absolute hero-black-ring"
      >
        <div className="transition-all duration-900 delay-100">
          <img
            src="/images/Hero/Hero_BlackRing.png"
            alt=""
            className="w-full h-full object-contain rotate-slow"
          />
        </div>
      </motion.div> */}

      {/* Yellow Lines */}
      {/* <motion.div 
        variants={fadeLeft}
        className="absolute hero-yellow-lines transition-all duration-300"
      >
        <div>
          <img
            src="/images/Hero/Yellow_3line.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div> */}

      {/* Top Right Abstract White Shape */}
      <motion.div
        variants={fadeDownLeft}
        className="absolute hero-white-shape xl:block hidden"
      >
        <div>
          <img
            src="/images/Hero/White_Shap.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
