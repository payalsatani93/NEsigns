import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Square,
  Layers,
  Type,
  Home,
  Grid3x3,
  Bandage,
} from "lucide-react";
import { Link } from "react-router-dom";

const TABS = [
  { label: "Box Signs", key: "box-signs", icon: Square },
  { label: "2D & 3D Signs", key: "2d-3d-signs", icon: Layers },
  { label: "Channel Letters", key: "channel-letters", icon: Type },
  { label: "Canopy Signs", key: "canopy-signs", icon: Home },
  { label: "Blade Signs", key: "blade-signs", icon: Grid3x3 },
  {
    label: "Metal & Plastic Signs",
    key: "metal-plastic",
    icon: Bandage,
  },
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
    subtitle: "SCustom canopy signs that combine function with brand appeal",
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
  const [channelLetterType, setChannelLetterType] = useState("front-lit");

  const content =
    activeTab === "channel-letters"
      ? CHANNEL_DATA["channel-letters"][channelLetterType]
      : CHANNEL_DATA[activeTab];

  // Masonry logic for non-channel tabs
  const getColumns = () => {
    const images = content.images;
    if (images.length === 7) {
      return {
        c1: images.slice(0, 2),
        c2: images.slice(2, 5),
        c3: images.slice(5),
      };
    }
    const perCol = Math.ceil(images.length / 3);
    return {
      c1: images.slice(0, perCol),
      c2: images.slice(perCol, perCol * 2),
      c3: images.slice(perCol * 2),
    };
  };

  const columns = getColumns();

  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative px-10 mt-10"
      >
        <Link to="/categories/exterior-sign" className="text-neutral-400 hover:text-white">
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </motion.header>

      {/* Golden Background left side Patch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute md:w-[508px] md:h-[508px] w-100 h-100 z-0
             top-[0] right-[0]
             bg-[var(--color-patch)]
             opacity-100
             rounded-full
             blur-[250px]
             pointer-events-none"
      />

      <div className="container">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {TABS.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm transition
                  ${
                    activeTab === tab.key
                      ? "text-white shadow-[0_4px_4px_#F2AC42]"
                      : "text-neutral-300 shadow-[0_4px_4px_#fff]"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Channel sub-tabs */}
        <AnimatePresence mode="wait">
          {activeTab === "channel-letters" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {CHANNEL_LETTER_TYPES.map((type, index) => (
                <motion.button
                  key={type.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setChannelLetterType(type.key)}
                  className={`px-5 py-2.5 rounded-full text-sm
                    ${
                      channelLetterType === type.key
                        ? "bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black"
                        : "bg-neutral-800 text-neutral-300"
                    }`}
                >
                  {type.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heading + CTA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + channelLetterType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row justify-between md:items-end items-center gap-4 sm:py-10 py-5"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3"
              >
                {content.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 max-w-xl md:text-md text-sm"
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
                className="px-4 py-4 rounded-full bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-sm
                text-black flex items-center gap-3"
              >
                Contact Us
                <ArrowLeft className="rotate-180 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Images */}
        <AnimatePresence mode="wait">
          {activeTab === "channel-letters" ? (
            /* Channel Letters: 4 per row */
            <motion.div
              key={activeTab + channelLetterType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {content.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * i,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl overflow-hidden bg-neutral-900"
                >
                  <motion.img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Other tabs: masonry */
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[columns.c1, columns.c2, columns.c3].map((col, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx * 20 - 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex flex-col gap-6"
                >
                  {col.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * (idx + i),
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="rounded-2xl overflow-hidden bg-neutral-900"
                    >
                      <motion.img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}