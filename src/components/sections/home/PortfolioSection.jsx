import { ArrowDownRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: "/images/Hero/Img_6.png",
      hoverImage: "/images/Hero/Img_7.png",
      brand: "Brand . Name",
      title: "BROCHURES PRINTING",
      size: "normal",
    },
    {
      id: 2,
      image: "/images/Hero/Img-3.png",
      hoverImage: "/images/Hero/Img-1.png",
      brand: "Brand . Name",
      title: "BUSINESS CARDS",
      size: "large",
    },
    {
      id: 3,
      image: "/images/Hero/Img-2.png",
      hoverImage: "/images/Hero/Img-5.png",
      brand: "Brand . Name",
      title: "DOOR HANGERS",
      size: "large",
    },
    {
      id: 4,
      image: "/images/Hero/Img-4.png",
      hoverImage: "/images/Hero/Img-1.png",
      brand: "Brand . Name",
      title: "MAGAZINES PRINTING",
      size: "normal",
    },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    rest: {
      scale: 1,
      filter: "brightness(1)",
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
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

  const arrowVariants = {
    rest: {
      rotate: 0,
      scale: 1,
      x: 0,
      y: 0,
    },
    hover: {
      rotate: 45,
      scale: 1.2,
      x: 5,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    rest: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      borderColor: "var(--color-muted)",
    },
    hover: {
      scale: 1.05,
      borderColor: "var(--color-gradient)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const arrowIconVariants = {
    rest: { rotate: 0 },
    hover: {
      rotate: 45,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative md:py-10 sm:py-5 py-0  md:overflow-visible overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="container"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span
            className="text-yellow-500 text-sm tracking-widest"
            initial={{ letterSpacing: "0.05em" }}
            animate={{ letterSpacing: "0.15em" }}
            transition={{ duration: 0.8 }}
          >
            PORTFOLIO
          </motion.span>
          <motion.span
            className="text-yellow-500 text-lg arrow-bounce"
            variants={arrowVariants}
          >
            <ArrowDownRight />
          </motion.span>
        </motion.div>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Our latest Awesome
          <br />
          Designs
        </motion.h2>
      </motion.div>

      <motion.div
        className="containers"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Item 1 - Normal Size */}
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group cursor-pointer xl:mb-35 lg:mb-20 md:mb-15 mb-10"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden aspect-[16/11] ">
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <img
                    src={portfolioItems[0].image}
                    alt={portfolioItems[0].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <AnimatePresence>
                  {hoveredCard === 1 && (
                    <motion.div
                      className="absolute inset-0"
                      variants={overlayVariants}
                      initial="rest"
                      animate="hover"
                      exit="rest"
                    >
                      <img
                        src={portfolioItems[0].hoverImage}
                        alt={portfolioItems[0].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-400 text-xs mb-1">
                      {portfolioItems[0].brand}
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      {portfolioItems[0].title}
                    </h3>
                  </motion.div>

                  <motion.div className="w-10 h-10 flex items-center justify-center arrow-bounce">
                    <img src="/images/ArrowUpRight.png" alt="Arrow" />
                  </motion.div>
                </div>
                <motion.div className="border-t border-gray-800" />
              </div>
            </motion.div>

            {/* Item 3 - Large Size */}
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden aspect-[16/13]">
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <img
                    src={portfolioItems[2].image}
                    alt={portfolioItems[2].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <AnimatePresence>
                  {hoveredCard === 3 && (
                    <motion.div
                      className="absolute inset-0"
                      variants={overlayVariants}
                      initial="rest"
                      animate="hover"
                      exit="rest"
                    >
                      <img
                        src={portfolioItems[2].hoverImage}
                        alt={portfolioItems[2].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-400 text-xs mb-1">
                      {portfolioItems[2].brand}
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      {portfolioItems[2].title}
                    </h3>
                  </motion.div>

                  <motion.div className="w-10 h-10 flex items-center justify-center arrow-bounce">
                    <img src="/images/ArrowUpRight.png" alt="Arrow" />
                  </motion.div>
                </div>
                <motion.div className="border-t border-gray-800" />
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 mb-10">
            {/* Item 2 - Large Size */}
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden aspect-[16/13] ">
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <img
                    src={portfolioItems[1].image}
                    alt={portfolioItems[1].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <AnimatePresence>
                  {hoveredCard === 2 && (
                    <motion.div
                      className="absolute inset-0"
                      variants={overlayVariants}
                      initial="rest"
                      animate="hover"
                      exit="rest"
                    >
                      <img
                        src={portfolioItems[1].hoverImage}
                        alt={portfolioItems[1].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-10 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-400 text-xs mb-1">
                      {portfolioItems[1].brand}
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      {portfolioItems[1].title}
                    </h3>
                  </motion.div>

                  <motion.div className="w-10 h-10 flex items-center justify-center arrow-bounce">
                    <img src="/images/ArrowUpRight.png" alt="Arrow" />
                  </motion.div>
                </div>
                <motion.div className="border-t border-gray-800" />
              </div>
            </motion.div>

            {/* Item 4 - Normal Size */}
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden aspect-[16/11]">
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <img
                    src={portfolioItems[3].image}
                    alt={portfolioItems[3].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <AnimatePresence>
                  {hoveredCard === 4 && (
                    <motion.div
                      className="absolute inset-0"
                      variants={overlayVariants}
                      initial="rest"
                      animate="hover"
                      exit="rest"
                    >
                      <img
                        src={portfolioItems[3].hoverImage}
                        alt={portfolioItems[3].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-400 text-xs mb-1">
                      {portfolioItems[3].brand}
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      {portfolioItems[3].title}
                    </h3>
                  </motion.div>

                  <motion.div className="w-10 h-10 flex items-center justify-center arrow-bounce">
                    <img src="/images/ArrowUpRight.png" alt="Arrow" />
                  </motion.div>
                </div>
                <motion.div className="border-t border-gray-800" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center mb-5 md:mt-5 mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="group flex items-center gap-3 px-8 py-4 border border-[var(--color-muted)] rounded-full text-[var(--color-gradient)]"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
          >
            <span>See all projects</span>
            <motion.span className="text-[var(--color-tertiary)] arrow-bounce">
              <ArrowDownRight />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
