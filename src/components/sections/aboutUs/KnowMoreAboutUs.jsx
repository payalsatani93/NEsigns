import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  Shield,
  TrendingUp,
} from "lucide-react";

const KnowMoreAboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const features = [
    {
      id: 1,
      number: "01",
      icon: Briefcase,
      title: "Solutions for all business sizes",
      description:
        "Quick solutions without the hassle, designed to save you time and effort",
      image: "/images/about/01.png",
    },
    {
      id: 2,
      number: "02",
      icon: Shield,
      title: "No compromise on quality",
      description: "Suspendisse sit amet neque euismod, convallis quam eget.",
      image: "/images/about/02.png",
    },
    {
      id: 3,
      number: "03",
      icon: TrendingUp,
      title: "Fast and easy service",
      description:
        "Quick solutions without the hassle, designed to save you time and effort",
      image: "/images/about/03.png",
    },
  ];

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
  const labelVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-10 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          variants={labelVariants}
        >
          <motion.span
            className="text-yellow-500 text-sm tracking-widest"
            initial={{ letterSpacing: "0.05em" }}
            animate={{ letterSpacing: "0.15em" }}
            transition={{ duration: 0.8 }}
          >
            Who we are
          </motion.span>
          <motion.div>
            <ArrowDownRight className="text-yellow-500 w-5 h-5 arrow-bounce" />
          </motion.div>
        </motion.div>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Know more 
          <span className="text-[var(--color-gradient)]"> about us</span>
          
        </motion.h2>
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="h-full"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="h-full overflow-hidden shadow-2xl relative"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "350px",
                }}
              >
                {/* Content with black background on the right */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[var(--color-graybg)] p-6 flex flex-col">
                  {/* Number */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl font-black"
                    style={{
                      WebkitTextStroke: "2px var(--color-muted)",
                      color: "transparent",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {feature.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="w-fit mb-6 mt-10">
                    <feature.icon className="w-12 h-12 text-[var(--color-gradient)]" />
                  </div>

                  <div>
                    <h3 className="text-lg text-white mb-4">{feature.title}</h3>
                  </div>

                  <div>
                    <p className="text-[var(--color-muted)] text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow (ONLY HOVER EFFECT) */}
                  <motion.div
                    className="mt-6"
                    initial={false}
                    animate={{
                      opacity: hoveredCard === feature.id ? 1 : 0,
                      y: hoveredCard === feature.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="bg-[var(--color-tertiary)] rounded-full p-3 w-fit">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowMoreAboutUs;
