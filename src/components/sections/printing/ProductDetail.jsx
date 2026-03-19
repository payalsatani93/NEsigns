import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  turnaroundOpts, products,
  BackIcon, InfoIcon, ArrowIcon,
  FLabel, FSelect,
} from "../../../data/Printingdata";

// ── Card wrapper ──────────────────────────────────────────────────────────────
function Card({ children }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {children}
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionTitle({ children, required }) {
  return (
    <h2 className="font-black text-xs tracking-widest text-white uppercase mb-4">
      {children}
      {required && <span className="text-red-400 ml-1">*</span>}
    </h2>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DETAIL
// ─────────────────────────────────────────────────────────────────────────────
export default function ProductDetail() {
  const { productId } = useParams();
  const location      = useLocation();
  const navigate      = useNavigate();

  const product = location.state?.product
    || products.find(p => p.id === Number(productId));

  // ✅ ALL hooks declared here — BEFORE any conditional return
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

  // ✅ Now safe to do early return after all hooks
  if (!product) {
    return (
      <div className="containers flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 text-lg mb-4">Product not found.</p>
          <button
            onClick={() => navigate("/services/printing")}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-black"
            style={{ background: "linear-gradient(135deg,#d4a843,#c49733)" }}
          >
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
    <div className="">

      {/* ── Breadcrumb bar ── */}
      <div
        className="sticky top-0 z-40 px-8 py-3 flex items-center gap-3 containers"
        style={{ background: "rgba(13,13,6,0.97)", backdropFilter: "blur(14px)" }}
      >
        <button
          onClick={() => navigate("/services/printing")}
          className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform"><BackIcon /></span>
          All Products
        </button>
        <span className="text-white/25 text-xs">›</span>
        <span className="text-white/55 text-xs">{product.category}</span>
        <span className="text-white/25 text-xs">›</span>
        <span className="text-white text-xs font-semibold">{product.name}</span>
      </div>

      {/* ── 3-column layout ── */}
      <div
        className="containers py-8 "
        style={{ display: "grid", gridTemplateColumns: "300px 1fr 295px", gap: "90px" }}
      >

        {/* ══ COL 1 — Image Gallery ══ */}
        <div>
          <div
            className="rounded-2xl overflow-hidden mb-3"
            style={{ height: 300, background: "rgba(255,255,255,0.06)" }}
          >
            <img src={thumbs[activeImg]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {thumbs.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className="rounded-xl overflow-hidden transition-all duration-200 hover:opacity-90"
                style={{
                  border:  activeImg === i ? "2px solid #d4a843" : "2px solid rgba(255,255,255,0.1)",
                  height:  58,
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* ══ COL 2 — Specifications + Details ══ */}
        <div className="flex flex-col gap-4">

          {/* Product Specifications */}
          <Card>
            <SectionTitle>Product Specifications</SectionTitle>

            <FLabel text="Quantity" req />
            <FSelect value={qty} set={setQty} opts={["1 Unit","2 Units","5 Units","10 Units","25 Units","50 Units"]} />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <FLabel text="Print Size" req />
                <FSelect value={size} set={setSize} opts={product.sizes} />
              </div>
              <div>
                <FLabel text="Sides" req />
                <FSelect value={sides} set={setSides} opts={["Single Sided (4/0)","Double Sided (4/4)"]} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <FLabel text="Material" req />
                <FSelect value={material} set={setMaterial} opts={[product.material, "Premium Board", "Foam Board"]} />
              </div>
              <div>
                <FLabel text="Design" req />
                <FSelect value={design} set={setDesign} opts={["Upload My Artwork","Design Online","Use Template"]} />
              </div>
            </div>

            {/* Add-on checkboxes */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {addons.map((a, i) => (
                <button
                  key={i}
                  onClick={() => a.set(!a.val)}
                  className="flex items-start gap-2.5 rounded-xl p-3 text-left transition-all"
                  style={{
                    background: a.val ? "rgba(212,168,67,0.1)"         : "rgba(255,255,255,0.05)",
                    border:     a.val ? "1px solid rgba(212,168,67,0.5)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    className="w-4 h-4 mt-0.5 rounded flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: a.val ? "#d4a843" : "rgba(255,255,255,0.12)",
                      border:     a.val ? "none"    : "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    {a.val && (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
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
              <input
                value={offer}
                onChange={e => setOffer(e.target.value)}
                placeholder="Enter Offer Code"
                className="flex-1 rounded-xl px-4 py-2.5 text-sm bg-white/10 border border-white/15 text-white placeholder-white/35 outline-none focus:border-yellow-500/50 transition-all"
              />
              <button
                className="px-5 py-2.5 rounded-xl text-xs font-black text-black tracking-widest active:scale-95 transition-all"
                style={{ background: "linear-gradient(135deg,#d4a843,#c49733)" }}
              >
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
              {["A-Frame Sign", "Digital Proof", "Variable Artwork"].map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(212,168,67,0.1)",
                    border: "1px solid rgba(212,168,67,0.3)",
                    color: "#d4a843",
                  }}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#d4a843" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {tag}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ══ COL 3 — Turnaround + Delivery ══ */}
        <div className="flex flex-col gap-4">

          {/* Print Turnaround */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <SectionTitle required>Print Turnaround</SectionTitle>
              <span className="text-white/40 -mt-4"><InfoIcon /></span>
            </div>
            <div className="flex flex-col gap-2">
              {turnaroundOpts.map((opt, i) => {
                const sel   = taIndex === i;
                const price = (basePrice + opt.extra).toFixed(2);
                return (
                  <button
                    key={i}
                    onClick={() => setTaIndex(i)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-left transition-all duration-200"
                    style={{
                      background: sel ? "rgba(37,99,235,0.25)"  : "rgba(255,255,255,0.04)",
                      border:     sel ? "1px solid #3b82f6"     : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          border:     sel ? "none" : "1.5px solid rgba(255,255,255,0.3)",
                          background: sel ? "#3b82f6" : "transparent",
                        }}
                      >
                        {sel && <div style={{ width: 6, height: 6, background: "white", borderRadius: "50%" }} />}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-white text-xs font-bold">{opt.label}</p>
                          {opt.badge && (
                            <span
                              className="px-1.5 py-0.5 rounded font-black text-white leading-none"
                              style={{ background: "#f97316", fontSize: "8px" }}
                            >
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-white/40 text-xs">{opt.sub}</p>
                      </div>
                    </div>
                    <p className="text-white font-bold text-sm">${price}</p>
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
                <input
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                  className="w-full rounded-xl px-3 py-2.5 text-sm text-white outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                />
              </div>
              <div>
                <FLabel text="Airport Pickup" />
                <FSelect value={airport} set={setAirport} opts={["None","Terminal A","Terminal B"]} />
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mt-4 mb-3 px-1">
              <span className="text-white/50 text-xs">Total</span>
              <span className="text-white font-black text-xl">${totalPrice}</span>
            </div>

            {/* Checkout */}
            <button
              className="w-full py-3.5 rounded-xl font-black text-sm text-black tracking-widest flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:brightness-110"
              style={{
                background: "linear-gradient(135deg,#e6b84a,#d4a843)",
                boxShadow: "0 6px 28px rgba(212,168,67,0.4)",
              }}
            >
              CHECKOUT NOW <ArrowIcon />
            </button>
          </Card>

        </div>
      </div>
    </div>
  );
}