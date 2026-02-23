import { motion } from "framer-motion";

const tags = [
  { label: "Effective result",  color: "text-amber-500",   border: "border-amber-400",  style: { top: "90px",  left: "30px"  } },
  { label: "Profitable",        color: "text-neutral-800", border: "border-neutral-300", style: { top: "60px",  left: "200px" } },
  { label: "Impactful ranking", color: "text-purple-500",  border: "border-purple-300", style: { top: "140px", left: "150px" } },
  { label: "Strategic",         color: "text-neutral-800", border: "border-neutral-300", style: { top: "195px", left: "20px"  } },
  { label: "Personalized",      color: "text-pink-500",    border: "border-pink-400",   style: { top: "195px", left: "185px" } },
];

const SquigglyBlue = () => (
  <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
    <path d="M4 28 Q14 8 26 20 Q38 32 48 8" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const ZigzagBlue = () => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
    <path d="M4 22 L22 6 L40 22 L58 6 L76 22" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const TrianglePurple = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
    <path d="M12 2 L22 20 L2 20 Z" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default function WhyChooseDM() {
  return (
    <div className="bg-neutral-900 min-h-screen relative overflow-hidden">

      {/* Thin amber bar - far right edge */}
      <div className="absolute top-0 right-0 w-1 h-full bg-amber-400 opacity-80" />

      {/* Triangle decoration */}
      <div className="absolute right-12 top-80 hidden lg:block">
        <TrianglePurple />
      </div>

      {/* ════ MAIN LAYOUT ════ */}
      <div className="flex min-h-screen">

        {/* ── LEFT COLUMN ── */}
        <div className="w-full lg:w-1/3 px-8 lg:px-12 py-16 flex flex-col justify-between">
          <div>
            <p className="text-neutral-400 text-xs font-bold tracking-widest uppercase mb-4">
              Direct Mailing
            </p>
            <h2 className="text-white font-extrabold text-5xl leading-tight mb-6">
              Why choose direct marketing?
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Direct marketing targets specific audiences with personalized messaging,
              delivers measurable results, increases engagement, improves response rates,
              and maximizes return on investment.
            </p>
          </div>

          {/* Image stack */}
          <div className="flex flex-col gap-3 mt-16">
            <div className="rounded-2xl overflow-hidden h-44">
              <img
                src="https://images.unsplash.com/photo-1554768804-50c1e2b50a6e?w=600&q=80"
                alt="Money"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
                alt="Handshake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── CENTER DIVIDER — gradient vertical line ── */}
        <div className="hidden lg:flex flex-col items-center py-16 px-1 relative">
          {/* Gradient vertical line (top-to-bottom: yellow → transparent) */}
          <motion.div
            className="flex-1 w-px"
            style={{
              background: "linear-gradient(to bottom, #EAB308 0%, #EAB30844 50%, transparent 100%)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          />

          {/* Orange dot — top anchor */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-amber-400"
            style={{ top: "310px", left: "50%", transform: "translateX(-50%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          {/* Orange dot — bottom anchor */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-amber-400"
            style={{ top: "52%", left: "50%", transform: "translateX(-50%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          />
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex-1 px-10 lg:px-16 py-16 flex flex-col gap-12 relative">

          {/* Targeted Mail Pros card */}
          <div className="bg-white rounded-2xl p-8 max-w-md">
            <h3 className="text-neutral-900 font-extrabold text-xl mb-1">Targeted Mail Pros</h3>
            <p className="text-neutral-500 text-sm mb-5">
              Maximize Engagement with Personalized Direct Mail Solutions
            </p>

            {/* Gradient divider inside card */}
            <motion.div
              className="w-full h-px mb-6"
              style={{ background: "linear-gradient(to right, #EAB308, transparent)" }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            />

            {/* Floating keyword tags */}
            <div className="relative h-56">
              {tags.map(({ label, color, border, style }, i) => (
                <motion.span
                  key={label}
                  className={`absolute inline-block px-4 py-1.5 rounded-full border text-xs font-semibold bg-white ${color} ${border}`}
                  style={style}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Squiggly gap decoration */}
          <div className="flex items-center gap-4">
            <div className="opacity-80">
              <SquigglyBlue />
            </div>
          </div>

          {/* Grow Your Business */}
          <div className="max-w-md">
            <p className="text-neutral-400 text-xs font-bold tracking-widest uppercase mb-4">
              Work With Us
            </p>
            <h2 className="text-white font-extrabold text-5xl leading-tight mb-6">
              Grow Your<br />Business
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Leverage targeted marketing strategies to reach the right audience, increase
              engagement, and drive measurable growth for your business
            </p>
            <button className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-white font-bold text-sm rounded-full px-7 py-3.5 transition-all duration-200 hover:translate-x-1 group">
              Contact Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="mt-10 opacity-70">
              <ZigzagBlue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}