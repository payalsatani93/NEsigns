import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, CircleCheckBig } from "lucide-react";
import DigitalSignageCards from "./Digitalsignagecards";
import LedDigitalBenefits from "./LedDigitalBenefits";
import LedDegitalSlider from "./LedDegitalSlider";
import LedBoardBusinessPlan from "./LedBoardBusinessPlan";
import LedExecutionRedefined from "./LedExecutionRedefined";
import WhychooseLedDigital from "./WhychooseLedDigital";

export default function LedDigitalBoard() {
 
 
  return (
    <>
      <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden
  bg-[url('/images/digitalboard/Hero_img.png')]
  bg-center bg-cover bg-no-repeat px-4 sm:px-6 lg:px-10"
>
  
  {/* Content */}
  <div className="relative z-10  text-center">
    
    {/* Heading */}
    <h1 className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[42px] lg:text-[60px] 
    leading-tight font-bold text-white">
      Indoor & Outdoor Digital LED Display Boards
      <br className="hidden sm:block" />
      High-Impact Digital Signage Solutions for Every Industry
    </h1>

    {/* Paragraph */}
    <p className="mt-4 sm:mt-6 text-[13px] sm:text-[15px] md:text-[18px] lg:text-[22px] lg:px-30 px-0
    text-gray-300 leading-relaxed">
      Looking for indoor and outdoor digital LED boards that capture
      attention and drive results? We design, manufacture, and install
      high-brightness LED display screens built for maximum visibility,
      durability, and performance.
    </p>

    {/* Buttons */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
      
      {/* Contact Button */}
      <Link to="/contactUs" className="w-full sm:w-auto">
        <button
          className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full
          bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
          text-[14px] sm:text-[16px] flex items-center justify-center gap-2
          transition-all duration-300"
        >
          Contact Now
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>

      {/* Explore Button */}
      <Link to="/services" className="w-full sm:w-auto">
        <button
          className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border 
          border-white/30 text-white
          text-[14px] sm:text-[16px] flex items-center justify-center gap-2
          transition-all duration-300 hover:bg-white hover:text-black"
        >
          Explore all service
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
      
      <>
      <LedBoardBusinessPlan/>
      <LedDegitalSlider/>
      <LedDigitalBenefits/>
      <DigitalSignageCards/>
      <LedExecutionRedefined/>
      <WhychooseLedDigital/>
      </>
    </>
  );
}
