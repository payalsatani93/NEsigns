import React from "react";

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
    <div className="flex gap-[16px] items-center mt-[25px]">
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
function Avatars() {
  const colors = ["#C49A6C", "#8B7355", "#A0845C"];
  return (
    <div className="flex -space-x-2">
      {colors.map((c, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full border-2 border-[#111318] flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: c, zIndex: colors.length - i }}
        >
          {["J", "M", "A"][i]}
        </div>
      ))}
    </div>
  );
}

export default function SEOPoweredBy() {
  return (
    <section
      className="relative overflow-hidden bg-[url('/images/seo/SEO_Backgrond.png')]
                 bg-center bg-cover bg-no-repeat"
    >
      <div className="container px-6 grid lg:grid-cols-2 gap-[194px] items-center mt-20">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Powered by Results
          </h1>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-[var(--color-gradient)] font-[instrument-serif] italic font-medium">
            Built on Integrity
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">
            At NE Signs, we drive organic growth with data-driven SEO strategies
            that boost rankings, attract the right audience, and convert
            visitors into customers.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[520px] h-[420px]">

            {/* Rocket */}
            <img
              src="/images/seo/Rocket_img.png"
              alt="rocket"
              className="absolute -left-22 top-8 w-40 sm:w-[160px] sm:h-[160px] object-contain"
            />

           <div className="flex gap-10">
             {/* Visible Growth Card */}
            <div className="absolute top-0 left-10 w-[177px] h-[180px] rounded-2xl p-4 
                            bg-white/5 border border-white/10 backdrop-blur-[12px] z-10">
              <p className="text-[16px] text-gray-400 mb-1">Visible Growth</p>
              <BarChart />
            </div>

            {/* Clients Card */}
            <div className="absolute w-[165px] rounded-2xl p-4 
                            bg-white/5 border border-white/10 backdrop-blur-[12px] z-10">
              <Avatars />
              <p className="mt-3 font-semibold text-sm text-white">
                32k+ Clients
              </p>
              <p className="mt-1 text-xs text-yellow-400 flex items-center gap-1">
                ⭐ 4.7 Rating
              </p>
            </div>
           </div>

            {/* Bottom Large Card */}
            <div className="absolute bottom-0 right-0 w-full max-w-[480px] h-[160px]
                            bg-gradient-to-b from-white/10 to-white/5
                            backdrop-blur-2xl
                            border border-white/10
                            rounded-2xl
                            p-8
                            shadow-[0_0_40px_rgba(0,0,0,0.4)]
                            flex flex-col justify-center">

              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl 
                              bg-white/10 border border-white/10 
                              flex items-center justify-center text-xl text-gray-300">
                ↔
              </div>

              <p className="text-lg text-gray-200">
                Quick Growth Your Business With SEO
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}