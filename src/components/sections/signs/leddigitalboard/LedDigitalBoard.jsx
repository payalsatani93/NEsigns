import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, CircleCheckBig, X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, useMotionValue, animate } from "framer-motion";
import DigitalSignageCards from "./Digitalsignagecards";
import LedDigitalBenefits from "./LedDigitalBenefits";
import LedDegitalSlider from "./LedDegitalSlider";

export default function LedDigitalBoard() {
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
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-[url('/images/digitalboard/Hero_img.png')]
                 bg-center bg-cover bg-no-repeat"
      >
      <div className="absolute text-center">
          <h1 className="containers lg:text-[60px] text-md leading-tight font-[400]">
            Indoor & Outdoor Digital LED Display Boards
            <br />
            High-Impact Digital Signage Solutions for Every Industry
          </h1>
          <p className="container text-[24px]">
            Looking for indoor and outdoor digital LED boards that capture
            attention and drive results? We design, manufacture, and install
            high-brightness LED display screens built for maximum visibility,
            durability, and performance.
          </p>

          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contactUs">
              <button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 py-4 sm:py-6 rounded-full
                       bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                       text-[16px] flex items-center justify-center gap-2
                       transition-all duration-300"
              >
                Contact Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform arrow-bounce" />
              </button>
            </Link>

            <Link to="/services">
              <button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 py-4 sm:py-6 rounded-full border 
                       text-[var(--color-gradient)]
                       text-[16px] flex items-center justify-center gap-2
                       transition-all duration-300"
              >
                Explore all service
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform arrow-bounce" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Display Systems section */}

      <section className="container">
        <div className="text-center py-5 lg:py-20 flex flex-col sm:gap-[16px] gap-[8px]">
          <p className="text-[12px] text-[var(--color-gradient)]">
            Premium Display Systems
          </p>
          <h1 className="lg:text-[60px] md:text-[40px] sm:text-xl text-md font-extrabold">
            Digital LED
            <span className="text-[var(--color-gradient)]">
              {" "}
              Signage Solutions
            </span>
          </h1>
          <p className="lg:text-[18px] text-sm text-white/50 flex-wrap">
            The pinnacle of visual communication. Engineered for impact,
            designed for durability.
          </p>
        </div>

        <div className="bg-[var(--color-graybg)] flex md:flex-row flex-col md:gap-10 gap-5 justify-self-center rounded-xl p-2 max-w-5xl">
          <div className="">
            <img
              className="rounded-xl md:w-570 w-auto md:h-[438px] h-auto"
              src="/images/digitalboard/Img_2.png"
              alt=""
            />
          </div>

          <div className="md:py-[48px] py-5 flec flex-col p-4">
            <div className="bg-[var(--color-gradient)] inline-block p-2.5 rounded-[8px]">
              <Sun className="w-[27.5px] h-[27.5px]" />
            </div>
            <h1 className="lg:text-[30px] text-[20px] font-bold pb-[16px]">
              Ultra-bright daylight visibility
            </h1>
            <p className="text-white/50 text-[16px] pb-[16px]">
              Our digital LED signage solutions help businesses, churches,
              schools, and commercial properties communicate dynamically,
              increase foot traffic, and boost brand visibility.
            </p>
            <div className="flex gap-[16px] text-[var(--color-gradient)] text-[14px] font-bold">
              <div className="flex gap-2 items-center">
                <CircleCheckBig className="w-[11.68px] h-[11.68px] " />
                <p>10,000 Nits</p>
              </div>
              <div className="flex gap-2 items-center">
                <CircleCheckBig className="w-[11.68px] h-[11.68px]" />
                <p>10,000 Nits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* business plans and strategic Section*/}
      <section className="flex flex-col items-center justify-center px-8 py-16">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-14 leading-tight">
          We deliver top-tier business
          <br />
          plans and strategic solutions
        </h2>
        <div className="containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[var(--color-gradient)]/10 border border-white/50 rounded-2xl p-6 flex flex-col gap-5 hover:border-[#C89A2A]/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-[#C89A2A] rounded-xl flex items-center justify-center">
                {typeof f.icon === "string" ? (
                  <Icon icon={f.icon} className="w-7 h-7 text-white" />
                ) : (
                  f.icon
                )}
              </div>
              <div>
                <h3 className="text-white font-extrabold text-sm leading-snug mb-3">
                  {f.title}
                </h3>
                <div className="w-full h-px bg-[#3a3a35] mb-3" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <>
      <LedDegitalSlider/>
      <LedDigitalBenefits/>
      <DigitalSignageCards/>
      </>
    </>
  );
}
