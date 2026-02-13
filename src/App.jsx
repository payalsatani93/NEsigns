import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/homePages/Home";
import Blog from "./pages/blogPages/Blog";
import Services from "./pages/servicesPages/Services";
import OurWork from "./pages/ourworkPages/OurWork";
import Signages from "./pages/servicesPages/Signages";
import Footer from "./components/layout/Footer";
import SignageCategories from "./components/sections/signs/SignageCategories";
import BuildingSignsCatagory from "./components/sections/signs/BuildingSignsCatagory";
import FreestandingSignsCategory from "./components/sections/signs/FreestandingSignsCategory";
import ScrollToTop from "./components/ScrollToTop";
import TemporarySigns from "./components/sections/signs/TemporarySigns";
import InteriorSignscatagory from "./components/sections/signs/InteriorSignscatagory";
import WebDesigning from "./pages/webdesigningPages/WebDesigning";
import SEO from "./pages/seoPages/SEO";
import Printing from "./pages/printingPages/Printing";
import ContactUs from "./pages/contactusPages/ContactUs";
import Apparel from "./pages/apparelPages/Apparel";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 0.5,
      easing: () => 1,
      smooth: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/signage" element={<Signages />} />
            <Route path="/services/web-design" element={<WebDesigning />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/printing" element={<Printing />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/our_work" element={<OurWork />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/categories/:slug" element={<SignageCategories />} />
            {/* BUILDIND-SIGNAGE PAGE AND ITS CATAGORIES */}
            <Route
              path="/categories/:slug/building-signs"
              element={<BuildingSignsCatagory />}
            />
            <Route
              path="/categories/:slug/temporary-signs"
              element={<TemporarySigns />}
            />
            <Route
              path="/categories/:slug/interior-sign"
              element={<InteriorSignscatagory />}
            />
            {/* SINGLE FREESTANDING PAGE */}
            <Route
              path="/categories/:slug/freestanding-signs"
              element={<FreestandingSignsCategory />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
