import { useState } from "react";
import { motion } from "framer-motion";
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

const TABS = [
  { label: "Channel Letters", key: "channel-letters", icon: Type },
  { label: "Box Signs", key: "box-signs", icon: Square },
  { label: "2D & 3D Signs", key: "2d-3d-signs", icon: Layers },
  { label: "Canopy Signs", key: "canopy-signs", icon: Home },
  { label: "Blade Signs", key: "blade-signs", icon: Grid3x3 },
  { label: "Metal & Plastic", key: "metal-plastic", icon: Waves },
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
  const [activeTab, setActiveTab] = useState("channel-letters");

  const content = activeTab !== "channel-letters" ? CHANNEL_DATA[activeTab] : null;

  /* ── reusable nav button ── */
  const NavItem = ({ tab, horizontal = false }) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.key;
    return (
      <button
        onClick={() => setActiveTab(tab.key)}
        className={`flex items-center gap-2 transition-all whitespace-nowrap
          ${horizontal
            ? `px-4 py-2.5 rounded-full text-sm font-medium border
               ${isActive
                 ? "bg-neutral-800 text-[var(--color-gradient)] border-white/10"
                 : "text-neutral-400 border-transparent hover:text-neutral-200 hover:border-white/10"
               }`
            : `w-full px-4 py-3 rounded-xl sm:text-sm text-xs
               ${isActive
                 ? "bg-neutral-800 text-[var(--color-gradient)] border border-white/5"
                 : "text-neutral-500 hover:text-neutral-200"
               }`
          }`}
      >
        <Icon size={15} />
        {tab.label}
      </button>
    );
  };

  /* ── shared page content ── */
  const MainContent = () => (
    <>
      {activeTab === "channel-letters" ? (
        <>
          <div className="flex justify-end mb-12">
            <button className="px-5 py-4 rounded-full bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-[16px] hover:opacity-90 transition">
              Contact Now →
            </button>
          </div>
          <div className="space-y-10">
            {Object.entries(CHANNEL_DATA["channel-letters"]).map(([key, section]) => {
              const mainPart = section.title.replace(" Channel Letters", "");
              return (
                <div key={key} id={key} className="scroll-mt-28">
                  <h2 className="sm:text-4xl text-xl font-semibold mb-4">
                    <span className="text-[var(--color-gradient)]">{mainPart}</span>{" "}
                    <span className="text-white">Channel Letters</span>
                  </h2>
                  <p className="text-neutral-400 mb-10">{section.subtitle}</p>
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
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-semibold mb-4">{content.title}</h1>
          <p className="text-neutral-400 mb-10">{content.subtitle}</p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {content.images.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <img src={img} alt="" className="w-full rounded-xl mb-6" />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      {/* =====================================================
          DESKTOP lg+ — LEFT sidebar (original layout)
      ===================================================== */}
      <div className="hidden lg:flex min-h-screen">

        <aside className="sm:w-64 w-52 shrink-0 sticky top-0 h-screen
          border-r border-white/5 bg-neutral-900/20 backdrop-blur-xl p-6 overflow-y-auto">

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

        <main className="flex-1 px-10 py-12">
          <MainContent />
        </main>
      </div>

     {/* =====================================================
          TABLET & MOBILE < lg — sticky top dropdown nav
      ===================================================== */}
      <div className="flex lg:hidden flex-col min-h-screen">

        {/* Sticky top nav */}
        <div className="sticky top-25 z-30 border-b border-white/5
           backdrop-blur-xl px-4 sm:px-6 py-3">

          {/* Back link */}
          <Link
            to="/categories/exterior-sign"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors mb-3"
          >
            <ArrowLeft size={15} />
            <span className="text-xs uppercase tracking-widest">Go Back</span>
          </Link>

          {/* Dropdown */}
          <div className="relative">
            {(() => {
              const [open, setOpen] = useState(false);
              const activeTabData = TABS.find((t) => t.key === activeTab);
              const ActiveIcon = activeTabData?.icon;
              return (
                <>
                  <button
                    onClick={() => setOpen((p) => !p)}
                    className="w-full flex items-center justify-between gap-2
                      px-4 py-2.5 rounded-xl border border-white/10
                      bg-neutral-800 text-[var(--color-gradient)] text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      {ActiveIcon && <ActiveIcon size={15} />}
                      {activeTabData?.label}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-400"
                    >
                      ▾
                    </motion.span>
                  </button>

                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-full z-50
                        bg-neutral-900 border border-white/10 rounded-xl
                        overflow-hidden shadow-xl shadow-black/40"
                    >
                      {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.key;
                        return (
                          <button
                            key={tab.key}
                            onClick={() => { setActiveTab(tab.key); setOpen(false); }}
                            className={`w-full flex items-center gap-2.5 px-4 py-3
                              text-sm transition-colors text-left
                              ${isActive
                                ? "bg-neutral-800 text-[var(--color-gradient)]"
                                : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                              }`}
                          >
                            <Icon size={14} />
                            {tab.label}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        <main className="flex-1 px-4 sm:px-8 py-10">
          <MainContent />
        </main>
      </div>
    </>
  );
}