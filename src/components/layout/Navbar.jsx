import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  LayoutGrid,
  Image,
  Monitor,
  Zap,
  Layers,
  Printer,
  Mail,
  Globe,
  Search,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // to locate current page
  const location = useLocation();

  const isActive = (path, item) => {
    // Exact match for Home
    if (path === "/") {
      return location.pathname === "/";
    }

    // If item has submenu, check all submenu paths
    if (item?.submenu) {
      return (
        location.pathname.startsWith(path) ||
        item.submenu.some(
          (sub) =>
            location.pathname.startsWith(sub.href) ||
            sub.submenu?.some((child) =>
              location.pathname.startsWith(child.href),
            ),
        )
      );
    }

    // Normal match
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services +",
      href: "/services",
      submenu: [
        {
          name: "Signage",
          href: "/services/signage",
          icon: LayoutGrid,
          submenu: [
            {
              name: "Exterior Sign",
              href: "/categories/exterior-sign",
              icon: Image,
            },
            {
              name: "Interior Sign",
              href: "/categories/interior-sign",
              icon: Layers,
            },
            {
              name: "LED Digital Board",
              href: "/categories/led-digital-board",
              icon: Monitor,
            },
            {
              name: "LED Neon Sign",
              href: "/categories/led-neon-sign",
              icon: Zap,
            },
            {
              name: "Window & Wall Graphics",
              href: "/categories/window-graphics",
              icon: Image,
            },
          ],
        },
        { name: "Printing", href: "/services/printing", icon: Printer },
        {
          name: "Direct Mailing",
          href: "/services/direct-mailing",
          icon: Mail,
        },
        { name: "Web Designing", href: "/services/web-design", icon: Globe },
        { name: "SEO", href: "/services/seo", icon: Search },
      ],
    },
    { name: "Apparel", href: "/apparel" },
    { name: "Promotional products", href: "/promotional_products" },
    { name: "Our work", href: "/our_work" },
    { name: "Contact us", href: "/contactUs" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className="sticky top-0 left-0 right-0 z-50 
  bg-[#00000033] backdrop-blur-xs 
  border-b border-white/20 h-25"
      >
        <div className="containers">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/Hero/Logo.png"
                alt="Logo"
                className="w-30 xl:w-40 item-center"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group py-6">
                  <Link
                    to={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300
    ${
      isActive(item.href, item)
        ? "text-[var(--color-gradient)]"
        : "text-white hover:text-[var(--color-gradient)]"
    }
  `}
                  >
                    {item.name}
                  </Link>

                  {/* First level submenu */}
                  {item.submenu && (
                    <div
                      className="absolute left-0 top-full mt-2 w-64
  bg-black/80 backdrop-blur-xxl
  border border-white/30
  rounded-2xl
  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  opacity-0 invisible
  group-hover:opacity-100 group-hover:visible
  transition-all duration-300"
                    >
                      {item.submenu.map((sub, index) => (
                        <div key={sub.name} className="relative group/sub">
                          <Link
                            to={sub.href}
                            className={`relative flex justify-between items-center px-4 py-4 mx-2 my-1
  rounded-xl text-sm
  transition-all duration-300
  ${
    isActive(sub.href)
      ? "bg-[var(--color-gradient)] text-black"
      : "text-white/90 hover:bg-white/30 hover:text-white"
  }
`}
                          >
                            <span className="flex items-center gap-3">
                              {sub.icon && (
                                <sub.icon size={16} className="opacity-80" />
                              )}
                              {sub.name}
                            </span>

                            {/* Chevron only if second-level submenu exists */}
                            {sub.submenu && (
                              <ChevronRight
                                size={16}
                                className="ml-2 text-gray-500 group-hover/sub:text-black transition-transform duration-200 group-hover/sub:translate-x-0.5"
                              />
                            )}
                          </Link>

                          {/* Second level submenu */}
                          {sub.submenu && (
                            <div
                              className="absolute left-full top-3 ml-2 w-64
  bg-black/80 backdrop-blur-xxl
  border border-white/30
  rounded-2xl
  opacity-0 invisible
  group-hover/sub:opacity-100 group-hover/sub:visible
  transition-all duration-300"
                            >
                              {sub.submenu.map((child, childIndex) => (
                                <Link
                                  to={child.href}
                                  className={`block px-4 py-4 mx-2 my-1
  rounded-lg text-xs
  transition-all duration-300
  ${
    isActive(child.href)
      ? "bg-[var(--color-gradient)] text-black"
      : "text-white/90 hover:bg-white/30 hover:text-white"
  }
`}
                                >
                                  <span className="flex items-center gap-3">
                                    {child.icon && (
                                      <child.icon
                                        size={14}
                                        className="opacity-70"
                                      />
                                    )}
                                    {child.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Get In Touch Button */}
            <div className="hidden xl:block">
              <Link
                to="/contactUs"
                className="flex group items-center gap-3 px-6 py-2 border border-[var(--color-gradient)] rounded-full text-white 
    hover:bg-[var(--color-gradient)] transition-all duration-300"
              >
                <span className="text-sm">Get In Touch</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white z-50 relative"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 xl:hidden pt-35 px-6">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-xl font-medium border-b border-gray-800 pb-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
