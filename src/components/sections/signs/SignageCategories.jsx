import { useEffect, useState, useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

/* ================= OPTIMIZED PAGE ANIMATION VARIANTS ================= */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08, // Reduced from 0.15
      duration: 0.4, // Reduced from 0.6
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }, // Removed y transform
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced from 40
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, // Reduced from 0.8
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};

export default function SignageCategories() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reset scroll position smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Reset data when slug changes
    setData(null);
    
    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
        const match = json.SignageCategories.find((item) => item.slug === slug);
        setData(match);
      });
  }, [slug]);

  if (!data) return <div className="min-h-screen" />;

  const services = data.subServices || [];
  const showViewMore = [
    "exterior-sign",
    "interior-sign",
    "temporary-signs",
  ].includes(slug);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        ref={sectionRef}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative overflow-hidden"
        style={{ willChange: 'opacity' }}
      >
        {/* OPTIMIZED: Reduced blur and added GPU acceleration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }} // Reduced from 1
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute md:w-[508px] md:h-[508px] w-100 h-100 z-0
               bottom-[0] left-[0]
               bg-[var(--color-patch)]
               rounded-full
               blur-[150px]
               pointer-events-none"
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'opacity'
          }}
        />
        
        {/* Right Golden Patch - OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }} // Reduced from 1
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="absolute md:w-[481px] md:h-[481px] w-100 h-100 z-0
               top-[-25px] right-[0]
               bg-[var(--color-patch)]
               rounded-full
               blur-[150px]
               pointer-events-none"
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'opacity'
          }}
        />
        
        {/* OPTIMIZED CONTOUR GRAPHIC */}
        <motion.div
          className="absolute top-[70px] right-[50px]
               w-[450px] h-[450px]
               z-5
               opacity-70
               pointer-events-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.img
            src="/images/Wave.png"
            alt=""
            className="w-100 h-100"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: 'translateZ(0)' }}
          />
        </motion.div>

        {/* Header - SIMPLIFIED */}
        <motion.header
          variants={fadeUp}
          className="lg:px-20 py-8 relative z-20"
        >
          <Link
            to="/services/signage"
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </motion.header>

        {/* Hero Section - SIMPLIFIED */}
        <motion.section
          variants={fadeUp}
          className="pb-12 relative z-20"
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-4 max-w-4xl leading-tight"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
                    key={`${slug}-${item.id || index}`} // Better key
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

/* ================= OPTIMIZED SERVICE CARD ================= */

function ServiceCard({ item, showViewMore, slug, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2, // Reduced from 0.3
    margin: "0px 0px -100px 0px" // Trigger earlier
  });

  /* Optimized Parallax - only if in view */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]); // Reduced range

  // Memoize gradient to prevent recalculation
  const gradient = useMemo(() => {
    const gradients = [
      "linear-gradient(180deg, #852170 0%, rgba(137, 57, 96, 0.45) 100%)",
      "linear-gradient(180deg, #EDBC5A 0%, rgba(137, 57, 96, 0.45) 100%)",
      "linear-gradient(180deg, #27A3D5 0%, rgba(137, 57, 96, 0.45) 100%)",
      "linear-gradient(180deg, #ED90CF 0%, rgba(137, 57, 96, 0.45) 100%)",
    ];
    return gradients[index % 4];
  }, [index]);

  const getLink = useMemo(() => {
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
  }, [item, slug]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }} // Reduced from 50
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5, // Reduced from 0.6
        delay: index * 0.08, // Reduced from 0.1
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative overflow-hidden border border-white/70"
      style={{ 
        willChange: isInView ? 'auto' : 'transform, opacity',
        transform: 'translateZ(0)'
      }}
    >
      {/* Background Image with Optimized Parallax */}
      {item?.image && (
        <motion.div
          style={{ y: isInView ? y : 0 }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={item.image}
            alt={item.title}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.1 }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            style={{ transform: 'translateZ(0)' }}
          />
        </motion.div>
      )}

      {/* Gradient Overlay - OPTIMIZED */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{ 
          background: gradient,
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between min-h-[400px]">
        <div className="p-6 pb-0">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
            className="text-2xl font-bold text-white mb-3"
          >
            {item?.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.35 }}
            className="text-sm text-white/90 leading-relaxed max-w-[280px] transition-opacity duration-300 group-hover:opacity-0"
          >
            {item?.desc || ""}
          </motion.p>
        </div>

        {/* Bottom Glass Section - OPTIMIZED BACKDROP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.4 }}
          className="w-full border-t border-white/10 bg-black/80"
          style={{
            backdropFilter: 'blur(10px)', // Reduced from 20px
            WebkitBackdropFilter: 'blur(10px)',
            transform: 'translateZ(0)',
            willChange: 'opacity, transform'
          }}
        >
          <div className="flex items-center justify-between p-3">
            <span className="text-xs text-white/80">View all Signs</span>

            {showViewMore && (
              <Link
                to={getLink}
                className="inline-flex items-center lg:gap-3 gap-1 px-3 py-2 rounded-full border 
                border-white/40 text-[var(--color-gradient)] xl:text-sm text-xs font-medium
                transition-all duration-300 hover:border-white/60 hover:scale-105 active:scale-95"
              >
                View More
                <ArrowLeft className="w-4 h-4 rotate-180 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}