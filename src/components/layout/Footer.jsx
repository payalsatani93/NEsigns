import React from "react";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Apparel", href: "/apparel" },
    { name: "Promotional Products", href: "/promotional_products" },
    { name: "Our Work", href: "/our_work" },
    { name: "Know your sign", href: "/know_your_sign" },
    { name: "Contact Us", href: "/contactUs" },
  ];

  const services = [
    { name: "Signage", href: "/services/signage" },
    { name: "Printing", href: "/services/printing" },
    { name: "Direct Mailing", href: "/services/direct-mailing" },
    { name: "Web Designing", href: "/services/web-design" },
    { name: "SEO", href: "/services/seo" },
  ];

  const signages = [
    { name: "Exterior Signs", href: "/categories/exterior-sign" },
    { name: "Interior Signs", href: "/categories/interior-sign" },
    { name: "LED Digital Boards", href: "/categories/led-digital-board" },
    { name: "LED Neon Signs", href: "/categories/led-neon-sign" },
    { name: "Window & Wall Graphics", href: "/categories/window-graphics" },
  ];

  return (
    <footer className="">
      <div className="containers">
        {/* Top Section - Logo and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 sm:py-10 gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/Hero/Logo.png"
              alt="NE Signs Logo"
              className="h-10"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 md:gap-6">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.486 17.523 2 12 2S2 6.486 2 12.07c0 4.991 3.657 9.128 8.438 9.88v-6.99H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.775-1.63 1.57v1.885h2.773l-.443 2.89h-2.33v6.99C18.343 21.198 22 17.061 22 12.07z" />
              </svg>
              <span className="text-sm">Facebook</span>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.411 2.865 8.155 6.839 9.485-.095-.807-.18-2.047.038-2.93.198-.85 1.275-5.417 1.275-5.417s-.325-.65-.325-1.611c0-1.508.875-2.635 1.963-2.635.926 0 1.373.695 1.373 1.529 0 .931-.593 2.324-.899 3.616-.256 1.082.542 1.964 1.606 1.964 1.927 0 3.41-2.033 3.41-4.966 0-2.596-1.867-4.412-4.535-4.412-3.09 0-4.903 2.318-4.903 4.712 0 .933.359 1.933.808 2.476a.325.325 0 01.075.31c-.082.34-.266 1.082-.303 1.233-.047.195-.153.237-.353.143-1.316-.613-2.14-2.536-2.14-4.083 0-3.325 2.416-6.377 6.966-6.377 3.654 0 6.493 2.603 6.493 6.082 0 3.626-2.286 6.545-5.459 6.545-1.066 0-2.067-.553-2.409-1.205l-.655 2.497c-.237.914-.878 2.059-1.308 2.756.986.305 2.029.47 3.108.47 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              <span className="text-sm">Pinterest</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 5 3.87 6.1 2.49 6.1H2.47C1.09 6.1 0 5 0 3.5 0 2 1.11.9 2.49.9 3.87.9 4.98 2 4.98 3.5zM.23 8.09h4.52V24H.23V8.09zM7.98 8.09h4.34v2.16h.06c.61-1.16 2.09-2.38 4.3-2.38 4.6 0 5.45 3.03 5.45 6.97V24h-4.52v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24H7.98V8.09z" />
              </svg>
              <span className="text-sm text-center">Linkedin</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Main Content Section */}
        <div className="py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Left Section - Let's Work Together */}
            <div className="lg:col-span-3 text-center lg:text-left relative">
              {/* Content */}
              <div className="lg:pr-8">
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
                  src="/images/ArrowUpRight.png"
                  alt="ArrowUpRight.png"
                />
              </a>
              </div>

              {/* Vertical Divider - Desktop only */}
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-800"></div>
            </div>

            {/* Center Section - Link Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-6 lg:px-8">
                {/* Quick Links */}
                <div>
                  <h3 className="text-[var(--color-gradient)] font-semibold mb-4 text-base">
                    Quick Links
                  </h3>
                  <ul className="space-y-2.5">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-[var(--color-gradient)] transition-colors duration-300 text-sm block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Services */}
                <div>
                  <h3 className="text-[var(--color-gradient)] font-semibold mb-4 text-base">
                    Our Services
                  </h3>
                  <ul className="space-y-2.5">
                    {services.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-[var(--color-gradient)] transition-colors duration-300 text-sm block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Signages */}
                <div className="col-span-2 md:col-span-1">
                  <h3 className="text-[var(--color-gradient)] font-semibold mb-4 text-base">
                    All Signages
                  </h3>
                  <ul className="space-y-2.5">
                    {signages.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-[var(--color-gradient)] transition-colors duration-300 text-sm block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Details */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-[var(--color-gradient)] font-semibold mb-4 text-base">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    2223 OGDEN AVE #B LISLE,IL 60515
                  </p>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a 
                    href="tel:630-454-7446" 
                    className="text-sm text-gray-300 hover:text-[var(--color-gradient)] transition-colors"
                  >
                    630-454-SIGN (7446)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section - Copyright */}
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-3"></div>
            <div className="lg:col-span-7 text-center lg:text-left lg:px-8">
              <p className="text-sm text-gray-400">
                ©2026{" "}
                <span className="text-[var(--color-gradient)] font-semibold">N.E SIGNS</span>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}