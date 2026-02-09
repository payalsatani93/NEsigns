import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,80,0.12),transparent_60%)]" />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide">
              LET’S BUILD
              <br />
              SOMETHING
              <br />
              GREAT
            </h2>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
              Let’s take your business to the next level together. Reach out to
              us for service inquiries, collaboration ideas, or guidance on
              upcoming projects we’re excited to assist you.
            </p>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="relative">
            <div
              className="
                relative
                rounded-3xl
                p-6 md:p-8
                bg-gradient-to-br
                from-white/20
                via-white/10
                to-white/5
                backdrop-blur-xl
                border
                border-white/20
                shadow-2xl
              "
            >
              <h3 className="text-white text-xl font-semibold">
                Contact Form
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Fill out the form below, and our team will get back to you
                promptly. Let’s connect and create solutions together.
              </p>

              <form className="mt-6 space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-white text-sm block mb-1">
                    Full name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-11 rounded-lg px-4 bg-white text-black outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-white text-sm block mb-1">
                    Business email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-11 rounded-lg px-4 bg-white text-black outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white text-sm block mb-1">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select className="h-11 rounded-lg px-3 bg-white text-black outline-none">
                      <option>+1</option>
                      <option>+91</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Enter your contact number"
                      className="flex-1 h-11 rounded-lg px-4 bg-white text-black outline-none"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="text-white text-sm block mb-1">
                    What service do you need? *
                  </label>
                  <div className="relative">
                    <select className="w-full h-11 rounded-lg px-4 bg-white text-black outline-none appearance-none">
                      <option>Select</option>
                      <option>Printing</option>
                      <option>Branding</option>
                      <option>Design</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-white text-sm block mb-1">
                    How can we help you?
                  </label>
                  <textarea
                    placeholder="Enter your message here"
                    className="w-full h-24 rounded-lg px-4 py-3 bg-white text-black outline-none resize-none"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="
                      flex items-center gap-2
                      px-6 py-3
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-400
                      to-orange-500
                      text-black
                      font-semibold
                      hover:scale-105
                      transition-transform
                    "
                  >
                    Contact Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
