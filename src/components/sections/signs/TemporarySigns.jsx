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

  /* ================= NAV BUTTON ================= */
  const NavItem = ({ tab, horizontal = false }) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.key;

    return (
      <button
        onClick={() => setActiveTab(tab.key)}
        className={`flex items-center gap-2 transition-all whitespace-nowrap
          ${
            horizontal
              ? `px-4 py-2.5 rounded-full text-sm font-medium border
                 ${
                   isActive
                     ? "bg-neutral-800 text-orange-400 border-white/10"
                     : "text-neutral-400 border-transparent hover:text-neutral-200 hover:border-white/10"
                 }`
              : `w-full px-4 py-3 rounded-xl sm:text-sm text-xs
                 ${
                   isActive
                     ? "bg-neutral-800 text-orange-400 border border-white/5"
                     : "text-neutral-500 hover:text-neutral-200"
                 }`
          }`}
      >
        <Icon size={15} />
        {tab.label}
      </button>
    );
  };

  return (
    <>
      {/* =====================================================
          DESKTOP (lg+) — ORIGINAL SIDEBAR
      ===================================================== */}
      <div className="hidden lg:flex min-h-screen">

        <aside className="sm:w-64 w-44 shrink-0 sticky top-0 h-screen
          border-r border-white/5 bg-neutral-900/20 backdrop-blur-xl sm:p-6 p-3 overflow-y-auto">

          <Link
            to="/categories/exterior-sign"
            className="flex items-center gap-2 text-neutral-400 hover:text-white mb-10 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-xs uppercase tracking-widest">Go Back</span>
          </Link>

          <nav className="space-y-2">
            {TABS.map((tab) => (
              <NavItem key={tab.key} tab={tab} />
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-6 md:px-10 py-12 relative">
          <MainContent content={content} images={images} activeTab={activeTab} />
        </main>
      </div>

      {/* =====================================================
          TABLET & MOBILE (< lg) — TOP HORIZONTAL NAV
      ===================================================== */}
      <div className="flex lg:hidden flex-col min-h-screen">

        {/* Sticky Top Nav */}
        <div className="sticky top-25 z-30
          bg-neutral-900/80 backdrop-blur-xl px-4 sm:px-6 py-3 border-b border-white/5">

          <Link
            to="/categories/exterior-sign"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors mb-3"
          >
            <ArrowLeft size={15} />
            <span className="text-xs uppercase tracking-widest">Go Back</span>
          </Link>

          <nav className="flex gap-2 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth">
            {TABS.map((tab) => (
              <NavItem key={tab.key} tab={tab} horizontal />
            ))}
          </nav>
        </div>

        <main className="flex-1 px-4 sm:px-8 py-10 relative">
          <MainContent content={content} images={images} activeTab={activeTab} />
        </main>
      </div>
    </>
  );
}

/* ================= MAIN CONTENT ================= */
function MainContent({ content, images, activeTab }) {
  return (
    <>
      {/* Background Patch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute md:w-[400px] md:h-[600px] w-40 h-40
          top-[-20px] right-0
          bg-[var(--color-patch)]
          rounded-full blur-[250px]
          pointer-events-none"
      />

      {/* Heading + CTA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + "-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row justify-between lg:items-end items-start 
          gap-4 sm:py-10 py-5"
        >
          <div>
            <h1 className="text-xl xl:text-4xl font-semibold mb-3">
              {content.title}
            </h1>
            <p className="text-gray-400 lg:max-w-xl lg:text-md text-sm">
              {content.subtitle}
            </p>
          </div>

          <Link
            to="/contactUs"
            className="sm:px-5 px-3 sm:py-4 py-3 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-white sm:text-[16px] text-xs flex items-center gap-3"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* IMAGE GRID — ORIGINAL LAYOUT PRESERVED */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + "-images"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch"
        >
          <div className="flex items-center">
            <ImageCard src={images[0]} index={0} />
          </div>

          <div className="flex flex-col gap-6">
            <ImageCard src={images[1]} index={1} />
            <ImageCard src={images[2]} index={2} />
          </div>

          <div className="flex items-start">
            <ImageCard src={images[3]} index={3} tall />
          </div>

          <div className="flex flex-col gap-6 justify-end">
            <ImageCard src={images[4]} index={4} />
            <ImageCard src={images[5]} index={5} />
          </div>

          <div className="flex items-center">
            <ImageCard src={images[6]} index={6} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/* ================= IMAGE CARD ================= */
function ImageCard({ src, tall = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
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