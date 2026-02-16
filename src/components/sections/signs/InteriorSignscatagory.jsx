import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const InteriorSignscatagory = () => {
  /* ----------------------------------
     State Management
  ---------------------------------- */
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab") || "ada";
  const [activeCategory, setActiveCategory] = useState(tabFromUrl);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ----------------------------------
     Fetch data from db.json
  ---------------------------------- */
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.InteriorSigns);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  /* ----------------------------------
     Sync state when URL changes
  ---------------------------------- */
  useEffect(() => {
    setActiveCategory(tabFromUrl);
  }, [tabFromUrl]);

  /* ----------------------------------
     Loading state
  ---------------------------------- */
  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-400">Loading...</div>
      </div>
    );
  }

  /* ----------------------------------
     SAFETY FALLBACK (prevents crashes)
  ---------------------------------- */
  const safeCategory = data.galleryImages[activeCategory] ? activeCategory : "ada";

  return (
    <div className="p-6">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/categories/interior-sign"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft size={22} />
        </Link>
      </motion.div>

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="text-[var(--color-gradient)] text-sm tracking-[0.2em] font-light">
              INTERIOR SIGNS
            </span>
            <ArrowRight className="text-[var(--color-gradient)]" size={22} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-[var(--color-gradient)]">High-Quality</span>{" "}
            Interior Signs You Can Trust
          </motion.h1>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {data.categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center bg-[#2a2a2a] rounded-xl overflow-hidden border-2 transition-all duration-300 hover:border-[#d4a574] ${
                safeCategory === category.id
                  ? "border-[var(--color-gradient)]"
                  : "border-[#3a3a3a]"
              }`}
            >
              <motion.img
                src={category.image}
                alt={category.name}
                className="w-32 h-20 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <span className="px-5 py-4 font-semibold">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={safeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
          >
            {data.galleryImages[safeCategory].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <motion.img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteriorSignscatagory;