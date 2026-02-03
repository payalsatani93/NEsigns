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
import { useSearchParams, Link } from "react-router-dom";

/* =======================
   TABS
======================= */
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

/* =======================
   DATA
======================= */
const DATA = {
  monument: {
    title: "Monument Signage That Elevates Your Brand",
    subtitle: "Custom-built monument signs designed for long-lasting visibility",
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

  /* ✅ sync tab on refresh / navigation */
  useEffect(() => {
    if (DATA[urlTab]) {
      setActiveTab(urlTab);
    }
  }, [urlTab]);

  const content = DATA[activeTab] || DATA.monument;

  return (
    <div>
      {/* Back */}
      <header className="px-4">
        <Link
          to="/categories/exterior-sign"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </header>

      <div className="container">
        {/* ================= TABS ================= */}
        <div className="flex flex-wrap gap-4 mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  window.history.replaceState(null, "", `?tab=${tab.key}`);
                }}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium
                transition-all duration-300 flex items-center gap-2
                ${
                  activeTab === tab.key
                    ? "text-white shadow-[0_4px_4px_#F79C29]"
                    : "text-neutral-300 shadow-[0_4px_4px_#fff]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= HEADING + CTA ================= */}
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
            <ArrowLeft className="rotate-180 w-5 h-5" />
          </Link>
        </div>

        {/* ================= IMAGES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {content.images.map((img, index) => {
            const isLarge = index === 0 || index === 5;
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden bg-neutral-900 ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
