import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function OtherServices() {
  const services = [
    {
      id: 1,
      title: "Signage",
      link: "/services/signage",
      description:
        "We provide custom signage solutions that improve visibility, enhance communication, and support your brand growth.",
      image: "/images/service/01.png",
      imageAlt: "Custom signage display",
    },
    {
      id: 2,
      title: "Printing",
      link: "/services/printing",
      description:
        "We provide printing solutions that enhance visibility, communicate your message clearly, and support your brand growth.",
      image: "/images/service/02.png",
      imageAlt: "Professional printing materials",
    },
    {
      id: 3,
      title: "Direct Mailing",
      link: "/services/direct-mailing",
      description:
        "We provide direct mailing solutions that enhance reach, communicate your message clearly, and support your brand growth.",
      image: "/images/service/03.png",
      imageAlt: "Direct mail envelopes",
    },
    {
      id: 4,
      title: "Web Designing",
      link: "/services/web-design",
      description:
        "We provide web design solutions that enhance visibility and strengthen your online presence.",
      image: "/images/service/04.png",
      imageAlt: "Web Designing",
    },
    {
      id: 5,
      title: "SEO",
      link: "/services/seo",
      description:
        "We provide SEO solutions that improve rankings, increase traffic, and support your brand growth.",
      image: "/images/service/05.png",
      imageAlt: "SEO",
    },
  ];

  /* ================= Animation Variants ================= */

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

  return (
    <motion.section
      className="relative px-4 py-16 md:px-8 lg:px-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Right Golden Patch */}
      <div
        className="absolute md:w-[400px] md:h-[600px] w-100 h-100
             top-[-20px] right-[0]
             bg-[var(--color-patch)]
             opacity-100
             rounded-full
             blur-[250px]
             overflow-visible
             pointer-events-none"
      />
      {/* Decorative Lines */}
      <div className="absolute right-0 top-0 hidden lg:flex flex-col gap-2 pr-8 pt-16">
        <img src="/images/Line_Circle.png" alt="" />
      </div>

      <div className="relative container">
        {/* Header Section */}
        <motion.div variants={fadeUp} className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex gap-2 text-[var(--color-gradient)] uppercase tracking-widest text-sm mb-6">
            <span>Our Services</span>
            <ArrowDownRight className="w-4 h-4" />
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-[var(--color-gradient)]">
              Customized Solutions
            </span>{" "}
            to Achieve
            <br />
            Your Business Goals
          </h1>

          <p className="max-w-4xl text-base leading-relaxed text-gray-300 md:text-lg lg:text-xl">
            We create customized printing solutions focused on achieving your
            business goals. From impactful designs to premium-quality materials,
            every print is thoughtfully crafted to strengthen your brand,
            communicate your message clearly, engage your audience, and deliver
            measurable results for your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={service.link}
                className="group relative block overflow-hidden rounded-2xl 
      bg-gradient-to-b from-gray-900/50 to-black/50 p-6 
      transition-all duration-500 
      hover:border-yellow-600/50 
      hover:shadow-2xl hover:shadow-yellow-600/10"
                style={{
                  border: "1px solid",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 100%)",
                }}
              >
                {/* Image */}
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-500">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-yellow-600 to-transparent transition-all duration-300 group-hover:w-16" />
                    <span className="flex items-center gap-2 text-sm font-medium text-yellow-500 transition-all duration-300 group-hover:gap-3 group-hover:text-yellow-400">
                      Read More
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
