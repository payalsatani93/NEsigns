import {
  ArrowLeft,
  Landmark,
  TriangleDashed,
  ParkingCircle,
  Van,
  ParkingMeter,
  Columns4,
  Milestone,
  SignpostBig,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";

/* ======================= TABS ======================= */
const TABS = [
  { label: "Monument Signs", key: "monument", icon: Landmark },
  { label: "Pylon Signs", key: "pylon", icon: TriangleDashed },
  { label: "Post and Panel Signs", key: "post_panel", icon: SignpostBig },
  { label: "Parking Signs", key: "parking", icon: ParkingCircle },
  { label: "Curbside Pickup Signs", key: "cabsideparking", icon: Van },
  { label: "Wayfinding Signs", key: "wayfinding", icon: Milestone },
  { label: "Drive Thru canopy Signs", key: "drivethru", icon: ParkingMeter },
  { label: "Clearance Bar", key: "clearance_bar", icon: Columns4 },
];

/* ======================= DATA ======================= */
const DATA = {
  monument: {
    title: "Monument Signage That Elevates Your Brand",
    subtitle:
      "Custom-built monument signs designed for long-lasting visibility",
    images: [
      "/images/FreestandingSignageCatagory/Monument_Sig_01.png",
      "/images/FreestandingSignageCatagory/Monument_Sig_02.png",
      "/images/FreestandingSignageCatagory/Monument_Sig_03.png",
      "/images/FreestandingSignageCatagory/Monument_Sig_04.png",
      "/images/FreestandingSignageCatagory/Monument_Sig_05.png",
      "/images/FreestandingSignageCatagory/Monument_Sig_06.png",
    ],
  },
  pylon: {
    title: "Freestanding Pylon Signs for Your Business",
    subtitle: "Make your brand visible from a distance with bold pylon signage",
    images: [
      "/images/FreestandingSignageCatagory/Pylon_Signs_01.png",
      "/images/FreestandingSignageCatagory/Pylon_Signs_02.png",
      "/images/FreestandingSignageCatagory/Pylon_Signs_03.png",
      "/images/FreestandingSignageCatagory/Pylon_Signs_04.png",
      "/images/FreestandingSignageCatagory/Pylon_Signs_05.png",
      "/images/FreestandingSignageCatagory/Pylon_Signs_06.png",
    ],
  },
  post_panel: {
    title: "Simple post & panel signs for clear identification",
    subtitle: "Ideal for real estate, construction, and commercial use",
    images: [
      "/images/FreestandingSignageCatagory/Post_Panel_Sig_01.png",
      "/images/FreestandingSignageCatagory/Post_Panel_Sig_02.png",
      "/images/FreestandingSignageCatagory/Post_Panel_Sig_03.png",
      "/images/FreestandingSignageCatagory/Post_Panel_Sig_04.png",
      "/images/FreestandingSignageCatagory/Post_Panel_Sig_05.png",
      "/images/FreestandingSignageCatagory/Post_Panel_Sig_06.png",
    ],
  },
  parking: {
    title: "Simple Parking Signs for Better Navigation",
    subtitle: "Clear parking guidance for hassle-free movement",
    images: [
      "/images/FreestandingSignageCatagory/Parking_Sig_01.png",
      "/images/FreestandingSignageCatagory/Parking_Sig_02.png",
      "/images/FreestandingSignageCatagory/Parking_Sig_03.png",
      "/images/FreestandingSignageCatagory/Parking_Sig_04.png",
      "/images/FreestandingSignageCatagory/Parking_Sig_05.png",
      "/images/FreestandingSignageCatagory/Parking_Sig_06.png",
    ],
  },
  cabsideparking: {
    title: "Curbside Pickup Signs for Easy Identification",
    subtitle: "Reduce confusion with clearly marked pickup areas",
    images: [
      "/images/FreestandingSignageCatagory/Carbside_Pickup_Sig_01.png",
      "/images/FreestandingSignageCatagory/Carbside_Pickup_Sig_02.png",
      "/images/FreestandingSignageCatagory/Carbside_Pickup_Sig_03.png",
      "/images/FreestandingSignageCatagory/Carbside_Pickup_Sig_04.png",
      "/images/FreestandingSignageCatagory/Carbside_Pickup_Sig_05.png",
      "/images/FreestandingSignageCatagory/Carbside_Pickup_Sig_06.png",
    ],
  },
  wayfinding: {
    title: "Wayfinding Signs That Guide With Ease",
    subtitle: "Directional signage designed for clarity and flow",
    images: [
      "/images/FreestandingSignageCatagory/Wayfinding_Sig_01.png",
      "/images/FreestandingSignageCatagory/Wayfinding_Sig_02.png",
      "/images/FreestandingSignageCatagory/Wayfinding_Sig_03.png",
      "/images/FreestandingSignageCatagory/Wayfinding_Sig_04.png",
      "/images/FreestandingSignageCatagory/Wayfinding_Sig_05.png",
      "/images/FreestandingSignageCatagory/Wayfinding_Sig_06.png",
    ],
  },
  drivethru: {
    title: "Drive Thru Canopy Signs for Clear Direction",
    subtitle: "Designed to improve flow and reduce driver confusion",
    images: [
      "/images/FreestandingSignageCatagory/Drive_Thru_01.png",
      "/images/FreestandingSignageCatagory/Drive_Thru_02.png",
      "/images/FreestandingSignageCatagory/Drive_Thru_03.png",
      "/images/FreestandingSignageCatagory/Drive_Thru_04.png",
      "/images/FreestandingSignageCatagory/Drive_Thru_05.png",
      "/images/FreestandingSignageCatagory/Drive_Thru_06.png",
    ],
  },
  clearance_bar: {
    title: "Clearance Bar Signs for Safe Vehicle Entry",
    subtitle: "Designed to ensure safe access for all vehicles",
    images: [
      "/images/FreestandingSignageCatagory/Clearance_Bar_Sig_01.png",
      "/images/FreestandingSignageCatagory/Clearance_Bar_Sig_02.png",
      "/images/FreestandingSignageCatagory/Clearance_Bar_Sig_03.png",
      "/images/FreestandingSignageCatagory/Clearance_Bar_Sig_04.png",
      "/images/FreestandingSignageCatagory/Clearance_Bar_Sig_05.png",
      "/images/FreestandingSignageCatagory/Clearance_Bar_Sig_06.png",
    ],
  },
};

export default function FreestandingSignsCategory() {
  const [searchParams] = useSearchParams();
  const urlTab = searchParams.get("tab") || "monument";
  const [activeTab, setActiveTab] = useState(urlTab);

  useEffect(() => {
    if (DATA[urlTab]) setActiveTab(urlTab);
  }, [urlTab]);

  const content = DATA[activeTab] || DATA.monument;

  const handleTabChange = (key) => {
    setActiveTab(key);
    window.history.replaceState(null, "", `?tab=${key}`);
  };

  /* ========== NAV BUTTON (Reusable) ========== */
  const NavItem = ({ tab, horizontal = false }) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.key;

    return (
      <button
        onClick={() => handleTabChange(tab.key)}
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
          DESKTOP (lg+) — ORIGINAL SIDEBAR (UNCHANGED)
      ===================================================== */}
      <div className="hidden lg:flex min-h-screen">
        <aside
          className="sm:w-64 w-44 shrink-0 sticky top-0 h-screen
          border-r border-white/5 bg-neutral-900/20 backdrop-blur-xl sm:p-6 p-3 overflow-y-auto"
        >
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

        <main className="flex-1 px-12 py-12 relative">
          <MainContent content={content} activeTab={activeTab} />
        </main>
      </div>

      {/* =====================================================
          TABLET & MOBILE (< lg) — TOP HORIZONTAL NAV
      ===================================================== */}
      <div className="flex lg:hidden flex-col min-h-screen">
        {/* Sticky Top Nav */}
        <div
          className="sticky top-25 z-30
          bg-neutral-900/80 backdrop-blur-xl px-4 sm:px-6 py-3 border-b border-white/5"
        >
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
          <MainContent content={content} activeTab={activeTab} />
        </main>
      </div>
    </>
  );
}

/* =======================
   MAIN CONTENT COMPONENT
   (Layout EXACTLY SAME)
======================= */
function MainContent({ content, activeTab }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + "-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row justify-between lg:items-end items-start gap-2 mb-10"
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
            className="md:px-4 px-3 md:py-4 py-2 rounded-full
              bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
              md:text-sm text-xs text-black flex items-center gap-3"
          >
            Contact Us
            <ArrowLeft className="rotate-180 w-5 h-5" />
          </Link>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + "-images"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {content.images.map((img, index) => {
            const isLarge = index === 0 || index === 5;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`rounded-2xl overflow-hidden bg-neutral-900 ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
