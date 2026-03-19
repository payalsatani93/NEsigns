import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
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
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState({});

  const location = useLocation();

  const isActive = (path, item) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    if (item?.submenu) {
      return (
        location.pathname.startsWith(path) ||
        item.submenu.some(
          (sub) =>
            location.pathname.startsWith(sub.href) ||
            sub.submenu?.some((child) =>
              location.pathname.startsWith(child.href)
            )
        )
      );
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = (name) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleMobileSubMenu = (name) => {
    setOpenMobileSubMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
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
            { name: "Exterior Sign", href: "/categories/exterior-sign", icon: Image },
            { name: "Interior Sign", href: "/categories/interior-sign", icon: Layers },
            { name: "LED Digital Board", href: "/categories/led-digital-board", icon: Monitor },
            { name: "LED Neon Sign", href: "/categories/led-neon-sign", icon: Zap },
            { name: "Window & Wall Graphics", href: "/categories/window-graphics", icon: Image },
          ],
        },
        { name: "Printing", href: "/services/printing", icon: Printer },
        { name: "Direct Mailing", href: "/services/direct-mailing", icon: Mail },
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
      {/* ── Desktop Navbar (xl+) ── */}
      <nav className="sticky hidden xl:block top-0 left-0 right-0 z-50 backdrop-blur-xs border-b border-white/20 h-25">
        <div className="containers">
          <div className="flex xl:justify-between justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 hidden xl:block">
              <img
                src="/images/Hero/Logo.png"
                alt="Logo"
                className="w-30 xl:w-40 item-center"
              />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group py-6">
                  <Link
                    to={item.href}
                    className={`relative xl:text-[18px] md:text-sm tracking-wide transition-colors duration-300
                      ${
                        isActive(item.href, item)
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]"
                          : "text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]"
                      }
                    `}
                  >
                    {item.name}
                  </Link>

                  {/* First-level dropdown */}
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
                      {item.submenu.map((sub) => (
                        <div key={sub.name} className="relative group/sub">
                          <Link
                            to={sub.href}
                            className={`relative flex justify-between items-center px-4 py-4 mx-2 my-1
                              rounded-xl text-sm
                              transition-all duration-300
                              ${
                                isActive(sub.href)
                                  ? "bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] "
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
                            {sub.submenu && (
                              <ChevronRight
                                size={16}
                                className="ml-2 text-gray-500 group-hover/sub:text-black transition-transform duration-200 group-hover/sub:translate-x-0.5"
                              />
                            )}
                          </Link>

                          {/* Second-level dropdown */}
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
                              {sub.submenu.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className={`block px-4 py-4 mx-2 my-1
                                    rounded-lg text-xs
                                    transition-all duration-300
                                    ${
                                      isActive(child.href)
                                        ? "bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black"
                                        : "text-white/90 hover:bg-white/30 hover:text-white"
                                    }
                                  `}
                                >
                                  <span className="flex items-center gap-3">
                                    {child.icon && (
                                      <child.icon size={14} className="opacity-70" />
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

            {/* Search + Guarantee Logo */}
            <div className="hidden xl:flex items-center gap-8">
              <button
                className="flex items-center px-4 gap-4 py-2 text-[13px] border border-white/50 rounded-full
                    hover:bg-[var(--color-gradient)] transition-all duration-300"
              >
                Search Here
                <Search size={18} className="text-white/60" />
              </button>
              <img
                src="/images/GuaranteeLogo.png"
                alt="Guarantee Logo"
                className="w-32 h-32 xl:w-[141px] xl:h-[101px] object-contain -mt-3"
              />
            </div>

            <div className="hidden">
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

      {/* ── Mobile / Tablet Navbar (below xl) ── */}
      <div className="sticky top-0 left-0 right-0 backdrop-blur-xl z-50 border-b border-white/20 h-25 xl:hidden">
        <div className="flex justify-between bg-black/90 items-center h-20 px-6 xl:hidden">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/Hero/Logo.png"
              alt="Logo"
              className="w-30 xl:w-40 item-center"
            />
          </div>

          {/* Hamburger */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white z-50 relative"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown Panel ── */}
        {isMenuOpen && (
          <div className="bg-black/90 backdrop-blur-xl overflow-y-auto max-h-screen pb-10">
            <div className="flex flex-col px-4 pt-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {/* Top-level item */}
                  {item.submenu ? (
                    /* Item WITH submenu → Link navigates, chevron toggles */
                    <div className="flex justify-between items-center border-b border-white/10">
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex-1 text-white text-xl font-medium py-3 px-2"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => toggleMobileMenu(item.name)}
                        className="p-3 text-white"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            openMobileMenus[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    /* Item WITHOUT submenu → direct link */
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-white text-xl font-medium py-3 px-2 border-b border-white/10"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* First-level submenu (accordion) */}
                  {item.submenu && openMobileMenus[item.name] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <div key={sub.name}>
                          {sub.submenu ? (
                            /* Sub-item WITH second-level → Link navigates, chevron toggles */
                            <div className="flex justify-between items-center rounded-xl hover:bg-white/10 transition-all duration-200">
                              <Link
                                to={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex-1 flex items-center gap-3 text-base py-2.5 px-3
                                  ${isActive(sub.href)
                                    ? "bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black font-semibold rounded-xl"
                                    : "text-white/85"
                                  }`}
                              >
                                {sub.icon && (
                                  <sub.icon size={16} className="opacity-75" />
                                )}
                                {sub.name}
                              </Link>
                              <button
                                onClick={() => toggleMobileSubMenu(sub.name)}
                                className="p-2.5 text-white/85"
                              >
                                <ChevronDown
                                  size={16}
                                  className={`transition-transform duration-300 ${
                                    openMobileSubMenus[sub.name] ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </div>
                          ) : (
                            /* Sub-item WITHOUT second-level → direct link */
                            <Link
                              to={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`flex items-center gap-3 text-base py-2.5 px-3 rounded-xl transition-all duration-200
                                ${
                                  isActive(sub.href)
                                    ? "bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black font-semibold"
                                    : "text-white/85 hover:bg-white/10"
                                }`}
                            >
                              {sub.icon && (
                                <sub.icon size={16} className="opacity-75" />
                              )}
                              {sub.name}
                            </Link>
                          )}

                          {/* Second-level submenu (accordion) */}
                          {sub.submenu && openMobileSubMenus[sub.name] && (
                            <div className="ml-6 mt-1 space-y-1">
                              {sub.submenu.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`flex items-center gap-3 text-sm py-2 px-3 rounded-lg transition-all duration-200
                                    ${
                                      isActive(child.href)
                                        ? "bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-black font-semibold"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  {child.icon && (
                                    <child.icon size={14} className="opacity-70" />
                                  )}
                                  {child.name}
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
          </div>
        )}
      </div>
    </>
  );
}