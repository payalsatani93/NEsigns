import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  BarChart3,
  Navigation,
  Truck,
} from "lucide-react";

const iconMap = {
  "Building Signs": <Building2 className="w-5 h-5" />,
  "Freestanding Signs": <BarChart3 className="w-5 h-5" />,
  "Directional Signs": <Navigation className="w-5 h-5" />,
  "Temporary Signs": <Truck className="w-5 h-5" />,
};

// Reusable Grain Overlay
const GrainOverlay = () => (
  <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
);

export default function SignageCategories() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
        const match = json.SignageCategories.find((item) => item.slug === slug);
        setData(match);
      });
  }, [slug]);

  if (!data) return <div className="bg-neutral-950 min-h-screen" />;

  const services = data.subServices || [];
  const showViewMore = ["exterior-sign", "interior-sign", "temporary-signs"].includes(slug);

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/services/signage"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </header>

      {/* Hero Section */}
      <section className=" px-6 lg:px-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full border-2 border-neutral-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-600" />
            </div>
            <span className="text-sm text-neutral-400 capitalize">
              {data.slug.replace("-", " ")}
            </span>
          </div>
          <h1 className="text-2xl lg:text-6xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24 px-6 lg:px-20">
        <div className="container mx-auto">
          {/* Desktop Layout: 2 Columns aligned at top and bottom */}
          <div className="hidden md:grid grid-cols-2 gap-8 items-stretch">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {services[0] && (
                <div className="flex-grow">
                  <ServiceCard
                    item={services[0]}
                    showViewMore={showViewMore}
                    slug={slug}
                    large
                  />
                </div>
              )}
              <InfoCard />
              {services[2] && (
                <ServiceCard
                  item={services[2]}
                  showViewMore={showViewMore}
                  slug={slug}
                />
              )}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              <InfoCard />
              {services[1] && (
                <ServiceCard
                  item={services[1]}
                  showViewMore={showViewMore}
                  slug={slug}
                />
              )}
              {services[3] && (
                <div className="flex-grow">
                  <ServiceCard
                    item={services[3]}
                    showViewMore={showViewMore}
                    slug={slug}
                    large
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {services.map((item) => (
              <ServiceCard
                key={item.id}
                item={item}
                showViewMore={showViewMore}
                slug={slug}
              />
            ))}
            <InfoCard />
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 flex justify-center">
            <Link
              to={
                showViewMore ? `/categories/${slug}/building-signs` : "/contact"
              }
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold text-lg shadow-lg hover:from-amber-400 hover:to-orange-400 active:scale-95 transition-all duration-300"
            >
              {showViewMore ? "Know More" : "Contact Us"}
              <ArrowLeft className="rotate-180 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Sub-Components ---------- */

function ServiceCard({ item, showViewMore, slug, large }) {
  // Redirect logic: All interior signs go to one page, others are dynamic
  const getLink = () => {
    if (item.title === "Freestanding Signs") {
      return `/categories/${slug}/freestanding-signs?tab=monument`;
    }

    if (item.title === "Directional Signs") {
      return `/categories/${slug}/freestanding-signs?tab=wayfinding`;
    }
    
    if (slug === "interior-sign") {
      return `/categories/${slug}/interior-sign?tab=ADA`;
    }
    
    return `/categories/${slug}/${item.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  return (
    <div
      className={`relative rounded-[2.5rem] border border-neutral-800 bg-neutral-900/40 overflow-hidden group flex flex-col transition-all duration-500 hover:border-neutral-700 ${large ? "h-full" : ""}`}
    >
      <GrainOverlay />

      <div className="relative p-8 lg:p-10 flex flex-col h-full z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-neutral-400 mt-1">{iconMap[item.title]}</div>
          <div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>

        {item.image && (
          <div
            className={`mt-auto rounded-3xl overflow-hidden relative border border-neutral-800/50 ${large ? "flex-grow min-h-[300px]" : "aspect-[16/10]"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {showViewMore && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  to={getLink()}
                  className="bg-amber-500 text-black px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  View More <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="relative rounded-[2.5rem] p-8 lg:p-10 border border-neutral-800 bg-neutral-900/60 overflow-hidden shadow-inner">
      <GrainOverlay />
      <div className="relative z-10">
        <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-widest opacity-90">
          Your One-Stop Shop
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          High-quality signs, competitive prices, and quick turnaround all in
          one place.
        </p>
      </div>
    </div>
  );
}
