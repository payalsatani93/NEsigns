import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

const signageServices = [
  {
    title: "Exterior Sign",
    slug: "exterior-sign",
    image: "/images/signage/SignHero1.png",
  },
  {
    title: "Interior Sign",
    slug: "interior-sign",
    image: "/images/signage/SignHero2.png",
  },
  {
    title: "LED Digital Board",
    slug: "led-digital-board",
    image: "/images/signage/SignHero3.png",
  },
  {
    title: "LED Neon Signs",
    slug: "led-neon-sign",
    image: "/images/signage/SignHero4.png",
  },
  {
    title: "Window & Wall Graphics",
    slug: "window-graphics",
    image: "/images/signage/SignHero5.png",
  },
];

export default function SignageMainSection() {
  const [openCard, setOpenCard] = useState(0);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Patch */}
      <div className="absolute top-[-20px] right-0 md:w-[400px] md:h-[600px] w-40 h-40 bg-[var(--color-patch)] rounded-full blur-[250px] pointer-events-none" />

      {/* Outer grid — LEFT is fixed width, RIGHT fills remaining */}
      <div className="containers grid grid-cols-2 gap-10 xl:gap-16 ">
        {/* ── LEFT CONTENT — fixed column, never shifts ── */}
        <div className="flex flex-col gap-5 md:gap-6">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold leading-tight"
          >
            Get your Business Signage <br />
            <span className="text-gray-100">in Best Price.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-3 sm:gap-4 text-gray-400 leading-[32px]
             text-sm lg:text-[18px] max-w-2xl"
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

        {/* ── RIGHT ACCORDION — overflows within its own column ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-2.5 items-center overflow-hidden h-[520px]"
        >
          {signageServices.map((service, index) => {
            const isOpen = openCard === index;

            return (
              <div
                key={service.slug}
                onMouseEnter={() => setOpenCard(index)}
                className="relative h-full rounded-[18px] overflow-hidden cursor-pointer shrink-0"
                style={{
                  width: isOpen ? "381px" : "100px",
                  transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
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

                {/* Open content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-7"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(14px)",
                    transition:
                      "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                    pointerEvents: isOpen ? "auto" : "none",
                  }}
                >
                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-5 leading-snug whitespace-nowrap">
                    {service.title}
                  </h3>

                  {/* Button */}
                  <Link
                    to ="/know_your_sign"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
                    rounded-lg px-5 py-2.5 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/20 hover:border-white/55 transition-colors"
                  >
                    Know Your Sign
                    <ArrowRight className="arrow-bounce"/>
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
