import {
  ArrowLeft,
  ArrowRight,
  Landmark,
  TriangleDashed,
  SignpostBig,
  Flag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { label: "Sandwich Boards", key: "sandwich_boards", icon: Landmark },
  { label: "Banners", key: "banners", icon: TriangleDashed },
  { label: "Custom Pop-Up Tents", key: "custom_popup", icon: SignpostBig },
  { label: "Flags", key: "flags", icon: Flag },
];

const DATA = {
  sandwich_boards: {
    title: "Sandwich Boards for High-Visibility Advertising",
    subtitle: "Easy-to-move boards that make your message stand out",
    images: [
      "/images/TemporarySigCatagory/Sandwich_Board_01.png",
      "/images/TemporarySigCatagory/Sandwich_Board_02.png",
      "/images/TemporarySigCatagory/Sandwich_Board_03.png",
      "/images/TemporarySigCatagory/Sandwich_Board_04.png",
      "/images/TemporarySigCatagory/Sandwich_Board_05.png",
      "/images/TemporarySigCatagory/Sandwich_Board_06.png",
      "/images/TemporarySigCatagory/Sandwich_Board_07.png",
    ],
  },
  banners: {
    title: "High-Quality Banners for Indoor & Outdoor Use",
    subtitle: "Weather-resistant banners that keep your brand visible",
    images: [
      "/images/TemporarySigCatagory/Banners_01.png",
      "/images/TemporarySigCatagory/Banners_02.png",
      "/images/TemporarySigCatagory/Banners_03.png",
      "/images/TemporarySigCatagory/Banners_04.png",
      "/images/TemporarySigCatagory/Banners_05.png",
      "/images/TemporarySigCatagory/Banners_06.png",
      "/images/TemporarySigCatagory/Banners_07.png",
    ],
  },
  custom_popup: {
    title: "Custom Pop-Up Tents for Indoor & Outdoor Events",
    subtitle: "Promote your brand anywhere with high-impact custom tents",
    images: [
      "/images/TemporarySigCatagory/Custom_Popup_Tents_01.png",
      "/images/TemporarySigCatagory/Custom_Popup_Tents_02.png",
      "/images/TemporarySigCatagory/Custom_Popup_Tents_03.png",
      "/images/TemporarySigCatagory/Custom_Popup_Tents_04.png",
      "/images/TemporarySigCatagory/Custom_Popup_Tents_05.png",
      "/images/TemporarySigCatagory/Custom_Popup_Tents_06.png",
      "/images/TemporarySigCatagory/Custom_Popup_Tents_07.png",
    ],
  },
  flags: {
    title: "Simple Parking Signs for Better Navigation",
    subtitle: "Clear parking guidance for hassle-free movement",
    images: [
      "/images/TemporarySigCatagory/Flags_01.png",
      "/images/TemporarySigCatagory/Flags_02.png",
      "/images/TemporarySigCatagory/Flags_03.png",
      "/images/TemporarySigCatagory/Flags_04.png",
      "/images/TemporarySigCatagory/Flags_05.png",
      "/images/TemporarySigCatagory/Flags_06.png",
      "/images/TemporarySigCatagory/Flags_07.png",
    ],
  },
};

export default function TemporarySigns() {
  const [activeTab, setActiveTab] = useState("sandwich_boards");

  const content = DATA[activeTab];
  const images = content.images;

  return (
    <section className="">
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
      {/* Back Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/categories/exterior-sign"
          className="inline-flex items-center text-neutral-400 hover:text-white transition px-4 mt-10"
        >
          <ArrowLeft size={26} />
        </Link>
      </motion.div>

      <div className="container">
        {/* ================= TABS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {TABS.map(({ label, key, icon: Icon }, index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab(key);
                window.history.replaceState(null, "", `?tab=${key}`);
              }}
              className={`group relative px-6 py-3 rounded-full text-sm font-medium
                transition-all duration-300 flex items-center gap-2
                ${
                  activeTab === key
                    ? "text-white shadow-[0_4px_4px_#F2AC42]"
                    : "text-neutral-300 shadow-[0_4px_4px_#fff]"
                }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* ================= HERO ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row justify-between lg:items-end items-center gap-4 sm:py-10 py-5"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-3xl xl:text-4xl font-semibold mb-3"
              >
                {content.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 lg:max-w-xl lg:text-md text-sm"
              >
                {content.subtitle}
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
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ================= IMAGE GRID ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              <ImageCard src={images[0]} index={0} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <ImageCard src={images[1]} index={1} />
              <ImageCard src={images[2]} index={2} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start"
            >
              <ImageCard src={images[3]} index={3} tall />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col gap-6 justify-end"
            >
              <ImageCard src={images[4]} index={4} />
              <ImageCard src={images[5]} index={5} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center"
            >
              <ImageCard src={images[6]} index={6} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ================= IMAGE CARD ================= */
function ImageCard({ src, tall = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05 * index,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`rounded-2xl overflow-hidden bg-neutral-900 w-full
        ${tall ? "h-[520px]" : "h-[250px]"}`}
    >
      <motion.img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}