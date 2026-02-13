import React from 'react';
import { motion } from 'framer-motion';

const SignageMainSection = () => {
  return (
    <section className="py-0 sm:py-10 md:py-20 px-4 sm:px-6 overflow-hidden ">
      <div className="container flex gap-8 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 items-center justify-center xl:flex-row flex-col">
        {/* Background Patch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute md:w-[400px] md:h-[600px] w-100 h-100 
               top-[-20px] right-[0]
               bg-[var(--color-patch)]
               opacity-100
               rounded-full
               blur-[250px]
               overflow-visible
               pointer-events-none"
        />

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-5 md:space-y-6 items-center"
        >
          {/* Line and Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sm:w-16 md:w-20 h-[1px] bg-yellow-600"
            />
            <span className="text-yellow-600 uppercase tracking-widest text-xs sm:text-sm">
              Signage
            </span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
          >
            Get your Business Signage <br /> 
            <span className="text-gray-100">in Best Price.</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-3 sm:space-y-4 max-w-xl text-gray-400 leading-relaxed text-sm sm:text-base"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Get high-quality business signage designed to attract attention and
              build trust. We offer durable, visually striking signs at the best prices,
              tailored to fit your brand and business needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Make your business stand out with affordable, eye-catching
              signage. From design to installation, we deliver quality signs that fit
              your budget without compromising on style.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Images Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center lg:justify-start items-center h-[400px] sm:h-[500px] md:h-[600px]"
        >
          
          {/* Circular Badge - Top center of images */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="absolute -top-6 sm:-top-8 md:-top-10 left-[38%] sm:left-[37%] md:left-3/8 z-30 rotate-slow"
          >
            <motion.img 
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              src="/images/Signage_Circuler_Ring.png"
              alt="Design Studio Award" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
          </motion.div>

          {/* Left Image (alo) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05, x: -10 }}
            className="relative z-10 w-[45%] sm:w-1/2 md:w-75 aspect-[2/3.5]
            transform -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 -translate-y-[10px] sm:-translate-y-[15px] md:translate-y-[-20px]"
          >
            <img 
              src="/images/signage_02.png" 
              alt="Backlit signage"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Image (Hello Gorgeous) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.05, x: 10 }}
            className="relative z-20 w-[48%] sm:w-1/2 md:w-70 aspect-[3/5.5] shadow-2xl translate-y-[30px] sm:translate-y-[40px] md:translate-y-[50px]"
          >
            <img 
              src="/images/Signage_01.png" 
              alt="Neon signage"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Subtle Background Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-yellow-600/10 blur-[100px] rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SignageMainSection;