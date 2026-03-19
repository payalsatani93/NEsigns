import { Phone, Mail, MapPin, CheckCircle, ChevronDown } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      {/* Section-1 */}
      <section
        className="relative w-full py-12 sm:py-16 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/BG_1.png')" }}
      >
        <div className="container px-4 sm:px-6">
          {/* Top Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get in Touch With <br />
                <span className="text-[var(--color-gradient)]">NE Signs</span>
              </h2>

              <p className="text-white/50 mt-4 lg:mt-6 leading-relaxed text-base sm:text-[16px] lg:text-[18px]">
                Looking for reliable printing and signage services? Have
                questions about your next project? The team at NE Signs is here
                to help. We are committed to providing fast responses, expert
                support, and outstanding customer service.
              </p>

              <p className="text-white/50 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-[15px] lg:text-[16px]">
                Whether you need expert guidance, a custom quote, or more
                details about our services, reach out to us today and our team
                will respond quickly.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border border-white/10 blur-xl scale-110"></div>
                <img
                  src="/images/contact/Hero_IMG_1.png"
                  alt="Support Agent"
                  className="relative w-48 sm:w-72 lg:w-[448px]"
                />
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 mt-12 lg:mt-20">
            {/* Card 1 */}
            <div className="border border-white/10 rounded-xl p-6 lg:p-10 text-center backdrop-blur-sm">
              <Phone
                className="mx-auto text-[var(--color-gradient)] mb-4 lg:mb-6"
                size={39}
              />
              <div className="h-px bg-white/10 mb-4 lg:mb-6"></div>
              <p className="text-base lg:text-[20px]">Call Us</p>
              <h3 className="text-lg lg:text-[24px] font-semibold mt-2">
                +1 (123) 456-7890
              </h3>
            </div>

            {/* Card 2 */}
            <div className="border border-white/10 rounded-xl p-6 lg:p-10 text-center backdrop-blur-sm">
              <Mail
                className="mx-auto text-[var(--color-gradient)] mb-4 lg:mb-6"
                size={32}
              />
              <div className="h-px bg-white/10 mb-4 lg:mb-6"></div>
              <p className="text-base lg:text-[20px]">Email Support</p>
              <h3 className="text-base xl:text-[24px] font-semibold mt-2">
                support@nesigns.com
              </h3>
            </div>

            {/* Card 3 */}
            <div className="border border-white/10 rounded-xl p-6 lg:p-10 text-center backdrop-blur-sm sm:col-span-2 md:col-span-1">
              <MapPin
                className="mx-auto text-[var(--color-gradient)] mb-4 lg:mb-6"
                size={32}
              />
              <div className="h-px bg-white/10 mb-4 lg:mb-6"></div>
              <p className="text-base lg:text-[20px]">Visit Our Office</p>
              <h3 className="text-lg lg:text-[24px] font-semibold mt-2">
                2220 Ogden avenue, Unit B,
                <br />
                Downers grove, IL 60515
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2 */}
      <section
        className="w-full py-12 sm:py-16 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/BG_2.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6 lg:space-y-10">
            {/* Why Contact Us */}
            <div className="border border-white/20 rounded-2xl p-6 lg:p-8 relative backdrop-blur-sm">
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[var(--color-gradient)] rounded-l-2xl"></div>

              <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">
                Why Contact Us?
              </h3>

              <ul className="space-y-4 lg:space-y-5 text-white text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--color-gradient)] shrink-0" size={20} />
                  Expert printing and signage solutions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--color-gradient)] shrink-0" size={20} />
                  Custom quotes and competitive pricing
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--color-gradient)] shrink-0" size={20} />
                  Fast turnaround with reliable delivery
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--color-gradient)] shrink-0" size={20} />
                  High-quality materials and professional craftsmanship
                </li>
              </ul>
            </div>

            {/* Customer Support Card */}
            <div className="rounded-2xl p-6 lg:p-8 backdrop-blur-sm border border-white/10 bg-white/5">
              <h3 className="text-white text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                Customer Support You Can Trust
              </h3>
              <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                At{" "}
                <span className="text-[var(--color-gradient)] font-medium">
                  NE Signs
                </span>
                , customer satisfaction is our priority. We deliver responsive,
                transparent, and reliable printing services tailored to your
                business needs.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="border border-white/20 rounded-2xl lg:rounded-[36px] p-6 sm:p-8 lg:p-10 backdrop-blur-md bg-black/20">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-white/50 mb-6 lg:mb-8 text-sm sm:text-base">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-5 lg:space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label className="text-white text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white/50 placeholder-gray-500 focus:outline-none focus:border-[var(--color-gradient)]"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white/50 placeholder-gray-500 focus:outline-none focus:border-[var(--color-gradient)]"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="text-white text-sm mb-2 block">
                  Project Category
                </label>
                <div className="relative w-full">
                  <select
                    className="w-full bg-[#0f141b] border border-white/10 rounded-xl px-4 py-3 pr-10
                    text-white/50 focus:outline-none focus:border-[var(--color-gradient)] appearance-none"
                  >
                    <option className="bg-[#0f141b] text-white">Signage</option>
                    <option className="bg-[#0f141b] text-white">Printing</option>
                    <option className="bg-[#0f141b] text-white">Direct Marketing & Mail Services</option>
                    <option className="bg-[#0f141b] text-white">Web Designing</option>
                    <option className="bg-[#0f141b] text-white">SEO</option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-white text-sm mb-2 block">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white/50 placeholder-gray-500 focus:outline-none focus:border-[var(--color-gradient)]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black font-semibold py-3 lg:py-4 rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}