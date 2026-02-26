import { useState } from "react";
import {
  Globe,
  Image,
  Video,
  FileText,
  Smartphone,
  Pen,
  Code2,
  Settings,
  Layers,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

// ── Tag data ────────────────────────────────────────────────
const row = [
  { icon: <Globe className="w-5 h-5" />, label: "Website design" },
  { icon: <Image className="w-5 h-5" />, label: "Poster" },
  { icon: <Video className="w-5 h-5" />, label: "Video and motion graphics" },
  { icon: <FileText className="w-5 h-5" />, label: "Copy writing" },
  { icon: <Smartphone className="w-5 h-5" />, label: "App design" },
  { icon: <Pen className="w-5 h-5" />, label: "logo Design" },
  { icon: <Globe className="w-5 h-5" />, label: "Website design" },
  { icon: <Code2 className="w-5 h-5" />, label: "Custom code" },
  { icon: <Settings className="w-5 h-5" />, label: "Optimization" },
  { icon: <Layers className="w-5 h-5" />, label: "Icons" },
  { icon: <Megaphone className="w-5 h-5" />, label: "Social media" },
  { icon: <Video className="w-5 h-5" />, label: "Video and motion graphics" },
  { icon: <Image className="w-5 h-5" />, label: "Poster" },
  { icon: <Globe className="w-5 h-5" />, label: "Website design" },
];



// ── Project cards ────────────────────────────────────────────
const projects = [
  { id: 1, image: "/images/webdesign/WebProject1.png" },
  { id: 2, image: "/images/webdesign/WebProject2.png" },
  { id: 3, image: "/images/webdesign/WebProject3.png" },
  { id: 4, image: "/images/webdesign/WebProject4.png" },
];

// ── Tag pill component ───────────────────────────────────────
function TagPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] whitespace-nowrap text-sm text-gray-300 flex-shrink-0">
      {icon}
      {label}
    </div>
  );
}

// ── Testimonial card ─────────────────────────────────────────
function TestimonialCard({ rotate = 0, className = "" }) {
  return (
    <div
      className={`w-[250px] h-[160px] bg-white/10 backdrop-blur-[22px] rounded-2xl p-6 shadow-[0_0_50px_rgba(255,255,255,0.03)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="text-gray-300 leading-relaxed">
        " Clean, modern, and user-focused designs. "
      </p>
      <p className="text-right mt-6 text-gray-400">- harry</p>
    </div>
  );
}

// ── Device frame ─────────────────────────────────────────────
function DeviceFrame({ project }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden w-full h-full group"
      style={{
        background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "15px",
      }}
    >
      {/* Gray Card Frame Background */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#3a3a3a] to-[#1f1f1f] p-4 pb-0 h-full">
        {/* Inner Screen */}
        <div className="overflow-hidden w-full h-full p-[40px] pb-0">
          <img
            src={project.image}
            alt="project"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 rounded-xl"
          />
        </div>
      </div>

      {/* Arrow button */}
      <button
        className="absolute bottom-5 left-5 w-9 h-9 rounded-full bg-black border border-white/20
                   flex items-center justify-center text-white
                   group-hover:bg-white group-hover:text-black transition-all duration-300 z-10"
      >
        <ArrowUpRight className="w-4 h-4" />
      </button>

      {/* Subtle top-left glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

// ── Main component ───────────────────────────────────────────
export default function WebProjectsSection() {
  return (
    <section className="container overflow-hidden">

      {/* ── TAG ROWS ── */}
      <div
        className="flex flex-col gap-3
                   pt-8 pb-4 sm:pt-10 sm:pb-5"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-3">
          {row.map((t, i) => (
            <TagPill key={i} icon={t.icon} label={t.label} />
          ))}
        </div>
        
      </div>

      {/* ── HERO TEXT + TESTIMONIALS ── */}
      <div
        className="relative flex flex-col lg:flex-row lg:items-center justify-between
                   gap-8 sm:gap-12 lg:gap-16
                   px-4 sm:px-6 lg:px-16
                   pt-10 sm:pt-14 lg:pt-20
                   pb-6 sm:pb-8 lg:pb-10"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 max-w-full lg:max-w-[520px]">
          <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 w-fit text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-white/50" />
            Our work
          </div>

          <h2
            className="font-medium tracking-tight leading-[1.05]
                      text-3xl sm:text-4xl xl:text-[72px]"
          >
            Explore
          
            <span className="text-transparent bg-clip-text ml-3 bg-gradient-to-r from-[#B8B8B8] to-[#4A4A4A]">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-full sm:max-w-[360px] lg:max-w-[360px] text-sm sm:text-base lg:text-[16px]">
            Creating modern, user-focused websites for start-ups, agencies, and businesses.
          </p>
        </div>

        {/* RIGHT SIDE — TESTIMONIALS (desktop only) */}
        <div className="relative flex-1 lg:h-[268.92px] hidden lg:block text-[16px]">
          <TestimonialCard rotate={-6} className="absolute left-[90px] top-5" />
          <TestimonialCard rotate={5} className="absolute right-[30px] top-[120px]" />
        </div>
      </div>

      {/* ── PROJECT GRID ── */}
      <div
        className="px-4 sm:px-6 lg:px-16
                   py-8 sm:py-12 lg:py-16"
      >
        {/* Mobile / tablet: single column, auto height */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:hidden">
          {projects.map((p) => (
            <div key={p.id} className="h-[260px] sm:h-[320px]">
              <DeviceFrame project={p} />
            </div>
          ))}
        </div>

        {/* Desktop: exact 2-col masonry layout with your exact px heights */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start lg:max-h-[747px]">
          {/* COLUMN 1 — Large top, Small bottom */}
          <div className="flex flex-col gap-8">
            <div style={{ height: "411px" }}>
              <DeviceFrame project={projects[0]} />
            </div>
            <div style={{ height: "320px" }}>
              <DeviceFrame project={projects[1]} />
            </div>
          </div>

          {/* COLUMN 2 — Small top, Large bottom */}
          <div className="flex flex-col gap-8">
            <div style={{ height: "320px" }}>
              <DeviceFrame project={projects[2]} />
            </div>
            <div style={{ height: "411px" }}>
              <DeviceFrame project={projects[3]} />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}