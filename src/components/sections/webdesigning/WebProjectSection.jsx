import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";

export default function WebProjectSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
  const projects = [
    {
      id: 1,
      image: "/images/webdesign/WebProject_1.png",
      delay: 0,
      offset: "lg:translate-y-0",
    },
    {
      id: 2,
      image: "/images/webdesign/WebProject_2.png",
      delay: 0.2,
      offset: "lg:-translate-y-12",
    },
    {
      id: 3,
      image: "/images/webdesign/WebProject_3.png",
      delay: 0.4,
      offset: "lg:translate-y-6",
    },
    {
      id: 4,
      image: "/images/webdesign/WebProject_4.png",
      delay: 0.6,
      offset: "lg:-translate-y-20",
    },
  ];

  return (
    <section className="md:overflow-visible overflow-hidden">
       {/* top left Small Patch */}
        <div
          className="absolute md:w-[400px] md:h-[500px] w-100 h-100
             top-0 left-0
             bg-[var(--color-patch)]
             opacity-100
             blur-[190px]
             pointer-events-none"
        />
      <section
        ref={sectionRef}
        className="relative flex items-center mt-5"
      >
        {/* RIGHT CONTOUR GRAPHIC */}
        <motion.div
          className="absolute right-20 wave-container"
          variants={waveVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.img
            src="/images/Wave.png"
            alt=""
            className="wave-animation w-100 h-auto"
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
          <div className="max-w-4xl mx-auto xl:ml-[240px] xl:mx-0 lg:pr-16">
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
                Our All Projects
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
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ display: "inline-block" }}
              >
                Web Design That Converts Visitors into Customers
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[#bdbdbd] text-xs sm:text-base md:text-[16px] leading-relaxed lg:ml-10 text-center xl:text-left px-4 lg:px-0"
              variants={textVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                Proin efficitur, mWe create tailored printing solutions designed
                to make your brand stand out and your message clear. From
                eye-catching designs to premium materials, every print is
                crafted to support your marketing goals, engage your audience,
                and drive real results for your business.auris vel condimentum
                pulvinar, velit orci consectetur ligula, eget egestas magna mi
                ut arcu.
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      </section>
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: project.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`group ${project.offset}`}
          >
            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-6 aspect-square flex items-center justify-center"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
