import { useState, useEffect, useRef } from "react";

export default function HightqytPrinting() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  /* ===== SCROLL OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // reset when out of view
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-l from-[var(--color-background)] via-black to-black py-10 md:py-20 lg:py-30 overflow-hidden"
    >
      {/* Top Right Lines circle */}
      <div className="absolute md:top-8 top-4 right-12">
        <div className="relative">
          <img src="/images/Line_Circle.png" alt="" />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 relative z-10 top-5 overflow-hidden ">
        <div className="flex text-start containers">
          <div className={`opacity-0 ${animate ? "text-depth-in" : ""}`}>
            <h1
              className="font-bold flex gap-5 "
              style={{ textShadow: "0 2px 4px #bbbcbd" }}
            >
              <p className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
                HIGH-QUALITY 
                <span className=" text-[var(--color-primary)]"> PRINTING</span>
              </p>
            </h1>
          </div>
        </div>

        <div className={`opacity-0 ${animate ? "text-depth-in-twice" : ""}`}>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black tracking-wider containers md:text-end text-start"
            style={{
              WebkitTextStroke: "2px var(--color-muted)",
              color: "transparent",
              letterSpacing: "0.1em",
            }}
          >
            PRINT SOLUTION
          </h2>
        </div>
      </div>
    </section>
  );
}
