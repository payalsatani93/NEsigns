import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Square,
  Layers,
  Type,
  Home,
  Grid3x3,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- NAVIGATION CONFIG ---
const TABS = [
  { label: "Box Signs", key: "box-signs", icon: Square },
  { label: "2D & 3D Signs", key: "2d-3d-signs", icon: Layers },
  { label: "Channel Letters", key: "channel-letters", icon: Type },
  { label: "Canopy Signs", key: "canopy-signs", icon: Home },
  { label: "Blade Signs", key: "blade-signs", icon: Grid3x3 },
  { label: "Metal & Plastic", key: "metal-plastic", icon: Waves },
];

const CHANNEL_LETTER_TYPES = [
  { label: "Front-Lit", key: "front-lit" },
  { label: "Back-Lit", key: "back-lit" },
  { label: "Combination-Lit", key: "combination-lit" },
  { label: "Open-Face", key: "open-face" },
];

const CHANNEL_DATA = {
  "channel-letters": {
    "front-lit": {
      title: "Front-Lit Channel Letters",
      subtitle: "Bright, face-illuminated letters for maximum visibility",
      images: [
        "/images/SignageCatagory/ChannelLatter_01.png",
        "/images/SignageCatagory/ChannelLatter_02.png",
        "/images/SignageCatagory/ChannelLatter_03.png",
        "/images/SignageCatagory/ChannelLatter_04.png",
      ],
    },
    "back-lit": {
      title: "Back-Lit Channel Letters",
      subtitle: "Elegant halo-effect illumination for sophisticated branding",
      images: [
        "/images/SignageCatagory/ChannelLatter_05.png",
        "/images/SignageCatagory/ChannelLatter_06.png",
        "/images/SignageCatagory/ChannelLatter_07.png",
        "/images/SignageCatagory/ChannelLatter_08.png",
      ],
    },
    "combination-lit": {
      title: "Combination-Lit Channel Letters",
      subtitle: "Front and back illumination for stunning visual impact",
      images: [
        "/images/SignageCatagory/ChannelLatter_09.png",
        "/images/SignageCatagory/ChannelLatter_10.png",
        "/images/SignageCatagory/ChannelLatter_11.png",
        "/images/SignageCatagory/ChannelLatter_12.png",
      ],
    },
    "open-face": {
      title: "Open-Face Channel Letters",
      subtitle: "Exposed neon or LED for vibrant, retro-style signage",
      images: [
        "/images/SignageCatagory/ChannelLatter_13.png",
        "/images/SignageCatagory/ChannelLatter_14.png",
        "/images/SignageCatagory/ChannelLatter_15.png",
        "/images/SignageCatagory/ChannelLatter_16.png",
      ],
    },
  },
  "box-signs": {
    title: "Box Signs for Business Branding",
    subtitle: "Custom channel letters designed to reflect your brand identity",
    images: [
      "/images/SignageCatagory/BoxSigns-01.png",
      "/images/SignageCatagory/BoxSigns-04.png",
      "/images/SignageCatagory/BoxSigns-02.png",
      "/images/SignageCatagory/BoxSigns-05.png",
      "/images/SignageCatagory/BoxSigns-07.png",
      "/images/SignageCatagory/BoxSigns-03.png",
      "/images/SignageCatagory/BoxSigns-06.png",
    ],
  },
  "2d-3d-signs": {
    title: "Custom 2D & 3D Signage for Your Brand",
    subtitle: "High-quality 2D & 3D signs designed for maximum visibility",
    images: [
      "/images/SignageCatagory/Custum2D_3D_02.png",
      "/images/SignageCatagory/Custum2D_3D_03.png",
      "/images/SignageCatagory/Custum2D_3D_04.png",
      "/images/SignageCatagory/Custum2D_3D_05.png",
      "/images/SignageCatagory/Custum2D_3D_06.png",
      "/images/SignageCatagory/Custum2D_3D_07.png",
    ],
  },
  "canopy-signs": {
    title: "Canopy Signs That Elevate Your Brand",
    subtitle: "Custom canopy signs that combine function with brand appeal",
    images: [
      "/images/SignageCatagory/CanopySigns_01.png",
      "/images/SignageCatagory/CanopySigns_02.png",
      "/images/SignageCatagory/CanopySigns_03.png",
      "/images/SignageCatagory/CanopySigns_04.png",
      "/images/SignageCatagory/CanopySigns_05.png",
      "/images/SignageCatagory/CanopySigns_06.png",
      "/images/SignageCatagory/CanopySigns_07.png",
    ],
  },
  "blade-signs": {
    title: "Professional Blade Signage Designs",
    subtitle: "Stylish, clear designs that attract and engage customers",
    images: [
      "/images/SignageCatagory/BladeSigns_01.png",
      "/images/SignageCatagory/BladeSigns_02.png",
      "/images/SignageCatagory/BladeSigns_03.png",
      "/images/SignageCatagory/BladeSigns_04.png",
      "/images/SignageCatagory/BladeSigns_05.png",
      "/images/SignageCatagory/BladeSigns_06.png",
      "/images/SignageCatagory/BladeSigns_07.png",
    ],
  },
  "metal-plastic": {
    title: "Metal & Plastic Signs",
    subtitle: "Durable signage crafted from premium materials",
    images: [
      "/images/SignageCatagory/Metal_Plastic_Signs_01.png",
      "/images/SignageCatagory/Metal_Plastic_Signs_02.png",
      "/images/SignageCatagory/Metal_Plastic_Signs_03.png",
      "/images/SignageCatagory/Metal_Plastic_Signs_04.png",
      "/images/SignageCatagory/Metal_Plastic_Signs_05.png",
      "/images/SignageCatagory/Metal_Plastic_Signs_06.png",
      "/images/SignageCatagory/Metal_Plastic_Signs_07.png",
    ],
  },
};

export default function BuildingSignsCatagory() {
  const [activeTab, setActiveTab] = useState("box-signs");
  const [channelLetterType, setChannelLetterType] = useState("front-lit");
  const [activeSection, setActiveSection] = useState("front-lit");

  const content =
    activeTab === "channel-letters"
      ? CHANNEL_DATA["channel-letters"][channelLetterType]
      : CHANNEL_DATA[activeTab];

  return (
    <div className="bg-[#0a0a0a] text-white">
      <div className="flex max-w-[1600px] mx-auto min-h-screen">
        {/* ================= SIDEBAR (UNCHANGED) ================= */}
        <aside
          className="hidden md:block w-64 shrink-0 sticky top-0 h-screen
         border-r border-white/5 bg-neutral-900/20 backdrop-blur-xl p-6 overflow-y-auto"
        >
          <Link
            to="/categories/exterior-sign"
            className="flex items-center gap-2 text-neutral-400 hover:text-white mb-10"
          >
            <ArrowLeft size={16} />
            <span className="text-xs uppercase tracking-widest">Go Back</span>
          </Link>

          <nav className="space-y-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all
                ${
                  isActive
                    ? "bg-neutral-800 text-orange-400 border border-white/5"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 px-6 md:px-12 py-12">
          {/* ===================================================== */}
          {/* ========== ONLY CHANNEL LETTERS IS CUSTOM ========== */}
          {/* ===================================================== */}

          {activeTab === "channel-letters" ? (
            <>
             {/* ===== Top Right Contact Button ===== */}
<div className="flex justify-end mb-12">
  <button className="px-5 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
   text-white text-[16px] hover:opacity-90 transition">
    Contact Now →
  </button>
</div>

              {/* Scroll Sections */}
              <div className="space-y-32">
                {Object.entries(CHANNEL_DATA["channel-letters"]).map(
                  ([key, section]) => {
                    // Split title into first part and "Channel Letters"
                    const mainPart = section.title.replace(
                      " Channel Letters",
                      "",
                    );

                    return (
                      <div key={key} id={key} className="scroll-mt-28">
                        {/* ===== Styled Title ===== */}
                        <h2 className="text-4xl font-semibold mb-4">
                          <span className="text-yellow-400">{mainPart}</span>{" "}
                          <span className="text-white">Channel Letters</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-neutral-400 mb-10">
                          {section.subtitle}
                        </p>

                        {/* Image Grid (UNCHANGED) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {section.images.map((img, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4 }}
                              className="rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 aspect-[3/4]"
                            >
                              <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </>
          ) : (
            /* ===================================================== */
            /* ======= YOUR ORIGINAL IMAGE GRID (UNCHANGED) ======= */
            /* ===================================================== */

            <>
              {/* KEEP YOUR EXISTING HEADING */}
              <h1 className="text-4xl font-semibold mb-4">{content.title}</h1>

              <p className="text-neutral-400 mb-10">{content.subtitle}</p>

              {/* KEEP YOUR ORIGINAL MASONRY GRID EXACTLY HERE */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {content.images.map((img, i) => (
                  <div key={i} className="break-inside-avoid">
                    <img src={img} alt="" className="w-full rounded-xl mb-6" />
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
