import React from "react";
import { Icon } from "@iconify/react";

const steps = [
  {
    id: "01",
    icon: "ph:chat-text-thin",
    phase: "PHASE 01",
    title: "Free Consultation",
    desc: "Define strategic goals, location logistics, and budgetary parameters for the project scope.",
  },
  {
    id: "02",
    icon: "mdi:math-compass",
    phase: "PHASE 02",
    title: "Site Evaluation",
    desc: "Deep-dive technical assessment of power requirements, structural integrity, and visibility.",
  },
  {
    id: "03",
    icon: "lineicons:crane-4",
    phase: "PHASE 03",
    title: "Custom Design",
    desc: "Precision engineering of high-performance LED solutions tailored specifically to your spatial profile.",
  },
  {
    id: "04",
    icon: "ph:seal-check-bold",
    phase: "PHASE 04",
    title: "Quality Testing",
    desc: "Rigorous assurance protocols for operational stability, luminance consistency, and long lifecycle.",
  },
  {
    id: "05",
    icon: "mdi:account-service",
    phase: "PHASE 05",
    title: "Installation",
    desc: "Professional mounting, seamless electrical integration, and final hardware calibration.",
  },
  {
    id: "06",
    icon: "healthicons:i-training-class-24px",
    phase: "PHASE 06",
    title: "CMS & Training",
    desc: "Full software deployment and comprehensive operational training for your technical team.",
  },
  {
    id: "07",
    icon: "famicons:rocket",
    phase: "PHASE 07",
    title: "Launch & Live",
    desc: "Final system performance audit and hand-off for immediate 24/7 mission-critical operations.",
  },
  {
    id: "08",
    icon: "mdi:support",
    phase: "PHASE 08",
    title: "Global Support",
    desc: "SLA-backed technical advisory and proactive lifecycle maintenance on a global scale.",
  },
];

export default function LedExecutionRedefined() {
  return (
    <section className="py-5 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-yellow-500 mb-2">
            THE STRATEGIC PROCESS
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Execution <span className="text-yellow-500">Redefined</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            A linear, mission-critical framework designed for sequential
            efficiency and unparalleled transparency at every phase.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ">
          <div className="space-y-6 ">
            {steps.map((step, index) => (
              <div key={index} className="relative flex sm:flex-row flex-col  items-center gap-6">
                {/* dot */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-gradient)]" />
                </div>

                {/* card */}
               <div
  className="group relative rounded-xl border border-white/5 bg-white/10
  backdrop-blur-md p-5 md:p-8 
  flex flex-col md:flex-row items-start md:items-center justify-between 
  gap-4 md:gap-6
  transition-all duration-300 hover:bg-white/10"
>
  {/* Top Row (Icon + Content) */}
  <div className="flex items-start gap-4 md:gap-6 flex-1 ">
    
    {/* Icon */}
    <div
      className="shrink-0 flex items-center justify-center 
      w-[60px] h-[60px] md:w-[96px] md:h-[96px] rounded-lg 
      border border-yellow-500/20 
      bg-gradient-to-br from-yellow-500/10 to-transparent 
      group-hover:from-yellow-500/20 transition-all duration-300"
    >
      <Icon
        icon={step.icon}
        className="text-yellow-500 w-[22px] h-[22px] md:w-[30px] md:h-[30px]
        group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div>
      <p className="text-[10px] md:text-[12px] tracking-widest text-[var(--color-gradient)] font-bold mb-1 md:mb-2">
        {step.phase}
      </p>
      <h3 className="text-[16px] md:text-[30px] font-bold mb-1 md:mb-2">
        {step.title}
      </h3>
      <p className="text-white/50 text-[13px] md:text-[16px] leading-relaxed max-w-xl">
        {step.desc}
      </p>
    </div>
  </div>

  {/* Number */}
  <div className="w-full md:w-auto text-right md:text-left">
    <div className="text-[32px] md:text-[64px] font-extrabold text-white/10">
      {step.id}
    </div>
  </div>
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
