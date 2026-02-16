import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DirectMailingSection() {
  return (
    <section className="relative py-10 lg:py-20">
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
        className="absolute md:w-[400px] md:h-[400px] w-100 h-100
             bottom-0 left-0
             bg-[var(--color-patch)]
             opacity-100
             blur-[190px]
             overflow-visible
             pointer-events-none"
      />
      <div className="container">
        {/* Circle 1 */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-14 h-14 rounded-full border-4 border-orange-500"
        />

        {/* Circle 2 */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="absolute bottom-1/4 right-1/2 w-10 h-10 rounded-full border-4 border-blue-500"
        />

        {/* Circle 3 */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5.5,
          }}
          className="absolute bottom-20 right-20 w-16 h-16 rounded-full border-4 border-purple-500"
        />

        {/* Triangle */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-5 right-32 w-10 h-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="4"
            />
          </svg>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 z-10"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl text-bold leading-tight mb-6 text-white"
              >
                End-to-End{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e89b4f] via-[#f4d4a8] to-[#e89b4f]">
                  Direct Mailing
                </span>
                <br />
                Services That Drive Results
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg lg:text-xl max-w-xl"
              >
                High-quality direct mail prints designed to engage recipients
                and drive real responses.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contactUs"
                  className="inline-flex items-center gap-2 px-8 py-4 
                  bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] 
                  text-black font-semibold rounded-full transition-all duration-300"
                >
                  Contact Now
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#e89b4f] text-[#e89b4f] font-semibold rounded-full hover:bg-[#e89b4f]/10 transition-all duration-300"
                >
                  Explore More
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Orange Envelope - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: -30, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, rotate: -15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-12 -left-10 w-24 h-24 lg:w-33 lg:h-33 z-20"
            >
              <motion.img
                src="/animations/DirectMail.gif"
                alt="Mail Animation"
                className="w-full h-full object-contain"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-15, -12, -15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Main Monitor with Screen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[650px] z-10"
            >
              <img
                src="/images/directmailing/DirectMailing_Hero_Img.png"
                alt="Direct Mailing Monitor"
                className="w-full h-auto"
              />

              {/* Avatar Top Right */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-12 right-1/2 w-16 h-16 lg:w-22 lg:h-22 overflow-hidden "
              >
                <img
                  src="/images/directmailing/Profile_1.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Avatar Bottom Right */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-1/5 right-1/4 w-14 h-14 lg:w-22 lg:h-22 overflow-hidden"
              >
                <img
                  src="/images/directmailing/Profile_2.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
