import React from "react";

export default function ContactSection() {
  return (
    <div className=" relative overflow-hidden py-20">
      {/* Golden Background left side  Patch */}
      <div
        className="absolute md:w-[508px] md:h-[508px] w-10 h-10
             top-[-10] right-[0]
             bg-[var(--color-patch)]
             opacity-100
             blur-[300px]
             pointer-events-none"
      />
      <img 
      className="absolute right-10" 
      src="/images/contact/Cube_Vactor.png" alt="" />

      <div className="container px-6 py-20 relative z-10">
        {/* Header */}
        <div className=" mb-14 ">
          <h1 className="text-5xl font-bold mb-6">Reach Out to Us Today</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Connect with our expert team for high-impact signage solutions. We
            prioritize accessibility and transparent communication to bring your
            vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {[
              {
                title: "CALL US DIRECTLY",
                main: "630-454-SIGNS (7446)",
                sub: "Available during business hours",
              },
              {
                title: "EMAIL SUPPORT",
                main: "contact@nesigns.com",
                sub: "Typical response within 24 hours",
              },
              {
                title: "OUR STUDIO",
                main: "2223 OGDENAVE #B LISLE,IL 60515",
                sub: "Get Directions →",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#161b22] to-[#141820] border border-amber-500/20 rounded-xl p-6 hover:border-amber-400 transition"
              >
                <p className="text-amber-400 text-xs font-semibold tracking-widest mb-3">
                  {item.title}
                </p>
                <p className="text-lg font-medium mb-1">{item.main}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}

            {/* Operating Hours */}
            <div className="bg-[#0f141b] border border-blue-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Operating Hours
              </h3>

              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">
                    8:00 AM - 6:00 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">
                    10:00 AM - 2:00 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-amber-400 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gradient-to-br from-[#151a21] to-[#12161c] border border-amber-500/20 rounded-2xl p-10">
            <h2 className="text-3xl font-semibold mb-2">Send a Message</h2>
            <p className="text-gray-400 mb-8">
              Have a specific project in mind? We'd love to hear from you.
            </p>

            <form className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-amber-400 tracking-widest mb-2 block">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label className="text-xs text-amber-400 tracking-widest mb-2 block">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label className="text-xs text-amber-400 tracking-widest mb-2 block">
                  CONTACT NUMBER
                </label>
                <input
                  type="text"
                  placeholder="604-148-abc(895)"
                  className="w-full bg-transparent border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-xs text-amber-400 tracking-widest mb-2 block">
                  PROJECT CATEGORY
                </label>
                <select className="w-full bg-transparent border border-amber-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition">
                  <option className="bg-[#0f141b]">Printing services</option>
                  <option className="bg-[#0f141b]">Exterior Sign</option>
                  <option className="bg-[#0f141b]">Interior Sign</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs text-amber-400 tracking-widest mb-2 block">
                  YOUR MESSAGE
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-transparent border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-xl transition duration-300"
              >
                Send Inquiry →
              </button>
            </form>

            {/* Bottom Info */}
            <div className="flex justify-between text-xs text-gray-400 mt-10 border-t border-amber-500/10 pt-6">
              <span>Licensed & Insured</span>
              <span>25+ Years Experience</span>
              <span>1K+ Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
