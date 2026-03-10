import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const signageServices = [
  {
    title: "Exterior Sign",
    image: "/images/signage/SignHero1.png",
  },
  {
    title: "Interior Sign",
    image: "/images/signage/SignHero2.png",
  },
  {
    title: "LED Digital Board",
    image: "/images/signage/SignHero3.png",
  },
  {
    title: "LED Neon Signs",
    image: "/images/signage/SignHero4.png",
  },
  {
    title: "Window & Wall Graphics",
    image: "/images/signage/SignHero5.png",
  },
  {
    title: "vehicle Graphics",
    image: "/images/signage/SignHero6.png",
  },
];

export default function SignageMainSection() {
  const [openCard, setOpenCard] = useState(0);
  const scrollRef = useRef(null);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background Patch */}
      <div className="absolute top-[-20px] right-0 md:w-[400px] md:h-[600px] w-40 h-40 bg-[var(--color-patch)] rounded-full blur-[250px] pointer-events-none" />

      <div className="containers flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 xl:gap-16">

        {/* ── LEFT CONTENT ── */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 sm:w-16 md:w-20 h-px bg-[var(--color-gradient)]" />
            <span className="text-[var(--color-gradient)] uppercase tracking-widest text-xs sm:text-sm">
              Signage
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-semibold leading-tight"
          >
            Get your Business Signage <br />
            <span className="text-gray-100">in Best Price.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-3 sm:gap-4 text-gray-400 leading-[30px] text-sm lg:text-[17px] xl:text-[18px] max-w-2xl"
          >
            <p>
              Get high-quality business signage designed to attract attention
              and build trust. We offer durable, visually striking signs at the
              best prices, tailored to fit your brand and business needs.
            </p>
            <p>
              Make your business stand out with affordable, eye-catching
              signage. From design to installation, we deliver quality signs
              that fit your budget without compromising on style.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: ACCORDION (desktop) / SCROLL CARDS (mobile) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >

          {/* ── DESKTOP ACCORDION (lg+) ── */}
          <div className="hidden lg:flex gap-2.5 items-center overflow-hidden h-[480px] xl:h-[520px] w-full">
            {signageServices.map((service, index) => {
              const isOpen = openCard === index;

              return (
                <div                
                  onMouseEnter={() => setOpenCard(index)}
                  className="relative h-full rounded-[18px] overflow-hidden cursor-pointer shrink-0"
                  style={{
                    flex: isOpen ? "3 0 0%" : "0.7 0 0%",
                    transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    minWidth: 0,
                  }}
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transition: "transform 0.6s ease",
                      transform: isOpen ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Closed — vertical title */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      opacity: isOpen ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                  </div>

                  {/* Open content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 xl:p-7"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(14px)",
                      transition:
                        "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                      pointerEvents: isOpen ? "auto" : "none",
                    }}
                  >
                    <h3 className="text-white text-lg xl:text-xl font-bold mb-4 leading-snug whitespace-nowrap">
                      {service.title}
                    </h3>
                    <Link
                      to="/know_your_sign"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                      rounded-lg px-4 xl:px-5 py-2 xl:py-2.5 text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
                    >
                      Know Your Sign
                      <ArrowRight className="arrow-bounce" size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── TABLET SCROLL ROW (sm–md) ── */}
          <div className="hidden sm:flex lg:hidden gap-3 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth -mx-4 px-4">
            {signageServices.map((service, index) => (
              <div
                className="relative shrink-0 w-52 h-72 rounded-2xl overflow-hidden snap-start cursor-pointer group"
                onClick={() => setOpenCard(index)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-bold mb-3">{service.title}</h3>
                  <Link
                    to="/know_your_sign"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                    rounded-lg px-3 py-1.5 text-white text-[10px] font-bold tracking-widest uppercase"
                  >
                    Know Your Sign
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── MOBILE GRID (xs only) ── */}
          <div className="flex sm:hidden flex-col gap-3">
            {signageServices.map((service) => (
              <div
                className="relative w-full h-40 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-between px-5">
                  <h3 className="text-white text-base font-bold">{service.title}</h3>
                  <Link
                    to="/know_your_sign"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                    rounded-lg px-3 py-2 text-white text-[10px] font-bold tracking-widest uppercase shrink-0"
                  >
                    Know Your Sign
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}