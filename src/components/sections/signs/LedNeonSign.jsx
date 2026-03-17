import { useState } from "react";
import {
  Check, Zap, ChevronRight, PenLine, Type,
  ALargeSmall, Maximize2, Sparkles, Lightbulb, Layers,
} from "lucide-react";

/* ─── helpers ─── */
function neonGlow(hex) {
  return `0 0 7px ${hex}, 0 0 20px ${hex}, 0 0 55px ${hex}, 0 0 110px ${hex}`;
}

/* ─── data ─── */
const SWATCH_COLORS = [
  { id:"pink",     hex:"#FF2D78" },
  { id:"teal",     hex:"#00C0C0" },
  { id:"yellow",   hex:"#C9A227" },
  { id:"purple",   hex:"#9B5DE5" },
  { id:"green",    hex:"#00B86B" },
  { id:"orange",   hex:"#D4722A" },
  { id:"lavender", hex:"#6C72C3" },
  { id:"white",    hex:"#C0C0C0", pencil:true },
];

const FONT_DEFS = [
  { id:"modernist", label:"MODERNIST", style:{ fontFamily:"'Bebas Neue', sans-serif", letterSpacing:"0.15em" }, icon:"zap" },
  { id:"artisan",   label:"Artisan",   style:{ fontFamily:"'Pacifico', cursive" },                              icon:"pen" },
  { id:"elegance",  label:"Elegance",  style:{ fontFamily:"'Great Vibes', cursive" },                          icon:"pen" },
];

const SIZE_OPTIONS = [
  { id:"mini",    label:"Mini",        length:'16.5"', price:"$84"  },
  { id:"small",   label:"Small",       length:'25"',   price:"$118" },
  { id:"large",   label:"Large",       length:'38"',   price:"$170" },
  { id:"xxlarge", label:"XX Large",    length:'64"',   price:"$211" },
  { id:"xsmall",  label:"Extra Small", length:'20"',   price:"$211" },
];

const BACKING_OPTIONS = [
  { id:"cut-around",  label:"Cut Around",    price:"FREE",  hasBoardColor:false, img:"/images/ledneonsign/BackG_1.png" },
  { id:"rectangle",   label:"Rectangle",     price:"FREE",  hasBoardColor:false, img:"/images/ledneonsign/BackG_2.png" },
  { id:"cut-letter",  label:"Cut-To-Letter", price:"+$39",  hasBoardColor:true,  img:"/images/ledneonsign/BackG_3.png" },
  { id:"naked",       label:"Naked Neon",    price:"+$62",  hasBoardColor:false, img:"/images/ledneonsign/BackG_4.png" },
  { id:"acrylic",     label:"Acrylic Stand", price:"+$62",  hasBoardColor:true,  img:"/images/ledneonsign/BackG_5.png" },
  { id:"open-box",    label:"Open Box",      price:"+$116", hasBoardColor:true,  img:"/images/ledneonsign/BackG_6.png" },
];

const BOARD_COLORS = [
  { id:"clear",  label:"Standard clear acrylic backboard", price:"FREE", bg:"rgba(220,235,250,0.55)", border:"#bbc" },
  { id:"white",  label:"Glossy White acrylic backboard",   price:"$38",  bg:"#ffffff",               border:"#ddd" },
  { id:"black",  label:"Glossy Black acrylic backboard",   price:"$38",  bg:"#1a1a1a",               border:"#444" },
  { id:"silver", label:"Silver acrylic backboard",         price:"$84",  bg:"linear-gradient(135deg,#c0c0c0,#e8e8e8,#a8a8a8)", border:"#999" },
  { id:"gold",   label:"Gold acrylic backboard",           price:"$84",  bg:"linear-gradient(135deg,#b07820,#e8b840,#c99030)", border:"#c9922a" },
];

const ROOM_THUMBS = ["/images/ledneonsign/BG_1.jpg","/images/ledneonsign/BG_2.jpg","/images/ledneonsign/BG_3.jpg"];
const BG_ROOMS   = ["/images/ledneonsign/BG_1.jpg","/images/ledneonsign/BG_2.jpg","/images/ledneonsign/BG_3.jpg"];

const NAV_ITEMS = [
  { id:"text",      label:["TEXT"],              LucideIcon:Type        },
  { id:"color",     label:["COLOR"],             LucideIcon:PaletteIcon },
  { id:"font",      label:["FONT"],              LucideIcon:ALargeSmall },
  { id:"size",      label:["SIZE"],              LucideIcon:Maximize2   },
  { id:"backboard", label:["BACK","BOARD"],      LucideIcon:Layers      },
  { id:"effects",   label:["SPECIAL","EFFECTS"], LucideIcon:Sparkles    },
  { id:"ledKit",    label:["LED KIT"],           LucideIcon:Lightbulb   },
];

const glassStyle = {
  background:"rgba(255,255,255,0.13)",
  backdropFilter:"blur(18px)",
  WebkitBackdropFilter:"blur(18px)",
  borderRadius:20,
  padding:12,
};

/* ══════════════════════════════════════════════════════════════ */
export default function LedNeonSign() {
  const [activeNav,      setActiveNav]      = useState("color");
  const [input,          setInput]          = useState("");
  const [displayText,    setDisplayText]    = useState("Create");
  const [neonColor,      setNeonColor]      = useState("#FF2D78");
  const [glowColor,      setGlowColor]      = useState("#FF2D78");
  const [activeBacking,  setActiveBacking]  = useState("cut-around");
  const [activeBoardClr, setActiveBoardClr] = useState("clear");
  const [activeFont,     setActiveFont]     = useState("elegance");
  const [activeSize,     setActiveSize]     = useState("small");
  const [activeRoom,     setActiveRoom]     = useState(0);

  const currentFont    = FONT_DEFS.find(f => f.id === activeFont);
  const currentBacking = BACKING_OPTIONS.find(b => b.id === activeBacking);
  const availableColors = currentBacking?.hasBoardColor ? BOARD_COLORS : BOARD_COLORS.slice(0, 1);

  const handleSubmit = () => {
    if (input.trim()) { setDisplayText(input.trim()); setInput(""); }
  };

  const handleBackingSelect = (id) => {
    setActiveBacking(id);
    const opt = BACKING_OPTIONS.find(b => b.id === id);
    if (!opt?.hasBoardColor) setActiveBoardClr("clear");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden select-none"
      style={{ fontFamily:"'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap');
        .neon-text     { transition: color 0.4s ease, text-shadow 0.4s ease; }
        .swatch-btn    { transition: transform 0.15s, box-shadow 0.2s; }
        .swatch-btn:hover { transform: scale(1.13); }
        .font-row      { transition: border-color 0.2s, background 0.2s; }
        .nav-btn       { transition: background 0.2s; }
        .bk-card       { transition: border-color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.15s; cursor: pointer; }
        .bk-card:hover { transform: scale(1.02); }
        .board-row     { transition: border-color 0.2s, background 0.2s; }

        /* thin scrollbar */
        .glass-panel   { animation: fadeIn 0.2s ease; }
        .color-section { animation: fadeIn 0.25s ease; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(-5px); } to { opacity:1; transform:none; } }
      `}</style>

      <div className="flex flex-1 overflow-hidden">

        {/* ── Sidebar ── */}
        <aside className="w-[96px] flex flex-col justify-between items-center z-20 shrink-0 py-2">
          {NAV_ITEMS.map(({ id, label, LucideIcon }) => {
            const active = activeNav === id;
            return (
              <button key={id} onClick={() => setActiveNav(id)}
                className={`nav-btn flex flex-col items-center justify-center w-[64px] h-[64px] rounded-xl gap-1
                  ${active ? "bg-white/10" : "hover:bg-white/5"}`}>
                <LucideIcon size={17} strokeWidth={1.8} color={active ? "#C9922A" : "#555"} />
                <span className={`text-[9px] font-semibold tracking-wide text-center leading-[12px]
                  ${active ? "text-[#C9922A]" : "text-gray-500"}`}>
                  {label.map((w,i) => <span key={i} className="block">{w}</span>)}
                </span>
              </button>
            );
          })}
        </aside>

        {/* ── Canvas ── */}
        <div className="relative flex-1 overflow-hidden">
          <img src={BG_ROOMS[activeRoom]} alt="room"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter:"brightness(0.72)" }} />

          {/* Room thumbnails */}
          <div style={{ background:"rgba(255,255,255,0.14)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)" }}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10 p-3 rounded-lg">
            {ROOM_THUMBS.map((src,i) => (
              <button key={i} onClick={() => setActiveRoom(i)}
                className={`w-[64px] h-[50px] rounded-xl overflow-hidden border-2 transition-all
                  ${activeRoom===i ? "border-[#C9922A] scale-105" : "border-white/25 hover:border-white/50"}`}>
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Neon text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span className="neon-text block break-words text-center"
              style={{
                color: neonColor,
                textShadow: neonGlow(glowColor),
                ...currentFont?.style,
                fontSize:"clamp(2.8rem, 7vw, 6.5rem)",
                lineHeight:1.2,
              }}>
              {displayText}
            </span>
          </div>

          {/* Text input */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            <input type="text" value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key==="Enter" && handleSubmit()}
              placeholder="Your text"
              className="h-[46px] px-5 rounded-xl border text-white placeholder-white text-sm focus:outline-none"
              style={{ width:220, background:"rgba(255,255,255,0.14)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)", borderColor:"rgba(255,255,255,0.35)" }} />
            <button onClick={handleSubmit}
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              style={{ background:"#FF2D78", boxShadow:"0 0 18px #FF2D7888" }}>
              <Check size={18} color="#fff" strokeWidth={2.5} />
            </button>
          </div>

          {/* ── Floating panels ── */}
          <div className="absolute top-4 right-4 z-20"
            style={{ width:"340px", maxHeight:"calc(100% - 32px)", display:"flex", flexDirection:"column", overflow:"hidden" }}>

            {/* scrollable inner — overscrollBehavior contains scroll within this element */}
            <div className="panel-wrap flex flex-col gap-3" style={{ overflowY:"auto", overscrollBehavior:"contain", paddingRight:2 }}>

              {/* ── COLOR + FONT ── */}
              {(activeNav==="color" || activeNav==="font") && (
                <>
                  <div className="glass-panel" style={glassStyle}>
                    <PanelHeader label="Text Color" accent />
                    <div className="grid grid-cols-4 gap-4 mt-3 p-4">
                      {SWATCH_COLORS.map(c => (
                        <button key={c.id} onClick={() => setNeonColor(c.hex)}
                          className="swatch-btn w-11 h-11 rounded-full flex items-center justify-center border-2"
                          style={{ background:c.hex,
                            borderColor:neonColor===c.hex ? c.hex : "transparent",
                            boxShadow:neonColor===c.hex ? `0 0 0 6px ${c.hex}35, 0 0 14px ${c.hex}` : `0 6px 14px ${c.hex}55`,
                            transform:neonColor===c.hex ? "scale(1.12)" : "scale(1)" }}>
                          {c.pencil && <PenLine size={14} color="rgba(0,0,0,0.55)" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel" style={glassStyle}>
                    <PanelHeader label="Glow Color" accent />
                    <div className="grid grid-cols-4 gap-4 mt-4 p-4">
                      {SWATCH_COLORS.map(c => (
                        <button key={c.id} onClick={() => setGlowColor(c.hex)}
                          className="swatch-btn w-11 h-11 rounded-full flex items-center justify-center border-2"
                          style={{ background:c.hex,
                            borderColor:glowColor===c.hex ? c.hex : "transparent",
                            boxShadow:glowColor===c.hex ? `0 0 0 6px ${c.hex}35, 0 0 14px ${c.hex}` : `0 6px 14px ${c.hex}55`,
                            transform:glowColor===c.hex ? "scale(1.12)" : "scale(1)" }}>
                          {c.pencil && <PenLine size={14} color="rgba(0,0,0,0.55)" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel" style={glassStyle}>
                    <PanelHeader label="Typographic Soul" accent={activeNav==="font"} />
                    <div className="flex flex-col gap-2 mt-2">
                      {FONT_DEFS.map(f => {
                        const on = activeFont===f.id;
                        return (
                          <button key={f.id} onClick={() => setActiveFont(f.id)}
                            className="font-row flex items-center justify-between px-4 py-3 rounded-xl border text-white"
                            style={{ borderColor:on?"#FF2D78":"rgba(255,255,255,0.15)", background:on?"rgba(255,45,120,0.12)":"rgba(255,255,255,0.05)" }}>
                            <span style={{ ...f.style, color:"#fff" }}>{f.label}</span>
                            {f.icon==="zap"
                              ? <Zap size={13} color={on?"#FF2D78":"#666"} strokeWidth={1.5} />
                              : <PenLine size={13} color={on?"#FF2D78":"#666"} strokeWidth={1.5} />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* ── BACKBOARD ── */}
              {activeNav === "backboard" && (
                <div className="glass-panel" style={glassStyle}>

                    {/* Style header */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#FF2D78] shrink-0" />
                      <span className="text-white text-[12px] font-bold tracking-widest uppercase">Backboard Style</span>
                    </div>

                    {/* 2-col grid — full-bleed image fills each card */}
                    <div className="grid grid-cols-2 gap-3">
                      {BACKING_OPTIONS.map(b => {
                        const on = activeBacking === b.id;
                        return (
                          <button key={b.id} onClick={() => handleBackingSelect(b.id)}
                            className="bk-card rounded-2xl border overflow-hidden text-left p-1"
                            style={{
                              borderColor: on ? "#FF2D78" : "rgba(255,255,255,0.14)",
                              background:  on ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                              boxShadow:   on ? "0 0 0 1.5px #FF2D78, 0 4px 16px rgba(255,45,120,0.18)" : "none",
                            }}>
                            {/* full-bleed image — no margin, no rounding on top */}
                            <div style={{ width:"100%", height:120, overflow:"hidden" }}>
                              <img src={b.img} alt={b.label}
                                style={{ width:"100%", height:"100%", objectFit:"fit", display:"block" }} />
                            </div>
                            {/* label strip */}
                            <div className="flex items-center justify-between px-2.5 py-2">
                              <span className="text-gray-200 text-[10px] font-semibold leading-tight truncate">{b.label}</span>
                              <span className={`text-[10px] font-bold shrink-0 ml-2 ${b.price==="FREE" ? "text-green-400" : "text-[#C9922A]"}`}>
                                {b.price}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Color header */}
                    <div className="flex items-center gap-2 mt-6 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#FF2D78] shrink-0" />
                      <span className="text-white text-[10px] font-bold tracking-widest uppercase">Backboard Color</span>
                    </div>

                    {/* Color options — animate in/out when backing changes */}
                    <div key={activeBacking} className="color-section grid grid-col gap-2">
                      {availableColors.map(c => {
                        const on = activeBoardClr === c.id;
                        return (
                          <button key={c.id} onClick={() => setActiveBoardClr(c.id)}
                            className="board-row flex items-center justify-between gap-2.5 px-3 py-2.5 rounded-xl border"
                            style={{
                              borderColor: on ? "#FF2D78" : "rgba(255,255,255,0.12)",
                              background:  on ? "rgba(255,45,120,0.1)" : "rgba(255,255,255,0.04)",
                              gridColumn:  availableColors.length === 1 ? "1 / -1" : "auto",
                              boxShadow:   on ? "0 0 0 1px #FF2D78" : "none",
                            }}>
                               <div className="flex flex-col text-start">
                              <p className="text-white text-[10px] leading-tight">{c.label}</p>
                              <p className={`text-[20px] font-bold mt-0.5 ${c.price==="FREE" ? "text-white" : "text-white"}`}>
                                {c.price}
                              </p>
                            </div>
                            <div style={{
                              width:32, height:32, borderRadius:"50%", flexShrink:0,
                              background: c.bg,
                              border:`2px solid ${on ? "#FF2D78" : c.border}`,
                              boxShadow: on ? `0 0 0 3px ${c.border}33` : "none",
                            }} />
                          </button>
                        );
                      })}
                    </div>

                </div>
              )}

              {/* ── SIZE ── */}
              {activeNav === "size" && (
                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader label="Size" accent />
                  <div className="flex flex-col gap-3 mt-4">
                    {SIZE_OPTIONS.map(s => {
                      const on = activeSize===s.id;
                      return (
                        <button key={s.id} onClick={() => setActiveSize(s.id)}
                          className={`w-full rounded-2xl px-3 py-4 transition-all duration-300 text-left border
                            ${on ? "bg-white/10 border-pink-500/40" : "bg-white/5 hover:bg-white/10 border-white/5"}`}>
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold text-lg">{s.label}</h3>
                            <span className={`text-xl font-bold ${on ? "text-pink-500" : "text-white/80"}`}>{s.price}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2 text-xs text-white/50">
                            <span>Length: {s.length}</span><span>Height: —</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── EFFECTS ── */}
              {activeNav === "effects" && (
                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader label="Special Effects" accent />
                  <div className="flex flex-col gap-2 mt-2">
                    {["Steady","Breathing","Flicker","Rainbow"].map(e => (
                      <button key={e} className="font-row flex items-center gap-3 px-4 py-3 rounded-xl border text-white hover:border-[#C9922A]"
                        style={{ borderColor:"rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.05)" }}>
                        <Sparkles size={13} color="#888" strokeWidth={1.5} />
                        <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase">{e}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── LED KIT ── */}
              {activeNav === "ledKit" && (
                <div className="glass-panel" style={glassStyle}>
                  <PanelHeader label="LED Kit" accent />
                  <div className="flex flex-col gap-2 mt-2">
                    {["Standard","Premium","Waterproof","RGB Pro"].map(k => (
                      <button key={k} className="font-row flex items-center gap-3 px-4 py-3 rounded-xl border text-white hover:border-[#C9922A]"
                        style={{ borderColor:"rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.05)" }}>
                        <Lightbulb size={13} color="#888" strokeWidth={1.5} />
                        <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase">{k}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>{/* end panel-wrap */}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="h-[78px] border-t border-white/10 flex items-center px-12 ml-[96px]">
        <div className="flex items-center gap-10">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">Canvas Dimensions</p>
            <p className="text-white font-semibold text-[22px] leading-tight">
              120 <span className="text-gray-500 text-[16px]">×</span> 45
              <span className="text-gray-600 text-[12px] ml-1">CM</span>
            </p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">Investment</p>
            <p className="text-[#C9922A] font-bold text-[28px] leading-tight">$312.00</p>
          </div>
          <button className="ml-4 flex items-center gap-2 bg-[#F5A623] hover:bg-[#ffb340] text-black font-semibold text-[14px] px-6 h-[40px] rounded-full transition-all">
            Next <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
        <div className="ml-auto">
          <button className="flex items-center gap-3 bg-[#F5A623] hover:bg-[#ffb340] text-black font-bold text-[13px] px-8 h-[54px] rounded-full transition-all">
            I HAVE A DESIGN OR LOGO <Zap size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── PanelHeader ── */
function PanelHeader({ label, accent }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: accent ? "#FF2D78" : "rgba(255,255,255,0.3)" }} />
      <span className="text-[10px] font-bold tracking-[0.18em] uppercase"
        style={{ color: accent ? "#fff" : "rgba(255,255,255,0.5)" }}>
        {label}
      </span>
    </div>
  );
}

/* ── Palette icon ── */
function PaletteIcon({ size, strokeWidth, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5"  r=".5" fill={color} />
      <circle cx="17.5" cy="10.5" r=".5" fill={color} />
      <circle cx="8.5"  cy="7.5"  r=".5" fill={color} />
      <circle cx="6.5"  cy="12.5" r=".5" fill={color} />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}