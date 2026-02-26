import { useEffect, useState, useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, Monitor } from "lucide-react";

// Animated digit counter for hero
function CountUp({ to, duration = 1.5 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [to, duration]);
  return <span>{val}</span>;
}

export default function LedDigitalBoard() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setData(null);
    fetch("/db.json")
      .then((r) => r.json())
      .then((json) => {
        const match = json.SignageCategories.find((i) => i.slug === slug);
        setData(match);
      });
  }, [slug]);

  if (!data) return <div className="min-h-screen bg-black" />;

  const services = (data.subServices || []).filter((i) => i && i.title);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen bg-[#020408] text-white overflow-hidden"
      >
        {/* Scanline overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
          }}
        />

        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,170,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow blob */}
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,255,170,0.08) 0%, transparent 70%)" }}
        />

        {/* Back */}
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:px-20 px-6 py-8 relative z-20"
        >
          <Link
            to="/services/signage"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#00ffaa] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-xs font-mono tracking-widest uppercase">Back</span>
          </Link>
        </motion.header>

        {/* Hero */}
        <section className="relative z-20 container pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <Monitor className="w-4 h-4 text-[#00ffaa]" />
            <span className="text-xs font-mono text-[#00ffaa] uppercase tracking-[0.3em]">
              {slug.replace(/-/g, "_")}.exe
            </span>
            <span className="text-xs font-mono text-neutral-600">— SYSTEM READY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black leading-none mb-6 uppercase tracking-tight"
            style={{ fontFamily: "monospace" }}
          >
            {data.title.split(" ").map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "text-white" : "text-[#00ffaa]"}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <div className="flex flex-wrap gap-12 mb-4">
            {[["99%", "Uptime"], ["4K", "Resolution"], ["24/7", "Support"]].map(([num, label]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-black font-mono text-[#00ffaa]">{num}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-mono">{label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-[#00ffaa] via-[#00ffaa]/30 to-transparent origin-left mt-10"
          />
        </section>

        {/* Cards */}
        <section className="relative z-20 container pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((item, index) => (
              <DigitalCard key={item.id || index} item={item} index={index} slug={slug} />
            ))}
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

function DigitalCard({ item, index, slug }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const link = `/categories/${slug}/${item.title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden border border-[#00ffaa]/20 hover:border-[#00ffaa]/60 transition-colors duration-500 bg-[#020408]"
      style={{ minHeight: "320px" }}
    >
      {/* Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        />
      )}

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ffaa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between" style={{ minHeight: "320px" }}>
        {/* Index */}
        <div className="font-mono text-xs text-[#00ffaa]/40 tracking-widest">[{String(index + 1).padStart(2, "0")}]</div>

        <div>
          <h3 className="text-2xl font-black font-mono text-white mb-3 uppercase">{item.title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed mb-6 font-mono">{item.desc}</p>

          <Link
            to={link}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#00ffaa]/40 text-[#00ffaa] text-xs font-mono uppercase tracking-widest
              hover:bg-[#00ffaa] hover:text-black transition-all duration-300"
          >
            Initialize &rarr;
          </Link>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-3 right-4 text-[#00ffaa]/10 text-5xl font-black font-mono select-none">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}