import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

/* ================= PAGE ANIMATION VARIANTS ================= */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.4 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SignageCategories() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const waveVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  useEffect(() => {
    // Reset data when slug changes to trigger re-render
    setData(null);
    
    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
        const match = json.SignageCategories.find((item) => item.slug === slug);
        setData(match);
      });
  }, [slug]);

  if (!data) return <div />;

  const services = data.subServices || [];
  const showViewMore = [
    "exterior-sign",
    "interior-sign",
    "temporary-signs",
  ].includes(slug);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug} // KEY FIX: This forces re-mount on slug change
        ref={sectionRef}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative overflow-hidden"
      >
        {/* Golden Background left side Patch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute md:w-[508px] md:h-[508px] w-100 h-100 z-0
               bottom-[0] left-[0]
               bg-[var(--color-patch)]
               opacity-100
               rounded-full
               blur-[300px]
               pointer-events-none"
        />
        
        {/* Right Golden Patch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute md:w-[481px] md:h-[481px] w-100 h-100 z-0
               top-[-25px] right-[0]
               bg-[var(--color-patch)]
               opacity-100
               rounded-full
               blur-[300px]
               pointer-events-none"
        />
        
        {/* CONTOUR GRAPHIC */}
        <motion.div
          className="absolute top-[70px] right-[50px]
               w-[450px] h-[450px]
               z-5
               opacity-70
               pointer-events-none"
          variants={waveVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/images/Wave.png"
            alt=""
            className="wave-animation w-100 h-100 overflow-visible"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Header */}
        <motion.header
          variants={fadeUp}
          className="lg:px-20 py-8 relative z-20"
        >
          <Link
            to="/services/signage"
            className="inline-flex items-center text-neutral-400 hover:text-white transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          variants={fadeUp}
          className="pb-12 relative z-20"
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              </div>
              <span className="text-xs text-neutral-400 uppercase tracking-widest">
                {data.slug.replace("-", " ")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold mb-4 max-w-4xl leading-tight"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-neutral-400 max-w-2xl"
            >
              {data.description}
            </motion.p>
          </div>
        </motion.section>

        {/* Cards Grid */}
        <motion.section className="pb-20 relative z-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services
                .filter((item) => item && item.title)
                .map((item, index) => (
                  <ServiceCard
                    key={item.id || index}
                    item={item}
                    showViewMore={showViewMore}
                    slug={slug}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({ item, showViewMore, slug, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  /* Subtle Parallax */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const gradients = [
    "linear-gradient(180deg, #852170 0%, rgba(137, 57, 96, 0.45) 100%)",
    "linear-gradient(180deg, #EDBC5A 0%, rgba(137, 57, 96, 0.45) 100%)",
    "linear-gradient(180deg, #27A3D5 0%, rgba(137, 57, 96, 0.45) 100%)",
    "linear-gradient(180deg, #ED90CF 0%, rgba(137, 57, 96, 0.45) 100%)",
  ];

  const getLink = () => {
    if (!item || !item.title) {
      return `/categories/${slug}`;
    }

    if (item.title === "Freestanding Signs") {
      return `/categories/${slug}/freestanding-signs?tab=monument`;
    }

    if (item.title === "Directional Signs") {
      return `/categories/${slug}/freestanding-signs?tab=wayfinding`;
    }

    if (slug === "interior-sign") {
      const tabMap = {
        "ADA Signage": "ada",
        "Custom Graphics": "graphics",
        "Corporate Branding Signs": "corporate",
        "Menu Board": "menu",
      };

      return `/categories/${slug}/interior-sign?tab=${
        tabMap[item.title] || "ada"
      }`;
    }

    return `/categories/${slug}/${item.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden border border-white/70"
    >
      {/* Background Image with Parallax */}
      {item?.image && (
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ y }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{ background: gradients[index % 4] }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between min-h-[400px]">
        <div className="p-6 pb-0">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="text-2xl font-bold text-white mb-3"
          >
            {item?.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="text-sm text-white/90 leading-relaxed max-w-[280px] transition-opacity duration-300 group-hover:opacity-0"
          >
            {item?.desc || ""}
          </motion.p>
        </div>

        {/* Bottom Glass Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          className="w-full border-t border-white/10"
          style={{
            background: "#000000CC",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-center justify-between p-3">
            <span className="text-xs text-white/80">View all Signs</span>

            {showViewMore && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={getLink()}
                  className="inline-flex items-center lg:gap-3 gap-1 px-3 py-2 rounded-full border 
                  border-white/40 text-[var(--color-gradient)] xl:text-sm text-xs font-medium"
                >
                  View More
                  <ArrowLeft className="w-4 h-4 rotate-180 text-white arrow-bounce" />
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}