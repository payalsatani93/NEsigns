import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Award,
  ThumbsUp,
  SendHorizontal,
  Clock4,
} from "lucide-react";

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Golden Background Patch */}
      <div
        className="absolute md:w-[358px] md:h-[508px] w-32 h-32 z-0
             top-[0] right-[0]
             bg-[var(--color-gradient)]
             blur-[400px]
             pointer-events-none"
      />

      <img
        className="absolute right-10 top-20 opacity-20 pointer-events-none hidden md:block"
        src="/images/contact/Cube_Vactor.png"
        alt=""
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 lg:px-10 xl:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Reach Out to Us Today
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
            Connect with our expert team for high-impact signage solutions. We
            prioritize accessibility and transparent communication to bring your
            vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 xl:gap-12 lg:px-10 xl:px-20">
          {/* LEFT SIDE: Info & Hours */}
          <div className="w-full max-w-[500px] lg:max-w-none justify-self-center lg:justify-self-start">
            <div className="space-y-6">
              {[
                {
                  title: "CALL US DIRECTLY",
                  main: "630-454-SIGNS (7446)",
                  sub: "Available during business hours",
                  icon: Phone,
                },
                {
                  title: "EMAIL SUPPORT",
                  main: "contact@nesigns.com",
                  sub: "Typical response within 24 hours",
                  icon: Mail,
                },
                {
                  title: "OUR STUDIO",
                  main: "2223 OGDEN AVE #B LISLE, IL 60515",
                  sub: "Get Directions",
                  icon: MapPin,
                  isLink: true,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="
                      group flex flex-col sm:flex-row items-start gap-5
                      bg-[var(--color-yellow)]/10
                      border border-[var(--color-yellow)]/25
                      rounded-2xl p-6
                      hover:border-[var(--color-yellow)]
                      transition-all duration-300
                    "
                  >
                    {/* Icon Box */}
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl 
                    bg-transparent border border-[var(--color-yellow)]/40 text-[var(--color-yellow)]
                     shrink-0">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-[var(--color-yellow)] text-[10px] md:text-sm font-semibold tracking-[2px] mb-2 uppercase">
                        {item.title}
                      </p>
                      <p className="text-lg md:text-lg font-medium text-white mb-1 break-words">
                        {item.main}
                      </p>
                      {item.isLink ? (
                        <div className="flex items-center gap-2 text-[var(--color-yellow)] text-sm font-medium mt-2 cursor-pointer group-hover:gap-3 transition-all">
                          {item.sub} <ArrowRight size={16} />
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm">{item.sub}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Operating Hours */}
            <div className="bg-[#0f141b] border border-[var(--color-yellow)]/10 rounded-2xl p-6 md:p-8 mt-10">
              <h3 className="text-[20px] font-semibold mb-6 flex items-center gap-2 text-white">
                <Clock4 className="text-[var(--color-yellow)] w-[20px] h-[20px]"/>
                Operating Hours
              </h3>
              <div className="space-y-4 text-gray-500 text-[16px]">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">
                    10:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-amber-500 font-bold uppercase tracking-widest">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="bg-[var(--color-yellow)]/10 border border-[var(--color-yellow)]/20 rounded-3xl p-6 md:p-10 shadow-2xl w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Send a Message
            </h2>
            <p className="text-gray-400 mb-8 text-sm md:text-base">
              Have a specific project in mind? We'd love to hear from you.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] text-amber-400 font-bold tracking-[2px] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[16px]
                     text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-amber-400 font-bold tracking-[2px] uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[16px]
                     text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-amber-400 font-bold tracking-[2px] uppercase">
                  Contact Number
                </label>
                <input
                  type="text"
                  placeholder="630-454-7446"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[16px]
                   text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-amber-400 font-bold tracking-[2px] uppercase">
                  Project Category
                </label>
                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[16px] text-white focus:outline-none focus:border-amber-400 transition cursor-pointer appearance-none">
                  <option className="bg-[#0f141b]">Signage</option>
                  <option className="bg-[#0f141b]">Printing</option>
                  <option className="bg-[#0f141b]">
                    Direct Marketing & Mail Services
                  </option>
                  <option className="bg-[#0f141b]">Web Designing</option>
                  <option className="bg-[#0f141b]">SEO</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-amber-400 font-bold tracking-[2px] uppercase">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[16px]
                   text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="
    group w-full
    bg-gradient-to-r from-[var(--color-yellow)] to-[var(--color-primary)] 
    text-black text-[18px]
    py-4 rounded-xl
    transition-all duration-300
    flex items-center justify-center gap-4
    active:scale-[0.98]
    shadow-[0px_8px_10px_-6px_#F2930D33,0px_20px_25px_-5px_#F2930D33]
  "
              >
                Send Inquiry
                <SendHorizontal
                  size={18}
                  className="w-[19px] h-[16px] group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            {/* Bottom Stats Badge */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between text-[9px] md:text-[12px] text-gray-500 mt-10 border-t border-white/5 pt-6 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2 ">
                {" "}
                <BadgeCheck className="text-[var(--color-yellow)] h-[12px] w-[12px]" />{" "}
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2 ">
                {" "}
                <Award className="text-[var(--color-yellow)] h-[12px] w-[12px]" />{" "}
                25+ Years Exp
              </span>
              <span className="flex items-center gap-2 ">
                {" "}
                <ThumbsUp className="text-[var(--color-yellow)] h-[12px] w-[12px]" />{" "}
                1K+ Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
