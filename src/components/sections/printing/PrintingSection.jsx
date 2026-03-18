import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function PrintingShop() {
  const [products, setProducts] = useState([]);
  const [megaMenuData, setMegaMenuData] = useState([]);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setMegaMenuData(data.megaMenu);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const handleAddToCart = (id) => {
    setCartCount((c) => c + 1);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(135deg, #1a1a0e 0%, #0d0d06 40%, #1c1a0a 70%, #111108 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* ── NAVBAR ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/10"
        style={{
          background: "rgba(13,13,6,0.97)",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Search */}
        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 w-52 focus-within:border-[#d4a843]/70 transition-all duration-200">
          <Icon icon="mingcute:search-line" className="text-white/50" width={16} />
          <input
            className="bg-transparent outline-none text-sm text-white placeholder-white/40 w-full"
            placeholder="Search here"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>

        {/* Category Mega Menu Trigger */}
        <div
          className="relative"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <button className="flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">
            All Category
            <Icon
              icon="mingcute:down-line"
              width={15}
              className="transition-transform duration-300"
              style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {/* MEGA MENU PANEL */}
          <div
            className="absolute top-full mt-2"
            style={{
              left: "50%",
              transform: `translateX(-50%) scaleY(${megaOpen ? 1 : 0.92})`,
              opacity: megaOpen ? 1 : 0,
              pointerEvents: megaOpen ? "auto" : "none",
              transition: "opacity 0.25s ease, transform 0.25s ease",
              transformOrigin: "top center",
              width: "960px",
              background: "rgba(252,251,246,0.99)",
              borderRadius: "14px",
              boxShadow: "0 24px 70px rgba(0,0,0,0.55)",
              border: "1px solid rgba(212,168,67,0.25)",
            }}
          >
            <div className="grid grid-cols-6 p-8 gap-0">
              {megaMenuData.map((col, ci) => (
                <div
                  key={ci}
                  className={`
                    ${ci < megaMenuData.length - 1 ? "pr-5 border-r border-gray-200/80" : ""}
                    ${ci > 0 ? "pl-5" : ""}
                  `}
                >
                  <h3
                    className="text-gray-900 font-bold text-sm mb-4 leading-snug"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {col.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item, ii) => (
                      <li key={ii}>
                        <a
                          href="#"
                          className="text-gray-500 text-xs leading-snug block hover:text-[#b8860b] transition-colors duration-150"
                          onClick={(e) => e.preventDefault()}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom accent bar */}
            <div
              className="h-1 rounded-b-[14px]"
              style={{
                background: "linear-gradient(90deg, #d4a843, #e6c96a, #d4a843)",
              }}
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-white/70">
          <button className="hover:text-[#d4a843] transition-colors">
            <Icon icon="mingcute:heart-line" width={22} />
          </button>
          <button className="hover:text-[#d4a843] transition-colors">
            <Icon icon="mingcute:user-3-line" width={22} />
          </button>
          <button className="relative hover:text-[#d4a843] transition-colors">
            <Icon icon="mingcute:shopping-bag-1-line" width={22} />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 text-[10px] font-bold text-gray-900 w-4 h-4 flex items-center justify-center rounded-full"
                style={{ background: "#d4a843" }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* ── PRODUCT GRID ── */}
      <main className="px-8 py-10">
        

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden animate-pulse"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="h-48 bg-white/10" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-white/10 rounded w-2/3" />
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-4/5" />
                  <div className="h-10 bg-white/10 rounded-xl mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product cards */}
        {!loading && (
          <div className="grid grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onWishlist={() => toggleWishlist(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
                justAdded={addedId === product.id}
              />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-white/30">
            <Icon icon="mingcute:search-line" width={48} className="mb-4 opacity-30" />
            <p className="text-lg">No products found for "{searchVal}"</p>
            <button
              className="mt-4 text-sm text-[#d4a843] hover:underline"
              onClick={() => setSearchVal("")}
            >
              Clear search
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

/* ── PRODUCT CARD ── */
function ProductCard({ product, isWishlisted, onWishlist, onAddToCart, justAdded }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.04)",
        border: hovered
          ? "1px solid rgba(212,168,67,0.55)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,168,67,0.1)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        {!imgError ? (
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.07)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #2a2a1a, #111108)" }}
          >
            <Icon icon="mingcute:print-line" width={48} className="text-white/20" />
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-semibold px-2 py-1 rounded-full text-white/80"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
          >
            {product.category}
          </span>
        </div>

        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: isWishlisted ? "rgba(212,168,67,0.9)" : "rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
            transform: hovered || isWishlisted ? "scale(1)" : "scale(0.8)",
            opacity: hovered || isWishlisted ? 1 : 0,
            transition: "all 0.25s ease",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onWishlist();
          }}
        >
          <Icon
            icon={isWishlisted ? "mingcute:heart-fill" : "mingcute:heart-line"}
            width={15}
            className={isWishlisted ? "text-gray-900" : "text-white"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-base mb-1.5">{product.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
          {product.desc}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-gray-900 active:scale-95"
            style={{
              background: justAdded
                ? "linear-gradient(135deg, #4ade80, #22c55e)"
                : "linear-gradient(135deg, #d4a843, #c49733)",
              boxShadow: hovered ? "0 6px 24px rgba(212,168,67,0.45)" : "none",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={onAddToCart}
          >
            <Icon
              icon={
                justAdded
                  ? "mingcute:check-circle-fill"
                  : "mingcute:shopping-bag-1-line"
              }
              width={16}
            />
            {justAdded ? "Added!" : "Add to Cart"}
          </button>

          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-[#d4a843] transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Icon icon="mingcute:share-2-line" width={16} />
          </button>
        </div>
      </div>
    </div>
  );
}