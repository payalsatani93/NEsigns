import { Link } from "react-router-dom";
import {
  SquareDashed,
  Sparkles,
  Bell,
  Sun,
  Car,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

/* =======================
   DATA
======================= */

const signageServices = [
  {
    title: "Exterior Sign",
    slug: "exterior-sign",
    description:
      "High-impact outdoor signage designed to attract attention and build brand presence.",
    icon: SquareDashed,
  },
  {
    title: "Interior Sign",
    slug: "interior-sign",
    description:
      "Clean, modern interior signage that enhances customer experience.",
    icon: Sparkles,
  },
  {
    title: "LED / Digital Board",
    slug: "led-digital-board",
    description:
      "Dynamic digital boards for promotions, menus, and announcements.",
    icon: Bell,
  },
  {
    title: "LED Neon Sign",
    slug: "led-neon-sign",
    description:
      "Stylish neon signs to make your brand stand out day and night.",
    icon: Sun,
  },
  {
    title: "Vehicle Graphics",
    slug: "vehicle-graphics",
    description:
      "Turn your vehicle into a moving billboard with custom graphics.",
    icon: Car,
  },
  {
    title: "Window Graphics",
    slug: "window-graphics",
    description: "Eye-catching window designs that communicate and convert.",
    icon: LayoutGrid,
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
          <div className="flex items-center gap-4  ">
            <div className="w-20 h-[1px] bg-yellow-600"></div>
            <span className="text-yellow-600 uppercase tracking-widest text-sm ">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {signageServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                  border
                   group
                    items-center sm:items-start
                    p-6 sm:p-8 lg:p-10
                    flex flex-col gap-4 sm:gap-5 lg:gap-6
                    hover:bg-white/5
                    active:scale-[0.98]
                    border-white/20
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                     w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                      rounded-xl
                      bg-gradient-to-br from-white/10 via-white/5 to-black
                      ring-1 ring-white/10
                      flex items-center justify-center
                    "
                  >
                    <Icon className="w-7 h-7 text-yellow-500" />
                  </div>

                  {/* Content */}
                  <div className="mt-10 ">
                    <h3 className="text-xl mb-4  group-hover:text-yellow-500">
                      {service.title}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed  group-hover:text-yellow-500">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <Link
                      to={`/categories/${service.slug}`} // This sends the user to the dynamic route
                      className="flex items-center gap-2 text-sm text-yellow-500 border border-white/20 rounded-full px-4 py-2 cursor-pointer hover:bg-white/10"
                    >
                      View More
                      <span className="transition group-hover:translate-x-1">
                        <ArrowRight className="text-white h-5 w-5" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
