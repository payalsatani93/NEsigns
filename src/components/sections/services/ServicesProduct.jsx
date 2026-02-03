import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Layers,
  Copy,
  Sparkles,
  Calendar,
  Flag,
  FileText,
  MenuSquare,
  SquareDashed,
  Bell,
  Sun,
  Car,
  LayoutGrid,
  Users,
  Printer,
  Settings,
  Mail,
  Image,
  Package,
  Truck,
  Home,
  Layout,
  Smartphone,
  Cpu,
} from "lucide-react";

const services = [
  { title: "Business Card", icon: CreditCard, path: "/business-card" },
  { title: "Brochures", icon: Layers, path: "/brochures" },
  { title: "Copy services", icon: Copy, path: "/copy-services" },
  { title: "T-shirt Prints", icon: Sparkles, path: "/tshirt-prints" },
  { title: "Calendars", icon: Calendar, path: "/calendars" },
  { title: "Banners", icon: Flag, path: "/banners" },
  { title: "Carbonless Forms", icon: FileText, path: "/carbonless-forms" },
  { title: "Carryout Menus", icon: MenuSquare, path: "/carryout-menus" },
];

const signageServices = [
  { title: "Exterior sign", icon: SquareDashed, path: "/exterior-sign" },
  { title: "Interior sign", icon: Sparkles, path: "/interior-sign" },
  { title: "LED/Digital Board", icon: Bell, path: "/led-digital-board" },
  { title: "LED Neon Sign", icon: Sun, path: "/led-neon-sign" },
  { title: "Vehicle Graphics", icon: Car, path: "/vehicle-graphics" },
  { title: "Window & Wall Graphics", icon: LayoutGrid, path: "/window-wall-graphics" },
];

const mailingServices = [
  { title: "Designing for Piece", icon: Users },
  { title: "Printing Your Piece", icon: Printer },
  { title: "Route targeting", icon: Settings },
  { title: "Stack bundling", icon: Mail },
  { title: "Print & organize", icon: Image },
  { title: "Box & organize", icon: Package },
  { title: "Flexible shipping", icon: Truck },
  { title: "Pay printing, pay postage", icon: Home },
];

const webDesignServices = [
  { title: "Portfolio Website", icon: Layout },
  { title: "E-commerce Website", icon: Layers },
  { title: "Shopify Store", icon: Smartphone },
  { title: "WordPress", icon: Sparkles },
];

const seoServices = [
  { title: "Website Audit & SEO Strategy", icon: Layout },
  { title: "On-Page Optimization", icon: Layers },
  { title: "Technical SEO", icon: Cpu },
  { title: "Local SEO", icon: Sparkles },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const getServiceBorderClasses = (index, totalItems) => {
    const classes = [];

    // Mobile (1 column) - border bottom for all except last
    if (index < totalItems - 1) {
      classes.push("border-b");
    }

    // Tablet (2 columns) - sm breakpoint
    // Right border for odd indices (left column)
    if (index % 2 === 0) {
      classes.push("sm:border-r");
    }
    // Bottom border for all except last two items
    if (index < totalItems - 2) {
      classes.push("sm:border-b");
    } else {
      classes.push("sm:border-b-0");
    }

    // Desktop (4 columns) - lg breakpoint
    // Right border for items not in the last column (indices 0,1,2 / 4,5,6)
    if (index % 4 !== 3) {
      classes.push("lg:border-r");
    } else {
      classes.push("lg:border-r-0");
    }

    // Bottom border for all rows on desktop
    classes.push("lg:border-b");

    return classes.join(" ");
  };

  const getSignageBorderClasses = (index, totalItems) => {
    const classes = [];

    // Mobile (1 column) - border bottom for all except last
    if (index < totalItems - 1) {
      classes.push("border-b");
    }

    // Tablet (2 columns) - sm breakpoint
    // Right border for odd indices (left column)
    if (index % 2 === 0) {
      classes.push("sm:border-r");
    }
    // Bottom border for all except last two items
    if (index < totalItems - 2) {
      classes.push("sm:border-b");
    } else {
      classes.push("sm:border-b-0");
    }

    // Desktop (4 columns) - lg breakpoint
    // Right border for items not in the last column
    if (index % 4 !== 3) {
      classes.push("lg:border-r");
    } else {
      classes.push("lg:border-r-0");
    }

    // Bottom border for all rows on desktop
    classes.push("lg:border-b");

    return classes.join(" ");
  };

  return (
    <>
      <section className="relative bg-black text-white py-5 mt-10">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative containers">
          {/* Heading with horizontal line */}
          <div className="items-center gap-6">
            <div className="h-px bg-white/15" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl py-10 sm:px-10 px-0">
              Printing Products
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(service.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(service.path);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`
                    group
                    items-center sm:items-start
                    p-6 sm:p-8 lg:p-10
                    flex flex-col gap-4 sm:gap-5 lg:gap-6
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:bg-white/5
                    active:scale-[0.98]
                    border-white/20
                    ${getServiceBorderClasses(index, services.length)}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                      rounded-xl
                      bg-gradient-to-br from-white/10 via-white/5 to-black
                      ring-1 ring-white/10
                      flex items-center justify-center
                      transition-transform duration-300 ease-out
                      group-hover:-translate-y-2 lg:group-hover:-translate-y-3
                    "
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[var(--color-gradient)]" />
                  </div>

                  {/* Title */}
                  <p className="text-base sm:text-lg text-white">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ///////////////////////        Signage Section       ////////////////////////// */}

      <section className="relative bg-black text-white py-5">
        <div className="relative containers">
          {/* Heading */}
          <div className="h-px bg-white/15" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl py-10 sm:px-10 px-0">
            Signage
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/20">
            {signageServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(service.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(service.path);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`
                    group
                    items-center sm:items-start
                    p-6 sm:p-8 lg:p-10
                    flex flex-col gap-4 sm:gap-5 lg:gap-6
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:bg-white/5
                    active:scale-[0.98]
                    border-white/20
                    ${getSignageBorderClasses(index, signageServices.length)}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                      rounded-xl
                      bg-gradient-to-br from-white/10 via-white/5 to-black
                      ring-1 ring-white/10
                      flex items-center justify-center
                      transition-transform duration-300 ease-out
                      group-hover:-translate-y-1
                    "
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[var(--color-gradient)]" />
                  </div>

                  {/* Title */}
                  <p className="text-base sm:text-lg text-white">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ///////////////////////       Direct Mailing  Section       ////////////////////////// */}

      <section className="relative bg-black text-white py-5">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative containers">
          {/* Heading with horizontal line */}
          <div className="items-center gap-6">
            <div className="h-px bg-white/15" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl py-10 sm:px-10 px-0">
              Direct Mailing
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">
            {mailingServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(service.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(service.path);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`
                    group
                    items-center sm:items-start
                    p-6 sm:p-8 lg:p-10
                    flex flex-col gap-4 sm:gap-5 lg:gap-6
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:bg-white/5
                    active:scale-[0.98]
                    border-white/20
                    ${getServiceBorderClasses(index, services.length)}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                      rounded-xl
                      bg-gradient-to-br from-white/10 via-white/5 to-black
                      ring-1 ring-white/10
                      flex items-center justify-center
                      transition-transform duration-300 ease-out
                      group-hover:-translate-y-2 lg:group-hover:-translate-y-3
                    "
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[var(--color-gradient)]" />
                  </div>

                  {/* Title */}
                  <p className="text-base sm:text-lg text-white">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ///////////////////////    Web Design Section       ////////////////////////// */}

      <section className="relative bg-black text-white py-5">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative containers">
          {/* Heading with horizontal line */}
          <div className="items-center gap-6">
            <div className="h-px bg-white/15" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl py-10 sm:px-10 px-0">
              Web Designing
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">
            {webDesignServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(service.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(service.path);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`
                    group
                    items-center sm:items-start
                    p-6 sm:p-8 lg:p-10
                    flex flex-col gap-4 sm:gap-5 lg:gap-6
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:bg-white/5
                    active:scale-[0.98]
                    border-white/20
                    ${getServiceBorderClasses(index, services.length)}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                      rounded-xl
                      bg-gradient-to-br from-white/10 via-white/5 to-black
                      ring-1 ring-white/10
                      flex items-center justify-center
                      transition-transform duration-300 ease-out
                      group-hover:-translate-y-2 lg:group-hover:-translate-y-3
                    "
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[var(--color-gradient)]" />
                  </div>

                  {/* Title */}
                  <p className="text-base sm:text-lg text-white">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ///////////////////////   SEO Service  Section       ////////////////////////// */}

      <section className="relative bg-black text-white py-5">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative containers">
          {/* Heading with horizontal line */}
          <div className="items-center gap-6">
            <div className="h-px bg-white/15" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl py-10 sm:px-10 px-0">
              SEO Service
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">
            {seoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(service.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(service.path);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`
                    group
                    items-center sm:items-start
                    p-6 sm:p-8 lg:p-10
                    flex flex-col gap-4 sm:gap-5 lg:gap-6
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:bg-white/5
                    active:scale-[0.98]
                    border-white/20
                    ${getServiceBorderClasses(index, services.length)}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                      rounded-xl
                      bg-gradient-to-br from-white/10 via-white/5 to-black
                      ring-1 ring-white/10
                      flex items-center justify-center
                      transition-transform duration-300 ease-out
                      group-hover:-translate-y-2 lg:group-hover:-translate-y-3
                    "
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[var(--color-gradient)]" />
                  </div>

                  {/* Title */}
                  <p className="text-base sm:text-lg text-white">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
