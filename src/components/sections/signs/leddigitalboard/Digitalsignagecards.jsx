import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { CircleCheck, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    id: 1,
    title: "Churches",
    icon: "mdi:church",
    color: "#F59E0B",
    tagline: "Ministry Communication",
    short:
      "Our church LED signs and digital display boards help ministries communicate effectively.",
    label: "CHURCHES DIGITAL LED SIGNS",
    modalTitle: "Inspire, Inform & Grow Your Congregation.",
    modalSubtitle:
      "More than just technology—a gateway to deeper connection with your community.",
    modalDesc:
      "Our church LED signs and digital display boards help ministries communicate service times, sermon series, Bible verses, and community events with clarity and impact.",
    whyChoose: [
      "Display weekly service schedules",
      "Promote special events & conferences",
      "Share inspirational messages 24/7",
      "Update content remotely in minutes",
    ],
    subCards: [
      {
        icon: "ph:sun-bold",
        title: "Outdoor Church LED Signs",
        desc: "Weatherproof, high-brightness boards ensuring your message radiates day and night.",
      },
      {
        icon: "mdi:television-play",
        title: "Indoor Church LED Screens",
        desc: "Perfect for worship lyrics, sermon visuals, and seamless live streaming integration.",
      },
    ],
    btnText: "Get a custom church LED sign quote",
    image: "/images/digitalboard/1.png",
  },
  {
    id: 2,
    title: "Bars & Restaurants",
    icon: "mdi:silverware-fork-knife",
    color: "#F59E0B",
    tagline: "Attract More Customers",
    short:
      "Upgrade your marketing with restaurant digital signage and LED menu boards.",
    label: "BARS & RESTAURANTS LED DISPLAYS",
    modalTitle:
      "Restaurant & Bar Digital LED Boards — Attract More Customers & Increase Daily Sales",
    modalDesc:
      "Upgrade your marketing with restaurant digital signage and LED menu boards that captivate customers and drive daily sales.",
    idealFor: [
      "Daily specials",
      "Happy hour promotions",
      "Live music announcements",
      "Digital menu boards",
    ],
    benefits: [
      "Instant content updates",
      "Increased foot traffic",
      "Modern customer experience",
      "Higher upsell rates",
    ],
    btnText: "Get a custom restaurant LED sign quote",
    image: "/images/digitalboard/2.png",
  },
  {
    id: 3,
    title: "Events & Concert",
    icon: "mdi:microphone-variant",
    color: "#8B5CF6",
    tagline: "Unforgettable Visual Experiences",
    short:
      "Our LED video walls for events create stunning visual backdrops for any crowd.",
    label: "EVENTS & CONCERT LED DISPLAYS",
    modalTitle:
      "Event & Concert LED Video Walls — Create Unforgettable Visual Experiences",
    modalDesc:
      "Our LED video walls for events and concerts deliver jaw-dropping clarity for audiences of any size.",
    idealFor: [
      "Stage backdrops",
      "Live score displays",
      "Sponsor branding",
      "Crowd engagement",
    ],
    benefits: [
      "Ultra-high brightness",
      "Seamless tiling",
      "Fast deployment",
      "Rental packages available",
    ],
    btnText: "Get a custom event LED quote",
    image: "/images/digitalboard/3.png",
  },
  {
    id: 4,
    title: "Outdoor Billboards",
    icon: "mdi:billboard",
    color: "#EF4444",
    tagline: "Maximize Visibility & Revenue",
    short:
      "Our outdoor LED billboards deliver maximum visibility day and night.",
    label: "OUTDOOR BILLBOARD LED DISPLAYS",
    modalTitle:
      "Outdoor LED Billboards — Maximize Visibility & Advertising Revenue",
    modalDesc:
      "Our outdoor LED billboards deliver brilliant, weatherproof visibility that generates income around the clock.",
    idealFor: [
      "Highway advertising",
      "Local business promos",
      "Multi-advertiser rotation",
      "Real estate listings",
    ],
    benefits: [
      "24/7 visibility",
      "Dynamic ad rotation",
      "IP65 weatherproofing",
      "Remote scheduling",
    ],
    btnText: "Get a custom billboard LED quote",
    image: "/images/digitalboard/4.png",
  },
  {
    id: 5,
    title: "Outdoor LED Signs",
    icon: "mdi:television-shimmer",
    color: "#F97316",
    tagline: "Built for Performance & Durability",
    short:
      "Our weatherproof outdoor LED signs perform in any climate, year-round.",
    label: "OUTDOOR LED SIGN DISPLAYS",
    modalTitle: "Outdoor LED Signs — Built for Performance & Durability",
    modalDesc:
      "Our weatherproof outdoor LED signs are engineered to perform in extreme weather, keeping your message visible year-round.",
    idealFor: [
      "Storefront signs",
      "Monument signs",
      "Road-side displays",
      "Directional signage",
    ],
    benefits: [
      "IP65 rated",
      "Wide temperature range",
      "High brightness panels",
      "5-year warranty",
    ],
    btnText: "Get a custom outdoor LED quote",
    image: "/images/digitalboard/5.png",
  },
  {
    id: 6,
    title: "Schools & UNI",
    icon: "mdi:school",
    color: "#0EA5E9",
    tagline: "Improve Campus Communication",
    short:
      "Our school LED display boards keep students and staff informed in real-time.",
    label: "SCHOOLS & UNIVERSITY LED DISPLAYS",
    modalTitle:
      "School & University LED Boards — Improve Communication Across Campus",
    modalDesc:
      "Our school LED display boards keep students, staff, and visitors informed with real-time updates and announcements.",
    idealFor: [
      "Campus announcements",
      "Event schedules",
      "Safety alerts",
      "Sports scoreboards",
    ],
    benefits: [
      "Easy content management",
      "Multi-zone displays",
      "ADA compliant",
      "Durable construction",
    ],
    btnText: "Get a custom campus LED quote",
    image: "/images/digitalboard/6.png",
  },
  {
    id: 7,
    title: "Automotive",
    icon: "mdi:car-settings",
    color: "#6366F1",
    tagline: "Drive Traffic. Increase Sales.",
    short: "Showcase promotions and inventory with dynamic digital displays.",
    label: "AUTOMOTIVE LED DISPLAYS",
    modalTitle:
      "Automotive LED Displays — Drive Traffic & Increase Daily Sales",
    modalDesc:
      "Showcase your inventory, promotions, and special financing offers with eye-catching dynamic LED displays.",
    idealFor: [
      "New vehicle promotions",
      "Service department deals",
      "Finance rate displays",
      "Lot directional signage",
    ],
    benefits: [
      "High-glare rejection",
      "Live inventory feeds",
      "Custom animation",
      "Dealer brand compliance",
    ],
    btnText: "Get a custom auto dealer LED quote",
    image: "/images/digitalboard/7.png",
  },
  {
    id: 8,
    title: "Hospitality",
    icon: "mdi:hotel",
    color: "#EC4899",
    tagline: "Elevate Guest Experience",
    short:
      "Our hospitality LED screens enhance communication and branding seamlessly.",
    label: "HOSPITALITY LED DISPLAYS",
    modalTitle: "Hospitality LED Screens — Elevate Guest Experience",
    modalDesc:
      "Our hospitality LED screens blend seamlessly into your environment, delivering personalized guest communications.",
    idealFor: [
      "Lobby welcome screens",
      "Event board displays",
      "Restaurant digital menus",
      "Wayfinding systems",
    ],
    benefits: [
      "Luxury aesthetics",
      "Low-profile mounting",
      "Central CMS control",
      "Custom content branding",
    ],
    btnText: "Get a custom hospitality LED quote",
    image: "/images/digitalboard/8.png",
  },
  {
    id: 9,
    title: "Healthcare",
    icon: "mdi:hospital-building",
    color: "#14B8A6",
    tagline: "Clear Communication When It Matters",
    short:
      "Our medical facility LED displays guide patients with clarity and ease.",
    label: "HEALTHCARE LED DISPLAYS",
    modalTitle:
      "Healthcare LED Displays — Clear Communication When It Matters Most",
    modalDesc:
      "Our medical facility LED displays guide patients, reduce anxiety, and improve operational efficiency.",
    idealFor: [
      "Queue management",
      "Wayfinding displays",
      "Health awareness boards",
      "Waiting room info",
    ],
    benefits: [
      "Low flicker panels",
      "HIPAA-conscious design",
      "Easy remote updates",
      "Infection-resistant surfaces",
    ],
    btnText: "Get a custom healthcare LED quote",
    image: "/images/digitalboard/9.png",
  },
  {
    id: 10,
    title: "Shopping Mall",
    icon: "mdi:shopping-outline",
    color: "#D946EF",
    tagline: "Capture High-Traffic Attention",
    short:
      "Engage shoppers with large-scale dynamic LED displays that command attention.",
    label: "SHOPPING MALL LED DISPLAYS",
    modalTitle: "Shopping Mall LED Displays — Capture High-Traffic Attention",
    modalDesc:
      "Engage millions of shoppers with bold, large-format LED installations that command attention at every turn.",
    idealFor: [
      "Promotional campaigns",
      "Tenant advertising",
      "Event announcements",
      "Interactive directories",
    ],
    benefits: [
      "Massive format options",
      "Tenant revenue sharing",
      "Centralized scheduling",
      "Ultra-bright panels",
    ],
    btnText: "Get a custom mall LED quote",
    image: "/images/digitalboard/10.png",
  },
  {
    id: 11,
    title: "Retail Store",
    icon: "mdi:store-outline",
    color: "#22C55E",
    tagline: "Convert Foot Traffic into Sales",
    short:
      "Our retail LED signage solutions help stores stand out and drive purchases.",
    label: "RETAIL STORE LED DISPLAYS",
    modalTitle: "Retail LED Signage — Convert Foot Traffic into Sales",
    modalDesc:
      "Our retail LED signage solutions help stores stand out, highlight promotions, and drive impulse purchases.",
    idealFor: [
      "Window displays",
      "In-store promotions",
      "Product spotlighting",
      "Price updates",
    ],
    benefits: [
      "Eye-catching brightness",
      "Instant price changes",
      "Seasonal flexibility",
      "Compact thin profiles",
    ],
    btnText: "Get a custom retail LED quote",
    image: "/images/digitalboard/11.png",
  },
  {
    id: 12,
    title: "Car Wash",
    icon: "mdi:car-wash",
    color: "#06B6D4",
    tagline: "Display Pricing with Clarity",
    short:
      "Our car wash LED signs display pricing and service packages clearly.",
    label: "CAR WASH LED DISPLAYS",
    modalTitle: "Car Wash LED Signs — Display Pricing & Packages with Clarity",
    modalDesc:
      "Our car wash LED signs help display pricing and service packages clearly, attracting more customers and boosting revenue.",
    idealFor: [
      "Service menu displays",
      "Loyalty program promos",
      "Add-on upsells",
      "Drive-through menus",
    ],
    benefits: [
      "Moisture & humidity resistant",
      "Bright in direct sunlight",
      "Dynamic pricing updates",
      "Compact display options",
    ],
    btnText: "Get a custom car wash LED quote",
    image: "/images/digitalboard/12.png",
  },
];

/* ─── Helpers ───────────────────────────────────────────────────────── */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function useIconify() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !document.querySelector('script[src*="iconify-icon"]')
    ) {
      const script = document.createElement("script");
      script.src =
        "https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
}

/* Shared overlay — fixes the small-screen empty-space bug by using
   overflow-y-auto on the backdrop + min-h-full flex on the inner scroller */
function ModalOverlay({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      {/* This div fills at least the full viewport height so the card
          is always centred vertically, but can scroll if taller than screen */}
      <div
        className="min-h-full flex items-center justify-center p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── Church modal (unique layout) ─────────────────────────────────── */
function ChurchModal({ item, onClose }) {
  const rgb = hexToRgb(item.color);

  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="bg-white rounded-3xl w-full overflow-hidden flex flex-col lg:flex-row relative shadow-2xl"
        style={{ maxWidth: "1100px" }}
      >
        {/* Left image */}
        <div className="w-full lg:w-[320px] lg:min-w-[320px] h-52 sm:h-64 lg:h-auto flex-shrink-0 overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        {/* Right content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
              rounded-full bg-gray-100 hover:bg-gray-200 transition-colors
              text-gray-500 text-2xl font-light z-10 leading-none"
          >
            ×
          </button>

          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: item.color }} />
            <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: item.color }}>
              {item.label}
            </p>
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-extrabold leading-snug mb-2" style={{ color: item.color }}>
            {item.modalTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 font-medium text-sm lg:text-base mb-3">
            {item.modalSubtitle}
          </p>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {item.modalDesc}
          </p>

          {/* Why Choose block */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{
              border: `1.5px solid rgba(${rgb}, 0.2)`,
              background: `rgba(${rgb}, 0.04)`,
            }}
          >
            <p className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm lg:text-base">
              <Icon icon="mdi:account-group-outline" className="w-5 h-5" style={{ color: item.color }} />
              Why Churches Choose Digital LED Signs
            </p>
            <ul className="space-y-2.5">
              {item.whyChoose.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <CircleCheck className="w-4 h-4 flex-shrink-0" style={{ color: item.color }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {item.subCards.map((sc, i) => (
              <div
                key={i}
                className="rounded-2xl p-5"
                style={{
                  border: `1.5px solid rgba(${rgb}, 0.18)`,
                  background: `rgba(${rgb}, 0.03)`,
                }}
              >
                <div className="mb-3">
                  <Icon icon={sc.icon} className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <p className="font-bold text-gray-800 text-sm mb-1">{sc.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{sc.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/contactus">
            <button
              className="w-full py-4 rounded-2xl text-white font-bold text-base
                flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: item.color }}
            >
              {item.btnText}
              <MoveRight className="w-5 h-5" />
            </button>
          </Link>

          <p className="text-center text-gray-400 text-xs mt-3 leading-relaxed">
            Boost your congregation engagement with vibrant LED displays.
          </p>
        </div>
      </div>
    </ModalOverlay>
  );
}

/* ─── Generic modal ─────────────────────────────────────────────────── */
function Modal({ item, onClose }) {
  const rgb = hexToRgb(item.color);

  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="bg-white rounded-3xl w-full overflow-hidden flex flex-col lg:flex-row relative shadow-2xl"
        style={{ maxWidth: "1100px" }}
      >
        {/* Left image */}
        <div className="w-full lg:w-[380px] lg:min-w-[380px] h-52 sm:h-64 lg:h-auto flex-shrink-0 overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        {/* Right content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
              rounded-full bg-gray-100 hover:bg-gray-200 transition-colors
              text-gray-500 text-2xl font-light z-10 leading-none"
          >
            ×
          </button>

          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: item.color }} />
            <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: item.color }}>
              {item.label}
            </p>
          </div>

          {/* Title */}
          <h2
            className="text-2xl lg:text-[1.75rem] font-extrabold leading-snug mb-3"
            style={{ color: item.color }}
          >
            {item.modalTitle}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-7">
            {item.modalDesc}
          </p>

          {/* Feature columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
            <div
              className="rounded-2xl p-5"
              style={{ border: `1.5px solid rgba(${rgb}, 0.18)`, background: `rgba(${rgb}, 0.04)` }}
            >
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-3 text-sm">
                <Icon icon="mdi:account-group-outline" className="w-[22px] h-[22px]" />
                Ideal For:
              </p>
              <ul className="space-y-2.5">
                {item.idealFor.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CircleCheck className="w-[15px] h-[15px] flex-shrink-0" style={{ color: item.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ border: `1.5px solid rgba(${rgb}, 0.18)`, background: `rgba(${rgb}, 0.04)` }}
            >
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-3 text-sm">
                <Icon icon="mynaui:check-waves" className="w-[22px] h-[22px]" />
                Benefits:
              </p>
              <ul className="space-y-2.5">
                {item.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CircleCheck className="w-[15px] h-[15px] flex-shrink-0" style={{ color: item.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <Link to="/contactus">
            <button
              className="w-full py-4 rounded-2xl text-white font-bold text-base
                flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: item.color }}
            >
              {item.btnText}
              <MoveRight className="w-5 h-5" />
            </button>
          </Link>

          <p className="text-center text-gray-400 text-xs mt-3 leading-relaxed">
            {item.modalDesc}
          </p>
        </div>
      </div>
    </ModalOverlay>
  );
}

/* ─── Card ──────────────────────────────────────────────────────────── */
function Card({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl p-6 cursor-pointer overflow-hidden"
      style={{
        background: hovered ? item.color : "#ffffff",
        transition: "background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shine */}
      <div
        className="absolute -top-12 -right-12 w-44 h-44 rounded-full pointer-events-none"
        style={{
          background: hovered ? "rgba(255,255,255,0.1)" : "transparent",
          transition: "background 0.3s ease",
        }}
      />

      {/* Icon */}
      <div className="mb-4">
        <iconify-icon
          icon={item.icon}
          width="42"
          height="42"
          style={{ color: hovered ? "#ffffff" : item.color, transition: "color 0.3s ease" }}
        ></iconify-icon>
      </div>

      {/* Title */}
      <h3
        className="font-extrabold text-[1.1rem] mb-1 leading-tight"
        style={{ color: hovered ? "#ffffff" : "#111827", transition: "color 0.3s ease" }}
      >
        {item.title}
      </h3>

      {/* Tagline */}
      <p
        className="text-xs font-semibold mb-3"
        style={{ color: hovered ? "rgba(255,255,255,0.75)" : "#9CA3AF", transition: "color 0.3s ease" }}
      >
        {item.tagline}
      </p>

      {/* Short description */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{
          color: hovered ? "rgba(255,255,255,0.85)" : "#6B7280",
          transition: "color 0.3s ease",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {item.short}
      </p>

      {/* Learn More */}
      <div
        className="flex items-center gap-2 text-sm font-bold"
        style={{ color: hovered ? "#ffffff" : "#2563EB", transition: "color 0.3s ease" }}
      >
        <span className="leading-none">Learn More</span>
        <span
          className="flex items-center justify-center"
          style={{
            transform: hovered ? "translateX(5px)" : "translateX(0)",
            transition: "transform 0.25s ease",
          }}
        >
          <MoveRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function DigitalSignageCards() {
  useIconify();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="containers">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl mx-auto">
          Digital Signage Solutions for Every Industry
        </h1>
        <p className="text-gray-400 text-base leading-relaxed max-w-5xl mx-auto">
          Transform your space, engage your audience, and communicate with impact
          using our industry-leading LED and digital display solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {industries.map((item) => (
          <Card key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {/* Modals — church gets unique layout, rest get standard */}
      {selectedItem &&
        (selectedItem.id === 1 ? (
          <ChurchModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        ) : (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        ))}
    </section>
  );
}