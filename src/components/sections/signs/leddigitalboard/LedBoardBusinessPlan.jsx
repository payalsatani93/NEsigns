import React from 'react'
import { Icon } from "@iconify/react";


export default function LedBoardBusinessPlan() {
     const features = [
    {
      icon: "bi:displayport",
      title: "CUSTOM LED DISPLAY SIZES",
      desc: "Custom-sized LED screens designed for your exact needs.",
    },
    {
      icon: "ph:drop-fill",
      title: "WEATHERPROOF OUTDOOR LED BOARDS",
      desc: "Durable outdoor LED boards designed for all weather",
    },
    {
      icon: "mdi:white-balance-sunny",
      title: "ULTRA-BRIGHT DAYLIGHT VISIBILITY",
      desc: "High-visibility screens for sunny environments",
    },
    {
      icon: "mdi:flash",
      title: "ENERGY-EFFICIENT TECHNOLOGY",
      desc: "Eco-friendly technology for sustainable performance",
    },
    {
      icon: "mdi:tablet-dashboard",
      title: "EASY CONTENT MANAGEMENT SYSTEM",
      desc: "Simple platform to update your content anytime",
    },
  ];
  return (
   <section className="flex flex-col items-center justify-center px-6 md:px-8 py-6 md:py-16">
  <h2 className="text-white text-2xl md:text-4xl font-extrabold text-center mb-10 md:mb-14 leading-tight">
    We deliver top-tier business
    <br />
    plans and strategic solutions
  </h2>

  <div className="containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full place-items-center">
    {features.map((f, i) => (
      <div
        key={i}
        className="
          bg-[var(--color-gradient)]/10 
          border border-white/50 
          rounded-2xl 
          p-6 
          w-full max-w-[325px] 
          h-[391px]
          flex flex-col 
          justify-between
          hover:border-[var(--color-gradient)]/50 
          transition-colors duration-300
        "
      >
        {/* ICON CENTER */}
        <div className="flex justify-center">
          <div className="w-[80px] h-[80px] sm:m-8 m-5
          bg-[var(--color-gradient)] rounded-xl flex items-center justify-center">
            {typeof f.icon === "string" ? (
              <Icon icon={f.icon} className="w-10 h-10 text-white" />
            ) : (
              f.icon
            )}
          </div>
        </div>

        {/* CONTENT LEFT */}
        <div className="flex flex-col flex-1 justify-start">
          <h3 className="text-white font-bold sm:text-[22px] text-[20px] mb-6 text-left">
            {f.title}
          </h3>

          <div className="w-full h-px bg-[#E7E7E8] mb-3" />

          <p className="text-white text-[15px] text-left w-full">
            {f.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
  )
}
