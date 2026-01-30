import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


const TABS = [
  { label: "Box Signs", key: "box-signs" },
  { label: "2D & 3D Signs", key: "2d-3d-signs" },
  { label: "Channel Letters", key: "channel-letters" },
  { label: "Canopy Signs", key: "canopy-signs" },
  { label: "Window Signs", key: "window-signs" },
  { label: "Metal & Plastic Signs", key: "metal-plastic" },
];

const CHANNEL_DATA = {
  "channel-letters": {
    title: "Channel Letters for Business Branding",
    subtitle: "Custom channel letters designed to reflect your brand identity",
    images: [
      "/images/SignageCatagory/ChannelLatter-01.png",
      "/images/SignageCatagory/ChannelLatter-02.png",
       "/images/SignageCatagory/ChannelLatter-03.png",
      "/images/SignageCatagory/ChannelLatter-04.png",
      "/images/SignageCatagory/ChannelLatter-05.png",
      "/images/SignageCatagory/ChannelLatter-06.png",
       "/images/SignageCatagory/ChannelLatter-07.png",
    ],
  },

  "box-signs": {
    title: "Box Signs for Storefronts",
    subtitle: "Illuminated box signs for clear brand visibility",
    images: [
      "/img/box-1.jpg",
      "/img/box-2.jpg",
      "/img/box-3.jpg",
      "/img/box-4.jpg",
      "/img/box-5.jpg",
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
      "/img/canopy-1.jpg",
      "/img/canopy-2.jpg",
      "/img/canopy-3.jpg",
    ],
  },

  "window-signs": {
    title: "Window Signs",
    subtitle: "Attractive signage for glass and storefront windows",
    images: [
      "/img/window-1.jpg",
      "/img/window-2.jpg",
      "/img/window-3.jpg",
    ],
  },

  "metal-plastic": {
    title: "Metal & Plastic Signs",
    subtitle: "Durable signage crafted from premium materials",
    images: [
      "/img/metal-1.jpg",
      "/img/metal-2.jpg",
      "/img/metal-3.jpg",
    ],
  },
};


export default function BuildingSignsCatagory() {
  const [activeTab, setActiveTab] = useState("channel-letters");

 const content = CHANNEL_DATA[activeTab];


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <header className="px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/services/signage"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full border text-sm transition
                ${
                  activeTab === tab.key
                    ? "border-white bg-white/10 text-white"
                    : "border-white/20 text-gray-400 hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-3">
          {content.title}
        </h1>
        <p className="text-gray-400 mb-14 max-w-xl">
          {content.subtitle}
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {content.images.map((img, index) => (
            <div
              key={index}
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
  );
}
