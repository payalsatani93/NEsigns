import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import ChatWidget from "./components/ChatWidget"; // ADD THIS
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
import DirectMailing from "./pages/directmailingPages/DirectMailing";
import KnowYourSign from "./pages/knowyoursignPages/KnowYourSign";

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
      duration: 3.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
            <Route path="/services/direct-mailing" element={<DirectMailing />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/our_work" element={<OurWork />} />
            <Route path="/know_your_sign" element={<KnowYourSign />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/categories/:slug" element={<SignageCategories />} />
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
            <Route
              path="/categories/:slug/freestanding-signs"
              element={<FreestandingSignsCategory />}
            />
          </Routes>
          <ChatWidget />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
