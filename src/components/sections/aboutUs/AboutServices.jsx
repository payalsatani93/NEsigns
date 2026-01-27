import React from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { left: "PRINTING PRODUCTS", right: "DIRECT MAILING" },
    { left: "SIGNAGE", right: "WEB DESIGNING" },
    { left: "WALL & STREET SIGNS", right: "SEO" },
    { left: "AWNING & CANOPY", right: "MOBILE APPS" },
  ];

  return (
    <div className="bg-gradient-to-br from-[var(--color-background)] via-black to-black 
      py-8 px-4 sm:px-6 lg:px-8">
      <div className="container ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Left Side - Images */}
          <div className="space-y-4 sm:space-y-6 order-2 xl:order-1">
            {/* Coffee Card Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden 
              ml-0 xl:ml-20">
              <img
                src="/images/about/Img_02.png"
                alt="Coffee"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Printer Image Container */}
            <div className="relative">
              {/* Main Printer Image */}
              <div className="ml-0 xl:ml-20 
                rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Desktop/Tablet Printer Image */}
                <img
                  src="/images/about/Img_01.png"
                  alt="Printer"
                  className="w-full h-auto object-cover hidden lg:block"
                />
                {/* Mobile Printer Image */}
                <img 
                  src="/images/about/Img_04.png" 
                  alt="Printer Mobile" 
                  className="w-full h-100 object-cover lg:hidden"
                />
              </div>

              {/* Light Bulb - Desktop Only */}
              <div className="hidden lg:block absolute -bottom-12 xl:-bottom-10 left-10 
                w-60 h-60 
                2xl:w-60 2xl:h-60
                xl:w-50 xl:h-50 
                lg:w-100 lg:h-100
                rounded-3xl overflow-hidden z-10">
                <img
                  src="/images/about/Img_03.png"
                  alt="Light Bulb"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Get in Touch Button */}
              <div className="mt-6 lg:mt-0 lg:absolute 
                lg:bottom-8 xl:bottom-0 
                lg:right-12 xl:right-0
                flex justify-center lg:justify-end">
                <button
                  className="group flex items-center gap-2  
                    px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3
                    border border-[var(--color-muted)] 
                    rounded-full 
                    text-sm sm:text-base">
                  <span className="text-[var(--color-gradient)] font-medium">
                    Get in Touch
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white 
                    group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="order-1 xl:order-2 lg:pt-0 xl:pt-10">
            {/* Header */}
            <div className="mb-6 lg:mb-12">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-5 
                text-[var(--color-gradient)]">
                <span className="text-xs sm:text-sm tracking-widest uppercase font-medium">
                  Our Services
                </span>
                <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl  
                font-bold leading-tight">
                <span className="text-[var(--color-gradient)]">High-Quality</span> Services
                <br />
                You Can Count On
              </h2>
            </div>

            {/* Services List */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 
                    py-4"
                >
                  {/* Left Service */}
                  <div className="group">
                    <div className="text-white text-sm sm:text-base md:text-lg 
                      font-medium tracking-wide">
                      {service.left}
                    </div>
                    <div 
                      className="w-full h-px mt-3 sm:mt-4 transition-all duration-300
                        group-hover:h-0.5"
                      style={{
                        background: 'linear-gradient(to right, var(--color-gradient, #10b981), transparent)'
                      }}
                    />
                  </div>
                  
                  {/* Right Service */}
                  <div className="group">
                    <div className="text-white text-sm sm:text-base md:text-lg 
                      font-medium tracking-wide">
                      {service.right}
                    </div>
                    <div 
                      className="w-full h-px mt-3 sm:mt-4 "
                      style={{
                        background: 'linear-gradient(to right, var(--color-gradient, #10b981), transparent)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}