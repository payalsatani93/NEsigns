// ─────────────────────────────────────────────────────────────────────────────
// printingData.js  —  shared data & icons for PrintingShop + ProductDetail
// ─────────────────────────────────────────────────────────────────────────────

export const megaMenuData = [
  {
    title: "Signage & Displays",
    items: [
      "A-Frame Signs",
      "Signs (Foam Board, Coroplast, PVC, Acrylic)",
      "Yard Signs",
      "Floor Graphics",
      "Wall Decals / Graphics",
      "Window Clings / Decals",
      "Car Magnets",
      "Vehicle Wraps / Decals",
    ],
  },
  {
    title: "Banners & Large Format Printing",
    items: [
      "Banners (Vinyl, Mesh, Fabric)",
      "Retractable / Pop-Up Banners",
      "Backdrops / Step & Repeats",
      "Trade Show Displays",
      "Flags (Feather, Teardrop, Pole)",
      "Table Covers / Throws",
    ],
  },
  {
    title: "Marketing & Promotional Materials",
    items: [
      "Flyers",
      "Brochures",
      "Postcards",
      "Rack Cards",
      "Sales Sheets",
      "Door Hangers",
      "Bookmarks",
      "Catalogs / Booklets",
    ],
  },
  {
    title: "Business Essentials & Office Printing",
    items: [
      "Business Cards",
      "Letterheads",
      "Envelopes",
      "Notepads",
      "Presentation Folders",
      "Calendars",
    ],
  },
  {
    title: "Restaurant & Hospitality Printing",
    items: [
      "Carry Out Menus",
      "Menus (Laminated / Folded / Disposable)",
      "Table Tents",
    ],
  },
  {
    title: "Labels, Forms & Specialty Printing",
    items: [
      "Stickers / Labels",
      "Roll Labels",
      "Carbonless Forms",
      "Invoices / Forms (Carbonless NCR)",
      "Event Tickets",
      "Canvas Prints",
    ],
  },
];

export const products = [
  { id: 1,  name: "A Frame Signs",     desc: "Durable A-frame signs perfect for promotions, menus, and daily offers.",        img: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=600&q=80", category: "Signage & Displays",                   material: "Coroplast Board 4mm", sizes: ["18x24 (1-Side)", "24x36 (1-Side)", "36x48 (1-Side)"], price: 39.14 },
  { id: 2,  name: "Backdrops Repeats", desc: "Make every photo opportunity a branding moment.",                                img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", category: "Banners & Large Format Printing",       material: "Fabric 9oz",          sizes: ["6x8 ft", "8x10 ft", "10x12 ft"],            price: 89.00 },
  { id: 3,  name: "Banners",           desc: "Durable custom banners for promotions, events, and branding.",                   img: "https://images.unsplash.com/photo-1551818176-60579e574b91?w=600&q=80", category: "Banners & Large Format Printing",       material: "Vinyl 13oz",          sizes: ["2x4 ft", "3x6 ft", "4x8 ft"],               price: 29.50 },
  { id: 4,  name: "Bookmarks",         desc: "Stylish bookmarks perfect for promotions, gifts, and branding.",                 img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80", category: "Marketing & Promotional Materials",     material: "16pt Cardstock",      sizes: ["2x7 inches", "2x8 inches"],                 price: 19.99 },
  { id: 5,  name: "Brochures",         desc: "Eye-catching brochures that leave a lasting impression.",                        img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80", category: "Marketing & Promotional Materials",     material: "100lb Gloss",         sizes: ["Tri-Fold", "Bi-Fold", "Z-Fold"],            price: 24.00 },
  { id: 6,  name: "Business Cards",    desc: "Custom business cards designed to leave a lasting impression.",                  img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80", category: "Business Essentials & Office Printing", material: "16pt Cardstock",      sizes: ["Standard 3.5x2", "Square 2.5x2.5"],         price: 15.00 },
  { id: 7,  name: "Calendars",         desc: "Promote your brand every day with custom calendars.",                            img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80", category: "Business Essentials & Office Printing", material: "100lb Gloss",         sizes: ["8.5x11", "11x17"],                          price: 34.00 },
  { id: 8,  name: "Canvas Prints",     desc: "Premium canvas prints that bring your walls to life.",                           img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80", category: "Labels, Forms & Specialty Printing",   material: "Canvas 300g",         sizes: ["16x20 inches", "24x36 inches"],              price: 59.00 },
  { id: 9,  name: "Flyers",            desc: "High-quality flyers designed to grab attention and drive results.",               img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", category: "Marketing & Promotional Materials",     material: "100lb Gloss",         sizes: ["5.5x8.5", "8.5x11"],                        price: 12.00 },
  { id: 10, name: "Yard Signs",        desc: "Bold and weatherproof yard signs for events and campaigns.",                     img: "https://images.unsplash.com/photo-1592502712628-c6d38b0b6156?w=600&q=80", category: "Signage & Displays",                   material: "Coroplast 4mm",       sizes: ["12x18 inches", "18x24 inches"],              price: 18.00 },
  { id: 11, name: "Stickers & Labels", desc: "Custom stickers and labels for branding, packaging, and more.",                  img: "https://images.unsplash.com/photo-1589642380614-4a8c2d1fb2d7?w=600&q=80", category: "Labels, Forms & Specialty Printing",   material: "Vinyl Gloss",         sizes: ["2x2 inches", "3x3 inches", "4x4 inches"],   price: 9.99  },
  { id: 12, name: "Table Tents",       desc: "Eye-catching table tents for restaurants and hospitality businesses.",            img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", category: "Restaurant & Hospitality Printing",     material: "14pt Cardstock",      sizes: ["4x6 inches", "5x7 inches"],                 price: 22.00 },
];

export const turnaroundOpts = [
  { label: "Economy",    sub: "2 - 4 Business Days", badge: null,     extra: 0     },
  { label: "Fast",       sub: "1 - 2 Business Days", badge: null,     extra: 9.78  },
  { label: "Faster",     sub: "Tomorrow",            badge: null,     extra: 21.87 },
  { label: "Crazy Fast", sub: "Ready Today",         badge: "URGENT", extra: 99.44 },
];

// ─── SHARED ICONS ────────────────────────────────────────────────────────────
export const SearchIcon  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
export const HeartIcon   = ({ f }) => <svg width="19" height="19" viewBox="0 0 24 24" fill={f ? "#d4a843" : "none"} stroke={f ? "#d4a843" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
export const UserIcon    = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
export const BagIcon     = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
export const CartSmIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
export const ShareIcon   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
export const ChevDownIcon= ({ open }) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}><polyline points="6 9 12 15 18 9"/></svg>;
export const BackIcon    = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
export const InfoIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
export const ArrowIcon   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
export const ChevSmIcon  = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;

// ─── SHARED FORM HELPERS ─────────────────────────────────────────────────────
export function FLabel({ text, req }) {
  return (
    <p className="text-white/50 text-xs mb-1.5">
      {text}{req && <span className="text-red-400 ml-0.5">*</span>}
    </p>
  );
}

export function FSelect({ value, set, opts }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => set(e.target.value)}
        className="w-full appearance-none rounded-xl px-3 py-2.5 text-sm text-white outline-none pr-8 cursor-pointer transition-all"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        {opts.map(o => (
          <option key={o} value={o} style={{ background: "#1a1a0e" }}>{o}</option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
        <ChevSmIcon />
      </div>
    </div>
  );
}
