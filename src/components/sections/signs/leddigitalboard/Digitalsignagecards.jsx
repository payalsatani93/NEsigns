import { useState } from "react";

const industries = [
  {
    id: 1,
    title: "Churches",
    icon: "⛪",
    tagline: "Ministry Communication",
    short: "Our church LED signs and digital display boards help ministries communicate.",
    label: "CHURCHES LED DISPLAYS",
    modalTitle: "Church LED Signs — Reach Your Congregation",
    modalDesc: "Our church LED signs and digital display boards help ministries communicate event schedules, service times, and inspirational messages effectively.",
    idealFor: ["Weekly sermon schedules", "Event announcements", "Scripture displays", "Donation drives"],
    benefits: ["Real-time content updates", "Weatherproof outdoor options", "Remote management", "Energy-efficient design"],
    btnText: "Get a custom church LED sign quote",
    image: "https://images.unsplash.com/photo-1543497535-8e7f4a4e9200?w=400&q=80",
    hover: { bg: "hover:bg-indigo-50", border: "hover:border-indigo-400", icon: "hover:bg-indigo-100", text: "hover:text-indigo-600", shadow: "hover:shadow-indigo-200" },
    modal: { accent: "text-indigo-600", badge: "bg-indigo-50", check: "border-indigo-400 text-indigo-600 bg-indigo-50", btn: "from-indigo-500 to-purple-600" },
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",
  },
  {
    id: 2,
    title: "Bars & Restaurants",
    icon: "🍺",
    tagline: "Attract More Customers",
    short: "Upgrade your marketing with restaurant digital signage and LED menu boards.",
    label: "BARS & RESTAURANTS LED DISPLAYS",
    modalTitle: "Restaurant & Bar Digital LED Boards — Attract More Customers & Increase Daily Sales",
    modalDesc: "Upgrade your marketing with restaurant digital signage and LED menu boards that captivate customers and drive sales.",
    idealFor: ["Daily specials", "Happy hour promotions", "Live music announcements", "Digital menu boards"],
    benefits: ["Instant content updates", "Increased foot traffic", "Modern customer experience", "Higher upsell rates"],
    btnText: "Get a custom restaurant LED sign quote",
    image: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",
    hover: { bg: "hover:bg-amber-50", border: "hover:border-amber-400", icon: "hover:bg-amber-100", text: "hover:text-amber-600", shadow: "hover:shadow-amber-200" },
    modal: { accent: "text-amber-600", badge: "bg-amber-50", check: "border-amber-400 text-amber-600 bg-amber-50", btn: "from-amber-500 to-orange-600" },
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
  },
  {
    id: 3,
    title: "Events & Concert",
    icon: "🎤",
    tagline: "Create Unforgettable Experiences",
    short: "Our LED video walls for events create stunning visual backdrops.",
    label: "EVENTS & CONCERT LED DISPLAYS",
    modalTitle: "Event & Concert LED Video Walls — Create Unforgettable Visual Experiences",
    modalDesc: "Our LED video walls for events and concerts deliver jaw-dropping clarity for audiences of any size.",
    idealFor: ["Stage backdrops", "Live score displays", "Sponsor branding", "Crowd engagement"],
    benefits: ["Ultra-high brightness", "Seamless tiling", "Fast deployment", "Rental packages available"],
    btnText: "Get a custom event LED quote",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
    hover: { bg: "hover:bg-pink-50", border: "hover:border-pink-400", icon: "hover:bg-pink-100", text: "hover:text-pink-600", shadow: "hover:shadow-pink-200" },
    modal: { accent: "text-pink-600", badge: "bg-pink-50", check: "border-pink-400 text-pink-600 bg-pink-50", btn: "from-pink-500 to-rose-600" },
    iconBg: "bg-pink-100",
    iconText: "text-pink-600",
  },
  {
    id: 4,
    title: "Outdoor Billboards",
    icon: "📢",
    tagline: "Maximize Visibility & Revenue",
    short: "Our outdoor LED billboards deliver maximum visibility day and night.",
    label: "OUTDOOR BILLBOARD LED DISPLAYS",
    modalTitle: "Outdoor LED Billboards — Maximize Visibility & Advertising Revenue",
    modalDesc: "Our outdoor LED billboards deliver brilliant, weatherproof visibility that generates income around the clock.",
    idealFor: ["Highway advertising", "Local business promos", "Multi-advertiser rotation", "Real estate listings"],
    benefits: ["24/7 visibility", "Dynamic ad rotation", "IP65 weatherproofing", "Remote scheduling"],
    btnText: "Get a custom billboard LED quote",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
    hover: { bg: "hover:bg-red-50", border: "hover:border-red-400", icon: "hover:bg-red-100", text: "hover:text-red-600", shadow: "hover:shadow-red-200" },
    modal: { accent: "text-red-600", badge: "bg-red-50", check: "border-red-400 text-red-600 bg-red-50", btn: "from-red-500 to-rose-600" },
    iconBg: "bg-red-100",
    iconText: "text-red-600",
  },
  {
    id: 5,
    title: "Outdoor LED Signs",
    icon: "🪧",
    tagline: "Built for Performance & Durability",
    short: "Our weatherproof outdoor LED signs perform in any climate.",
    label: "OUTDOOR LED SIGN DISPLAYS",
    modalTitle: "Outdoor LED Signs — Built for Performance & Durability",
    modalDesc: "Our weatherproof outdoor LED signs are engineered to perform in extreme weather, keeping your message visible year-round.",
    idealFor: ["Storefront signs", "Monument signs", "Road-side displays", "Directional signage"],
    benefits: ["IP65 rated", "Wide temperature range", "High brightness panels", "5-year warranty"],
    btnText: "Get a custom outdoor LED quote",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80",
    hover: { bg: "hover:bg-emerald-50", border: "hover:border-emerald-400", icon: "hover:bg-emerald-100", text: "hover:text-emerald-600", shadow: "hover:shadow-emerald-200" },
    modal: { accent: "text-emerald-600", badge: "bg-emerald-50", check: "border-emerald-400 text-emerald-600 bg-emerald-50", btn: "from-emerald-500 to-teal-600" },
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
  },
  {
    id: 6,
    title: "Schools & UNI",
    icon: "🎓",
    tagline: "Improve Campus Communication",
    short: "Our school LED display boards keep students and staff informed.",
    label: "SCHOOLS & UNIVERSITY LED DISPLAYS",
    modalTitle: "School & University LED Boards — Improve Communication Across Campus",
    modalDesc: "Our school LED display boards keep students, staff, and visitors informed with real-time updates and announcements.",
    idealFor: ["Campus announcements", "Event schedules", "Safety alerts", "Sports scoreboards"],
    benefits: ["Easy content management", "Multi-zone displays", "ADA compliant", "Durable construction"],
    btnText: "Get a custom campus LED quote",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
    hover: { bg: "hover:bg-blue-50", border: "hover:border-blue-400", icon: "hover:bg-blue-100", text: "hover:text-blue-600", shadow: "hover:shadow-blue-200" },
    modal: { accent: "text-blue-600", badge: "bg-blue-50", check: "border-blue-400 text-blue-600 bg-blue-50", btn: "from-blue-500 to-cyan-600" },
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
  },
  {
    id: 7,
    title: "Automotive",
    icon: "🚗",
    tagline: "Drive Traffic. Increase Sales.",
    short: "Showcase promotions and inventory with dynamic digital displays.",
    label: "AUTOMOTIVE LED DISPLAYS",
    modalTitle: "Automotive LED Displays — Drive Traffic & Increase Daily Sales",
    modalDesc: "Showcase your inventory, promotions, and special financing offers with eye-catching dynamic LED displays.",
    idealFor: ["New vehicle promotions", "Service department deals", "Finance rate displays", "Lot directional signage"],
    benefits: ["High-glare rejection", "Live inventory feeds", "Custom animation", "Dealer brand compliance"],
    btnText: "Get a custom auto dealer LED quote",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
    hover: { bg: "hover:bg-sky-50", border: "hover:border-sky-400", icon: "hover:bg-sky-100", text: "hover:text-sky-600", shadow: "hover:shadow-sky-200" },
    modal: { accent: "text-sky-600", badge: "bg-sky-50", check: "border-sky-400 text-sky-600 bg-sky-50", btn: "from-sky-500 to-blue-700" },
    iconBg: "bg-sky-100",
    iconText: "text-sky-600",
  },
  {
    id: 8,
    title: "Hospitality",
    icon: "🏨",
    tagline: "Elevate Guest Experience",
    short: "Our hospitality LED screens enhance communication and branding.",
    label: "HOSPITALITY LED DISPLAYS",
    modalTitle: "Hospitality LED Screens — Elevate Guest Experience",
    modalDesc: "Our hospitality LED screens blend seamlessly into your environment, delivering personalized guest communications.",
    idealFor: ["Lobby welcome screens", "Event board displays", "Restaurant digital menus", "Wayfinding systems"],
    benefits: ["Luxury aesthetics", "Low-profile mounting", "Central CMS control", "Custom content branding"],
    btnText: "Get a custom hospitality LED quote",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    hover: { bg: "hover:bg-violet-50", border: "hover:border-violet-400", icon: "hover:bg-violet-100", text: "hover:text-violet-600", shadow: "hover:shadow-violet-200" },
    modal: { accent: "text-violet-600", badge: "bg-violet-50", check: "border-violet-400 text-violet-600 bg-violet-50", btn: "from-violet-500 to-purple-700" },
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
  },
  {
    id: 9,
    title: "Healthcare",
    icon: "🏥",
    tagline: "Clear Communication When It Matters",
    short: "Our medical facility LED displays guide patients with clarity.",
    label: "HEALTHCARE LED DISPLAYS",
    modalTitle: "Healthcare LED Displays — Clear Communication When It Matters Most",
    modalDesc: "Our medical facility LED displays guide patients, reduce anxiety, and improve operational efficiency.",
    idealFor: ["Queue management", "Wayfinding displays", "Health awareness boards", "Waiting room info"],
    benefits: ["Low flicker panels", "HIPAA-conscious design", "Easy remote updates", "Infection-resistant surfaces"],
    btnText: "Get a custom healthcare LED quote",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    hover: { bg: "hover:bg-teal-50", border: "hover:border-teal-400", icon: "hover:bg-teal-100", text: "hover:text-teal-600", shadow: "hover:shadow-teal-200" },
    modal: { accent: "text-teal-600", badge: "bg-teal-50", check: "border-teal-400 text-teal-600 bg-teal-50", btn: "from-teal-500 to-cyan-700" },
    iconBg: "bg-teal-100",
    iconText: "text-teal-600",
  },
  {
    id: 10,
    title: "Shopping Mall",
    icon: "🛍️",
    tagline: "Capture High-Traffic Attention",
    short: "Engage shoppers with large-scale dynamic displays.",
    label: "SHOPPING MALL LED DISPLAYS",
    modalTitle: "Shopping Mall LED Displays — Capture High-Traffic Attention",
    modalDesc: "Engage millions of shoppers with bold, large-format LED installations that command attention at every turn.",
    idealFor: ["Promotional campaigns", "Tenant advertising", "Event announcements", "Interactive directories"],
    benefits: ["Massive format options", "Tenant revenue sharing", "Centralized scheduling", "Ultra-bright panels"],
    btnText: "Get a custom mall LED quote",
    image: "https://images.unsplash.com/photo-1519567770579-c2fc5436bcf5?w=400&q=80",
    hover: { bg: "hover:bg-fuchsia-50", border: "hover:border-fuchsia-400", icon: "hover:bg-fuchsia-100", text: "hover:text-fuchsia-600", shadow: "hover:shadow-fuchsia-200" },
    modal: { accent: "text-fuchsia-600", badge: "bg-fuchsia-50", check: "border-fuchsia-400 text-fuchsia-600 bg-fuchsia-50", btn: "from-fuchsia-500 to-pink-700" },
    iconBg: "bg-fuchsia-100",
    iconText: "text-fuchsia-600",
  },
  {
    id: 11,
    title: "Retail Store",
    icon: "🏪",
    tagline: "Convert Foot Traffic into Sales",
    short: "Our retail LED signage solutions help stores stand out.",
    label: "RETAIL STORE LED DISPLAYS",
    modalTitle: "Retail LED Signage — Convert Foot Traffic into Sales",
    modalDesc: "Our retail LED signage solutions help stores stand out, highlight promotions, and drive impulse purchases.",
    idealFor: ["Window displays", "In-store promotions", "Product spotlighting", "Price updates"],
    benefits: ["Eye-catching brightness", "Instant price changes", "Seasonal flexibility", "Compact thin profiles"],
    btnText: "Get a custom retail LED quote",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
    hover: { bg: "hover:bg-lime-50", border: "hover:border-lime-400", icon: "hover:bg-lime-100", text: "hover:text-lime-600", shadow: "hover:shadow-lime-200" },
    modal: { accent: "text-lime-600", badge: "bg-lime-50", check: "border-lime-400 text-lime-600 bg-lime-50", btn: "from-lime-500 to-green-700" },
    iconBg: "bg-lime-100",
    iconText: "text-lime-600",
  },
  {
    id: 12,
    title: "Car Wash",
    icon: "🚿",
    tagline: "Display Pricing with Clarity",
    short: "Our car wash LED signs display pricing and service packages clearly.",
    label: "CAR WASH LED DISPLAYS",
    modalTitle: "Car Wash LED Signs — Display Pricing & Packages with Clarity",
    modalDesc: "Our car wash LED signs help display pricing and service packages clearly, attracting more customers and boosting revenue.",
    idealFor: ["Service menu displays", "Loyalty program promos", "Add-on upsells", "Drive-through menus"],
    benefits: ["Moisture & humidity resistant", "Bright in direct sunlight", "Dynamic pricing updates", "Compact display options"],
    btnText: "Get a custom car wash LED quote",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&q=80",
    hover: { bg: "hover:bg-cyan-50", border: "hover:border-cyan-400", icon: "hover:bg-cyan-100", text: "hover:text-cyan-600", shadow: "hover:shadow-cyan-200" },
    modal: { accent: "text-cyan-600", badge: "bg-cyan-50", check: "border-cyan-400 text-cyan-600 bg-cyan-50", btn: "from-cyan-500 to-blue-600" },
    iconBg: "bg-cyan-100",
    iconText: "text-cyan-600",
  },
];

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function Modal({ item, onClose }) {
  const m = item.modal;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-auto flex flex-col md:flex-row relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left image */}
        <div className="w-full md:w-64 md:min-w-[256px] h-52 md:h-auto rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-light leading-none transition-colors"
          >
            ×
          </button>

          {/* Label */}
          <div className={`flex items-center gap-2 mb-3`}>
            <span className={`w-7 h-0.5 ${m.badge} inline-block`} style={{ background: "currentColor" }} />
            <p className={`text-xs font-bold tracking-widest ${m.accent}`}>{item.label}</p>
          </div>

          {/* Title */}
          <h2 className={`text-xl font-bold ${m.accent} mb-3 leading-snug`}>
            {item.modalTitle}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">{item.modalDesc}</p>

          {/* Ideal For + Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {/* Ideal For */}
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-bold text-sm mb-3 flex items-center gap-2">
                <span className="text-base">👥</span> Ideal For:
              </p>
              <ul className="space-y-2">
                {item.idealFor.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${m.check}`}>
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-bold text-sm mb-3 flex items-center gap-2">
                <span className="text-base">🏆</span> Benefits:
              </p>
              <ul className="space-y-2">
                {item.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${m.check}`}>
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className={`w-full py-3.5 bg-gradient-to-r ${m.btn} text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
          >
            {item.btnText} →
          </button>

          {/* Sub-text */}
          <p className="text-center text-gray-400 text-xs mt-3">{item.modalDesc}</p>
        </div>
      </div>
    </div>
  );
}

function Card({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  const h = item.hover;

  return (
    <div
      className={`
        group relative bg-white rounded-2xl border-2 border-gray-100 p-6 cursor-pointer
        transition-all duration-300 ease-out
        ${h.bg} ${h.border}
        ${hovered ? `shadow-xl ${h.shadow} -translate-y-1` : "shadow-sm"}
      `}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className={`
          w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4
          transition-all duration-300
          ${hovered ? `${h.icon}` : "bg-gray-100"}
        `}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-lg mb-1 transition-colors duration-300 ${hovered ? h.text : "text-gray-900"}`}
      >
        {item.title}
      </h3>

      {/* Tagline */}
      <p
        className={`text-xs font-semibold mb-2 transition-colors duration-300 ${hovered ? h.text : "text-gray-400"}`}
      >
        {item.tagline}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {item.short}
      </p>

      {/* Learn More */}
      <div
        className={`flex items-center gap-1 text-sm font-semibold transition-all duration-300 ${hovered ? h.text : "text-gray-600"}`}
      >
        Learn More
        <span className={`transition-transform duration-200 ${hovered ? "translate-x-1" : ""}`}>
          →
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
          transition-all duration-300 origin-left
          ${hovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
          bg-gradient-to-r ${item.modal.btn}
        `}
      />
    </div>
  );
}

export default function DigitalSignageCards() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="min-h-screen bg-gray-950 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Digital Signage Solutions{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            for Every Industry
          </span>
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Transform your space, engage your audience, and communicate with impact
          using our industry-leading LED and digital display solutions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {industries.map((item) => (
          <Card key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
    
  );
}