import { useState, useRef, useCallback } from "react";
import {
  megaMenuData,
  products,
  SearchIcon,
  HeartIcon,
  UserIcon,
  BagIcon,
  CartSmIcon,
  ShareIcon,
  ChevDownIcon,
} from "../../../data/Printingdata";
import { useNavigate, useLocation } from "react-router-dom";

// ── PrintingNavbar ────────────────────────────────────────────────────────────
function PrintingNavbar({ search, onSearch, cart, onMegaItemClick }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);

  const delayClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  const handleItemClick = (item) => {
    setMegaOpen(false);
    onMegaItemClick(item);
  };

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        className="containers sticky top-0 z-50 flex items-center justify-between py-4"
        style={{
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Left: Search + Category */}
        <div className="flex items-center gap-8">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 w-52 focus-within:border-yellow-500/50 transition-all">
            <span className="text-white/40"><SearchIcon /></span>
            <input
              className="bg-transparent outline-none text-[13px] text-white placeholder-white/40 w-full"
              placeholder="Search here"
              value={search}
              onChange={e => onSearch(e.target.value)}
            />
          </div>

          {/* All Category trigger */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={delayClose}
          >
            <button className="flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
              All Category <ChevDownIcon open={megaOpen} />
            </button>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 text-white/70">
          <button className="hover:text-white transition-colors"><HeartIcon /></button>
          <button className="hover:text-white transition-colors"><UserIcon /></button>
          <div className="relative">
            <button className="hover:text-white transition-colors"><BagIcon /></button>
            {cart > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-black rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {cart}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* ── MEGA MENU — rendered OUTSIDE nav so it's never clipped ── */}
      <div
        onMouseEnter={openMenu}
        onMouseLeave={delayClose}
        style={{
          position: "fixed",
          top: "57px",              /* exact nav height */
          left: 0,
          width: "100vw",
          background: "#fafaf5",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          borderBottom: "2px solid rgba(212,168,67,0.3)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
          transformOrigin: "top center",
          opacity: megaOpen ? 1 : 0,
          transform: megaOpen ? "scaleY(1) translateY(0)" : "scaleY(0.96) translateY(-6px)",
          pointerEvents: megaOpen ? "auto" : "none",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            padding: "36px 60px",
            gap: 0,
            maxWidth: "100%",
          }}
        >
          {megaMenuData.map((col, ci) => (
            <div
              key={ci}
              style={{
                paddingLeft:  ci > 0 ? 28 : 0,
                paddingRight: ci < megaMenuData.length - 1 ? 28 : 0,
                borderRight:  ci < megaMenuData.length - 1 ? "1px solid #e5e7eb" : "none",
              }}
            >
              {/* Column title */}
              <p
                style={{
                  fontWeight: 800,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#111",
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                {col.title}
              </p>

              {/* Items */}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map((item, ii) => (
                  <li key={ii}>
                    <button
                      onClick={() => handleItemClick(item)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        textAlign: "left",
                        fontSize: 13,
                        color: "#6b7280",
                        lineHeight: 1.4,
                        width: "100%",
                        transition: "color 0.15s, transform 0.15s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "#b8860b";
                        e.currentTarget.style.transform = "translateX(4px)";
                        e.currentTarget.style.fontWeight = "600";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "#6b7280";
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.fontWeight = "400";
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ product, onOpen, wished, onWish, onAddCart }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      // ✅ flex flex-col so button always sits at bottom
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col containers"
      style={{
        background: "rgba(255,255,255,0.05)",
        border:    hov ? "1px solid rgba(212,168,67,0.55)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hov ? "0 16px 48px rgba(0,0,0,0.55)"   : "0 4px 18px rgba(0,0,0,0.3)",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(product)}
    >
      {/* Image — fixed height */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hov ? "scale(1.07)" : "scale(1)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.35),transparent 55%)" }} />
        <button
          onClick={e => { e.stopPropagation(); onWish(); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur transition-all hover:scale-110"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          <HeartIcon f={wished} />
        </button>
      </div>

      {/* Text — flex-grow pushes button to bottom */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-yellow-500/70 text-xs mb-1">{product.category}</p>
        <h3 className="text-white font-bold text-base mb-2">{product.name}</h3>

        {/* ✅ flex-grow makes all descriptions take equal space */}
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-grow line-clamp-2">
          {product.desc}
        </p>

        {/* ✅ Button always at the bottom */}
        <div className="flex items-center gap-3 mt-auto" onClick={e => e.stopPropagation()}>
          <button
            onClick={onAddCart}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-gray-900 active:scale-95 transition-all"
            style={{
              background: "linear-gradient(135deg,#d4a843,#c49733)",
              boxShadow: hov ? "0 4px 20px rgba(212,168,67,0.35)" : "none",
            }}
          >
            <CartSmIcon /> Add to Cart
          </button>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/55 hover:text-white transition-all flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── PrintingShop (default export) ─────────────────────────────────────────────
export default function PrintingShop() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const [search,   setSearch]   = useState(params.get("search") || "");
  const [cart,     setCart]     = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleWish = id =>
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const handleOpenProduct = product =>
    navigate(`/services/printing/${product.id}`, { state: { product } });

  // ✅ setMegaOpen NOT called here — only lives inside PrintingNavbar
  const handleMegaItemClick = (itemLabel) => {
    // 1. Exact match
    const exactMatch = products.find(
      p => p.name.toLowerCase() === itemLabel.toLowerCase()
    );
    if (exactMatch) {
      navigate(`/services/printing/${exactMatch.id}`, { state: { product: exactMatch } });
      return;
    }

    // 2. Partial word match
    const words = itemLabel.toLowerCase().split(" ").filter(w => w.length > 2);
    const partialMatch = products.find(p =>
      words.some(word => p.name.toLowerCase().includes(word))
    );
    if (partialMatch) {
      navigate(`/services/printing/${partialMatch.id}`, { state: { product: partialMatch } });
      return;
    }

    // 3. No match → pre-fill search
    setSearch(itemLabel);
    navigate(`/services/printing?search=${encodeURIComponent(itemLabel)}`);
  };

  return (
    <div
      className=""
    >
      <PrintingNavbar
        search={search}
        onSearch={setSearch}
        cart={cart}
        onMegaItemClick={handleMegaItemClick}
      />

      <main className="py-10 containers">
        {/* Search label */}
        {search && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-white/50 text-sm">
              Results for{" "}
              <span className="text-yellow-400 font-semibold">"{search}"</span>
              {" "}— {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
            <button
              onClick={() => { setSearch(""); navigate("/services/printing"); }}
              className="text-xs text-white/40 hover:text-white transition-colors underline underline-offset-2"
            >
              Clear
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-24 ">
            <p className="text-white/40 text-lg mb-4">No products found for "{search}"</p>
            <button
              onClick={() => { setSearch(""); navigate("/services/printing"); }}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-black active:scale-95 transition-all"
              style={{ background: "linear-gradient(135deg,#d4a843,#c49733)" }}
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {filtered.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onOpen={handleOpenProduct}
                wished={wishlist.includes(p.id)}
                onWish={() => toggleWish(p.id)}
                onAddCart={() => setCart(c => c + 1)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}