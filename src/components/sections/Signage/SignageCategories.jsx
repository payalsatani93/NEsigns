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

  if (!data) return <div className=" bg-neutral-950" />;

  const services = data.subServices;

  return (
    <div className="bg-neutral-950 text-white containers">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/services/signage"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full border-2 border-neutral-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-600" />
            </div>
            <span className="text-sm text-neutral-400 capitalize">
              {data.slug.replace("-", " ")}
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-4">{data.title}</h1>

          <p className="text-lg text-neutral-400 max-w-2xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="container">
          {/* Desktop */}
          <div className="hidden md:flex flex-col gap-8">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-8">
              <ServiceCard item={services[0]} />

              <div className="flex flex-col gap-8">
                <InfoCard />
                <ServiceCard item={services[1]} />
              </div>
            </div>

            {/* Row 2 (opposite) */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                <InfoCard />
                <ServiceCard item={services[2]} />
              </div>

              <ServiceCard item={services[3]} />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-6">
            {services.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
            <InfoCard />
          </div>

          {/* CTA */}
          {/* CTA */}
<div className="mt-20 flex justify-center">
  {["exterior-sign", "interior-sign"].includes(data.slug) ? (
    <Link
      to={`/categories/${data.slug}/building-signs`}
      className="
        inline-flex items-center gap-3
        px-10 py-4
        rounded-full
        bg-gradient-to-r from-amber-500 to-orange-500
        text-black font-semibold text-lg
        shadow-lg shadow-orange-500/20
        hover:from-amber-400 hover:to-orange-400
        hover:shadow-orange-500/40
        active:scale-95
        transition-all duration-300
      "
    >
      Know More
      <ArrowLeft className="rotate-180 w-5 h-5 arrow-bounce" />
    </Link>
  ) : (
    <Link
      to="/contact"
      className="
       inline-flex items-center gap-3
        px-10 py-4
        rounded-full
        bg-gradient-to-r from-amber-500 to-orange-500
        text-black font-semibold text-lg
        shadow-lg shadow-orange-500/20
        hover:from-amber-400 hover:to-orange-400
        hover:shadow-orange-500/40
        active:scale-95
        transition-all duration-300
      "
    >
      Contact Us
      <ArrowLeft className="rotate-180 w-5 h-5 arrow-bounce" />
    </Link>
  )}
</div>

        </div>
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

function ServiceCard({ item }) {
  return (
    <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition group">
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          {iconMap[item.title]}
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>

        <p className="text-sm text-neutral-400 mb-4">{item.desc}</p>

        {item.image && (
          <div className="rounded-xl overflow-hidden aspect-[16/10]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 lg:p-8 border border-neutral-800">
      <h3 className="text-xl font-semibold mb-3">
        Your One-Stop Shop for Affordable Business Signage
      </h3>
      <p className="text-neutral-400">
        High-quality signs, competitive prices, and quick turnaround all in one
        place.
      </p>
    </div>
  );
}
