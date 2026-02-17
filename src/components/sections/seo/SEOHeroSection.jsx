import React from "react";
import { motion } from "framer-motion";

export default function SEOHeroSection() {
  const items = [
    { title: "Keyword Research", row: 1 },
    { title: "On-Page SEO", row: 2 },
    { title: "Technical SEO", row: 1 },
    { title: "Off-Page SEO", row: 2 },
    { title: "Local SEO", row: 1 },
    { title: "Content SEO", row: 2 },
    { title: "Website SEO Audit", row: 1 },
    { title: "SaaS SEO", row: 2 },
    { title: "E-commerce SEO", row: 1 },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-10">
        <div className="relative containers ">
          <div className="flex items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex  gap-2 border border-white/30 p-2 rounded-full">
                <span className="bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black text-xs font-bold px-2 py-0.5 rounded">
                  NEW
                </span>
                <span className="text-sm text-gray-300">
                  Latest integration just arrived
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-white font-bold tracking-tight leading-[1.1]
              text-3xl md:text-4xl xl:text-5xl"
              >
                Elevate your SEO to boost visibility and drive organic growth.
              </h1>

              {/* Subheading */}
              <p className="text-gray-400 text-lg leading-relaxed">
                Elevate your site's visibility effortlessly with AI, where smart
                technology meets user-friendly SEO tools.
              </p>

             {/* Email */}
<div className="relative max-w-md w-full">
  <input
    type="email"
    placeholder="Your email"
    className="
      w-full px-5  py-4
      rounded-lg
      border border-white/30
      bg-transparent
      text-white
      placeholder-gray-500
      text-sm
      focus:outline-none
      focus:border-neutral-700
    "
  />

  <button
    className="
      absolute right-1 top-1/2 -translate-y-1/2
      px-4 py-3
      rounded-md
      bg-white text-black
      text-sm font-medium
      hover:bg-[var(--color-gradient)]
      transition
    "
  >
    Join Us
  </button>
</div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden lg:flex justify-end">
              <img
                src="/images/seo/SEO_Hero_Image.png"
                alt="SEO cubes"
                className="w-[520px] xl:w-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-24 overflow-hidden">
        <div className="px-6">
          <div className="relative containers">
            <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex-shrink-0 ${
                    item.row === 2 ? "mt-28 md:mt-36" : "mt-0"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {/* Diamond Box with Running Dashed Border */}
                    <div className="relative w-30 h-30 md:w-33 md:h-33">
                      {/* Animated Dashed Border with Gradient */}
                      <div className="absolute -inset-5 rotate-45">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 190 190"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            {/* Gradient for fading effect */}
                            <linearGradient
                              id={`dashGradient-${i}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="white"
                                stopOpacity="0"
                              />
                              <stop
                                offset="15%"
                                stopColor="white"
                                stopOpacity="0.4"
                              />
                              <stop
                                offset="35%"
                                stopColor="white"
                                stopOpacity="0.9"
                              />
                              <stop
                                offset="50%"
                                stopColor="white"
                                stopOpacity="1"
                              />
                              <stop
                                offset="65%"
                                stopColor="white"
                                stopOpacity="0.9"
                              />
                              <stop
                                offset="85%"
                                stopColor="white"
                                stopOpacity="0.4"
                              />
                              <stop
                                offset="100%"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>

                            {/* Mask for the gradient */}
                            <mask id={`dashMask-${i}`}>
                              <rect
                                x="1"
                                y="1"
                                width="188"
                                height="188"
                                rx="20"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                fill="none"
                                className="dash-running-pause"
                              />
                            </mask>
                          </defs>

                          {/* Base dashed border (subtle) */}
                          <rect
                            x="1"
                            y="1"
                            width="188"
                            height="188"
                            rx="20"
                            stroke="white"
                            strokeWidth="1"
                            strokeDasharray="6 6"
                            fill="none"
                            strokeOpacity="0.2"
                          />

                          {/* Animated dashed border with gradient */}
                          <rect
                            x="1"
                            y="1"
                            width="188"
                            height="188"
                            rx="20"
                            stroke={`url(#dashGradient-${i})`}
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                            mask={`url(#dashMask-${i})`}
                            className="dash-running-pause"
                          />
                        </svg>
                      </div>

                      {/* Main Diamond */}
                      <div
                        className="relative w-full h-full rotate-45 rounded-2xl overflow-hidden "
                        style={{
                          background:
                            "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                          boxShadow:
                            "0px 25px 36px 0px rgba(0, 0, 0, 0.1), 0px 4px 40px 0px #000000 inset",
                        }}
                      >
                        {/* Solid Inner Border */}
                        <div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            border: "1px solid rgba(96, 96, 96, 0.3)",
                          }}
                        ></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center -rotate-45 text-white font-medium text-center text-xs md:text-sm px-3 md:px-4">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrows between boxes */}
                  {i < items.length - 1 && (
                    <>
                      {/* Down-right arrow (from row 1 to row 2) */}
                      {item.row === 1 && (
                        <div className="absolute z-10 right-[-30px] md:right-[-40px] top-[75px] md:top-[120px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-sky-400 md:w-7 md:h-7"
                          >
                            <path
                              d="M7 7l10 10m0 0V7m0 10H7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Up-right arrow (from row 2 to row 1) */}
                      {item.row === 2 && (
                        <div className="absolute z-10 right-[-10px] md:right-[-20px] -top-[30px] md:-top-[20px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-sky-400 md:w-7 md:h-7"
                          >
                            <path
                              d="M7 17l10-10m0 0H7m10 0v10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes dash-run-pause {
          0% {
            stroke-dashoffset: 0;
          }
          45% {
            stroke-dashoffset: 120;
          }
          55% {
            stroke-dashoffset: 120;
          }
          100% {
            stroke-dashoffset: 240;
          }
        }

        .dash-running-pause {
          animation: dash-run-pause 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
