import { useState } from "react";
import {
  LayoutDashboard,
  Pencil,
  MousePointerClick,
  Smartphone,
  Monitor,
  ShoppingCart,
  LayoutGrid,
  Code2,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    desc: "Smart systems to track and optimize your assets in real-time.",
    icon: LayoutDashboard,
    angle: -140,
    dist: 360,
    color: "var(--color-sky)",
  },
  {
    title: "Graphic Design",
    desc: "Identity and branding solutions that speak your brand's unique language.",
    icon: Pencil,
    angle: -90,
    dist: 360,
    color: "var(--color-blue)",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric interfaces optimized for conversion and seamless journeys.",
    icon: MousePointerClick,
    angle: -35,
    dist: 360,
    color: "var(--color-sky)",
  },
  {
    title: "Custom Software",
    desc: "Tailored enterprise systems designed to solve complex business logic.",
    icon: Monitor,
    angle: 0,
    dist: 360,
    color: "var(--color-blue)",
  },
  {
    title: "JS Development",
    desc: "High-performance applications built with modern frameworks like React.",
    icon: Code2,
    angle: 35,
    dist: 360,
    color: "var(--color-sky)",
  },
  {
    title: "CMS Solutions",
    desc: "Flexible, scalable content management systems for total control.",
    icon: LayoutGrid,
    angle: 90,
    dist: 360,
    color: "var(--color-blue)",
  },
  {
    title: "Ecommerce",
    desc: "Robust online stores with secure checkout and streamlined flows.",
    icon: ShoppingCart,
    angle: 140,
    dist: 360,
    color: "var(--color-sky)",
  },
  {
    title: "Mobile Apps",
    desc: "Native and hybrid solutions for iOS and Android environments.",
    icon: Smartphone,
    angle: 180,
    dist: 360,
    color: "var(--color-blue)",
  },
];

/* ── Desktop SVG card ───────────────────────────────────────────── */
function ServiceCard({ service, cx, cy }) {
  const Icon = service.icon;
  const rad = (service.angle * Math.PI) / 180;
  const x = cx + Math.cos(rad) * service.dist;
  const y = cy + Math.sin(rad) * service.dist;

  return (
    <g transform={`translate(${x},${y})`} className="cursor-pointer">
      <foreignObject x={-115} y={-85} width={240} height={180}>
        <div className="w-[240px] h-[180px] rounded-xl bg-white/10 border border-white/10 backdrop-blur-[12px] 
        shadow-xl p-4 flex flex-col gap-2">
          <div className="w-[40px] h-[28px] rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Icon size={20} style={{ color: service.color }} />
          </div>
          <h3 className="text-white text-[18px] font-semibold leading-tight">
            {service.title}
          </h3>
          <p className="text-white/40 text-[12px] leading-relaxed">
            {service.desc}
          </p>
        </div>
      </foreignObject>
    </g>
  );
}

/* ── Mobile / tablet card ───────────────────────────────────────── */
function MobileServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl p-4 flex flex-col gap-2 transition-all duration-300 hover:border-blue-400 cursor-pointer">
      <div className="w-[40px] h-[28px] rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Icon size={20} style={{ color: service.color }} />
      </div>
      <h3 className="text-white text-[15px] sm:text-[16px] font-semibold leading-tight">
        {service.title}
      </h3>
      <p className="text-white/40 text-[12px] leading-relaxed">{service.desc}</p>
    </div>
  );
}

/* ── CTA button (shared) ────────────────────────────────────────── */
function CTAButton() {
  return (
    <div style={{ position: "relative", zIndex: 2, marginTop: "-8px" }}>
      <button
        style={{
          position: "relative",
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,0.55)",
          fontSize: "10.5px",
          letterSpacing: "0.22em",
          padding: "10px 48px",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          transition: "color 0.25s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
        }
      >
        {[
          {
            top: 0,
            left: 0,
            borderTop: "2px solid #0D59F2",
            borderLeft: "2px solid #0D59F2",
          },
          {
            bottom: 0,
            right: 0,
            borderBottom: "2px solid #0D59F2",
            borderRight: "2px solid #0D59F2",
          },
        ].map((s, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              width: "14px",
              height: "30px",
              ...s,
            }}
          />
        ))}
        EXPLORE ALL SERVICES
      </button>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────────────── */
export default function WebServicesSection() {
  const W = 1280;
  const H = 1154;
  const cx = W / 2;
  const cy = H / 2 + 20;

  return (
    <section className="w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      {/* ── Heading — desktop font sizes NEVER change ── */}
      <div className="container flex flex-col items-center text-center gap-3 px-4 sm:px-6">
        <p className="uppercase text-[12px] text-white/40 tracking-widest">
          SERVICES WE PROVIDE
        </p>

        {/* Mobile/tablet: scale down heading; lg+ stays exactly 62px */}
        <h1 className="text-[32px] sm:text-[44px] lg:text-[62px] leading-tight">
          Integrates{" "}
          <span className="bg-gradient-to-r from-[#B8B8B8] to-[#525252] bg-clip-text text-transparent">
            Digital Mastery
          </span>
        </h1>

        {/* Mobile/tablet: slightly smaller subtitle; lg+ stays 18px */}
        <p className="text-gray-400 text-[14px] sm:text-[16px] lg:text-[18px] max-w-xl sm:max-w-2xl leading-relaxed">
          Our interconnected services radiate from a core of technical
          excellence providing a comprehensive solution for your brand's digital
          evolution.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          DESKTOP (lg+): original SVG radial diagram
          ══════════════════════════════════════════════════ */}
      <div className="hidden lg:block w-full container relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          {/* connection lines */}
          {services.map((s, i) => {
            const rad = (s.angle * Math.PI) / 180;
            const x = cx + Math.cos(rad) * s.dist;
            const y = cy + Math.sin(rad) * s.dist;
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="rgba(96,165,250,0.3)"
                strokeWidth="1"
              />
            );
          })}

          {/* hub */}
          <circle
            cx={cx}
            cy={cy}
            r="96"
            className="stroke-white flex flex-col items-center justify-center text-center"
            strokeWidth="1"
            style={{ filter: "drop-shadow(0px 0px 60px rgba(255,255,255,0.6))" }}
          />
          <foreignObject x={cx - 25} y={cy - 25} width="50" height="50">
            <div className=" w-full h-full">
              <LifeBuoy size={48} />
            </div>
          </foreignObject>
          <text
            x={cx}
            y={cy + 40}
            textAnchor="middle"
            className="fill-white/50 text-[12px] tracking-[1.2px]"
          >
            ALL WEB SERVICES
          </text>

          {services.map((s, i) => (
            <ServiceCard key={i} service={s} cx={cx} cy={cy} />
          ))}
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════
          TABLET (sm–md): 2-column card grid
          MOBILE (xs): 1-column card grid
          hidden on lg+
          ══════════════════════════════════════════════════ */}
      <div className="lg:hidden w-full px-4 sm:px-6 mt-10 mb-6">
        {/* Hub badge */}
        <div className="flex justify-center mb-8">
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 bg-white/10"
            style={{ boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
          >
            <LifeBuoy size={22} className="text-white/70" />
            <span className="text-white/50 text-[11px] tracking-[1.4px] uppercase">
              All Web Services
            </span>
          </div>
        </div>

        {/* Card grid: 1 col on mobile, 2 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {services.map((s, i) => (
            <MobileServiceCard key={i} service={s} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 mb-8 lg:mb-0">
        <CTAButton />
      </div>
    </section>
  );
}