import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function ServicesHeroSection() {
 const services = [
  {
    left: { label: "SIGNAGE", link: "/services/signage" },
    right: { label: "DIRECT MAILING", link: "/services/direct-mailing" },
  },
  {
    left: { label: "PRINTING", link: "/services/printing" },
    right: { label: "WEB DESIGNING", link: "/services/web-design" },
  },
  {
    left: { label: "SEO", link: "/services/seo" },
    right: null,
  },
];


  /* ================= ANIMATION VARIANTS ================= */

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative overflow-hidden py-5 lg:py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Right Golden Patch */}
      <div
        className="absolute w-[351px] h-[351px]
             top-[-25px] right-[10px]
             bg-[var(--color-patch)]
             opacity-100
             blur-[200px]
             pointer-events-none"
      />
      <div className="containers">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
          {/* ================= LEFT SIDE IMAGES ================= */}
          <motion.div
            variants={fadeLeft}
            className="relative order-2 xl:order-1"
          >
            {/* Top Coffee Image */}
            <motion.div
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="rounded-3xl overflow-hidden ml-0 xl:ml-20"
            >
              <motion.img
                src="/images/about/Img_02.png"
                alt="Coffee"
                className="w-full h-auto object-cover"
                variants={{
                  rest: { scale: 1.08 },
                  hover: { scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>

            {/* Printer Image */}
            <motion.div variants={fadeUp} className="relative mt-6">
              <div className="rounded-3xl overflow-hidden ml-0 xl:ml-20">
                <motion.img
                  src="/images/about/Img_01.png"
                  alt="Printer"
                  className="w-full h-auto object-cover hidden lg:block"
                  initial={{ scale: 1.08 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <motion.img
                  src="/images/about/Img_04.png"
                  alt="Printer Mobile"
                  className="w-full h-[320px] object-cover lg:hidden"
                  initial={{ scale: 1.08 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              {/* Light Bulb Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.95 }}
                className="hidden lg:block absolute 
                   rounded-3xl overflow-hidden shadow-xl
                   2xl:w-75 2xl:h-75 2xl:-bottom-14 2xl:left-3
                   xl:w-60 xl:h-60 xl:-bottom-14 xl:left-3
                   lg:w-38 lg:h-40 lg:bottom-0 lg:left-0"
              >
                <motion.img
                  src="/images/about/Img_03.png"
                  alt="Light Bulb"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>

              {/* Get In Touch Button */}
              <motion.div
                variants={fadeUp}
                className="lg:absolute bottom-0 2xl:right-12 right-0 flex justify-center lg:justify-end mt-3"
              >
                <Link
                  to="/contactUs"
                  className="group flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full 
    hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-[var(--color-gradient)] text-sm">
                    Get in Touch
                  </span>

                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE CONTENT ================= */}
          <motion.div variants={fadeRight} className="order-1 lg:order-2">
            {/* Small Header */}
            <motion.div
              variants={fadeUp}
              className="flex gap-2 text-[var(--color-gradient)] uppercase tracking-widest text-sm mb-6"
            >
              <span>Our Services</span>
              <ArrowDownRight className="w-4 h-4" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white mb-12"
            >
              Professional Services <br />
              with{" "}
              <span className="text-[var(--color-gradient)]">
                Unmatched Quality
              </span>
            </motion.h2>

            {/* Services List */}
           <motion.div variants={container} className="space-y-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
    >
      {/* Left Service */}
      {service.left && (
        <Link to={service.left.link} className="group">
          <div className="flex gap-5 text-white text-lg font-medium tracking-wide group-hover:text-[var(--color-gradient)] transition-colors duration-300">
            {service.left.label}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          <div className="h-px mt-4 bg-gradient-to-r from-[var(--color-gradient)] to-transparent group-hover:h-[2px] transition-all duration-300" />
        </Link>
      )}

      {/* Right Service */}
      {service.right && (
        <Link to={service.right.link} className="group">
          <div className="flex gap-5 text-white text-lg font-medium tracking-wide group-hover:text-[var(--color-gradient)] transition-colors duration-300">
            {service.right.label}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          <div className="h-px mt-4 bg-gradient-to-r from-[var(--color-gradient)] to-transparent group-hover:h-[2px] transition-all duration-300" />
        </Link>
      )}
    </motion.div>
  ))}
</motion.div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
