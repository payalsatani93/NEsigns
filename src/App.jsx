import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/homePages/Home";
import Blog from "./pages/blogPages/Blog";
import KnowYourSign from "./pages/knowyoursignPages/KnowYourSign";
import Services from "./pages/servicesPages/Services";
import OurWork from "./pages/ourworkPages/OurWork";
import Signages from "./pages/servicesPages/Signages";
import Footer from "./components/layout/Footer";
import SignageCategories from "./components/sections/Signage/SignageCategories";
import BuildingSignsCatagory from "./components/sections/Signage/BuildingSignsCatagory";


gsap.registerPlugin(ScrollTrigger);
export default function App() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ ONLY SAFE LENIS SETUP (NO LAG)
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 0.5,
      easing: () => 1,
      smooth: true,
      smoothScroll: true,
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
      {loading && <Loader />}

      {!loading && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/know_your_sign" element={<KnowYourSign />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/signage" element={<Signages />} />
            <Route path="/categories/:slug" element={<SignageCategories />} />
            <Route
              path="/categories/:slug/building-signs"
              element={<BuildingSignsCatagory />}
            />
            <Route path="/our_work" element={<OurWork />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
