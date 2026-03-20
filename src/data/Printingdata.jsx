// ─────────────────────────────────────────────────────────────────────────────
// Printingdata.jsx  —  shared data, icons, helpers
// ─────────────────────────────────────────────────────────────────────────────

// ─── MEGA MENU ───────────────────────────────────────────────────────────────
export const megaMenuData = [
  { title: "Signage & Displays",                   items: ["A-Frame Signs","Signs (Foam Board, Coroplast, PVC, Acrylic)","Yard Signs","Floor Graphics","Wall Decals / Graphics","Window Clings / Decals","Car Magnets","Vehicle Wraps / Decals"] },
  { title: "Banners & Large Format Printing",       items: ["Banners (Vinyl, Mesh, Fabric)","Retractable / Pop-Up Banners","Backdrops / Step & Repeats","Trade Show Displays","Flags (Feather, Teardrop, Pole)","Table Covers / Throws"] },
  { title: "Marketing & Promotional Materials",     items: ["Flyers","Brochures","Postcards","Rack Cards","Sales Sheets","Door Hangers","Bookmarks","Catalogs / Booklets"] },
  { title: "Business Essentials & Office Printing", items: ["Business Cards","Letterheads","Envelopes","Notepads","Presentation Folders","Calendars"] },
  { title: "Restaurant & Hospitality Printing",     items: ["Carry Out Menus","Menus (Laminated / Folded / Disposable)","Table Tents"] },
  { title: "Labels, Forms & Specialty Printing",    items: ["Stickers / Labels","Roll Labels","Carbonless Forms","Invoices / Forms (Carbonless NCR)","Event Tickets","Canvas Prints"] },
];

// ─── PRODUCT SPECS TEMPLATE ──────────────────────────────────────────────────
// Each product has:
//   specs.overview        — short intro paragraph
//   specs.otherTypes      — "looking for other types?" link text
//   specs.designService   — graphic design blurb
//   specs.fileSetup       — { resolution, bleed, colorMode, format }
//   specs.importantNotes  — string[] bullet points
//   specs.exportTips      — { trimSafety, colorConversion, bleedHandling }
//   specs.whyMatters      — paragraph
//   specs.templateNote    — paragraph about template download
//   specs.downloads       — [{ size, format, link }]

// ─── PRODUCTS ────────────────────────────────────────────────────────────────
export const products = [
  {
    id: 1, name: "A Frame Signs", category: "Signage & Displays",
    desc: "Durable A-frame signs perfect for promotions, menus, and daily offers.",
    img: "/images/printing/1.png",
    material: "Coroplast Board 4mm", sizes: ["18x24 (1-Side)","24x36 (1-Side)","36x48 (1-Side)"], price: 39.14,
    specs: {
      overview: "A-frame signs are everywhere—and for good reason. They grab attention and draw people in. Perfect for showcasing specials, promoting sales, guiding customers, or announcing a grand opening; these lightweight signs are easy to place and set up in seconds.",
      otherTypes: "Sign Printing",
      designService: "Want your A-Frame sign to stand out? Our skilled graphic team can help with logo design, banners, brochures, business cards, and all your printing needs. We've created eye-catching materials for many clients—ask us about affordable, all-in-one design and printing services.",
      specsNote: "For custom sizes or if a template isn't available, please use the following specifications to design your A-Frame sign.",
      fileSetup: { resolution: "150-300 dpi at final size", bleed: "1/8 inch (.125 inch) on all sides if artwork runs to edge", colorMode: "CMYK preferred", format: "High-resolution PDF or JPG" },
      importantNotes: [
        "Files must be built at final trim size plus bleed if needed",
        "Extend background colors or images .125 inch past the trim edge to avoid white borders",
        "Keep important text at least .25 inch inside the trim edge",
        "Large format files are often rasterized during production - high-resolution JPG files are acceptable",
        "RGB files will be converted to CMYK and slight color shifts may occur",
        "Turn off compression or downsampling when exporting to preserve image quality",
      ],
      exportTips: {
        trimSafety: "Keep important text at least .25 inch inside the trim edge to prevent clipping.",
        colorConversion: "RGB files will be converted to CMYK; slight color shifts may occur during printing.",
        bleedHandling: "Extend background colors .125 inch past trim edge to avoid white borders.",
      },
      whyMatters: "Large-format prints are meant to be seen from afar, but high-resolution artwork ensures a sharp, professional look. Proper bleed and file setup prevent white edges and delays. Questions? Call 877-613-1913 — we're here to help.",
      templateNote: "Using our A-frame sign template is simple. Just download the size and application format you need, create your artwork, and upload your design to print.",
      downloads: [
        { size: '24" x 36" (Standard)', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '24" x 36" (Standard)', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '18" x 24"',            format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '18" x 24"',            format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 2, name: "Backdrops Repeats", category: "Banners & Large Format Printing",
    desc: "Make every photo opportunity a branding moment.",
    img: "/images/printing/2.png",
    material: "Fabric 9oz", sizes: ["6x8 ft","8x10 ft","10x12 ft"], price: 89.00,
    specs: {
      overview: "Step-and-repeat backdrops are the gold standard for events, press walls, and brand activations. Your logo or pattern repeats seamlessly across a large fabric surface for maximum brand exposure in every photo.",
      otherTypes: "Banner Printing",
      designService: "Need a professionally designed backdrop? Our team can create a seamless step-and-repeat layout with your logos, colors, and brand guidelines—perfect for events and red-carpet moments.",
      specsNote: "For custom sizes please use the specifications below when setting up your backdrop artwork.",
      fileSetup: { resolution: "100-150 dpi at final size", bleed: "1/2 inch (.5 inch) on all sides", colorMode: "CMYK preferred", format: "High-resolution PDF or JPG" },
      importantNotes: [
        "Build files at final print size — backdrops are large, so 100 dpi is acceptable",
        "Extend background colors .5 inch past trim on all sides",
        "Keep logos and text at least 2 inches from edges",
        "Fabric printing may show slight color variation — CMYK recommended",
        "Seamed panels may be required for sizes over 10 ft wide",
      ],
      exportTips: {
        trimSafety: "Keep all logos and key artwork at least 2 inches from the edge of the backdrop.",
        colorConversion: "Fabric printing uses dye-sublimation; CMYK files produce the most accurate color output.",
        bleedHandling: "Extend background .5 inch past trim on all sides to avoid raw fabric edges.",
      },
      whyMatters: "A sharp, properly set-up backdrop makes every event photo look professional. Correct resolution and bleed ensure no white edges or blurry logos appear on your finished backdrop.",
      templateNote: "Download our backdrop templates to get started quickly. Available in the most popular sizes for events and trade shows.",
      downloads: [
        { size: "6 x 8 ft",   format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: "6 x 8 ft",   format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: "8 x 10 ft",  format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: "10 x 12 ft", format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 3, name: "Banners", category: "Banners & Large Format Printing",
    desc: "Durable custom banners for promotions, events, and branding.",
    img: "/images/printing/3.png",
    material: "Vinyl 13oz", sizes: ["2x4 ft","3x6 ft","4x8 ft"], price: 29.50,
    specs: {
      overview: "Vinyl banners are one of the most cost-effective ways to advertise. Lightweight, durable, and weather-resistant—perfect for storefronts, trade shows, events, and outdoor promotions.",
      otherTypes: "Large Format Printing",
      designService: "Our designers can create a bold, eye-catching banner that communicates your message clearly. From layout to final file, we handle every step.",
      specsNote: "Please follow the specifications below to prepare your banner artwork for print.",
      fileSetup: { resolution: "100-150 dpi at final size", bleed: "1/2 inch on all sides", colorMode: "CMYK preferred", format: "PDF, JPG, or PNG (high resolution)" },
      importantNotes: [
        "Build at final print size — 100 dpi is sufficient for banners viewed from a distance",
        "Add .5 inch bleed on all sides if background color runs to edge",
        "Keep text and logos at least 1 inch from any edge",
        "Grommets are placed every 2 feet — keep critical artwork away from grommet areas",
        "RGB files will be converted to CMYK",
      ],
      exportTips: {
        trimSafety: "Keep text and logos at least 1 inch from edges and grommet positions.",
        colorConversion: "RGB files will be converted to CMYK; proof your colors before submission.",
        bleedHandling: "Add .5 inch bleed on all sides so background color reaches the hem.",
      },
      whyMatters: "Proper file setup means your banner prints exactly as you designed it — sharp text, vivid colors, and no unexpected white edges.",
      templateNote: "Download a banner template for your chosen size to get the bleed and safe-zone guides pre-built.",
      downloads: [
        { size: "2 x 4 ft", format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: "3 x 6 ft", format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: "4 x 8 ft", format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 4, name: "Bookmarks", category: "Marketing & Promotional Materials",
    desc: "Stylish bookmarks perfect for promotions, gifts, and branding.",
    img: "/images/printing/4.png",
    material: "16pt Cardstock", sizes: ["2x7 inches","2x8 inches"], price: 19.99,
    specs: {
      overview: "Custom bookmarks are an affordable, practical promotional item. Hand them out at events, include them in packages, or sell them in your store. Printed on thick 16pt cardstock with a premium finish.",
      otherTypes: "Marketing Materials",
      designService: "Our design team can create a bookmark that showcases your brand, event, or product beautifully — front and back.",
      specsNote: "Use the specifications below to set up your bookmark artwork.",
      fileSetup: { resolution: "300 dpi at final size", bleed: "1/8 inch (.125 inch) on all sides", colorMode: "CMYK", format: "High-resolution PDF" },
      importantNotes: [
        "Build at 300 dpi for sharp text and images",
        "Add .125 inch bleed on all sides",
        "Keep text .125 inch inside trim edge",
        "Spot UV and foil options require separate die/spot layers",
      ],
      exportTips: {
        trimSafety: "Keep all text and logos .125 inch inside the trim line.",
        colorConversion: "CMYK only — RGB files will be converted automatically.",
        bleedHandling: "Extend background .125 inch past trim on all sides.",
      },
      whyMatters: "At 300 dpi with proper bleed, your bookmark will have crisp edges and vivid color — no white borders or blurry images.",
      templateNote: "Download our bookmark template for your chosen size to begin designing.",
      downloads: [
        { size: '2" x 7"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '2" x 7"', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '2" x 8"', format: "Adobe Photoshop (.PSD)", link: "#" },
      ],
    },
  },
  {
    id: 5, name: "Brochures", category: "Marketing & Promotional Materials",
    desc: "Eye-catching brochures that leave a lasting impression.",
    img: "/images/printing/5.png",
    material: "100lb Gloss", sizes: ["Tri-Fold","Bi-Fold","Z-Fold"], price: 24.00,
    specs: {
      overview: "Brochures are a versatile marketing tool — ideal for product info, company profiles, event programs, and more. Printed on premium 100lb gloss with vivid color reproduction.",
      otherTypes: "Marketing Materials",
      designService: "We can design a professional, multi-panel brochure that communicates your message effectively and looks great in hand.",
      specsNote: "Panel sizes vary by fold type. Use our templates to ensure correct panel widths and fold positioning.",
      fileSetup: { resolution: "300 dpi", bleed: "1/8 inch on all sides", colorMode: "CMYK", format: "High-resolution PDF (press-ready)" },
      importantNotes: [
        "Panel widths are not equal — the folding panel is slightly narrower",
        "Keep critical content .125 inch from all fold and trim lines",
        "Use our template to ensure correct panel sizing",
        "Images crossing fold lines may have slight misalignment",
      ],
      exportTips: {
        trimSafety: "Keep text .125 inch from fold and trim lines to prevent clipping.",
        colorConversion: "Submit CMYK PDF for most accurate color output.",
        bleedHandling: "Extend background art .125 inch past all trim edges.",
      },
      whyMatters: "Correct panel widths and bleed setup ensure your brochure folds perfectly and prints cleanly — no white edges, no misaligned panels.",
      templateNote: "Download our brochure template for your fold type to get started with the correct panel layout.",
      downloads: [
        { size: "Tri-Fold 8.5x11", format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: "Tri-Fold 8.5x11", format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: "Bi-Fold 8.5x11",  format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 6, name: "Business Cards", category: "Business Essentials & Office Printing",
    desc: "Custom business cards designed to leave a lasting impression.",
    img: "/images/printing/6.png",
    material: "16pt Cardstock", sizes: ["Standard 3.5x2","Square 2.5x2.5"], price: 15.00,
    specs: {
      overview: "Your business card is often the first tangible impression you make. Printed on thick 16pt cardstock with UV coating options, our business cards feel as premium as they look.",
      otherTypes: "Office Printing",
      designService: "Need a fresh design? Our team creates clean, modern business cards that represent your brand perfectly — ready to print the same day.",
      specsNote: "Set up your business card artwork using the specifications below.",
      fileSetup: { resolution: "300 dpi at final size", bleed: "1/8 inch (.125 inch) on all sides", colorMode: "CMYK", format: "High-resolution PDF" },
      importantNotes: [
        "Final size: 3.5 x 2 inches (standard) — build with bleed at 3.75 x 2.25 inches",
        "Keep all text and logos at least .125 inch from trim edges",
        "Do not place fine text or thin lines near card edges",
        "Spot UV requires a separate layer for the UV area",
      ],
      exportTips: {
        trimSafety: "Keep all important content .125 inch inside the trim line.",
        colorConversion: "CMYK only — all RGB files will be converted before printing.",
        bleedHandling: "Add .125 inch bleed so background color reaches the card edges after cutting.",
      },
      whyMatters: "A properly set-up business card file means clean edges, sharp text, and accurate color — making a strong first impression every time.",
      templateNote: "Download our business card template to set up your artwork with the correct bleed and safe-zone guides.",
      downloads: [
        { size: '3.5" x 2" (Standard)', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '3.5" x 2" (Standard)', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '2.5" x 2.5" (Square)', format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 7, name: "Calendars", category: "Business Essentials & Office Printing",
    desc: "Promote your brand every day with custom calendars.",
    img: "/images/printing/7.png",
    material: "100lb Gloss", sizes: ["8.5x11","11x17"], price: 34.00,
    specs: {
      overview: "Custom calendars keep your brand on desks and walls all year long. Each month features your imagery, logo, and messaging — a cost-effective, long-lasting marketing tool.",
      otherTypes: "Office Printing",
      designService: "Our team can design a full 12-month calendar with your photos, brand colors, and custom messaging for every month.",
      specsNote: "Please follow the specifications below for each calendar page.",
      fileSetup: { resolution: "300 dpi", bleed: "1/8 inch on all sides", colorMode: "CMYK", format: "High-resolution PDF (one page per file)" },
      importantNotes: [
        "Submit one PDF per calendar page (cover + 12 months = 13 files)",
        "Add .125 inch bleed on all sides of each page",
        "Keep binding margin clear — at least .5 inch from binding edge",
        "Grid dates must be legible at final print size",
      ],
      exportTips: {
        trimSafety: "Keep all text .125 inch from trim and .5 inch from the binding edge.",
        colorConversion: "Submit in CMYK for accurate color reproduction.",
        bleedHandling: "Each page must have .125 inch bleed on all four sides.",
      },
      whyMatters: "Calendars sit on desks and walls for 12 months — correct setup ensures every page looks professional and prints cleanly.",
      templateNote: "Download our calendar page template for your chosen size to design each month correctly.",
      downloads: [
        { size: "8.5 x 11 — Cover",      format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: "8.5 x 11 — Month Page", format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: "11 x 17 — Month Page",  format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 8, name: "Canvas Prints", category: "Labels, Forms & Specialty Printing",
    desc: "Premium canvas prints that bring your walls to life.",
    img: "/images/printing/8.png",
    material: "Canvas 300g", sizes: ["16x20 inches","24x36 inches"], price: 59.00,
    specs: {
      overview: "Canvas prints transform your photos and artwork into stunning wall pieces. Printed on premium 300g canvas and gallery-wrapped for a frameless, ready-to-hang finish.",
      otherTypes: "Specialty Printing",
      designService: "Want to turn your photo or logo into a canvas print? We can retouch, color-correct, and size your image for the perfect canvas output.",
      specsNote: "Canvas prints include a gallery wrap — add extra image on all sides for the wrapped edges.",
      fileSetup: { resolution: "150-300 dpi at final size", bleed: "1.5 inch wrap on all sides", colorMode: "RGB or CMYK accepted", format: "High-resolution JPG or PDF" },
      importantNotes: [
        "Add 1.5 inch extra image area on all sides for the gallery wrap",
        "Keep subject matter centered — edges will wrap around the frame",
        "150 dpi is acceptable for large canvas viewed from a distance",
        "RGB files are accepted — canvas printing uses vibrant inkjet inks",
      ],
      exportTips: {
        trimSafety: "Keep the main subject centered with at least 1.5 inch margin from the print edge.",
        colorConversion: "Canvas uses inkjet printing — RGB files often produce more vibrant results.",
        bleedHandling: "Include 1.5 inch of image past the trim line on all sides for the wrap.",
      },
      whyMatters: "Without sufficient wrap bleed, the canvas edges will show a white border or a hard crop of your image. Proper setup ensures a beautiful, seamless gallery-wrapped finish.",
      templateNote: "Download our canvas template for your chosen size to design with the correct wrap guides.",
      downloads: [
        { size: '16" x 20"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '24" x 36"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '24" x 36"', format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 9, name: "Flyers", category: "Marketing & Promotional Materials",
    desc: "High-quality flyers designed to grab attention and drive results.",
    img: "/images/printing/9.png",
    material: "100lb Gloss", sizes: ["5.5x8.5","8.5x11"], price: 12.00,
    specs: {
      overview: "Flyers are the fastest, most affordable way to get your message out. Whether you're promoting an event, sale, or service — a well-designed flyer gets noticed.",
      otherTypes: "Marketing Materials",
      designService: "Our designers create attention-grabbing flyers that communicate your message clearly and drive people to take action.",
      specsNote: "Set up your flyer using the specifications below for best print results.",
      fileSetup: { resolution: "300 dpi", bleed: "1/8 inch on all sides", colorMode: "CMYK", format: "High-resolution PDF" },
      importantNotes: [
        "Build at 300 dpi for sharp images and text",
        "Add .125 inch bleed on all sides",
        "Keep all text .125 inch inside the trim line",
        "Avoid very thin fonts at small sizes — they may not print cleanly",
      ],
      exportTips: {
        trimSafety: "Keep all text and key elements .125 inch from the trim line.",
        colorConversion: "CMYK files produce the most accurate printed color.",
        bleedHandling: "Extend backgrounds .125 inch past trim on all sides.",
      },
      whyMatters: "A properly prepared flyer file prints with sharp text, vivid color, and clean-cut edges — every single time.",
      templateNote: "Download our flyer template for your size to begin designing with correct bleed and safe-zone guides.",
      downloads: [
        { size: '5.5" x 8.5"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '5.5" x 8.5"', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '8.5" x 11"',  format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '8.5" x 11"',  format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 10, name: "Yard Signs", category: "Signage & Displays",
    desc: "Bold and weatherproof yard signs for events and campaigns.",
    img: "/images/printing/10.png",
    material: "Coroplast 4mm", sizes: ["12x18 inches","18x24 inches"], price: 18.00,
    specs: {
      overview: "Yard signs are a staple for real estate, political campaigns, events, and local advertising. Printed on durable 4mm coroplast with H-stakes included — ready to plant and promote.",
      otherTypes: "Sign Printing",
      designService: "Need a bold, readable yard sign? Our designers specialize in high-impact signage that communicates your message at a glance.",
      specsNote: "Use the specifications below to prepare your yard sign artwork.",
      fileSetup: { resolution: "150-300 dpi at final size", bleed: "1/8 inch on all sides", colorMode: "CMYK preferred", format: "High-resolution PDF or JPG" },
      importantNotes: [
        "Keep text large and bold — signs are read from a moving vehicle",
        "Minimum recommended font size: 1 inch tall per 10 feet of viewing distance",
        "Add .125 inch bleed on all sides",
        "Avoid thin borders — they may not print cleanly at the edge",
      ],
      exportTips: {
        trimSafety: "Keep all text and logos .125 inch inside the trim line.",
        colorConversion: "CMYK recommended for accurate outdoor color.",
        bleedHandling: "Extend background colors .125 inch past trim on all sides.",
      },
      whyMatters: "Yard signs need to communicate instantly. Proper file setup ensures sharp, vivid printing that holds up outdoors in sun, rain, and wind.",
      templateNote: "Download a yard sign template for your chosen size and get your design production-ready.",
      downloads: [
        { size: '12" x 18"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '12" x 18"', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '18" x 24"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '18" x 24"', format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 11, name: "Stickers & Labels", category: "Labels, Forms & Specialty Printing",
    desc: "Custom stickers and labels for branding, packaging, and more.",
    img: "/images/printing/11.png",
    material: "Vinyl Gloss", sizes: ["2x2 inches","3x3 inches","4x4 inches"], price: 9.99,
    specs: {
      overview: "Custom stickers and labels are perfect for product packaging, branding, giveaways, and more. Printed on premium gloss vinyl with a strong adhesive that sticks and stays.",
      otherTypes: "Labels & Specialty Printing",
      designService: "Our team designs custom sticker and label artwork that looks stunning at any size — from tiny product labels to large promotional stickers.",
      specsNote: "Use the specifications below to set up your sticker or label artwork.",
      fileSetup: { resolution: "300 dpi", bleed: "1/16 inch (.0625 inch) on all sides", colorMode: "CMYK", format: "High-resolution PDF or PNG (with transparency)" },
      importantNotes: [
        "Build at 300 dpi for crisp details at small sizes",
        "Add .0625 inch bleed on all sides",
        "Keep text and logos .0625 inch inside trim",
        "For die-cut stickers, provide a separate cut path layer",
        "PNG files with transparent background are accepted for die-cuts",
      ],
      exportTips: {
        trimSafety: "Keep all elements .0625 inch inside the cut line to prevent clipping.",
        colorConversion: "CMYK produces the most accurate color on gloss vinyl.",
        bleedHandling: "Extend background colors .0625 inch past the cut line.",
      },
      whyMatters: "At small sizes, even minor setup errors are visible. Proper resolution and bleed ensure your stickers and labels look sharp and professional.",
      templateNote: "Download our sticker template for your size to set up your artwork with correct cut and bleed guides.",
      downloads: [
        { size: '2" x 2"', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '3" x 3"', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '4" x 4"', format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
  {
    id: 12, name: "Table Tents", category: "Restaurant & Hospitality Printing",
    desc: "Eye-catching table tents for restaurants and hospitality businesses.",
    img: "/images/printing/12.png",
    material: "14pt Cardstock", sizes: ["4x6 inches","5x7 inches"], price: 22.00,
    specs: {
      overview: "Table tents are a must-have for restaurants, hotels, bars, and events. They sit on tabletops and deliver your message directly to seated guests — perfect for specials, promotions, and QR codes.",
      otherTypes: "Restaurant Printing",
      designService: "Our team can design compelling table tent artwork that showcases your menu specials, promotions, or brand story.",
      specsNote: "Table tents fold in half — each panel is half the total file height. Follow the specifications below.",
      fileSetup: { resolution: "300 dpi", bleed: "1/8 inch on all sides", colorMode: "CMYK", format: "High-resolution PDF" },
      importantNotes: [
        "Design as a flat, unfolded file — fold happens during production",
        "Each panel = half the total file height",
        "Keep key content .125 inch from fold and trim lines",
        "Add .125 inch bleed on all sides",
        "For double-sided tents, submit front and back as separate files",
      ],
      exportTips: {
        trimSafety: "Keep all content .125 inch from the center fold line and trim edges.",
        colorConversion: "CMYK only for accurate color on cardstock.",
        bleedHandling: "Extend background colors .125 inch past all trim edges.",
      },
      whyMatters: "Table tents sit at eye level for every guest. A properly set-up file ensures clean printing, accurate folds, and sharp branding on every table.",
      templateNote: "Download our table tent template for your size to set up your artwork with the fold guide and bleed included.",
      downloads: [
        { size: '4" x 6" (Flat)', format: "Adobe Photoshop (.PSD)", link: "#" },
        { size: '4" x 6" (Flat)', format: "Adobe Illustrator (.AI)",  link: "#" },
        { size: '5" x 7" (Flat)', format: "Adobe Illustrator (.AI)",  link: "#" },
      ],
    },
  },
];

// ─── TURNAROUND ───────────────────────────────────────────────────────────────
export const turnaroundOpts = [
  { label: "Economy",    sub: "2 - 4 Business Days", badge: null,     extra: 0     },
  { label: "Fast",       sub: "1 - 2 Business Days", badge: null,     extra: 9.78  },
  { label: "Faster",     sub: "Tomorrow",            badge: null,     extra: 21.87 },
  { label: "Crazy Fast", sub: "Ready Today",         badge: "URGENT", extra: 99.44 },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
export const SearchIcon   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
export const HeartIcon    = ({ f }) => <svg width="19" height="19" viewBox="0 0 24 24" fill={f?"#d4a843":"none"} stroke={f?"#d4a843":"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
export const UserIcon     = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
export const ShoppingCart      = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
export const BagIcon      = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
export const CartSmIcon   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
export const ShareIcon    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
export const ChevDownIcon = ({ open }) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transform:open?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.25s"}}><polyline points="6 9 12 15 18 9"/></svg>;
export const BackIcon     = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
export const InfoIcon     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
export const ArrowIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
export const ChevSmIcon   = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
export const DownloadIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;

// ─── FORM HELPERS ─────────────────────────────────────────────────────────────
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
      <select value={value} onChange={e => set(e.target.value)}
        className="w-full appearance-none rounded-xl px-3 py-2.5 text-sm text-white outline-none pr-8 cursor-pointer transition-all"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
        {opts.map(o => <option key={o} value={o} style={{ background: "#1a1a0e" }}>{o}</option>)}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40"><ChevSmIcon /></div>
    </div>
  );
}

