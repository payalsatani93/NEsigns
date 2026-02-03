import React from "react";
import { Mail, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "HOME", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Apparel", href: "/apparel" },
    { name: "Promotional products", href: "/promotional_products" },
    { name: "Our work", href: "/our_work" },
    { name: "Contact us", href: "/contactUs" },
  ];
  const Services = [
    
    
    { name: "Signage", href: "/services/signage" },
    { name: "Printing Products", href: "/services/printing" },
    { name: "Direct Mailing", href: "/services/direct-mailing" },
    { name: "Web Designing", href: "/services/web-design" },
    { name: "SEO", href: "/services/seo" },
  ];

  const Signage = [
    { name: "Exterior Sign", href: "/categories/exterior-sign" },
    { name: "Interior Sign", href: "/categories/interior-sign" },
    { name: "LED / Digital Board", href: "/categories/led-digital-board" },
    { name: "LED Neon Sign", href: "/categories/led-neon-sign" },
    { name: "Window & Wall Graphics", href: "/categories/window-graphics" },
  ];

  return (
    <footer>
      <div className="containers">
        {/* First Row - Logo, Email, and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 py-4 sm:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/Hero/Logo.png"
              alt="NE Signs Logo"
              className="h-10 sm:h-6 md:h-10"
            />
          </div>

          {/* Email */}
          <div>
            <a
              href="mailto:nesignsinc@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">nesignsinc@gmail.com</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            <a
              href="#"
              className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <Facebook size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm md:display-block hidden">facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              <span className="text-sm md:display-block hidden">pinterest</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm md:display-block hidden">linkedin</span>
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-800 mb-6 sm:mb-8"></div>

        {/* Second Row - Let's Work Together, Menu Lists, and Message Us Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-6 sm:pb-8">
          {/* Left Column - CTA with vertical line */}
          <div className="lg:col-span-3 relative text-center lg:text-left">
            {/* Vertical Line - only visible on large screens */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-800 ml-5"></div>

            <div className="">
              <h3 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                LET'S WORK
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl tracking-widest text-gray-400 mb-4 sm:mb-6">
                TOGETHER
              </p>

              <a
                href="mailto:nesignsinc@gmail.com"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-3 lg:px-5 py-2 sm:py-3 border border-gray-600 rounded-full "
              >
                <span className="text-xs sm:text-sm text-gray-300">
                  nesignsinc@gmail.com
                </span>
                <img
                  className="arrow-bounce h-2 w-2"
                  src="/portfolio/ArrowUpRight.png"
                  alt="ArrowUpRight.png"
                />
              </a>
            </div>
          </div>

          {/* Center Columns - Menu Lists */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8 p-2 ">
            {/* Quick Links */}
            <div>
              <ul className="space-y-2 top-10">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Printing Services */}
            <div>
              <Link to="/services" className="text-white font-semibold mb-3  text-sm sm:text-base">
               Services
              </Link>
              <ul className="space-y-2 top-10">
                {Services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signage Services */}
            <div>
              <Link to="/services/signage" className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Signage
              </Link>
              <ul className="space-y-2 top-10">
                {Signage.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Message Us Button */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <a
              href="#"
              className="
                flex flex-col items-center justify-center
                w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-32 lg:h-32 xl:w-40 xl:h-40
                bg-[var(--color-gradient)]
                rounded-full animate-bounce-slow hover:scale-105 transition-transform duration-300"
            >
              <span className="text-black font-bold text-sm md:text-lg lg:text-sm xl:text-lg">
                Message
              </span>
              <span className="text-black font-bold text-sm md:text-lg lg:text-sm xl:text-lg">
                Us
              </span>
              <img
                className="mt-2 h-3 w-3"
                src="/images/BlackArrow.png"
                alt=""
              />
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-800 mb-4 sm:mb-6"></div>

        {/* Bottom Section - Copyright under menu lists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 pb-4 sm:pb-6">
          <div className="lg:col-span-3"></div>
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              ©2024 <span className="text-yellow-400">NE SIGNS</span> All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
