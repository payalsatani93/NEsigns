import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const avatars = [
  "/images/webdesign/client1.png",
  "/images/webdesign/client2.png",
  "/images/webdesign/client3.png",
  "/images/webdesign/client4.png",
  "/images/webdesign/client5.png"
];

export default function WebHeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-[url('/images/webdesign/Web_Heto_Img.png')]
                 bg-center bg-cover bg-no-repeat"
    >
      {/* Center Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 sm:px-6 gap-6">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight">
          "Smart, Engaging Web Solutions That
          <br/>
          Transform Ideas Into Accelerated Success."
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base md:text-[22px] max-w-xl sm:max-w-5xl leading-relaxed">
          We combine innovative design and advanced web technologies to create
          seamless websites that engage users and drive business growth.
        </p>

         {/* Buttons */}
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 
              justify-center lg:justify-start">
                <Link to="/contactUs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full p-[24px] rounded-full
                bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                text-sm lg:text-[16px] flex items-center justify-center gap-2
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
                    className="group w-full p-[24px] rounded-full border border-yellow-400
                text-[var(--color-gradient)]
                text-sm lg:text-[16px] flex items-center justify-center gap-2
                transition-all duration-300"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform arrow-bounce" />
                  </motion.button>
                </Link>
              </div>

       {/* Happy Clients Badge */}
<div
  className="flex items-center gap-[13.2px] px-4 py-1 rounded-full
  border border-[#FFFFFF26] sm:w-[361.16px] sm:h-[75.49px] w-[300px] h-[60px]"
  style={{
    background: "linear-gradient(90deg, rgba(255, 84, 31, 0.13) 0%, rgba(255, 84, 31, 0.04) 100%)",
    backdropFilter: "blur(12px)",
  }}
>
  {/* Avatar Stack */}
  <div className="flex -space-x-4">
    {avatars.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`client ${i + 1}`}
        className="sm:w-[40.79px] sm:h-[40.79px] w-[32px] h-[32px] rounded-full border-2 border-[#1a1008] object-cover"
        style={{ zIndex: avatars.length - i }}
      />
    ))}
  </div>

  {/* Stars + Text */}
  <div className="flex flex-col items-start leading-tight gap-[6px]">
    <div className="flex gap-0.5 w-[15.86px] h-[15.86px]">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[var(--color-primary)] text-base">★</span>
      ))}
    </div>
    <span className="sm:text-[16.86px] text-[14px]">115+ happy clients</span>
  </div>
</div>

      </div>
    </section>
  );
}