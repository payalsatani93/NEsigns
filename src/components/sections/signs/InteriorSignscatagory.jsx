import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { section } from "framer-motion/client";

export default function InteriorSignscatagory() {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab") || "ada";

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= DYNAMIC CONTENT MAP =================
  // Define unique titles and descriptions for every tab
  const categoryContent = {
    ada: {
      title: "ADA-Compliant Signage Solutions",
      desc: "Designed to meet federal accessibility standards with precision and clarity.",
    },
    dimensional: {
      title: "Dimensional Letters & Logos",
      desc: "Add depth and character to your brand with high-impact 3D interior signage.",
    },
    graphics: {
      title: "Custom Graphics & Decals",
      desc: "Transform your walls and windows into storytelling canvases with premium vinyl.",
    },
    corporate: {
      title: "Corporate Branding Signs",
      desc: "Professional office signage that reinforces your brand identity and culture.",
    },
    menu: {
      title: "Modern Menu Board Systems",
      desc: "Clean, legible, and appetizing displays for restaurants, cafes, and bars.",
    },
    // Add more mappings as needed based on your tab IDs...
  };

  // Fallback for categories not explicitly defined above
  const currentContent = categoryContent[tabFromUrl] || {
    title: "Interior Signage Solutions",
    desc: "Custom interior signs designed to enhance your space and guide your visitors.",
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
        const gallery =
          json?.InteriorSigns?.galleryImages?.[tabFromUrl] ||
          json?.InteriorSigns?.galleryImages?.["ada"];

        setImages(gallery || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [tabFromUrl]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-neutral-400">
        Loading...
      </div>
    );
  }

  return (
    <section>
      {/* Background Patch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute md:w-[400px] md:h-[600px] w-100 h-100 
                     top-[-20px] right-[0]
                     bg-[var(--color-patch)]
                     opacity-100
                     rounded-full
                     blur-[250px]
                     overflow-visible
                     pointer-events-none"
      />

      {/* ================= BACK BUTTON ================= */}
      <div className="py-10 p-10">
        <Link
          to="/categories/interior-sign"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-all duration-300 group"
        >
          <ArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="text-sm tracking-wide">Back to Categories</span>
        </Link>
      </div>
      <div className="container py-16">
        {/* ================= DYNAMIC HEADER ================= */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-center gap-4 mb-20">
          <div>
            <motion.h1
              key={`title-${tabFromUrl}`} // Key ensures animation re-triggers on tab change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[48px] font-bold text-white"
            >
              {currentContent.title}
            </motion.h1>

            <motion.p
              key={`desc-${tabFromUrl}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-neutral-400 uppercase tracking-[0.2em] text-sm leading-relaxed"
            >
              {currentContent.desc}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contactUs"
              className="px-4 py-4 rounded-full bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-sm text-black flex items-center gap-3"
            >
              Contact Us
              <ArrowLeft className="rotate-180 w-5 h-5" />
            </Link>
          </motion.div>
        </div>

       {/* ================= IMAGE GRID (Asymmetric Layout) ================= */}
<div className="space-y-6">

  {/* Row 1 – Large Left / Small Right */}
  {images.length >= 2 && (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Large */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 rounded-2xl overflow-hidden"
      >
        <img
          src={images[0]}
          alt=""
          className="w-full h-[420px] object-cover"
        />
      </motion.div>

      {/* Small */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl overflow-hidden"
      >
        <img
          src={images[1]}
          alt=""
          className="w-full h-[420px] object-cover"
        />
      </motion.div>
    </div>
  )}

  {/* Row 2 – 3 Equal Squares */}
  {images.length >= 5 && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.slice(2, 5).map((img, index) => (
        <motion.div
          key={`mid-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={img}
            alt=""
            className="w-full aspect-square object-cover"
          />
        </motion.div>
      ))}
    </div>
  )}

  {/* Row 3 – Small Left / Large Right (Mirrored) */}
  {images.length >= 7 && (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Small */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden"
      >
        <img
          src={images[5]}
          alt=""
          className="w-full h-[420px] object-cover"
        />
      </motion.div>

      {/* Large */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-2 rounded-2xl overflow-hidden"
      >
        <img
          src={images[6]}
          alt=""
          className="w-full h-[420px] object-cover"
        />
      </motion.div>
    </div>
  )}

</div>
      </div>
    </section>
  );
}
