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
    <section className="px-4">
      {/* Back Arrow */}
      <Link
        to="/categories/exterior-sign"
        className="inline-flex items-center text-neutral-400 hover:text-white transition"
      >
        <ArrowLeft size={22} />
      </Link>

      <div className="container">
        {/* ================= TABS ================= */}
        <div className="flex flex-wrap gap-4 mb-10">
          {TABS.map(({ label, key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                window.history.replaceState(null, "", `?tab=${key}`);
              }}
              className={`group relative px-6 py-3 rounded-full text-sm font-medium
                transition-all duration-300 flex items-center gap-2
                ${
                  activeTab === key
                    ? "text-white shadow-[0_4px_4px_#F79C29]"
                    : "text-neutral-300 shadow-[0_4px_4px_#fff]"
                }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* ================= HERO ================= */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-center gap-4 sm:py-10 py-5">
          <div>
            <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold mb-3">
              {content.title}
            </h1>
            <p className="text-gray-400 lg:max-w-xl lg:text-md text-sm">
              {content.subtitle}
            </p>
          </div>

          <Link
            to="/contact"
            className="px-4 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-sm text-black flex items-center gap-3"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* ================= IMAGE GRID (UNCHANGED) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          <div className="flex items-center">
            <ImageCard src={images[0]} />
          </div>

          <div className="flex flex-col gap-6">
            <ImageCard src={images[1]} />
            <ImageCard src={images[2]} />
          </div>

          <div className="flex items-start">
            <ImageCard src={images[3]} tall />
          </div>

          <div className="flex flex-col gap-6 justify-end">
            <ImageCard src={images[4]} />
            <ImageCard src={images[5]} />
          </div>

          <div className="flex items-center">
            <ImageCard src={images[6]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= IMAGE CARD ================= */
function ImageCard({ src, tall = false }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-neutral-900 w-full
        ${tall ? "h-[520px]" : "h-[250px]"}`}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>
  );
}
