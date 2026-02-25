import React from "react";
import {
  RefreshCcw,
  FolderSearch,
  Layers,
  BookUser,
  EarthLock,
  MapPinned,
} from "lucide-react";

export default function SEOFeatures() {
  const features = [
    {
      icon: <RefreshCcw className="w-[40px] h-[40px]" />,
      title: "Driven Strategy",
      desc: "We use in-depth analytics and insights to create customized SEO strategies.",
    },
    {
      icon: <FolderSearch className="w-[40px] h-[40px]" />,
      title: "Page Optimization",
      desc: "From keyword optimization to link-building, we enhance both on-site.",
    },
    {
      icon: <Layers className="w-[40px] h-[40px]" />,
      title: "SEO Excellence",
      desc: "We optimize site speed, mobile responsiveness, and core web vitals.",
    },
    {
      icon: <BookUser className="w-[40px] h-[40px]" />,
      title: "Content Approach",
      desc: "Our expert team crafts high-quality, SEO-friendly content that ranks.",
    },
    {
      icon: <EarthLock className="w-[40px] h-[40px]" />,
      title: "Global SEO Solutions",
      desc: "Whether targeting local markets or global audiences, we scale your reach.",
    },
    {
      icon: <MapPinned className="w-[40px] h-[40px]" />,
      title: "Tracking Optimization",
      desc: "With real-time tracking and detailed analytics, we monitor every metric.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[url('/images/seo/SEO_Backgrond.png')]
                 bg-center bg-cover bg-no-repeat p-4"
    >
      {/* ── Heading ── */}
      <div
        className="text-center relative z-10 flex flex-col
                   gap-3 lg:gap-[16px]
                   mt-8 sm:mt-10 lg:mt-10
                   mb-10 sm:mb-12 lg:mb-16
                   px-4 sm:px-6 lg:px-0"
      >
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-2 lg:mb-4">
          Features
        </p>
        <h2
          className="font-semibold leading-tight
                     text-3xl sm:text-5xl lg:text-[64px]"
        >
          Tailored Strategies
        </h2>
        <h3
          className="text-[var(--color-gradient)] font-[instrument-serif] italic font-medium
                     text-3xl sm:text-5xl lg:text-[64px]"
        >
          For Lasting Impact
        </h3>
      </div>

      {/* ── Cards Grid ── */}
      <div
        className="grid relative z-10 items-center text-center
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   gap-4 sm:gap-5 lg:gap-5
                    px-4 sm:px-6 w-full 
                   xl:w-[1136px] xl:h-[688px] lg:px-0
                   justify-self-center
                   pb-10 sm:pb-14 lg:pb-0"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl flex flex-col items-center
                       p-6 sm:p-8 lg:p-[32px]
                       gap-6 sm:gap-8 lg:gap-[44px]
                       h-auto sm:h-[300px] lg:h-[332px]
                       w-full xl:w-[362.67px]
                       group transition-all duration-300 hover:scale-[1.02]
                       hover:shadow-[-8px_-8px_30px_rgba(255,255,255,0.25),8px_-8px_30px_rgba(255,255,255,0.25)]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Icon circle */}
            <div
              className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-gray-300
                         group-hover:text-white transition-colors flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {f.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl font-bold text-white">{f.title}</h4>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}