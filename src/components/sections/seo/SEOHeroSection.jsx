import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function SEOHeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
             bg-[url('/images/seo/SEO_Backgrond.png')] 
             bg-center bg-cover bg-no-repeat"
    >
      <div
        className="container relative z-10 text-center items-center justify-center flex flex-col
                   px-4 sm:px-6 xl:p-[24px]
                   leading-[28px]"
      >
        {/* ── Hero Content Box ── */}
        <div
          className="flex flex-col gap-6 sm:gap-8 xl:gap-[40px] justify-center items-center
                     w-full max-w-[90vw] sm:max-w-[560px] xl:w-[756px] xl:h-[452.46px] xl:max-w-none"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-[8px] text-sm
                       px-3 py-1.5 xl:w-[128px] xl:h-[32px] xl:p-[6px]
                       text-gray-300 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-bounce-slow"
          >
            <Rocket className="h-[20px] w-[20px]" />
            SEO Experts
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl xl:text-[80px] font-bold text-white"
          >
            YOUR BUSINESS
            <br />
            <span className="text-[var(--color-gradient)] font-[instrument-serif] italic font-medium">
              SEO Solution
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-sm sm:text-base xl:text-[18px]
                       max-w-xs sm:max-w-md xl:max-w-2xl mx-auto"
          >
            Boost your brand's online presence with expert SEO solutions,
            attracting the right audience effortlessly.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contactUs"
              className="px-5 py-3 xl:px-[24px] xl:py-[22px] rounded-full
                         bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                         text-sm xl:text-[16px] font-semibold
                         flex items-center justify-center gap-3"
            >
              Contact Us
              <ArrowLeft className="rotate-180 w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* ── Stats Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 xl:grid-cols-4
                     gap-3 sm:gap-4 xl:gap-[24px]
                     mt-10 sm:mt-14 xl:mt-20
                     w-full max-w-[90vw] sm:max-w-[560px] xl:max-w-none xl:w-auto
                     animate-bounce-slow"
        >
          {[
            { end: 25, suffix: "+", label: "Years of experience" },
            { end: 98, suffix: "%", label: "Client Satisfied" },
            { end: 120, suffix: "+", label: "Realized Projects" },
            { end: 140, suffix: "%", label: "Conversion Increased" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl
                         flex flex-col items-center justify-center
                         py-4 sm:py-5 xl:py-6
                         h-auto xl:h-[120px]
                         w-full xl:w-[266px]"
            >
              <h2 className="text-2xl sm:text-3xl xl:text-[32px] font-bold text-white">
                <Counter end={stat.end} suffix={stat.suffix} />
              </h2>
              <p className="text-gray-400 mt-1 xl:mt-2 text-sm xl:text-[18px] text-center px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}