import { motion } from "framer-motion";

const tags = [
  {
    label: "Effective result",
    color: "text-amber-500",
    border: "border-amber-400",
    style: { top: "85px", left: "25px" },
  },
  {
    label: "Profitable",
    color: "text-neutral-800",
    border: "border-neutral-300",
    style: { top: "55px", right: "35px" },
  },
  {
    label: "Impactful ranking",
    color: "text-purple-500",
    border: "border-purple-300",
    style: { top: "135px", left: "135px" },
  },
  {
    label: "Strategic",
    color: "text-neutral-800",
    border: "border-neutral-300",
    style: { bottom: "40px", left: "20px" },
  },
  {
    label: "Personalized",
    color: "text-pink-500",
    border: "border-pink-400",
    style: { bottom: "40px", right: "30px" },
  },
];

export default function WhyChooseDM() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-12 ">
        <div className="flex flex-col lg:flex-row gap-10 relative">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex-1 space-y-10 lg:space-y-30">
            {/* Heading */}
            <div className="max-w-xl ">
              <p className="text-neutral-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-5">
                Direct Mailing
              </p>

              <h2 className="text-2xl sm:text-4xl xl:text-[62px] leading-tight mb-4 sm:mb-6">
                Why choose direct marketing?
              </h2>

              <p className="text-neutral-400 text-base text-sm sm:text-lg lg:text-xl xl:text-[24px] leading-relaxed max-w-xl">
                Direct marketing targets specific audiences with personalized
                messaging, delivers measurable results, increases engagement,
                improves response rates, and maximizes return on investment.
              </p>
            </div>

            {/* Image Card */}
            <div
              className="bg-white rounded-2xl p-[44px] max-w-[550px]
  shadow-xl mx-auto lg:mx-0"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/images/directmailing/WhyDM_1.png"
                  alt=""
                  className="h-[180px] sm:h-[220px] lg:h-[369px] 
                 w-full 
                 object-cover block"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/directmailing/WhyDM_2.png"
                  alt=""
                  className="h-[180px] sm:h-[220px] lg:h-[369px] 
                 w-full
                 object-cover block"
                />
              </div>
            </div>
          </div>

          {/* ================= CENTER DIVIDER ================= */}
          <div className="hidden lg:flex relative justify-center w-32">
            <div className="relative h-[1500px] flex items-center justify-center w-full">
              {/* Vertical Line */}
              <motion.div
                className="w-px h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, #FACC15 0%, #FACC1580 40%, transparent 100%)",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2 }}
              />

              {/* TOP DOT */}
              <div className="absolute top-[20%] w-4 h-4 rounded-full bg-amber-400 z-20" />

              {/* Top Arrow */}
              <img
                src="/images/directmailing/Dash_Arrow_Right.png"
                alt=""
                className="absolute top-[14%] -right-3 w-20 z-30"
              />

              {/* BOTTOM DOT */}
              <div className="absolute top-[70%] w-4 h-4 rounded-full bg-amber-400 z-20" />

              {/* Bottom Arrow */}
              <img
                src="/images/directmailing/Dash_Arrow_Right.png"
                alt=""
                className="absolute top-[70%] -left-3 w-20 rotate-180 z-30"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex-1 space-y-10 lg:space-y-30 relative">
            {/* Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-xl mx-auto lg:mx-0">
              <h3 className="text-neutral-900 font-extrabold text-lg sm:text-xl mb-1">
                Targeted Mail Pros
              </h3>

              <p className="text-neutral-500 text-xs sm:text-sm mb-6">
                Maximize Engagement with Personalized Direct Mail Solutions
              </p>

              <div
                className="w-full h-px mb-6"
                style={{
                  background: "linear-gradient(to right, #FACC15, transparent)",
                }}
              />

              <div className="relative h-56">
                {tags.map(({ label, color, border, style }, i) => (
                  <motion.span
                    key={label}
                    className={`absolute px-3 sm:px-4 py-1.5 text-xs rounded-lg font-semibold bg-[#D9D9D933] ${color} ${border}`}
                    style={style}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="max-w-2xl ">
              <p className="text-neutral-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-5">
                Work With Us
              </p>

              <h2 className="text-2xl sm:text-4xl xl:text-[60px] mb-4 sm:mb-6">
                Grow Your Business
              </h2>

              <p
                className="text-neutral-400 text-base text-sm sm:text-lg lg:text-xl xl:text-[24px] 
              leading-relaxed mb-6 sm:mb-8"
              >
                Leverage targeted marketing strategies to reach the right
                audience, increase engagement, and drive measurable growth for
                your business.
              </p>

              <button
                className="inline-flex items-center gap-3
                bg-gradient-to-r from-yellow-400 to-orange-500
                text-white font-bold text-sm rounded-full px-6 sm:px-7 py-3 sm:py-3.5
                transition-all duration-300 hover:translate-x-1"
              >
                Contact Now
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    d="M2 8h12M9 4l4 4-4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
