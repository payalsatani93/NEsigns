import { useState, useRef, useCallback, useEffect } from "react";
import {
  megaMenuData, products,
  HeartIcon, UserIcon, BagIcon, CartSmIcon, ShareIcon, ChevDownIcon,
} from "../../../data/Printingdata";
import { useNavigate, useLocation } from "react-router-dom";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ChevRightIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const ChevLeftIcon  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
const CloseIcon     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const MenuIcon      = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const SearchIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;

// ─── MOBILE DRAWER ────────────────────────────────────────────────────────────
function MobileMenu({ open, onClose, onItemClick, search, onSearch }) {
  const [activeCol, setActiveCol] = useState(null);

  useEffect(() => { if (!open) setTimeout(() => setActiveCol(null), 300); }, [open]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position:"fixed",inset:0,zIndex:10000, opacity:open?1:0, pointerEvents:open?"auto":"none", transition:"opacity 0.25s" }} />

      {/* Drawer panel */}
      <div style={{
        position:"fixed", top:0, left:0,
        width:"min(320px, 88vw)", height:"100dvh",
        background:"#fff", zIndex:10001,
        transform:open?"translateX(0)":"translateX(-100%)",
        transition:"transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        display:"flex", flexDirection:"column",
        boxShadow:"6px 0 40px rgba(0,0,0,0.25)",
      }}>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderBottom:"1px solid #e5e7eb", flexShrink:0 }}>
          {activeCol
            ? <button onClick={() => setActiveCol(null)} style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", cursor:"pointer", fontWeight:700, fontSize:14, color:"#111", padding:0 }}><ChevLeftIcon /> Back</button>
            : <span style={{ fontWeight:800, fontSize:12, letterSpacing:"0.1em", color:"#111", textTransform:"uppercase" }}>All Categories</span>
          }
          <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", color:"#6b7280", padding:4, lineHeight:0 }}><CloseIcon /></button>
        </div>

        {/* Sliding panels */}
        <div style={{ flex:1, overflow:"hidden", position:"relative" }}>

          {/* ── LEVEL 1: Category list ── */}
          <div style={{ position:"absolute", inset:0, overflowY:"auto", transform:activeCol?"translateX(-100%)":"translateX(0)", transition:"transform 0.28s cubic-bezier(0.4,0,0.2,1)" }}>

            {/* ✅ Search bar at top of mobile menu */}
            <div style={{ padding:"12px 14px 10px", borderBottom:"1px solid #f3f4f6" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, background:"#f9fafb", border:"1.5px solid #e5e7eb", borderRadius:50, padding:"9px 14px" }}>
                <span style={{ color:"#9ca3af", flexShrink:0, lineHeight:0 }}><SearchIcon /></span>
                <input
                  value={search}
                  onChange={e => onSearch(e.target.value)}
                  placeholder="Search products..."
                  style={{ background:"none", border:"none", outline:"none", fontSize:13, color:"#111", width:"100%" }}
                />
                {search && (
                  <button onClick={() => onSearch("")} style={{ background:"none", border:"none", cursor:"pointer", color:"#9ca3af", padding:0, fontSize:18, lineHeight:1 }}>×</button>
                )}
              </div>
            </div>

            {/* Category rows */}
            {megaMenuData.map((col, ci) => (
              <button
                key={ci}
                onClick={() => setActiveCol(col)}
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", padding:"10px 10px", background:"none", border:"none", borderBottom:"1px solid #f3f4f6", cursor:"pointer" }}
                onMouseEnter={e => e.currentTarget.style.background="#fefce8"}
                onMouseLeave={e => e.currentTarget.style.background="none"}
              >
                <span className="text-left"
                style={{ fontWeight:700, fontSize:13, letterSpacing:"0.05em", color:"#111", textTransform:"uppercase" }}>{col.title}</span>
                <span style={{ color:"#9ca3af", lineHeight:0 }}><ChevRightIcon /></span>
              </button>
            ))}
          </div>

          {/* ── LEVEL 2: Sub items ── */}
          <div style={{ position:"absolute", inset:0, overflowY:"auto", transform:activeCol?"translateX(0)":"translateX(100%)", transition:"transform 0.28s cubic-bezier(0.4,0,0.2,1)" }}>
            {activeCol && (
              <>
                {/* Section label */}
                <div style={{ padding:"12px 16px 8px", borderBottom:"1px solid #f3f4f6" }}>
                  <p style={{ fontSize:10, fontWeight:700, letterSpacing:"0.1em", color:"#9ca3af", textTransform:"uppercase" }}>{activeCol.title}</p>
                </div>

                {/* View All row */}
                <button
                  onClick={() => { onItemClick(activeCol.title); onClose(); }}
                  style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", padding:"15px 16px", background:"none", border:"none", borderBottom:"1px solid #f3f4f6", cursor:"pointer" }}
                >
                  <span style={{ fontWeight:700, fontSize:13, color:"#111" }}>View All {activeCol.title}</span>
                  <span style={{ color:"#d4a843", lineHeight:0 }}><ChevRightIcon /></span>
                </button>

                {/* Individual items */}
                {activeCol.items.map((item, ii) => (
                  <button
                    key={ii}
                    onClick={() => { onItemClick(item); onClose(); }}
                    style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", padding:"14px 16px", background:"none", border:"none", borderBottom:"1px solid #f9fafb", cursor:"pointer" }}
                    onMouseEnter={e => e.currentTarget.style.background="#fefce8"}
                    onMouseLeave={e => e.currentTarget.style.background="none"}
                  >
                    <span className="text-left"
                    style={{ fontSize:13, color:"#374151" }}>{item}</span>
                    <span style={{ color:"#d1d5db", lineHeight:0 }}><ChevRightIcon /></span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── DESKTOP MEGA MENU ────────────────────────────────────────────────────────
function DesktopMegaMenu({ open, navH, onMouseEnter, onMouseLeave, onItemClick }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position:"fixed", top:navH, left:0, width:"100vw", background:"#fafaf5", boxShadow:"0 20px 60px rgba(0,0,0,0.45)", borderBottom:open?"2px solid rgba(212,168,67,0.25)":"none", transition:"opacity 0.22s ease, transform 0.22s ease", transformOrigin:"top center", opacity:open?1:0, transform:open?"scaleY(1) translateY(0)":"scaleY(0.96) translateY(-6px)", pointerEvents:open?"auto":"none", zIndex:9998 }}
    >
      <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", padding:"36px 60px", gap:0 }}>
        {megaMenuData.map((col, ci) => (
          <div key={ci} style={{ paddingLeft:ci>0?24:0, paddingRight:ci<megaMenuData.length-1?24:0, borderRight:ci<megaMenuData.length-1?"1px solid #e5e7eb":"none" }}>
            <p style={{ fontWeight:800, fontSize:11, textTransform:"uppercase", letterSpacing:"0.07em", color:"#111", marginBottom:14, lineHeight:1.3 }}>{col.title}</p>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:9 }}>
              {col.items.map((item, ii) => (
                <li key={ii}>
                  <button
                    onClick={() => onItemClick(item)}
                    style={{ background:"none", border:"none", cursor:"pointer", padding:0, textAlign:"left", fontSize:13, color:"#6b7280", lineHeight:1.4, width:"100%", transition:"color 0.15s, transform 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color="#b8860b"; e.currentTarget.style.transform="translateX(4px)"; e.currentTarget.style.fontWeight="600"; }}
                    onMouseLeave={e => { e.currentTarget.style.color="#6b7280"; e.currentTarget.style.transform="translateX(0)"; e.currentTarget.style.fontWeight="400"; }}
                  >{item}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function PrintingNavbar({ search, onSearch, cart, onMegaItemClick }) {
  const [deskOpen,   setDeskOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop,  setIsDesktop]  = useState(true);
  const [navH,       setNavH]       = useState(57);
  const navRef     = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const m = () => { setIsDesktop(window.innerWidth >= 1024); if (navRef.current) setNavH(navRef.current.offsetHeight); };
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  useEffect(() => { if (navRef.current) setNavH(navRef.current.offsetHeight); });

  const openDesk  = useCallback(() => { clearTimeout(closeTimer.current); setDeskOpen(true);  }, []);
  const closeDesk = useCallback(() => { closeTimer.current = setTimeout(() => setDeskOpen(false), 150); }, []);

  return (
    <>
      <nav ref={navRef} className="sticky top-0 z-50 w-full" style={{backdropFilter:"blur(14px)" }}>
        <div className="containers flex items-center justify-between py-3 sm:py-4">

          {/* LEFT */}
          <div className="flex items-center gap-3 lg:gap-8">
            {/* Hamburger */}
            <button className="lg:hidden text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </button>

            {/* Search bar — sm+ */}
            <div className="hidden sm:flex items-center gap-2 bg-transparent border border-white rounded-full px-4 py-2 w-40 md:w-52
             focus-within:border-[var(--color-gradient)] transition-all">
              <input className="bg-transparent outline-none text-[13px] text-white placeholder-white w-full"
              placeholder="Search here" value={search} onChange={e => onSearch(e.target.value)} />
              <span className="text-white"><SearchIcon /></span>
            </div>

            {/* All Category — desktop hover */}
            <div className="hidden lg:block relative" onMouseEnter={openDesk} onMouseLeave={closeDesk}>
              <button className="flex items-center gap-2 text-white hover:text-[var(--color-gradient)]
               font-medium text-[18px]  transition-all">
                All Category <ChevDownIcon open={deskOpen} />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 lg:gap-5 text-white">
            {/* <button className="hover:text-white transition-colors"><HeartIcon /></button> */}
            <button className="hidden sm:block hover:text-[var(--color-gradient)] transition-colors"><UserIcon /></button>
            <div className="relative">
              <button className="hover:text-[var(--color-gradient)] transition-colors"><BagIcon /></button>
              {cart > 0 && <span className="absolute -top-2 -right-2 bg-[var(--color-gradient)] text-black text-xs font-black rounded-full w-4 h-4 flex items-center justify-center leading-none">{cart}</span>}
            </div>
          </div>
        </div>
      </nav>

      <DesktopMegaMenu open={deskOpen} navH={navH} onMouseEnter={openDesk} onMouseLeave={closeDesk} onItemClick={(item) => { setDeskOpen(false); onMegaItemClick(item); }} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onItemClick={onMegaItemClick} search={search} onSearch={onSearch} />
    </>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, onOpen, onAddCart }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => onOpen(product)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col"
      style={{ background:"#0b0b0b", boxShadow:hover?"0 20px 50px rgba(0,0,0,0.6)":"0 8px 25px rgba(0,0,0,0.4)", transform:hover?"translateY(-4px)":"translateY(0)", border:"1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Image — clamp height so it scales on small screens */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height:"clamp(326px,45vw,210px)" }}>
        <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-500" style={{ transform:hover?"scale(1.05)":"scale(1)" }} />
        {/* <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(0,0,0,0.3),transparent 60%)" }} />
        <button onClick={e => e.stopPropagation()} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur transition-all hover:scale-110" style={{ background:"rgba(0,0,0,0.45)" }}>
          <HeartIcon />
        </button> */}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="text-white font-semibold text-sm sm:text-base mb-1.5 leading-snug">{product.name}</h3>
        <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-2">{product.desc}</p>

        <div className="flex gap-2 mt-auto" onClick={e => e.stopPropagation()}>
          <button
            onClick={onAddCart}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-900 active:scale-95 transition-all"
            style={{ background:"linear-gradient(135deg,#d4a843,#c49733)", boxShadow:hover?"0 4px 20px rgba(212,168,67,0.35)":"none" }}
          >
            <CartSmIcon /> Add to Cart
          </button>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/55 hover:text-white transition-all flex-shrink-0"
            style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)" }}
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PrintingShop() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState(params.get("search") || "");
  const [cart,   setCart]   = useState(0);

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const handleOpenProduct = p => navigate(`/services/printing/${p.id}`, { state: { product: p } });

  const handleMegaItemClick = (itemLabel) => {
    const exact = products.find(p => p.name.toLowerCase() === itemLabel.toLowerCase());
    if (exact) { navigate(`/services/printing/${exact.id}`, { state:{ product:exact } }); return; }
    const words = itemLabel.toLowerCase().split(" ").filter(w => w.length > 2);
    const partial = products.find(p => words.some(w => p.name.toLowerCase().includes(w)));
    if (partial) { navigate(`/services/printing/${partial.id}`, { state:{ product:partial } }); return; }
    setSearch(itemLabel);
    navigate(`/services/printing?search=${encodeURIComponent(itemLabel)}`);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 h-auto w-auto">
        <img src="/images/yellow_patch.png" alt="" />
      </div>
      <div className="absolute top-0 left-0 h-auto w-auto">
        <img src="/images/Left_yell_Patch.png" alt="" />
      </div>

      <PrintingNavbar search={search} onSearch={setSearch} cart={cart} onMegaItemClick={handleMegaItemClick} />

      <main className="containers py-6 sm:py-8 lg:py-10">
        {search && (
          <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
            <p className="text-white/50 text-sm">
              Results for <span className="text-[var(--color-gradient)] font-semibold">"{search}"</span> — {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
            <button onClick={() => { setSearch(""); navigate("/services/printing"); }} className="text-xs text-white/40 hover:text-white underline underline-offset-2 transition-colors">Clear</button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg mb-4">No products found for "{search}"</p>
            <button onClick={() => { setSearch(""); navigate("/services/printing"); }} className="px-6 py-2.5 rounded-xl text-sm font-bold text-black" style={{ background:"linear-gradient(135deg,#d4a843,#c49733)" }}>View All Products</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onOpen={handleOpenProduct} onAddCart={() => setCart(c => c+1)} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}