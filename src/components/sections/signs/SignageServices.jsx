import { Link } from "react-router-dom";
import {
  SquareDashed,
  Sparkles,
  Bell,
  Sun,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

/* =======================
   DATA
======================= */

const signageServices = [
  {
    title: "Exterior sign",
    slug: "exterior-sign",
    description:
      "Custom spaces that balance function and style, tailored to your lifestyle.",
    icon: SquareDashed,
    number: "01",
    cardGradient: "linear-gradient(180deg, #CF414B -6.31%, #852170 100%)",
    image: "/images/signage/Sign_01.png",
  },
  {
    title: "Interior sign",
    slug: "interior-sign",
    description:
      "Interior signs that blend functionality with style to enhance your space",
    icon: Sparkles,
    number: "02",
    cardGradient: "linear-gradient(180deg, #4FE6F1 -6.31%, #ED90CF 100%)",
    image: "/images/signage/Sign_02.png",
  },
  {
    title: "LED Digital Board",
    slug: "led-digital-board",
    description:
      "High-impact LED displays designed to inform, promote, and engage",
    icon: Bell,
    number: "03",
    cardGradient: "linear-gradient(180deg, #ADFDA2 -6.31%, #05A5BF 100%)",
    image: "/images/signage/Sign_03.png",
  },
  {
    title: "LED Neon Signs",
    slug: "led-neon-sign",
    description: "Stylish LED neon signs designed to stand out and impress",
    icon: Sun,
    number: "04",
    cardGradient: "linear-gradient(180deg, #8711C1 -6.31%, #2472FC 100%)",
    image: "/images/signage/Sign_04.png",
  },
  {
    title: "Window & Wall Graphics",
    slug: "window-graphics",
    description:
      "High-quality window and wall graphics that strengthen your brand presence",
    icon: LayoutGrid,
    number: "05",
    cardGradient: "linear-gradient(180deg, #F79C29 -6.31%, #EDBC5A 100%)",
    image: "/images/signage/Sign_05.png",
  },
];

/* =======================
   PAGE
======================= */

export default function SignageServices() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 sm:px-0">
        <div className="container space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-[1px] bg-yellow-600" />
            <span className="text-yellow-600 uppercase tracking-widest text-sm">
              Category
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl">
            Find the Right Signage for Your Business
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-12 md:mt-20 mt-5">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-6 justify-center w-full px-4">
            {signageServices.map((service, index) => (
              <div
                key={index}
                className="
                  group relative
                  h-[531px]
                  w-[228px]
                  hover:w-[528px]
                  rounded-xl overflow-hidden cursor-pointer
                  transition-all duration-700 ease-in-out
                "
              >
                {/* IMAGE */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* COLOR GRADIENT (CLOSED) */}
                <div
                  className="absolute inset-0 z-10 opacity-75 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ background: service.cardGradient }}
                />

                {/* DARK GRADIENT (OPEN) */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.95) 100%)",
                  }}
                />

                {/* CLOSED STATE */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full transition-opacity duration-300 group-hover:opacity-0">
                  <div className="w-px h-16 bg-white/50 mx-auto" />
                  <div className="mt-25 text-white text-md tracking-widest writing-vertical -rotate-270 text-nowrap">
                    {service.title}
                  </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300 group-hover:opacity-0">
                  <span
                    className="text-6xl sm:text-7xl font-extrabold leading-none select-none"
                    style={{
                      WebkitTextStroke: "1px white",
                      color: "transparent",
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* OPEN STATE */}
                <div className="absolute bottom-6 left-0 right-0 z-30 p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-[1px] bg-white/60" />
                    <span className="text-white text-xs tracking-widest uppercase">
                      Signage
                    </span>
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
                    {service.description}
                  </p>

                  <Link
                    to={`/categories/${service.slug}`}
                    className="
                      inline-flex items-center gap-2 text-[var(--color-gradient)]
                      text-xs sm:text-sm font-medium
                      border border-[var(--color-muted)]
                      rounded-full px-4 sm:px-5 py-2.5
                      transition-colors
                    "
                  >
                    View More
                    <ArrowRight className="w-4 h-4 arrow-bounce" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .writing-vertical {
        }
      `}</style>
    </>
  );
}
