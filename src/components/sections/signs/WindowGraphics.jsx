import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function WindowGraphics() {
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

  if (!data) return <div className="min-h-screen bg-[#f5f4f0]" />;

  const services = (data.subServices || []).filter((i) => i && i.title);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen bg-[#f5f4f0] text-[#111]"
      >
        {/* Very subtle grain */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Back */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:px-20 px-6 py-8 relative z-20"
        >
          <Link
            to="/services/signage"
            className="inline-flex items-center gap-2 text-[#111]/40 hover:text-[#111] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-xs tracking-widest uppercase">Back</span>
          </Link>
        </motion.header>

        {/* Hero — magazine-style */}
        <section className="relative z-20 container pb-12">
          <div className="border-t border-[#111]/15 pt-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex-1"
              >
                <p className="text-xs text-[#111]/40 uppercase tracking-[0.3em] mb-6">
                  — {slug.replace(/-/g, " ")}
                </p>
                <h1
                  className="text-6xl lg:text-9xl font-black leading-none uppercase tracking-tighter text-[#111]"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {data.title.split(" ").slice(0, 2).join(" ")}
                  <br />
                  <span className="text-[#111]/20">{data.title.split(" ").slice(2).join(" ")}</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lg:max-w-[220px] lg:pt-16"
              >
                <p className="text-sm text-[#111]/50 leading-relaxed">{data.description}</p>
                <div className="mt-4 w-8 h-px bg-[#111]/30" />
              </motion.div>
            </div>
          </div>

          {/* Rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 h-px bg-[#111]/15 origin-left"
          />
        </section>

        {/* Cards — editorial list */}
        <section className="relative z-20 container pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#111]/10">
            {services.map((item, index) => (
              <WindowCard key={item.id || index} item={item} index={index} slug={slug} />
            ))}
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

function WindowCard({ item, index, slug }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const link = `/categories/${slug}/${item.title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-[#f5f4f0] hover:bg-white transition-colors duration-500"
      style={{ minHeight: "400px" }}
    >
      {/* Image — revealed on hover via clip */}
      {item.image && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-105 group-hover:scale-100"
          />
        </div>
      )}

      <div className="relative p-10 flex flex-col justify-between h-full" style={{ minHeight: "400px" }}>
        <div className="flex items-start justify-between">
          <span className="text-xs text-[#111]/30 font-mono">{String(index + 1).padStart(2, "0")}</span>
          <motion.div
            className="w-8 h-8 rounded-full border border-[#111]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#111]"
          >
            <ArrowUpRight className="w-4 h-4 text-[#111]" />
          </motion.div>
        </div>

        <div>
          <h3 className="text-3xl font-black text-[#111] leading-tight mb-4 uppercase tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-[#111]/50 leading-relaxed max-w-xs">{item.desc}</p>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#111]/10" />
            <Link
              to={link}
              className="text-xs text-[#111]/40 group-hover:text-[#111] uppercase tracking-widest transition-colors duration-300"
            >
              View
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom left accent bar */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#111] transition-all duration-700" />
    </motion.div>
  );
}