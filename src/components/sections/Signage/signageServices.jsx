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
    gradient: "from-pink-500 via-pink-400 to-purple-400",
    bgOverlay: "bg-pink-500/20",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", // Exterior building sign
  },
  {
    title: "Interior sign",
    slug: "interior-sign",
    description:
      "Interior signs that blend functionality with style to enhance your space",
    icon: Sparkles,
    number: "02",
    gradient: "from-cyan-400 via-blue-300 to-pink-300",
    bgOverlay: "bg-cyan-400/20",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Modern interior office
  },
  {
    title: "LED/Digital Board",
    slug: "led-digital-board",
    description:
      "High-impact LED displays designed to inform, promote, and engage",
    icon: Bell,
    number: "03",
    gradient: "from-green-400 via-emerald-300 to-cyan-300",
    bgOverlay: "bg-green-400/20",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80", // LED digital display
  },
  {
    title: "LED Neon Signs",
    slug: "led-neon-sign",
    description:
      "Stylish LED neon signs designed to stand out and impress",
    icon: Sun,
    number: "04",
    gradient: "from-purple-600 via-purple-500 to-blue-500",
    bgOverlay: "bg-purple-600/20",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=800&q=80", // Neon sign
  },
  {
    title: "Window & Wall Graphics",
    slug: "window-graphics",
    description: "High-quality window and wall graphics that strengthen your brand presence",
    icon: LayoutGrid,
    number: "05",
    gradient: "from-orange-400 via-yellow-400 to-amber-300",
    bgOverlay: "bg-orange-400/20",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", // Glass office windows
  },
];

/* =======================
   PAGE
======================= */

export default function SignageServices() {
  return (
    <>
      {/* Hero */}
      <section className="">
        <div className="containers space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-[1px] bg-yellow-600"></div>
            <span className="text-yellow-600 uppercase tracking-widest text-sm">
              Category
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl mb-5">
            Find the Right Signage for Your Business
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-10">
        <div className="containers">
          <div className="flex flex-wrap gap-6">
            {signageServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`
                    group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer
                    transition-all duration-700 ease-in-out
                    w-[180px] hover:w-[450px]
                  `}
                >
                  {/* Background Card - Always Visible */}
                  <div
                    className={`
                    absolute inset-0
                    bg-gradient-to-br ${service.gradient}
                    transition-all duration-500
                  `}
                  >
                    {/* Background Pattern/Texture */}
                    <div className="absolute inset-0 opacity-30">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>

                    {/* Brand Text Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="text-white text-6xl font-bold transform -rotate-12">
                        NE<span className="font-serif italic">Signs</span>
                      </div>
                    </div>

                    {/* Vertical Label */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 group-hover:opacity-0">
                      <div className="w-[1px] h-16 bg-white/30"></div>
                      <div className="mt-4 text-white text-sm font-light tracking-wider writing-mode-vertical transform rotate-180 text-center py-4">
                        {service.title}
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 group-hover:opacity-0">
                      <div className="text-white text-7xl font-bold opacity-50 stroke-text">
                        {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay - Expanded Info with Image */}
                  <div
                    className={`
                      absolute inset-0
                      opacity-0 group-hover:opacity-100
                      transition-all duration-500
                      flex
                    `}
                  >
                    {/* Image Section - Left Side */}
                    <div className="w-1/2 h-full relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
                    </div>

                    {/* Content Section - Right Side */}
                    <div className="w-1/2 h-full bg-black/80 backdrop-blur-sm flex flex-col justify-between p-8">
                      {/* Top Section */}
                      <div>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-[1px] h-12 bg-white/50"></div>
                          <div className="text-white text-xs font-light tracking-widest uppercase">
                            SIGNAGE
                          </div>
                        </div>

                        <h3 className="text-white text-2xl font-bold mb-4">
                          {service.title}
                        </h3>

                        <p className="text-white/90 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <Link
                          to={`/categories/${service.slug}`}
                          className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/30 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors"
                        >
                          View More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Styles for Vertical Text */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}