import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Printing",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "02",
    title: "Signage",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "03",
    title: "Direct Mailing",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "04",
    title: "Web Designing",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "05",
    title: "SEO",
    description: "I have been a loyal customer of this auto parts.",
  },
];

const cards = [
  {
    service: "Printing",
    category: "Printing",
    title: "NE SIGNS",
    subtitle: "Companies",
    image: "/images/Hero/Img-5.png",
    link: "/services/printing",
  },
  {
    service: "Printing",
    category: "Brand, Photography",
    title: "CLASSIC CONCRETE",
    subtitle: "PLANTERS",
    image: "/images/OurWork/Img-01.png",
    link: "/services/printing",
  },
  {
    service: "Printing",
    category: "Brand, Photography",
    title: "CLASSIC CONCRETE",
    subtitle: "PLANTERS",
    image: "/images/Hero/Img-1.png",
    link: "/services/printing",
  },
  {
    service: "Printing",
    category: "Interior Design",
    title: "MODERN SPACES",
    subtitle: "Studio",
    image: "/images/OurWork/image_02.png",
    link: "/categories/interior-sign",
  },
  {
    service: "Printing",
    category: "Signage",
    title: "DIGITAL DISPLAYS",
    subtitle: "Tech Hub",
    image: "/images/OurWork/Img-02.png",
    link: "/services/signage",
  },
  {
    service: "Printing",
    category: "Exhibitions",
    title: "EVENT BOOTHS",
    subtitle: "Global Expo",
    image: "/images/Hero/Img-2.png",
    link: "/services/signage",
  },
  {
    service: "Signage",
    category: "Signage",
    title: "DIGITAL DISPLAYS",
    subtitle: "Tech Hub",
    image: "/images/OurWork/image_03.png",
    link: "/services/signage",
  },
  {
    service: "Direct Mailing",
    category: "Campaign",
    title: "MAIL BLAST",
    subtitle: "Marketing",
    image: "/images/OurWork/Img-03.png",
    link: "/services/direct-mailing",
  },
  {
    service: "Web Designing",
    category: "UI / UX",
    title: "MODERN SPACES",
    subtitle: "Studio",
    image: "/images/Hero/Img-3.png",
    link: "/services/web-design",
  },
  {
    service: "SEO",
    category: "Optimization",
    title: "EVENT BOOTHS",
    subtitle: "Global Expo",
    image: "/images/Hero/Img-4.png",
    link: "/services/seo",
  },
];

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeService, setActiveService] = useState("Printing");

  const filteredCards = cards.filter((card) => card.service === activeService);

  return (
    <>
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="relative container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6 sm:mb-8 text-[var(--color-gradient)]"
            >
              <span className="text-sm sm:text-base tracking-wider">
                VIEW OUR WORK
              </span>
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 arrow-bounce" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 max-w-6xl"
            >
              Get your Printing Product in Best Price.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl leading-relaxed"
            >
              We offer a complete range of printing solutions to meet every need
              - from business cards, brochures, and banners to t-shirt prints,
              calendars, and custom canvas. Whether it's carryout menus,
              carbonless forms, or simple copy services, our prints are sharp,
              vibrant, and tailored to your vision, ensuring your brand stands
              out everywhere.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveService(service.title)}
                className={`group relative flex flex-col items-center text-center cursor-pointer
                  ${activeService === service.title ? "scale-[1.05]" : ""}
                `}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-50 lg:h-50 xl:w-60 xl:h-60 mb-6 sm:mb-8"
                >
                  {/* Golden Arc Ring */}
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 180 : 0,
                      opacity: hoveredIndex === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        conic-gradient(
                          from 220deg,
                          transparent 0deg,
                          transparent 260deg,
                          rgba(217,119,6,0.9) 300deg,
                          rgba(217,119,6,0.9) 330deg,
                          transparent 360deg
                        )
                      `,
                      padding: "2px",
                      filter:
                        hoveredIndex === index
                          ? "drop-shadow(0 0 6px rgba(217,119,6,.6))"
                          : "none",
                    }}
                  >
                    {/* Inner cut */}
                    <div className="w-full h-full rounded-full bg-black" />
                  </motion.div>

                  {/* Content Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-[2px] rounded-full bg-[var(--color-graybg)]
                      flex flex-col items-center justify-center p-6 sm:p-8"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm text-center px-2">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        />
      </section>

      <section>
        <div className="bg-black text-white p-10 font-sans">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="container grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {filteredCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Link to={card.link} className="block">
                    {/* Image Container */}
                    <div className="aspect-square overflow-hidden bg-gray-800 mb-4">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    {/* Content Area */}
                    <div className="flex justify-between items-end">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        <p className="text-gray-400 text-sm mb-1">
                          {card.category}
                        </p>
                        <h3 className="text-xl font-bold uppercase tracking-tight leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-xl font-bold uppercase tracking-tight leading-none text-gray-200">
                          {card.subtitle}
                        </p>
                      </motion.div>

                      {/* Arrow Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="w-10 h-10 flex items-center justify-center arrow-bounce"
                      >
                        <img src="/images/ArrowUpRight.png" alt="Arrow" />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="border-t border-gray-800 mt-5 origin-left"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}