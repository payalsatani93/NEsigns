import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/homePages/Home";
import About from "./pages/aboutPages/About";
import Blog from "./pages/blogPages/Blog";

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
            <Route path="/know your sign" element={<About />} />
            <Route path="/blogs" element={<Blog />} />

          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
