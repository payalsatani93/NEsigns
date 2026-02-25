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
const row1 = [
  { icon: <Globe className="w-5 h-5" />, label: "Website design" },
  { icon: <Image className="w-5 h-5" />, label: "Poster" },
  { icon: <Video className="w-5 h-5" />, label: "Video and motion graphics" },
  { icon: <FileText className="w-5 h-5" />, label: "Copy writing" },
  { icon: <Smartphone className="w-5 h-5" />, label: "App design" },
  { icon: <Pen className="w-5 h-5" />, label: "logo Design" },
  { icon: <Globe className="w-5 h-5" />, label: "Website design" },
];

const row2 = [
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
  {
    id: 1,
    image: "/images/webdesign/WebProject1.png",
  },
  {
    id: 2,
    image: "/images/webdesign/WebProject2.png",
  },
  {
    id: 3,
    image: "/images/webdesign/WebProject3.png",
  },
  {
    id: 4,
    image: "/images/webdesign/WebProject4.png",
  },
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
      className={`w-[340px] 
                  bg-white/[0.03] 
                  backdrop-blur-2xl
                  border border-white/10
                  rounded-2xl 
                  p-6 text-white
                  shadow-[0_0_50px_rgba(255,255,255,0.03)]
                  ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="text-sm text-gray-300 leading-relaxed">
        “ Clean, modern, and user-focused designs. ”
      </p>

      <p className="text-right mt-6 text-gray-400 text-sm">
        - harry
      </p>
    </div>
  );
}

// ── Device frame ─────────────────────────────────────────────
function DeviceFrame({ project }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "18px",
      }}
    >
      {/* Gray Card Frame Background */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#3a3a3a] to-[#1f1f1f] p-4 pb-0">

        {/* Inner Screen */}
        <div className="overflow-hidden aspect-[16/10] w-full p-10 pb-0">
          <img
            src={project.image}
            alt="project"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 rounded-xl "
          />
        </div>
      </div>

      {/* Arrow button */}
      <button
        className="absolute bottom-5 left-5 w-9 h-9 rounded-full bg-black border border-white/20
                   flex items-center justify-center text-white
                   group-hover:bg-white group-hover:text-black transition-all duration-300"
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
      <div className="pt-12 pb-6 flex flex-col gap-3 px-6 sm:px-10 lg:px-16">
        {/* Row 1 */}
        <div className="flex flex-wrap gap-3">
          {row1.map((t, i) => (
            <TagPill key={i} icon={t.icon} label={t.label} />
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex flex-wrap gap-3">
          {row2.map((t, i) => (
            <TagPill key={i} icon={t.icon} label={t.label} />
          ))}
        </div>
      </div>

      {/* ── HERO TEXT + TESTIMONIALS ── */}
      {/* ── HERO TEXT + TESTIMONIALS ── */}
<div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 
                flex flex-col lg:flex-row 
                lg:items-center 
                justify-between gap-16">

  {/* LEFT SIDE */}
  <div className="max-w-[520px] flex flex-col gap-6">

    {/* Badge */}
    <div className="flex items-center gap-2 
                    border border-white/15 
                    rounded-full px-4 py-1.5 
                    w-fit text-sm text-gray-300">
      <span className="w-2 h-2 rounded-full bg-white/50" />
      Our work
    </div>

    {/* Heading */}
    <h2 className="text-5xl sm:text-6xl lg:text-[72px] 
                   leading-[1.05] font-medium tracking-tight">
      Explore 
      <span className="text-transparent bg-clip-text ml-3 
                       bg-gradient-to-r 
                       from-[#B8B8B8] 
                       to-[#4A4A4A]">
        Projects
      </span>
    </h2>

    {/* Description */}
    <p className="text-gray-400 text-base leading-relaxed max-w-[360px]">
      Creating modern, user-focused websites for start-ups, 
      agencies, and businesses.
    </p>

  </div>

  {/* RIGHT SIDE — TESTIMONIALS */}
  <div className="relative flex-1 h-[320px] hidden lg:block">

    {/* Back Card */}
    <TestimonialCard
      rotate={-6}
      className="absolute right-[160px] top-[120px] opacity-60"
    />

    {/* Front Card */}
    <TestimonialCard
      rotate={5}
      className="absolute right-[40px] top-[80px]"
    />

  </div>

</div>

      {/* ── PROJECT GRID ── */}
      <div className="px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <DeviceFrame key={p.id} project={p} />
        ))}
      </div>


    </section>
  );
}