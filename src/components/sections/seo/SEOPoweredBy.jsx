import React from "react";
import { ArrowLeftRight } from "lucide-react";

// Mini bar chart
function BarChart() {
  const bars = [
    { h: 82, color: "bg-gray-600" },
    { h: 94, color: "bg-gray-500" },
    { h: 44, color: "bg-gray-600" },
    { h: 63, color: "bg-gray-600" },
    { h: 104, color: "bg-blue-500" },
  ];
  const labels = [60, 30, 10];

  return (
    <div className="flex gap-[16px] items-center">
      <div className="flex flex-col justify-between text-[12px] text-gray-500 h-20 pr-1 leading-[18px]">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <div className="flex items-end gap-[19.2px] h-20 flex-1">
        {bars.map((b, i) => (
          <div
            key={i}
            className={`w-[6px] rounded-sm ${b.color}`}
            style={{ height: `${b.h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// Avatar placeholders
// Avatar placeholders
function Avatars() {
  const avatars = [
    "/images/seo/avatar1.png",
    "/images/seo/avatar2.png",
    "/images/seo/avatar3.png",
  ];

  return (
    <div className="flex -space-x-2">
      {avatars.map((src, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-full border-2 border-[#111318] overflow-hidden"
          style={{ zIndex: avatars.length - i }}
        >
          <img
            src={src}
            alt="client"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function SEOPoweredBy() {
  return (
    <section
      className="relative overflow-hidden bg-[url('/images/seo/SEO_Powered_BG.png')]
                 bg-center bg-cover bg-no-repeat"
    >
      <div
        className="container
                   px-4 sm:px-6
                   grid grid-cols-1 lg:grid-cols-2
                   gap-20
                   items-center justify-center
                   mt-10 sm:mt-14 lg:mt-20
                   mb-10 sm:mb-14 lg:mb-20"
      >
        {/* ── LEFT CONTENT ── */}
        <div
          className="flex flex-col justify-center items-center lg:items-start
                     gap-3 lg:gap-[16px]
                     w-full lg:h-[273px] lg:w-[652px] "
        >
          <h1
            className="font-semibold leading-tight
                       text-3xl sm:text-4xl xl:text-[64px]"
          >
            Powered by Results
          </h1>

          <h2
            className="text-[var(--color-gradient)] font-[instrument-serif] italic font-medium
                       text-3xl sm:text-4xl xl:text-[64px]"
          >
            Built on Integrity
          </h2>

          <p className="text-gray-200 text-base sm:text-lg xl:max-w-xl  max-w-lg leading-relaxed">
            At NE Signs, we drive organic growth with data-driven SEO strategies
            that boost rankings, attract the right audience, and convert
            visitors into customers.
          </p>
        </div>

        {/* ── RIGHT CARDS PANEL ── */}
        <div
          className="relative flex flex-col gap-4
                     w-full sm:w-[350px] justify-self-center
                     xl:h-[348px] xl:w-[357px] xl:justify-self-end"
        >
          {/* Rocket */}
          <img
            src="/images/seo/Rocket_img.png"
            alt="rocket"
            className="absolute
                       -left-16 sm:right-80 sm:left-auto md:block hidden
                       top-4
                       w-[110px] h-[110px] sm:w-[160px] sm:h-[160px]
                       object-contain z-0 pointer-events-none animate-bounce-slow"
          />

          {/* TOP ROW: two cards */}
         <div className="flex gap-4">
            {/* Visible Growth Card */}
            <div
              className="flex-1 rounded-2xl p-4 flex flex-col z-10  w-[177px] h-[180px] gap-10"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-sm text-gray-400 font-medium">
                Visible Growth
              </p>
              <BarChart />
            </div>

            {/* Clients Card */}
            <div
              className="rounded-2xl p-4 flex flex-col justify-center items-start z-10
                         w-[140px] h-[160px] sm:w-[164px] sm:h-[180px]
                         lg:w-[164px] lg:h-[180px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Avatars />
              <p className="mt-3 font-semibold text-base text-white">
                32k+ Clients
              </p>
              <p className="mt-1 text-sm text-yellow-400 flex items-center gap-1">
                ⭐ 4.7 Rating
              </p>
            </div>
          </div>

          {/* BOTTOM CARD: full width */}
          <div
            className="w-full p-[16px] rounded-2xl items-center gap-[24px] relative flex flex-col
                       h-auto lg:h-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Icon button */}
            <div
              className="w-[72px] h-[72px] p-4 rounded-full flex-shrink-0 flex items-center justify-center text-gray-300 text-lg"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <ArrowLeftRight className="h-[32px] w-[32px]" />
            </div>

            <div>
              <p className="text-gray-200 text-[16px] font-medium text-center">
                Quick Growth Your Business With SEO
              </p>
            </div>
          </div>
        </div>
        {/* ── END RIGHT ── */}
      </div>
    </section>
  );
}