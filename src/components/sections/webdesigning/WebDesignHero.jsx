import React from "react";
import { motion } from "framer-motion";

export default function WebDesignHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr
     from-[#0b0f14] via-[#0f151b] to-[#3e5166] py-5 sm:py-24">
      {/* ================= DECOR ELEMENTS ================= */}

      {/* Top Left Star */}
      <motion.img
        src="/images/webdesign/Blink_Star.png"
        className="absolute top-24 left-[22%] w-12"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Left Big Ball */}
      <div className="absolute top-36 left-12 sm:block hidden">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f3a049] to-[#e89035]"
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ boxShadow: "0 10px 30px rgba(243,160,73,0.45)" }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bg-white/60 blur-md rounded-full"
          style={{ bottom: "-45px", width: "90px", height: "18px" }}
          animate={{ scale: [1, 0.45, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </div>

      {/* Small Yellow Dot */}
      <motion.div
        className="absolute top-[56%] left-14 w-4 h-4 bg-[#f1b953] rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />

      {/* Triangle */}
      <motion.div
        className="absolute bottom-23 left-12 w-0 h-0
        border-l-[14px] border-l-transparent
        border-r-[14px] border-r-transparent
        border-b-[24px] border-b-[#f3a049]"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Ring */}
      <motion.div
        className="absolute bottom-20 left-[38%] w-14 h-14 rounded-full border-[4px] border-[#f3a049]"
        animate={{ scale: [1, 1.15, 1], rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Right Ball */}
      <div className="absolute top-[42%] right-20 sm:block hidden">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f3a049] to-[#e89035]"
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bg-white/60 blur-md rounded-full"
          style={{ bottom: "-45px", width: "90px", height: "18px" }}
          animate={{ scale: [1, 0.45, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 }}
        />
      </div>

      {/* Bottom Right Star */}
      <motion.img
        src="/images/webdesign/Blink_Star.png"
        className="absolute bottom-20 right-20 w-10"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 container px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0">
          {/* TEXT */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Learn More About Us,
              <br />
              <span className="text-[#f1b953]">Understand Us Better</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies
              tortor ac.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            <motion.img
              src="/images/webdesign/WebDesignHero_Image.png"
              alt="Web Design Illustration"
              className="w-full"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
