import { useRef } from "react";
import { useNavigate,Link } from "react-router-dom";
import { MousePointer2, Printer, Mail, Monitor, Search } from "lucide-react";
import { motion, useInView } from "framer-motion";

/* =======================
   DATA (content unchanged)
======================= */

const services = [
  {
    title: "Signage",
    slug: "signage",
    description:
      "High-impact signage printing solutions designed to enhance visibility and strengthen your brand presence.",
    icon: MousePointer2,
    offset: "lg:translate-y-12",
    curveColor: "#4338ca",
    curveDirection: "down",
  },
  {
    title: "Printing",
    slug: "printing",
    description:
      "High-quality customized printing solutions to showcase your brand on every product.",
    icon: Printer,
    offset: "lg:-translate-y-8",
    curveColor: "#d97706",
    curveDirection: "up",
  },
  {
    title: "Direct mailing",
    slug: "direct-mailing",
    description:
      "This includes exploring new markets, product diversification, and leveraging innovation to drive business.",
    icon: Mail,
    offset: "lg:translate-y-12",
    curveColor: "#4338ca",
    curveDirection: "down",
  },
  {
    title: "Website design",
    slug: "website-design",
    description:
      "Creative website design solutions crafted to enhance user experience and grow your business online.",
    icon: Monitor,
    offset: "lg:-translate-y-8",
    curveColor: "#d97706",
    curveDirection: "up",
  },
  {
    title: "SEO service",
    slug: "seo",
    description:
      "Data-driven SEO services designed to improve search visibility and drive consistent organic traffic growth.",
    icon: Search,
    offset: "lg:translate-y-12",
    curveColor: "#4338ca",
    curveDirection: "down",
  },
];

/* =======================
   ANIMATION VARIANTS
======================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-16 flex flex-col items-center justify-center md:overflow-visible overflow-hidden"
    >
      {/* Header (unchanged visually) */}
      <div className="relative z-10 container">
        <motion.div
          className="flex flex-col items-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-6 leading-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Look at
            </h2>
            <div className="w-50 h-15 bg-gray-300 rounded-full md:block hidden" />
          </div>

          <div className="flex items-center justify-center gap-6 md:ml-25 ml-0">
            <Link to="/services">
              <div className="md:w-20 w-15 md:h-20 h-15 bg-[var(--color-gradient)] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <img className="arrow-bounce"
                src="/images/WhiteArrow.png" alt="Go to Services" />
              </div>
            </Link>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white ">
              our Services
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <motion.div
        className="relative w-full container mt-0 md:mt-20 lg:mt-30"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`flex flex-col items-center text-center transition-transform duration-500 ${service.offset} relative cursor-pointer`}
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                {/* Curves (unchanged) */}
                {service.curveDirection === "down" && (
                  <svg
                    className="absolute -top-[10px] left-1/2 -translate-x-1/2 -z-10 pointer-events-none"
                    width="300"
                    height="80"
                    viewBox="0 0 300 80"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor={service.curveColor}
                          stopOpacity="0"
                        />
                        <stop
                          offset="50%"
                          stopColor={service.curveColor}
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor={service.curveColor}
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 10 C 75 60, 225 60, 300 10"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                )}

                {service.curveDirection === "up" && (
                  <svg
                    className="absolute top-[30px] left-1/2 -translate-x-1/2 -z-10 pointer-events-none"
                    width="300"
                    height="80"
                    viewBox="0 0 300 80"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor={service.curveColor}
                          stopOpacity="0"
                        />
                        <stop
                          offset="50%"
                          stopColor={service.curveColor}
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor={service.curveColor}
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 60 C 75 10, 225 10, 300 60"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                )}

                {/* Icon */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f8e9d2] hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-black hover:text-white" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[200px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        {/* Right Golden Patch */}
        <div
          className="absolute md:w-[381px] md:h-[381px] w-100 h-100
             bottom-[0] right-[0]
             bg-[var(--color-patch)]
             opacity-100
             blur-[250px]
             overflow-visible
             pointer-events-none"
        />
      </motion.div>
    </section>
  );
};

export default ServiceSection;
