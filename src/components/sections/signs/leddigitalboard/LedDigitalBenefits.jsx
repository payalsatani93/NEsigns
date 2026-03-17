import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


export default function LedDigitalBenefits() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
  <div className="container grid md:grid-cols-2 gap-10 lg:gap-16 items-center justify-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-[#C89A2A] tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
        BENEFITS
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
        Increase your visibility <br className="hidden sm:block" />
        and attract customers
      </h2>

      <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
        Our outdoor LED display boards are engineered to withstand extreme
        weather conditions while delivering crystal-clear messaging 24/7.
      </p>

      {/* BULLETS */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {[
          "High brightness for sunlight readability",
          "Waterproof & dustproof (IP-rated cabinets)",
          "Long lifespan & low maintenance",
          "Remote content updates",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start sm:items-center gap-3"
          >
            {/* ICON */}
            <div className="mt-1 sm:mt-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#C89A2A] flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C89A2A] rounded-full" />
            </div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <Link to="/contactus">
        <motion.div
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-[#C89A2A] font-semibold text-sm sm:text-base cursor-pointer"
        >
          Customize your brand board
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </Link>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative flex justify-center md:justify-end"
    >
      {/* CARD */}
      <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-[#111] p-2 shadow-2xl">
        <img
          src="/images/digitalboard/Img_3.png"
          alt="LED Display"
          className="w-full h-[280px] sm:h-[360px] md:h-[500px] lg:h-[560px] object-cover rounded-[1rem] sm:rounded-[1.5rem]"
        />
      </div>

      {/* GLOW */}
      <div className="absolute -inset-4 bg-[#C89A2A]/10 blur-3xl -z-10" />
    </motion.div>
  </div>
</section>
  )
}
