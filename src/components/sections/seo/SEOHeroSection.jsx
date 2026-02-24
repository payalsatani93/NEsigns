import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft,Rocket } from "lucide-react";
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
      <div className="container relative z-10  text-center items-center justify-center flex flex-col p-[24px]
       leading-[28px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-self-center gap-4  text-sm 
          text-gray-300 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
        >
           <Rocket className="h-[20px] w-[20px]" />
           SEO Experts
          
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-[80px] font-bold text-white"
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
          className="mt-6 text-gray-300 text-[18px] max-w-2xl mx-auto"
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
            className="mt-8 px-[24px] py-[22px] rounded-full
            bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-[16px] font-semibold
             flex items-center justify-self-center gap-3"
          >
            Contact Us
            <ArrowLeft className="rotate-180 w-5 h-5" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-16
           "
        >
          <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl py-6 
          h-[120px] w-[266px]">
            <h2 className="text-[32px] font-bold text-white">
              <Counter end={25} suffix="+" />
            </h2>
            <p className="text-gray-400 mt-2">Years of experience</p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl py-6
          h-[120px] w-[266px] ">
            <h2 className="text-[32px] font-bold text-white">
              <Counter end={98} suffix="%" />
            </h2>
            <p className="text-gray-400 mt-2 text-[18px]">Client Satisfied</p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl py-6
          h-[120px] w-[266px] ">
            <h2 className="text-[32px] font-bold text-white">
              <Counter end={120} suffix="+" />
            </h2>
            <p className="text-gray-400 mt-2 text-[18px]">Realized Projects</p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl py-6
          h-[120px] w-[266px]">
            <h2 className="text-[32px] font-bold text-white">
              <Counter end={140} suffix="%" />
            </h2>
            <p className="text-gray-400 mt-2 text-[18px]">Conversion Increased</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
