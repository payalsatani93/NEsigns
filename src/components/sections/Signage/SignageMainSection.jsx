import React from 'react';

const SignageMainSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-0 sm:py-10 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container flex gap-8 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 items-center justify-center xl:flex-row flex-col">
        
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 items-center">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 sm:w-16 md:w-20 h-[1px] bg-yellow-600"></div>
            <span className="text-yellow-600 uppercase tracking-widest text-xs sm:text-sm">
              Signage
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Get your Business Signage <br /> 
            <span className="text-gray-100">in Best Price.</span>
          </h2>

          <div className="space-y-3 sm:space-y-4 max-w-xl text-gray-400 leading-relaxed text-sm sm:text-base">
            <p>
              Get high-quality business signage designed to attract attention and
              build trust. We offer durable, visually striking signs at the best prices,
              tailored to fit your brand and business needs.
            </p>
            <p>
              Make your business stand out with affordable, eye-catching
              signage. From design to installation, we deliver quality signs that fit
              your budget without compromising on style.
            </p>
          </div>
        </div>

        {/* Right Images Container */}
        <div className="relative flex justify-center lg:justify-start items-center h-[400px] sm:h-[500px] md:h-[600px]">
          
          {/* Circular Badge - Top center of images */}
          <div className="absolute -top-6 sm:-top-8 md:-top-10 left-[38%] sm:left-[37%] md:left-3/8 z-30 rotate-slow">
            <img 
              src="/images/Signage_Circuler_Ring.png"
              alt="Design Studio Award" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
          </div>

          {/* Left Image (alo) */}
          <div className="relative z-10 w-[45%] sm:w-1/2 md:w-75 aspect-[2/3.5]
          transform -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 -translate-y-[10px] sm:-translate-y-[15px] md:translate-y-[-20px]">
            <img 
              src="/images/signage_02.png" 
              alt="Backlit signage"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image (Hello Gorgeous) */}
          <div className="relative z-20 w-[48%] sm:w-1/2 md:w-70 aspect-[3/5.5] shadow-2xl translate-y-[30px] sm:translate-y-[40px] md:translate-y-[50px]">
            <img 
              src="/images/Signage_01.png" 
              alt="Neon signage"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-yellow-600/10 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default SignageMainSection;