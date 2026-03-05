import { useState } from "react";
import {
  Check,
  Zap,
  ChevronRight,
  PenLine,
  Type,
  Palette,
  ALargeSmall,
  Maximize2,
  Image,
  Paintbrush,
  Sparkles,
  Lightbulb,
} from "lucide-react";

/* ── helpers ── */
function neonGlow(hex) {
  return `0 0 7px ${hex}, 0 0 20px ${hex}, 0 0 55px ${hex}, 0 0 110px ${hex}`;
}

/* ── data ── */
const SWATCH_COLORS = [
  { id: "pink", hex: "#FF2D78" },
  { id: "teal", hex: "#00C0C0" },
  { id: "yellow", hex: "#C9A227" },
  { id: "purple", hex: "#9B5DE5" },
  { id: "green", hex: "#00B86B" },
  { id: "orange", hex: "#D4722A" },
  { id: "lavender", hex: "#6C72C3" },
  { id: "white", hex: "#C0C0C0", pencil: true },
];

const FONT_DEFS = [
  {
    id: "modernist",
    label: "MODERNIST",
    style: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" },
    icon: "zap",
  },
  {
    id: "artisan",
    label: "Artisan",
    style: { fontFamily: "'Pacifico', cursive" },
    icon: "pen",
  },
  {
    id: "elegance",
    label: "Elegance",
    style: { fontFamily: "'Great Vibes', cursive", fontSize: "1.2rem" },
    icon: "pen",
  },
];

const SIZE_OPTIONS = [
  { id: "mini", label: "Mini", length: '16.5"', price: "$84" },
  { id: "small", label: "Small", length: '25"', price: "$118" },
  { id: "large", label: "Large", length: '38"', price: "$170" },
  { id: "xxlarge", label: "XX Large", length: '64"', price: "$211" },
  { id: "xsmall", label: "Extra Small", length: '20"', price: "$211" },
];

const ROOM_THUMBS = [
  "/images/ledneonsign/BG_1.jpg",
  "/images/ledneonsign/BG_2.jpg",
  "/images/ledneonsign/BG_3.jpg",
];
const BG_ROOMS = [
  "/images/ledneonsign/BG_1.jpg",
  "/images/ledneonsign/BG_2.jpg",
  "/images/ledneonsign/BG_3.jpg",
];

const NAV_ITEMS = [
  { id: "text", label: ["TEXT"], LucideIcon: Type },
  { id: "color", label: ["COLOR"], LucideIcon: Palette },
  { id: "font", label: ["FONT"], LucideIcon: ALargeSmall },
  { id: "size", label: ["SIZE"], LucideIcon: Maximize2 },
  { id: "bg", label: ["BACKGR", "OUND"], LucideIcon: Image },
  { id: "bgColor", label: ["BACKGR", "OUND", "COLOR"], LucideIcon: Paintbrush },
  { id: "effects", label: ["SPECIAL", "EFFECTS"], LucideIcon: Sparkles },
  { id: "ledKit", label: ["LED KIT"], LucideIcon: Lightbulb },
];

const COLOR_GROUP = ["color", "font"];
const BG_GROUP = ["bg", "bgColor"];

const glassStyle = {
  background: "rgba(255,255,255,0.13)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  borderRadius: 20,
  padding: 18,
};

/* ══════════════════════════════════════════════════════════════════ */
export default function LedNeonSign() {
  const [activeNav, setActiveNav] = useState("color");
  const [input, setInput] = useState("");
  const [displayText, setDisplayText] = useState("Create");
  const [neonColor, setNeonColor] = useState("#FF2D78");
  const [bgPanelColor, setBgPanelColor] = useState("#FF2D78");
  const [bgShape, setBgShape] = useState("none");
  const [activeFont, setActiveFont] = useState("elegance");
  const [activeSize, setActiveSize] = useState("small");
  const [activeRoom, setActiveRoom] = useState(0);

  const currentFont = FONT_DEFS.find((f) => f.id === activeFont);

  const handleSubmit = () => {
    if (input.trim()) {
      setDisplayText(input.trim());
      setInput("");
    }
  };

  const backdropStyle = (() => {
    if (bgShape === "none") return {};
    const base = {
      backgroundColor: bgPanelColor + "44",
      padding: "16px 40px",
      transition: "all 0.3s",
    };
    return bgShape === "rounded"
      ? { ...base, borderRadius: 999 }
      : { ...base, borderRadius: 10 };
  })();

  const isActive = (id) => {
    if (COLOR_GROUP.includes(id)) return COLOR_GROUP.includes(activeNav);
    if (BG_GROUP.includes(id)) return BG_GROUP.includes(activeNav);
    return activeNav === id;
  };

  return (
    <div
      className="flex flex-col h-screen overflow-hidden select-none"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap');
        .neon-text  { transition: text-shadow 0.4s ease; }
        .swatch-btn { transition: transform 0.15s, box-shadow 0.2s; }
        .swatch-btn:hover { transform: scale(1.13); }
        .font-row   { transition: border-color 0.2s, background 0.2s; }
        .nav-btn    { transition: background 0.2s, border-color 0.2s; }
        .size-row   { transition: border-color 0.2s, background 0.2s; }
        .panel-wrap::-webkit-scrollbar { width: 3px; }
        .panel-wrap::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
        .glass-panel { animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside className="w-[96px] flex flex-col justify-between items-center z-20 shrink-0">
          {NAV_ITEMS.map(({ id, label, LucideIcon }) => {
            const active = isActive(id);
            return (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className={`nav-btn flex flex-col items-center justify-center w-[64.39px] h-[67px] rounded-xl gap-1
                  ${active ? "bg-[var(--color-gradient)]/20 border-[var(--color-gradient)]" : "hover:bg-white/5"}`}
              >
                <LucideIcon
                  size={"18px"}
                  strokeWidth={1.8}
                  color={active ? "#C9922A" : "#555"}
                />
                <span
                  className={`text-[10px] font-semibold tracking-wide text-center leading-[15px]
                  ${active ? "text-[#C9922A]" : "text-gray-500"}`}
                >
                  {label.map((w, i) => (
                    <span key={i} className="block">
                      {w}
                    </span>
                  ))}
                </span>
              </button>
            );
          })}
        </aside>

        {/* ── Canvas ── */}
        <div className="relative flex-1 overflow-hidden">
          {/* Background photo */}
          <img
            src={BG_ROOMS[activeRoom]}
            alt="room"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.72)" }}
          />

          {/* Room thumbnails */}
          <div 
           style={{
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderColor: "rgba(255,255,255,0.35)",
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10 p-3 rounded-lg">
            {ROOM_THUMBS.map((src, i) => (
              <button
             
                key={i}
                onClick={() => setActiveRoom(i)}
                className={`w-[64px] h-[50px] rounded-xl overflow-hidden border-2 transition-all
                  ${activeRoom === i ? "border-[#C9922A] scale-105" : "border-white/25 hover:border-white/50"}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Neon text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div style={{ ...backdropStyle, display: "inline-block" }}>
              <span
                className="neon-text text-white block break-words text-center"
                style={{
                  color: "#fff",
                  textShadow: neonGlow(neonColor),
                  ...currentFont?.style,
                  fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                  lineHeight: 1.2,
                }}
              >
                {displayText}
              </span>
            </div>
          </div>

          {/* Text input */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Your text"
              className="h-[46px] px-5 rounded-xl border text-white placeholder-gray-400 text-sm focus:outline-none"
              style={{
                width: 220,
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderColor: "rgba(255,255,255,0.35)",
              }}
            />
            <button
              onClick={handleSubmit}
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              style={{ background: "#FF2D78", boxShadow: "0 0 18px #FF2D7888" }}
            >
              <Check size={18} color="#fff" strokeWidth={2.5} />
            </button>
          </div>

          {/* ── Floating Panels ── */}
          <div
            className="absolute top-4 right-4 z-20 flex flex-col gap-3 panel-wrap"
            style={{
              width: "320px",
              maxHeight: "calc(100% - 32px)",
              overflowY: "auto",
            }}
          >
            {/* COLOR + FONT */}
            {COLOR_GROUP.includes(activeNav) && (
              <>
                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader
                    label="COLOR ALCHEMY"
                    accent={activeNav === "color"}
                  />
                  <div className="grid grid-cols-4 gap-3 mt-2">
                    {SWATCH_COLORS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setNeonColor(c.hex)}
                        className="swatch-btn w-11 h-11 rounded-full flex items-center justify-center border-2"
                        style={{
                          background: c.hex,
                          borderColor:
                            neonColor === c.hex ? "c.hex" : "transparent",
                          boxShadow:
                            neonColor === c.hex
                              ? `0 0 0 2px transparent, 0 0 14px ${c.hex}`
                              : `0 8px  18px ${c.hex}66`,
                          transform:
                            neonColor === c.hex ? "scale(1.12)" : "scale(1)",
                        }}
                      >
                        {c.pencil && (
                          <PenLine size={14} color="rgba(0,0,0,0.55)" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader
                    label="TYPOGRAPHIC SOUL"
                    accent={activeNav === "font"}
                  />
                  <div className="flex flex-col gap-2 mt-2">
                    {FONT_DEFS.map((f) => {
                      const on = activeFont === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => setActiveFont(f.id)}
                          className="font-row flex items-center justify-between px-4 py-3 rounded-xl border text-white"
                          style={{
                            borderColor: on
                              ? "#FF2D78"
                              : "rgba(255,255,255,0.15)",
                            background: on
                              ? "rgba(255,45,120,0.12)"
                              : "rgba(255,255,255,0.05)",
                          }}
                        >
                          <span style={{ ...f.style, color: "#fff" }}>
                            {f.label}
                          </span>
                          {f.icon === "zap" ? (
                            <Zap
                              size={13}
                              color={on ? "#FF2D78" : "#666"}
                              strokeWidth={1.5}
                            />
                          ) : (
                            <PenLine
                              size={13}
                              color={on ? "#FF2D78" : "#666"}
                              strokeWidth={1.5}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* BG + BG COLOR */}
            {BG_GROUP.includes(activeNav) && (
              <>
                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader
                    label="BACKGROUND COLOR"
                    accent={activeNav === "bgColor"}
                  />
                  <div className="grid grid-cols-4 gap-3 p-6">
                    {SWATCH_COLORS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setBgPanelColor(c.hex)}
                        className="swatch-btn w-11 h-11 rounded-full flex items-center justify-center
                         border-2"
                        style={{
                          background: c.hex,
                          borderColor:
                            bgPanelColor === c.hex ? c.hex : "transparent",
                          boxShadow:
                            bgPanelColor === c.hex
                              ? `0 0 0 2px transparent, 0 0 14px ${c.hex}`
                              : `0 8px 14px ${c.hex}66`,
                          transform:
                            bgPanelColor === c.hex ? "scale(1.12)" : "scale(1)",
                        }}
                      >
                        {c.pencil && (
                          <PenLine size={14} color="rgba(0,0,0,0.55)" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader label="BACKGROUND" accent={activeNav === "bg"} />
                  <div className="flex flex-col gap-2 mt-2">
                    {[
                      { id: "none", icon: "pen" },
                      { id: "rectangle", icon: "zap" },
                      { id: "rounded", icon: "pen" },
                    ].map((s) => {
                      const on = bgShape === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setBgShape(s.id)}
                          className="font-row flex items-center justify-between px-4 py-3 rounded-xl border text-white"
                          style={{
                            borderColor: on
                              ? "#FF2D78"
                              : "rgba(255,255,255,0.15)",
                            background: on
                              ? "rgba(255,45,120,0.12)"
                              : "rgba(255,255,255,0.05)",
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              style={{
                                display: "inline-block",
                                width: 28,
                                height: 18,
                                background:
                                  s.id === "none"
                                    ? "transparent"
                                    : bgPanelColor + "55",
                                border:
                                  s.id === "none"
                                    ? "1px dashed rgba(255,255,255,0.4)"
                                    : `1px solid ${bgPanelColor}99`,
                                borderRadius: s.id === "rounded" ? 999 : 4,
                              }}
                            />
                            <span
                              style={{
                                fontFamily: "'Great Vibes', cursive",
                                fontSize: "1.1rem",
                              }}
                            >
                              Elegance
                            </span>
                          </span>
                          {s.icon === "zap" ? (
                            <Zap
                              size={13}
                              color={on ? "#FF2D78" : "#666"}
                              strokeWidth={1.5}
                            />
                          ) : (
                            <PenLine
                              size={13}
                              color={on ? "#FF2D78" : "#666"}
                              strokeWidth={1.5}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

           {/* SIZE */}
{activeNav === "size" && (
  <div className="glass-panel p-3 rounded-3xl" style={glassStyle}>
    <PanelHeader label="SIZE" accent />

    <div className="flex flex-col gap-4 mt-4 p-4">
      {SIZE_OPTIONS.map((s) => {
        const on = activeSize === s.id;

        return (
          <button
            key={s.id}
            onClick={() => setActiveSize(s.id)}
            className={`w-full rounded-2xl px-3 py-5 transition-all duration-300 text-left
              ${
                on
                  ? "bg-white/10 border border-pink-500/40"
                  : "bg-white/5 hover:bg-white/10 border border-white/5"
              }`}
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-xl">
                {s.label}
              </h3>

              <span
                className={`text-2xl font-bold ${
                  on ? "text-pink-500" : "text-white/80"
                }`}
              >
                {s.price}
              </span>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between mt-3 text-sm text-white/50">
              <span>Length: {s.length}</span>
              <span>Height: -</span>
            </div>
          </button>
        );
      })}
    </div>
  </div>
)}

            {/* EFFECTS */}
            {activeNav === "effects" && (
              <div className="glass-panel" style={glassStyle}>
                <PanelHeader label="SPECIAL EFFECTS" accent />
                <div className="flex flex-col gap-2 mt-2">
                  {["Steady", "Breathing", "Flicker", "Rainbow"].map((e) => (
                    <button
                      key={e}
                      className="font-row flex items-center gap-3 px-4 py-3 rounded-xl border text-white hover:border-[#C9922A]"
                      style={{
                        borderColor: "rgba(255,255,255,0.15)",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <Sparkles size={13} color="#888" strokeWidth={1.5} />
                      <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase">
                        {e}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* LED KIT */}
            {activeNav === "ledKit" && (
              <div className="glass-panel" style={glassStyle}>
                <PanelHeader label="LED KIT" accent />
                <div className="flex flex-col gap-2 mt-2">
                  {["Standard", "Premium", "Waterproof", "RGB Pro"].map((k) => (
                    <button
                      key={k}
                      className="font-row flex items-center gap-3 px-4 py-3 rounded-xl border text-white hover:border-[#C9922A]"
                      style={{
                        borderColor: "rgba(255,255,255,0.15)",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <Lightbulb size={13} color="#888" strokeWidth={1.5} />
                      <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase">
                        {k}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     {/* ── Bottom Bar ── */}
<div className="h-[78px] border-t border-white/10 
                flex items-center px-12 ml-[96px]">

  {/* Left Section */}
  <div className="flex items-center gap-10">
    
    {/* Canvas Dimensions */}
    <div>
      <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
        Canvas Dimensions
      </p>
      <p className="text-white font-semibold text-[22px] leading-tight">
        120 <span className="text-gray-500 text-[16px]">×</span> 45
        <span className="text-gray-600 text-[12px] ml-1">CM</span>
      </p>
    </div>

    {/* Divider */}
    <div className="w-px h-8 bg-white/10" />

    {/* Investment */}
    <div>
      <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
        Investment
      </p>
      <p className="text-[#C9922A] font-bold text-[28px] leading-tight">
        $312.00
      </p>
    </div>

    {/* Next Button */}
    <button
      className="ml-4 flex items-center gap-2 
                 bg-[#F5A623] hover:bg-[#ffb340]
                 text-black font-semibold
                 text-[14px] px-6 h-[40px]
                 rounded-full transition-all"
    >
      Next
      <ChevronRight size={16} strokeWidth={2.5} />
    </button>
  </div>

  {/* Right Side CTA */}
  <div className="ml-auto">
    <button
      className="flex items-center gap-3
                 bg-[#F5A623] hover:bg-[#ffb340]
                 text-black font-bold
                 text-[13px] px-8 h-[54px]
                 rounded-full transition-all"
    >
      I HAVE A DESIGN OR LOGO
      <Zap size={16} strokeWidth={2.2} />
    </button>
  </div>
</div>
    </div>
  );
}

/* ── Panel header ── */
function PanelHeader({ label, accent }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: accent ? "#FF2D78" : "rgba(255,255,255,0.3)" }}
      />
      <span
        className="text-[10px] font-bold tracking-[0.18em] uppercase"
        style={{ color: accent ? "#fff" : "rgba(255,255,255,0.5)" }}
      >
        {label}
      </span>
    </div>
  );
}
