import { useState, useRef, useCallback } from "react";

const IMAGES = [
  "/images/Hero/1.png",
  "/images/Hero/2.png",
  "/images/Hero/Img-2.png",
  "/images/Hero/3.png",
  "/images/Hero/4.png",
  "/images/Hero/5.png",
  "/images/Hero/Img-4.png",
  "/images/Hero/6.png",
  "/images/Hero/7.png",
  "/images/Hero/Img-5.png",
  "/images/Hero/8.png",
  "/images/Hero/9.png",
  "/images/Hero/10.png",
  "/images/Hero/Img-1.png",
  "/images/Hero/Img_7.png",
  "/images/Hero/Img-3.png",
  "/images/Hero/Img_6.png",
];

let globalIdx = 0;
const DISTANCE_THRESHOLD = 80;
const SPAWN_COOLDOWN = 70;
const FADE_AFTER = 300;
const REMOVE_AFTER = 1600;

export default function Hero() {
  const heroRef = useRef(null);
  const lastPos = useRef({ x: -999, y: -999 });
  const lastSpawn = useRef(0);
  const [cards, setCards] = useState([]);
  const cursorRef = useRef(null);

  const spawnCard = useCallback((x, y) => {
    const id = `${Date.now()}-${Math.random()}`;
    const src = IMAGES[globalIdx % IMAGES.length];
    globalIdx++;

    // ✅ Responsive card size
    const base = window.innerWidth < 640 ? 90 : window.innerWidth < 1024 ? 120 : 150;
    const w = base + Math.random() * base * 0.5;
    const h = w * (1.1 + Math.random() * 0.4);
    const rotate = (Math.random() - 0.5) * 20;

    setCards((prev) => [
      ...prev.slice(-14),
      { id, src, x, y, w, h, rotate, alive: true },
    ]);

    setTimeout(() => {
      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, alive: false } : c)),
      );
    }, FADE_AFTER);

    setTimeout(() => {
      setCards((prev) => prev.filter((c) => c.id !== id));
    }, REMOVE_AFTER);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // cursor only for desktop
      if (window.innerWidth > 768 && cursorRef.current) {
        cursorRef.current.style.left = x + "px";
        cursorRef.current.style.top = y + "px";
        cursorRef.current.style.opacity = "1";
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const now = Date.now();

      if (
        dist >= DISTANCE_THRESHOLD &&
        now - lastSpawn.current >= SPAWN_COOLDOWN
      ) {
        lastPos.current = { x, y };
        lastSpawn.current = now;
        spawnCard(x, y);
      }
    },
    [spawnCard],
  );

  const onMouseLeave = useCallback(() => {
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    setCards((prev) => prev.map((c) => ({ ...c, alive: false })));
    setTimeout(() => setCards([]), 700);
  }, []);

  return (
    <>
      <style>{`
        .jg-wrap {
          width: 100%;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: none;
        }

        @media (max-width: 768px) {
          .jg-wrap {
            cursor: auto; /* ✅ fix for mobile */
          }
        }

        .jg-cursor {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 999;
          mix-blend-mode: difference;
          opacity: 0;
          transition: opacity 0.15s ease;
        }

        .jg-card {
          position: absolute;
          border-radius: 5px;
          object-fit: cover;
          pointer-events: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.75), 0 4px 20px rgba(0,0,0,0.5);
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.88) rotate(var(--r));
          transition:
            opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
          max-width: 90vw; /* ✅ prevent overflow */
        }

        .jg-card.alive {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(var(--r));
        }

        .jg-card.dead {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.93) rotate(var(--r)) translateY(10px);
          transition:
            opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        
        }
      `}</style>

      <div
        ref={heroRef}
        className="jg-wrap relative"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Right Golden Patch */}
        <div className="absolute top-0 right-0 w-auto h-auto blur-900 opacity-80">
          <img src="/images/yellow_patch.png" alt="" className="w-full h-auto" />
        </div>

        {/* Custom cursor */}
        <div ref={cursorRef} className="jg-cursor hidden md:block" />

        {/* Cards */}
        {cards.map((card) => (
          <img
            key={card.id}
            src={card.src}
            alt=""
            className={`jg-card ${card.alive ? "alive" : "dead"}`}
            style={{
              left: card.x,
              top: card.y,
              width: card.w,
              height: card.h,
              "--r": `${card.rotate}deg`,
              zIndex: (Math.round(card.x + card.y) % 30) + 5,
            }}
          />
        ))}

        {/* Center text */}
        <div className="text-center">
          <h1 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[67px] font-extrabold leading-tight">
            <span className="text-[var(--color-gradient)]">NE Signs</span>{" "}
            Printing & Marketing
          </h1>

          <p className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[67px] leading-tight">
            Lowest Price Guaranteed
          </p>
        </div>
      </div>
    </>
  );
}