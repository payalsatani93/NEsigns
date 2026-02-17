import { useState, useEffect, useRef } from 'react';

export default function BrandStandOut() {
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
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-30 md:overflow-visible overflow-hidden "
    >
       {/* Right Golden Patch */}
      <div
        className="absolute md:w-[500px] md:h-[700px] w-100 h-100
             top-[0] right-[0]
             bg-[var(--color-patch)]
             opacity-100
             rounded-full
             blur-[300px]
             pointer-events-none"
      />
      {/* Left Quote Mark */}
      <div className="absolute top-3 left-12">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <path d="M0 80 L0 0 L50 0 L20 80 Z" fill="#8B7355" />
          <path d="M60 80 L60 0 L110 0 L80 80 Z" fill="#8B7355" opacity="0.9" />
        </svg>
      </div>

      {/* Top Right Lines circle */}
      <div className="absolute top-8 right-12">
        <div className="relative">
          <img src="/images/Line_Circle.png" alt="" />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 relative z-10 top-5 text-center overflow-hidden">
        <div className="flex justify-center">
          <div className={`opacity-0 ${animate ? 'text-depth-in' : ''}`}>
            <h1
              className="font-bold"
              style={{ textShadow: '0 2px 4px #bbbcbd' }}
            >
              <span className="text-white text-5xl md:text-7xl lg:text-8xl">
                PRINT THAT MAKES{' '}
              </span>
              <br className='2xl:hidden block'/>
              <span className="text-5xl md:text-7xl lg:text-8xl text-[var(--color-primary)]">
                YOUR BRAND
              </span>
            </h1>
          </div>
        </div>

        <div className={`opacity-0 ${animate ? 'text-depth-in-twice' : ''}`}>
          <h2
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider float-end"
            style={{
              WebkitTextStroke: '2px rgba(139, 115, 85, 0.6)',
              color: 'transparent',
              letterSpacing: '0.1em',
            }}
          >
            STAND OUT
          </h2>
        </div>
      </div>

      {/* Bottom Right Quote Mark */}
      <div className="absolute bottom-3 right-12">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          transform="rotate(180)"
        >
          <path d="M0 80 L0 0 L50 0 L20 80 Z" fill="#8B7355" opacity="0.8" />
          <path d="M60 80 L60 0 L110 0 L80 80 Z" fill="#8B7355" opacity="0.8" />
        </svg>
      </div>
    </section>
  );
}
