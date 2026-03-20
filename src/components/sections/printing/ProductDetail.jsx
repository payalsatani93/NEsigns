import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  products, turnaroundOpts,
  BackIcon, InfoIcon, ArrowIcon, DownloadIcon,
  FLabel, FSelect,
} from "../../../data/Printingdata";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-4 sm:p-5 ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children, required }) {
  return (
    <h2 className="font-black text-xs tracking-widest text-white uppercase mb-4">
      {children}{required && <span className="text-red-400 ml-1">*</span>}
    </h2>
  );
}

// ─── Templates & Specifications ───────────────────────────────────────────────
function TemplatesSpecs({ product }) {
  const { specs } = product;
  const [downloadsOpen, setDownloadsOpen] = useState(true);
  if (!specs) return null;

  return (
    <div className="containers">

      <h2 className="text-white font-black text-xs sm:text-sm tracking-widest uppercase mb-5 sm:mb-6"
        style={{ letterSpacing: "0.15em" }}>
        Templates &amp; Specifications
      </h2>

      <div className="rounded-2xl p-5 sm:p-6 lg:p-8"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}>

        <h3 className="text-white font-bold text-lg sm:text-xl mb-3">{product.name} Printing</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5">{specs.overview}</p>

        <p className="text-white font-bold text-sm sm:text-base mb-1">Looking for other Sign types?</p>
        <p className="text-white/55 text-sm mb-5">
          View our <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">{specs.otherTypes}</span> services.
        </p>

        <p className="text-white font-bold text-sm sm:text-base mb-2">Graphic Design Service</p>
        <p className="text-white/55 text-sm leading-relaxed mb-5">{specs.designService}</p>

        <p className="text-white font-bold text-sm sm:text-base mb-1">{product.name} Specifications</p>
        <p className="text-white/50 text-sm mb-4">{specs.specsNote}</p>

        <p className="text-white font-bold text-sm sm:text-base mb-2">How to Save Your Files for Large Format Printing</p>
        <p className="text-white/50 text-sm mb-4">To ensure the best print results, follow these file setup guidelines when preparing your artwork:</p>

        {/* File Setup — 2 col on all sizes */}
        <p className="text-white font-semibold text-sm mb-3">File Setup Guidelines</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {[
            { label: "Resolution", value: specs.fileSetup.resolution },
            { label: "Bleed",      value: specs.fileSetup.bleed },
            { label: "Color Mode", value: specs.fileSetup.colorMode },
            { label: "Format",     value: specs.fileSetup.format },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#d4a843" }} />
              <div>
                <p className="text-white/40 text-xs">{item.label}</p>
                <p className="text-white text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="rounded-xl p-4 mb-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-2 mb-2">
            <InfoIcon />
            <p className="text-white font-bold text-xs">Pro Tip: Adobe Export</p>
          </div>
          <p className="text-white/50 text-xs leading-relaxed">
            <span className="text-white/70 font-semibold">In InDesign/Illustrator:</span>{" "}
            File &gt; Export &gt; Adobe PDF (Print). Select "High Quality Print" and ensure "Use Document Bleed Settings" is checked.
          </p>
          <p className="text-white/50 text-xs leading-relaxed mt-1">
            <span className="text-white/70 font-semibold">In Photoshop:</span>{" "}
            Set document to final size at 150-300 dpi. Add .125 inch to each side if bleed is required. File &gt; Save As: JPEG (Maximum Quality) or PDF.
          </p>
        </div>

        {/* Important Notes */}
        <p className="text-white font-bold text-sm sm:text-base mb-3">Important Notes</p>
        <ul className="mb-6 space-y-2">
          {specs.importantNotes.map((note, i) => (
            <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
              <span className="mt-1.5 flex-shrink-0" style={{ color: "#d4a843" }}>•</span>
              {note}
            </li>
          ))}
        </ul>

        {/* Export Tips — stack on mobile, 3-col on sm+ */}
        <p className="text-white font-bold text-sm sm:text-base mb-3">How to Export a High-Resolution File</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { icon: "✂️", title: "Trim & Safety",    body: specs.exportTips.trimSafety },
            { icon: "🎨", title: "Color Conversion",  body: specs.exportTips.colorConversion },
            { icon: "📐", title: "Bleed Handling",    body: specs.exportTips.bleedHandling },
          ].map((tip, i) => (
            <div key={i} className="rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{tip.icon}</span>
                <p className="text-white font-semibold text-xs">{tip.title}</p>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>

        {/* Why This Matters */}
        <p className="text-white font-bold text-sm sm:text-base mb-2">Why This Matters</p>
        <p className="text-white/55 text-sm leading-relaxed mb-6">{specs.whyMatters}</p>

        {/* Template Download */}
        <p className="text-white font-bold text-sm sm:text-base mb-2">{product.name} Template Download</p>
        <p className="text-white/55 text-sm leading-relaxed mb-5">{specs.templateNote}</p>

        {/* Download table — responsive */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Accordion header */}
          <button
            onClick={() => setDownloadsOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 sm:px-5 py-4 transition-all hover:bg-white/5"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span className="text-white font-semibold text-sm">Download Templates</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: downloadsOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {downloadsOpen && (
            <div>
              {/* Table header — hidden on xs, shown sm+ */}
              <div className="hidden sm:grid grid-cols-3 px-4 sm:px-5 py-2 border-t border-white/10"
                style={{ background: "rgba(255,255,255,0.02)" }}>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Size (W × H)</p>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">File Format</p>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider text-right">Link</p>
              </div>

              {/* Rows */}
              {specs.downloads.map((dl, i) => (
                <div key={i}
                  className="flex flex-col sm:grid sm:grid-cols-3 sm:items-center gap-1 sm:gap-0 px-4 sm:px-5 py-3 sm:py-3.5 transition-all hover:bg-white/5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-white text-sm font-medium">{dl.size}</p>
                  <p className="text-white/50 text-xs sm:text-sm">{dl.format}</p>
                  <a
                    href={dl.link}
                    className="flex items-center gap-1.5 font-bold text-sm mt-1 sm:mt-0 sm:justify-end transition-colors w-fit"
                    style={{ color: "#d4a843" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#e6c460"}
                    onMouseLeave={e => e.currentTarget.style.color = "#d4a843"}
                  >
                    Download <DownloadIcon />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PRODUCT DETAIL ───────────────────────────────────────────────────────────
export default function ProductDetail() {
  const { productId } = useParams();
  const location      = useLocation();
  const navigate      = useNavigate();

  const product = location.state?.product
    || products.find(p => p.id === Number(productId));

  // ALL hooks before conditional return
  const [qty,       setQty]       = useState("1 Unit");
  const [size,      setSize]      = useState(product?.sizes?.[0] ?? "");
  const [sides,     setSides]     = useState("Single Sided (4/0)");
  const [material,  setMaterial]  = useState(product?.material ?? "");
  const [design,    setDesign]    = useState("Upload My Artwork");
  const [taIndex,   setTaIndex]   = useState(0);
  const [method,    setMethod]    = useState("Delivery");
  const [zip,       setZip]       = useState("12345");
  const [airport,   setAirport]   = useState("None");
  const [offer,     setOffer]     = useState("");
  const [addFrame,  setAddFrame]  = useState(false);
  const [varArt,    setVarArt]    = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className=" flex items-center justify-center px-4 overflow-hidden">
        <div className="text-center">
          <p className="text-white/50 text-lg mb-4">Product not found.</p>
          <button onClick={() => navigate("/services/printing")}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-black">
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }

  const thumbs     = [product.img, product.img, product.img, product.img];
  const basePrice  = product.price;
  const totalPrice = (basePrice + turnaroundOpts[taIndex].extra).toFixed(2);
  const addons = [
    { val: addFrame, set: setAddFrame, label: `Add ${product.name}`, sub: "+$129.00/pc" },
    { val: varArt,   set: setVarArt,   label: "Variable Artwork",    sub: "🛈 learn more" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">

      {/* ── Breadcrumb ── */}
      <div
        className="sticky top-0 z-40 px-4 sm:px-8 py-3 flex items-center gap-2 sm:gap-3 overflow-x-auto"
      >
        <button
          onClick={() => navigate("/services/printing")}
          className="flex items-center gap-2 text-white/55 hover:text-white text-xs sm:text-sm transition-colors group whitespace-nowrap"
        >
          <span className="group-hover:-translate-x-1 transition-transform"><BackIcon /></span>
          All Products
        </button>
        <span className="text-white/25 text-xs">›</span>
        <span className="text-white/55 text-xs whitespace-nowrap truncate max-w-[120px] sm:max-w-none">{product.category}</span>
        <span className="text-white/25 text-xs">›</span>
        <span className="text-white text-xs font-semibold whitespace-nowrap">{product.name}</span>
      </div>

      {/* ── Main 3-col → stacks on mobile ── */}
      <div className="containers">

        {/*
          Layout:
          mobile  (< md)  : 1 col — image, then specs, then turnaround
          tablet  (md–lg) : 2 col — [image + specs] | [turnaround]
          desktop (lg+)   : 3 col — image | specs | turnaround
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[280px_1fr_285px] gap-5 lg:gap-5">

          {/* ── COL 1: Image Gallery ── */}
          <div className="md:col-span-1 lg:col-span-1">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden mb-3"
              style={{ height: "clamp(220px, 45vw, 300px)" }}>
              <img src={thumbs[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {thumbs.map((src, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className="rounded-xl overflow-hidden transition-all duration-200 hover:opacity-90"
                  style={{ border: activeImg === i ? "2px solid #d4a843" : "2px solid rgba(255,255,255,0.1)", height: 54 }}>
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── COL 2: Specifications + Details ── */}
          {/* On tablet: spans both columns below image, on desktop: middle col */}
          <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-1">

            {/* Product Specifications */}
            <Card>
              <SectionTitle>Product Specifications</SectionTitle>

              <FLabel text="Quantity" req />
              <FSelect value={qty} set={setQty} opts={["1 Unit","2 Units","5 Units","10 Units","25 Units","50 Units"]} />

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div><FLabel text="Print Size" req /><FSelect value={size} set={setSize} opts={product.sizes} /></div>
                <div><FLabel text="Sides" req /><FSelect value={sides} set={setSides} opts={["Single Sided (4/0)","Double Sided (4/4)"]} /></div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div><FLabel text="Material" req /><FSelect value={material} set={setMaterial} opts={[product.material,"Premium Board","Foam Board"]} /></div>
                <div><FLabel text="Design" req /><FSelect value={design} set={setDesign} opts={["Upload My Artwork","Design Online","Use Template"]} /></div>
              </div>

              {/* Add-ons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {addons.map((a, i) => (
                  <button key={i} onClick={() => a.set(!a.val)}
                    className="flex items-start gap-2.5 rounded-xl p-3 text-left transition-all"
                    style={{
                      background: a.val ? "rgba(212,168,67,0.1)"          : "rgba(255,255,255,0.05)",
                      border:     a.val ? "1px solid rgba(212,168,67,0.5)" : "1px solid rgba(255,255,255,0.1)",
                    }}>
                    <div className="w-4 h-4 mt-0.5 rounded flex-shrink-0 flex items-center justify-center"
                      style={{ background: a.val ? "#d4a843" : "rgba(255,255,255,0.12)", border: a.val ? "none" : "1px solid rgba(255,255,255,0.25)" }}>
                      {a.val && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{a.label}</p>
                      <p className="text-yellow-400/80 text-xs mt-0.5">{a.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Offer code */}
              <div className="flex gap-2 mt-4">
                <input value={offer} onChange={e => setOffer(e.target.value)} placeholder="Enter Offer Code"
                  className="flex-1 rounded-xl px-3 sm:px-4 py-2.5 text-sm bg-white/10 border border-white/15 text-white placeholder-white/35 outline-none focus:border-yellow-500/50 transition-all" />
                <button className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black text-black tracking-widest active:scale-95 transition-all whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg,#d4a843,#c49733)" }}>
                  APPLY
                </button>
              </div>
            </Card>

            {/* Product Details */}
            <Card>
              <SectionTitle>Product Details</SectionTitle>
              <p className="text-white font-semibold text-sm">Available {product.name} Paper or Stock</p>
              <p className="text-white/45 text-xs mt-1 mb-4">{material}</p>
              <p className="text-white font-semibold text-sm mb-3">Options Available for {product.name}</p>
              <div className="flex flex-wrap gap-2">
                {["A-Frame Sign","Digital Proof","Variable Artwork"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.3)", color: "#d4a843" }}>
                    <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#d4a843" }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {tag}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* ── COL 3: Turnaround + Delivery ── */}
          {/* On tablet: spans full width as last row; on desktop: right col */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">

            {/* Print Turnaround */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <SectionTitle required>Print Turnaround</SectionTitle>
                <span className="text-white/40 -mt-4"><InfoIcon /></span>
              </div>
              {/* On tablet make 2-col grid for turnaround options */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                {turnaroundOpts.map((opt, i) => {
                  const sel   = taIndex === i;
                  const price = (basePrice + opt.extra).toFixed(2);
                  return (
                    <button key={i} onClick={() => setTaIndex(i)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-left transition-all duration-200"
                      style={{
                        background: sel ? "rgba(37,99,235,0.25)" : "rgba(255,255,255,0.04)",
                        border:     sel ? "1px solid #3b82f6"    : "1px solid rgba(255,255,255,0.08)",
                      }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ border: sel ? "none" : "1.5px solid rgba(255,255,255,0.3)", background: sel ? "#3b82f6" : "transparent" }}>
                          {sel && <div style={{ width: 6, height: 6, background: "white", borderRadius: "50%" }} />}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <p className="text-white text-xs font-bold">{opt.label}</p>
                            {opt.badge && (
                              <span className="px-1.5 py-0.5 rounded font-black text-white leading-none"
                                style={{ background: "#f97316", fontSize: "8px" }}>
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-white/40 text-xs">{opt.sub}</p>
                        </div>
                      </div>
                      <p className="text-white font-bold text-sm ml-2">${price}</p>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Pickup or Delivery */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <SectionTitle>Pickup or Delivery</SectionTitle>
                <span className="text-white/40 -mt-4"><InfoIcon /></span>
              </div>

              <FLabel text="Method" />
              <FSelect value={method} set={setMethod} opts={["Delivery","Store Pickup","Airport Pickup"]} />

              <div className="grid grid-cols-2 gap-2 mt-3">
                <div>
                  <FLabel text="Zip Code" />
                  <input value={zip} onChange={e => setZip(e.target.value)}
                    className="w-full rounded-xl px-3 py-2.5 text-sm text-white outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                </div>
                <div>
                  <FLabel text="Airport Pickup" />
                  <FSelect value={airport} set={setAirport} opts={["None","Terminal A","Terminal B"]} />
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mt-4 mb-3 px-1">
                <span className="text-white/50 text-sm">Total</span>
                <span className="text-white font-black text-xl sm:text-2xl">${totalPrice}</span>
              </div>

              <button
                className="w-full py-3.5 rounded-xl font-black text-sm text-black tracking-widest flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#e6b84a,#d4a843)", boxShadow: "0 6px 28px rgba(212,168,67,0.4)" }}
              >
                CHECKOUT NOW <ArrowIcon />
              </button>
            </Card>

          </div>
        </div>
      </div>

      {/* ── Templates & Specifications ── */}
      <TemplatesSpecs product={product} />

    </div>
  );
}