import { useState, useEffect } from "react";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#F5A623" />
    <path
      d="M5 9l3 3 5-5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DiamondIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14">
    <polygon points="7,0 14,7 7,14 0,7" fill="#F79C29" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M3 9h12M10 4l5 5-5 5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const services = [
  { label: "Direct Mail", full: false },
  { label: "Every-Door Direct Mail (EDDM)", full: false },
  { label: "Mailing & Fulfillment Services", full: false },
  { label: "Variable Data & Mapping", full: false },
  { label: "Customer Retention & Reactivation", full: true },
];

export default function ImportencofDirectMail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = "transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]";
  const hidden = "opacity-0 translate-y-8";
  const show = "opacity-100 translate-y-0";

  return (
    <section className="relative z-10 py-16">
      {/* EVERYTHING INSIDE CONTAINER */}
      <div className="containers relative flex flex-col xl:flex-row items-center justify-center gap-30 lg:gap-40">
        {/* LEFT IMAGE COLLAGE */}
        <div
          className={`relative w-full max-w-[590px] aspect-[590/622] flex-shrink-0 z-0 ${anim} ${
            visible ? show : hidden
          }`}
        >
          {/* Glow */}
          <div className="absolute -top-10 -left-10 md:-top-14 md:-left-14 w-40 h-40 md:w-56 md:h-56 lg:w-[218px] lg:h-[218px] z-10
           bg-[var(--color-gradient)]/30 rounded-full blur-2xl" />

          {/* Dashed Border */}
          <div className="absolute inset-0 border border-dashed border-[var(--color-primary)] rounded-3xl" />

          {/* Main Image */}
          <div className="absolute inset-6 overflow-hidden rounded-3xl">
            <img
              src="/images/directmailing/Img_01.png"
              alt=""
              className="w-full h-full lg:w-[556px] lg:h-[572px] object-cover"
            />
          </div>

          {/* Circle Image */}
          <img
            src="/images/directmailing/Img_02.png"
            alt=""
            className="absolute -bottom-3 -right-3 md:-bottom-12 md:-right-12 md:block hidden
            sm:w-[356px] sm:h-[356px] w-48 h-48 rounded-full object-cover"
          />

          {/* Accent dots (FIXED values) */}
          <span className="absolute -top-2 -left-2 w-6 h-6 md:w-[35px] md:h-[35px] bg-[var(--color-primary)] rounded-full md:block hidden" />
          <span className="absolute bottom-16 -right-3 md:bottom-58 md:-right-4 w-6 h-6 md:w-[35px] md:h-[35px] bg-[var(--color-primary)] rounded-full md:block hidden" />
          <span className="absolute -bottom-4 right-16 md:right-56 w-6 h-6 md:w-[35px] md:h-[35px] bg-[var(--color-primary)] rounded-full md:block hidden" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 max-w-3xl text-center lg:text-left">
          {/* Label */}
          <div
            className={`flex items-center justify-center lg:justify-start gap-3 mb-6 ${anim} ${
              visible ? show : hidden
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <DiamondIcon />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-primary)]">
              Why It's Important
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 ${anim} ${
              visible ? show : hidden
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            Boost engagement through direct marketing.
          </h2>

          {/* Subtext */}
          <p
            className={`text-white/60 text-base leading-relaxed mb-8 ${anim} ${
              visible ? show : hidden
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            Connect with your audience in meaningful ways and create satisfied
            customers who keep coming back.
          </p>

          {/* Services Card */}
          <div
            className={`bg-white rounded-3xl p-6 md:p-8 max-w-2xl shadow-lg ${anim} ${
              visible ? show : hidden
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-5">
              {services.map(({ label, full }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 text-sm font-semibold text-neutral-800 ${
                    full ? "sm:col-span-2" : ""
                  }`}
                >
                  <CheckIcon />
                  {label}
                </div>
              ))}
            </div>

            <button className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-white font-bold text-sm rounded-full px-8 py-4 transition-all duration-300 group">
              Contact Now
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </button>
          </div>
        </div>

        {/* Star (NOW aligned to container) */}
        <div className="hidden md:block absolute top-5 right-0 w-8 h-8 md:w-10 md:h-10 opacity-70">
          <img src="/images/directmailing/White_Star.png" alt="" />
        </div>
      </div>
    </section>
  );
}
