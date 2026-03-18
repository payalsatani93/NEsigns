import { useState } from "react";
import { motion } from "framer-motion";

const tags = [
  {
    label: "Effective result",
    color: "text-amber-500",
    border: "border-amber-400",
    style: { top: "85px", left: "25px" },
    rotate: "-6deg",
  },
  {
    label: "Profitable",
    color: "text-neutral-800",
    border: "border-neutral-300",
    style: { top: "55px", right: "35px" },
    rotate: "5deg",
  },
  {
    label: "Impactful ranking",
    color: "text-purple-500",
    border: "border-purple-300",
    style: { top: "145px", left: "120px" },
    rotate: "-2deg",
  },
  {
    label: "Strategic",
    color: "text-neutral-800",
    border: "border-neutral-300",
    style: { bottom: "40px", left: "20px" },
    rotate: "-8deg",
  },
  {
    label: "Personalized",
    color: "text-pink-500",
    border: "border-pink-400",
    style: { bottom: "40px", right: "30px" },
    rotate: "4deg",
  },
];

const services = [
  {
    label: "Email marketing",
    subtitle: "Reach inboxes Drive real results",
    icon: "✉️",
    hoverBg: "#311B9280",
    hoverText: "#fff",
  },
  {
    label: "Cards and invitations",
    subtitle: "Custom cards crafted to impress",
    icon: "💌",
    hoverBg: "#D81B60B2",
    hoverText: "#fff",
  },
  {
    label: "Postcards",
    subtitle: "Small format Big impact",
    icon: "🗂️",
    hoverBg: "#0085FFB2",
    hoverText: "#fff",
  },
  {
    label: "ePublications",
    subtitle: "Publish smarter Reach wider",
    icon: "👥",
    hoverBg: "#DA5251",
    hoverText: "#fff",
  },
  {
    label: "Promotional items",
    subtitle: "Make your logo go further.",
    icon: "🛍️",
    hoverBg: "#D7A700",
    hoverText: "#fff",
  },
  {
    label: "Mobile marketing",
    subtitle: "Marketing that moves.",
    icon: "📱",
    hoverBg: "#73AE43",
    hoverText: "#fff",
  },
];

function ServiceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={item.label}
      className="flex items-center gap-2 rounded-xl p-3 sm:p-4 w-full min-h-[80px] sm:min-h-[90px] lg:h-[108px]
       shadow-lg cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: hovered ? item.hoverBg : "#ffffff",
        color: hovered ? item.hoverText : "#000000",
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center text-xl sm:text-2xl">
        {item.icon}
      </span>
      <div className="min-w-0">
        <div className="font-semibold text-sm sm:text-base lg:text-[18px] truncate">{item.label}</div>
        <div className="text-xs sm:text-sm lg:text-[18px] mt-0.5 opacity-60 truncate">{item.subtitle}</div>
      </div>
    </motion.div>
  );
}

export default function DirectMailFAQ() {
  return (
    <section className="relative bg-black text-white py-10 sm:py-12 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* Vertical Line — desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full">
          <motion.div
            className="w-[5px] h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(247, 156, 41, 0) 0%, #F79C29 53%, rgba(247, 156, 41, 0) 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-32">
          <div className="absolute z-0 -top-8 -left-12 hidden sm:block">
            <img src="/images/directmailing/YellowRing.png" alt="" />
          </div>

          {/* ===== ROW 1 ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_210px_1fr] gap-6 lg:gap-10 items-center">
            {/* Image card — shown second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-3 sm:p-6 lg:p-10 shadow-xl">
              <img
                src="/images/directmailing/Img_03.png"
                className="rounded-xl w-full h-48 sm:h-64 lg:h-[369px] object-cover"
              />
            </div>

            {/* Center dot + arrow — desktop only */}
            <div className="hidden lg:flex lg:order-2 justify-center relative">
              <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
              <img
                src="/images/directmailing/Dash_Arrow_Left.png"
                className="w-24 absolute left-0 -translate-y-5/6"
              />
            </div>

            {/* Text content — shown first on mobile, third on desktop */}
            <div className="order-1 lg:order-3 flex flex-col justify-center gap-2 sm:gap-3 lg:gap-[9px]">
              <h6 className="text-xs sm:text-[14px] uppercase tracking-widest">
                What is direct mailing
              </h6>
              <h2 className="text-2xl sm:text-3xl xl:text-[48px] leading-tight mb-3 lg:mb-6">
                What is direct marketing?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base lg:text-[24px] leading-relaxed">
                Direct marketing delivers measurable results by targeting
                specific customer segments. Each campaign features actionable
                messaging and performance insights to help you track engagement
                and return on investment.
              </p>
              <button className="bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full w-fit mt-2 text-sm sm:text-base">
                Contact Now →
              </button>
            </div>
          </div>

          {/* ===== ROW 2 ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_210px_1fr] gap-6 lg:gap-10 items-center">
            {/* Text content */}
            <div className="flex flex-col justify-center gap-2 sm:gap-3 lg:gap-[9px]">
              <p className="text-xs sm:text-[14px] uppercase tracking-widest">
                Direct Mailing
              </p>
              <h2 className="text-2xl sm:text-3xl xl:text-[48px] mb-3 lg:mb-6 leading-tight">
                Why choose direct marketing?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base lg:text-[24px] leading-relaxed">
                Direct marketing targets specific audiences with personalized
                messaging, delivers measurable results, increases engagement,
                improves response rates, and maximizes return on investment.
              </p>
            </div>

            {/* Center dot + arrow — desktop only */}
            <div className="hidden lg:flex justify-center relative">
              <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
              <img
                className="absolute right-5 top-1/2 -translate-y-5/6 w-20 h-20"
                src="/images/directmailing/Dash_Arrow_Right.png"
                alt=""
              />
            </div>

            {/* Tags card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl text-black w-full lg:max-w-md">
              <h3 className="font-bold text-lg sm:text-2xl mb-2">Targeted Mail Pros</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-5">
                Maximize Engagement with Personalized Direct Mail Solutions
              </p>
              <hr className="border-neutral-200 mb-4 sm:mb-6" />
              <div className="relative h-48 sm:h-56">
                {tags.map(({ label, color, border, style, rotate }, i) => (
                  <motion.span
                    key={label}
                    className={`absolute px-3 sm:px-4 py-1 sm:py-1.5 text-xs rounded-lg font-semibold bg-[#D9D9D933] border ${color} ${border}`}
                    style={{ ...style, rotate }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* ===== ROW 3 ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_210px_1fr] gap-6 lg:gap-[20px] items-center">
            {/* Service cards — shown second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-0 lg:space-y-4 w-full lg:w-[506px]">
              {services.map((item, i) => (
                <ServiceCard key={item.label} item={item} index={i} />
              ))}
            </div>

            {/* Center dot + arrow — desktop only */}
            <div className="hidden lg:flex lg:order-2 justify-center relative">
              <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
              <img
                src="/images/directmailing/Dash_Arrow_Left.png"
                className="w-24 absolute left-0 -translate-y-5/6"
              />
            </div>

            {/* Text content — shown first on mobile, third on desktop */}
            <div className="order-1 lg:order-3 flex flex-col justify-center relative">
              <svg
                className="absolute -top-8 right-4 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 opacity-60"
                viewBox="0 0 60 40"
                fill="none"
              >
                <path
                  d="M5 20 Q15 5 25 20 Q35 35 45 20 Q55 5 58 15"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <svg
                className="absolute bottom-0 right-0 w-10 sm:w-14 h-10 sm:h-14 opacity-50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M5 35 L10 10 L35 5 L30 35 Z"
                  stroke="#6366f1"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <div className="flex flex-col justify-center gap-2 sm:gap-3 lg:gap-[9px]">
                <p className="text-xs sm:text-[14px] uppercase tracking-widest">
                  Work With Us
                </p>
                <h2 className="text-2xl sm:text-3xl xl:text-[48px] mb-3 lg:mb-6 leading-tight">
                  How can NE signs help me build a campaign?
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-neutral-400 mb-4 sm:mb-6">
                  {[
                    "Identify your ideal target market",
                    "Build and manage a strong customer database",
                    "Create the right message for your audience",
                    "Print and distribute marketing materials",
                    "Track and measure campaign performance",
                  ].map((item) => (
                    <li key={item} className="flex items-start sm:items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-[18px]">
                      <span className="text-neutral-500 text-base sm:text-[18px] mt-0.5 sm:mt-0 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full w-fit text-sm sm:text-base">
                Contact Now →
              </button>
            </div>
          </div>

          {/* ===== ROW 4 ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_210px_1fr] gap-6 lg:gap-10 items-center">
            {/* Text content */}
            <div className="flex flex-col justify-center gap-2 sm:gap-3 lg:gap-[9px]">
              <p className="text-xs sm:text-[14px] uppercase tracking-widest">
                Work With Us
              </p>
              <h2 className="text-2xl sm:text-3xl xl:text-[48px] mb-3 lg:mb-6">
                Grow Your Business
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base lg:text-[24px] mb-4 sm:mb-6">
                Leverage targeted marketing strategies to reach the right
                audience, increase engagement, and drive measurable growth for
                your business
              </p>
              <button className="bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full w-fit text-sm sm:text-base">
                Contact Now →
              </button>
            </div>

            {/* Center dot + arrow — desktop only */}
            <div className="hidden lg:flex justify-center relative">
              <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
              <img
                className="absolute right-5 top-1/2 -translate-y-5/6 w-20 h-20"
                src="/images/directmailing/Dash_Arrow_Right.png"
                alt=""
              />
            </div>

            {/* Dual image card */}
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-6">
                <img
                  src="/images/directmailing/WhyDM_2.png"
                  className="rounded-xl w-full sm:w-1/2 lg:w-full h-36 sm:h-44 lg:h-[280px] object-cover"
                />
                <img
                  src="/images/directmailing/WhyDM_1.png"
                  className="rounded-xl w-full sm:w-1/2 lg:w-full h-36 sm:h-44 lg:h-[280px] object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}