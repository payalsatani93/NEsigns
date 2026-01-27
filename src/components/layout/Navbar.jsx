import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services +", href: "#services" },
    { name: "Know your sign ", href: "/know your sign " },
    { name: "Apparel", href: "/apparel" },
    { name: "Promotional products", href: "/promotional products" },
    { name: "Our work", href: "/our work" },
    { name: "Contact us", href: "/contact us" },

  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 bg-gradient-to-r from-black via-black to-[#816025] 
      z-50">
        <div className="">
          <div className="containers flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex flex-col">
                <img src="/images/Hero/Logo.png" className=" w-30 xl:w-40" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center xl:space-x-8 lg:space-x-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm 
                  font-medium tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Button */}
            <div className="flex justify-center items-center">
              <button
                className="hidden xl:flex group items-center gap-3 px-6 py-3 
                border border-[var(--color-muted)] rounded-full text-[var(--color-gradient)] "
              >
                <span className="text-sm">Get In Touch</span>

                <span className="text-white">
                  <ArrowRight />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors relative z-50"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-black via-black to-[#816025] z-40 
        xl:hidden overflow-hidden">
          <div className="container mt-15 min-h-screen">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-yellow-400 transition-colors duration-300 text-base font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
