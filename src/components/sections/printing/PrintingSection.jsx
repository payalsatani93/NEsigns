import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrintingSection() {
  const images = [
    "/images/printing/01.png",
    "/images/printing/02.png",
    "/images/printing/03.png",
    "/images/printing/04.png",
    "/images/printing/05.png",
    "/images/printing/06.png",
    "/images/printing/07.png",
    "/images/printing/08.png",
  ];

  return (
    <>
      <section className="relative py-8 sm:py-10 md:py-14 md:overflow-visible overflow-hidden">
        {/* Top Right Small Patch */}
        <div
          className="absolute md:w-[400px] md:h-[400px] w-100 h-100
             top-0 right-0
             bg-[var(--color-patch)]
             opacity-100
             blur-[190px]
             pointer-events-none"
        />
        {/* bottom left Small Patch */}
        <div
          className="absolute md:w-[400px] md:h-[600px] w-100 h-100
             bottom-0 left-0
             bg-[var(--color-patch)]
             opacity-100
             blur-[190px]
             pointer-events-none"
        />
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-8 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              {/* Main Heading */}
              <h2 className="text-white font-bold leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
                Complete Printing Solutions{" "}
                <span className="block mt-2">Printing for Powerful Impact</span>
              </h2>

              {/* Subheading */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                High-quality prints that communicate trust, clarity, and
                consistency.
              </p>

              {/* Buttons */}
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/contactUs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-6 py-3 sm:py-4 rounded-full
                bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                text-sm flex items-center justify-center gap-2
                transition-all duration-300"
                  >
                    Contact Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform arrow-bounce" />
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-6 py-3 sm:py-4 rounded-full border border-yellow-400
                text-[var(--color-gradient)]
                text-sm flex items-center justify-center gap-2
                transition-all duration-300"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform arrow-bounce" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT SIDE – Layered Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2 px-6"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] aspect-square">
                {/* BACK DARK CARD */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 right-0 w-[65%] aspect-square rounded-2xl lg:rounded-3xl z-10"
                >
                  <img
                    src="/images/printing/Printing_HeroImage_02.png"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                  />
                </motion.div>

                {/* FRONT WHITE CARD */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 w-[65%] aspect-square z-20"
                >
                  <img
                    src="/images/printing/Printing_HeroImage_01.png"
                    alt="Printing Mockup"
                    className="w-full h-full object-contain rounded-xl lg:rounded-2xl"
                  />
                </motion.div>

                {/* OUTLINE FRAME */}
                <div className="absolute right-[5%] top-[5%] w-[75%] aspect-square rounded-2xl lg:rounded-3xl pointer-events-none z-0">
                  <div
                    className="absolute inset-0 rounded-2xl lg:rounded-3xl p-[4px] sm:p-[6px]"
                    style={{
                      background:
                        "linear-gradient(135.47deg, rgba(0, 87, 255, 0.8) 23.91%, rgba(255, 255, 255, 0.12) 41.01%, rgba(255, 255, 255, 0.17) 58.11%, rgba(255, 255, 255, 0.31) 75.21%)",
                    }}
                  >
                    <div className="w-full h-full rounded-[18px] lg:rounded-[20px] bg-black/80" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     <section className="relative py-10 md:py-16 md:overflow-visible overflow-hidden z-10">
  <div className="container relative z-10">
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-25
      "
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -45 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group transition-all duration-100"
        >
          <img
            src={src}
            alt={`Printing ${index + 1}`}
            className="
              w-full
              h-full
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
          />
        </motion.div>
      ))}
    </div>
  </div>

  {/* Bottom Right Patch - behind content */}
  <div
    className="absolute md:w-[400px] md:h-[600px] w-100 h-100 z-0
       bottom-0 right-0
       bg-[var(--color-patch)]
       opacity-100
       blur-[190px]
       pointer-events-none"
  />
</section>
    </>
  );
}
