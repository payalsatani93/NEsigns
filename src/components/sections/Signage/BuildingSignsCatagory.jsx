import { useState } from "react";
import {
  ArrowLeft,
  Square,
  Layers,
  Type,
  Home,
  Grid3x3,
  RectangleHorizontal,
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
    icon: RectangleHorizontal,
  },
];

// Sub-categories for Channel Letters
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
        "/images/SignageCatagory/ChannelLatter-01.png",
        "/images/SignageCatagory/ChannelLatter-02.png",
        "/images/SignageCatagory/ChannelLatter-03.png",
        "/images/SignageCatagory/ChannelLatter-04.png",
      ],
    },
    "back-lit": {
      title: "Back-Lit Channel Letters",
      subtitle: "Elegant halo-effect illumination for sophisticated branding",
      images: [
        "/images/SignageCatagory/ChannelLatter-05.png",
        "/images/SignageCatagory/ChannelLatter-06.png",
        "/images/SignageCatagory/ChannelLatter-07.png",
      ],
    },
    "combination-lit": {
      title: "Combination-Lit Channel Letters",
      subtitle: "Front and back illumination for stunning visual impact",
      images: [
        "/images/SignageCatagory/ChannelLatter-01.png",
        "/images/SignageCatagory/ChannelLatter-03.png",
        "/images/SignageCatagory/ChannelLatter-05.png",
      ],
    },
    "open-face": {
      title: "Open-Face Channel Letters",
      subtitle: "Exposed neon or LED for vibrant, retro-style signage",
      images: [
        "/images/SignageCatagory/ChannelLatter-02.png",
        "/images/SignageCatagory/ChannelLatter-04.png",
        "/images/SignageCatagory/ChannelLatter-06.png",
      ],
    },
  },

  "box-signs": {
    title: "Box Signs for Storefronts",
    subtitle: "Illuminated box signs for clear brand visibility",
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
    title: "2D & 3D Signs",
    subtitle: "Modern dimensional signage solutions",
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
    title: "Canopy Signs",
    subtitle: "Stylish overhead signage for storefronts",
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
    title: "Blade Signs",
    subtitle: "Eye-catching projecting signs for maximum visibility",
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

  // Get content based on active tab
  const getContent = () => {
    if (activeTab === "channel-letters") {
      return CHANNEL_DATA["channel-letters"][channelLetterType];
    }
    return CHANNEL_DATA[activeTab];
  };

  const content = getContent();

  // Distribute images into columns: tries to balance them across 3 columns
  const getImageColumns = () => {
    const images = content.images;
    const totalImages = images.length;

    // For 7 images: [0,1], [2,3,4], [5,6]
    // For other counts, distribute evenly
    if (totalImages === 7) {
      return {
        column1: images.slice(0, 2),
        column2: images.slice(2, 5),
        column3: images.slice(5, 7),
      };
    }

    // General distribution
    const itemsPerColumn = Math.ceil(totalImages / 3);
    return {
      column1: images.slice(0, itemsPerColumn),
      column2: images.slice(itemsPerColumn, itemsPerColumn * 2),
      column3: images.slice(itemsPerColumn * 2),
    };
  };

  const columns = getImageColumns();

  return (
    <div className="">
      <header className="px-4">
        <Link
          to="/services/signage"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </header>
      <div className="container ">
        {/* Main Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 ">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium bg-[var(--color-graybg)]
                  transition-all duration-300 flex items-center gap-2
                  ${
                    activeTab === tab.key
                      ? "text-white shadow-[0px_4px_4px_0px_#F79C29]"
                      : "text-neutral-300 shadow-[0px_4px_4px_0px_#FFFFFF] hover:text-white"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Channel Letters Sub-Category Tabs */}
        {activeTab === "channel-letters" && (
          <div className="flex flex-wrap gap-3 mb-12 pl-4">
            {CHANNEL_LETTER_TYPES.map((type) => (
              <button
                key={type.key}
                onClick={() => setChannelLetterType(type.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    channelLetterType === type.key
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black"
                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                  }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        )}

        {/* Heading + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 py-10">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-3">
              {content.title}
            </h1>
            <p className="text-gray-400 max-w-xl">{content.subtitle}</p>
          </div>

          {/* Right CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black
                 hover:from-amber-400 hover:to-orange-400 active:scale-95 transition-all duration-300"
          >
            Contact Us
            <ArrowLeft className="rotate-180 w-5 h-5" />
          </Link>
        </div>

        {/* Masonry Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {columns.column1.map((img, index) => (
              <div
                key={`col1-${index}`}
                className="rounded-2xl overflow-hidden bg-neutral-900"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {columns.column2.map((img, index) => (
              <div
                key={`col2-${index}`}
                className="rounded-2xl overflow-hidden bg-neutral-900"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {columns.column3.map((img, index) => (
              <div
                key={`col3-${index}`}
                className="rounded-2xl overflow-hidden bg-neutral-900"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
