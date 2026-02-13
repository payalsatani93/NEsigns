import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";

const IMAGES = [
  "/images/OurWork/image_01.png",
  "/images/OurWork/image_02.png",
  "/images/OurWork/image_03.png",
  "/images/Hero/Img-1.png",
  "/images/Hero/Img-2.png",
  "/images/Hero/Img-3.png",
];

const FILLED_IMAGES = Array.from({ length: 40 }).map(
  (_, i) => IMAGES[i % IMAGES.length],
);

// Your requested timing function
const SMART_TRANSITION = {
  duration: 0.9,
  ease: [0.41, 0, 0, 1],
};

// Perspective animation for the "going inside" effect
const VIEW_VARIANTS = {
  initial: {
    opacity: 1,
    scale: 0.8, // Start smaller (inside the screen)
    z: -500,
  },
  animate: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: SMART_TRANSITION,
  },
  exit: {
    opacity: 1,
    scale: 0.8, // Recede back into the screen
    z: -500,
    transition: SMART_TRANSITION,
  },
};

export default function CrossScrollGallery() {
  const [view, setView] = useState("columns");

  useEffect(() => {
    document.body.style.overflow = "visiable";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="relative w-full lg:h-400 h-screen overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background Patch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute md:w-[400px] md:h-[600px] w-100 h-100 
                     top-[-20px] right-[0]
                     bg-[var(--color-patch)]
                     opacity-100
                     rounded-full
                     blur-[250px]
                     overflow-visible
                     pointer-events-none"
      />
      {/* Background Patch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute md:w-[400px] md:h-[400px] w-100 h-100 
                             bottom-[0] left-[0]
                             bg-[var(--color-patch)]
                             opacity-100
                             rounded-full
                             blur-[250px]
                             overflow-visible
                             pointer-events-none"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          variants={VIEW_VARIANTS}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full"
        >
          {view === "columns" ? (
            <ColumnsView onImageClick={() => setView("row")} />
          ) : (
            <RowView onImageClick={() => setView("columns")} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* -------------------- COLUMNS VIEW -------------------- */

function ColumnsView({ onImageClick }) {
  const COLUMN_COUNT = 5;
  const scrollY = useMotionValue(0);
  const smoothY = useTransform(scrollY, (v) => v);

  const handleWheel = (e) => {
    const newY = scrollY.get() - e.deltaY * 0.8;
    // Limit scroll range to prevent empty space
    const clampedY = Math.max(Math.min(newY, 500), -4000);
    scrollY.set(clampedY);
  };

  const colOffsets = [0, 100, 200, 300, 400];

  return (
    <div
      onWheel={handleWheel}
      className="h-full w-full flex items-center justify-center pt-20"
    >
      <div className="flex gap-12 lg:gap-20 px-10 items-start">
        {Array.from({ length: COLUMN_COUNT }).map((_, colIndex) => (
          <motion.div
            key={colIndex}
            style={{
              y: smoothY,
              marginTop: colOffsets[colIndex],
            }}
            className="flex flex-col gap-10 lg:gap-20"
          >
            {FILLED_IMAGES.filter((_, i) => i % COLUMN_COUNT === colIndex).map(
              (src, i) => (
                <motion.div
                  key={`${colIndex}-${i}`}
                  onClick={onImageClick}
                  whileHover={{ scale: 1.05 }}
                  style={{ rotate: 15 }}
                  className="xl:w-[240px] lg:w-[200px] md:w-[150px] w-[100px] aspect-[4/5] rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- ROW VIEW -------------------- */

function RowView({ onImageClick }) {
  const CARD_WIDTH = 320;
  const GAP = 40;
  const UNIT = CARD_WIDTH + GAP;
  const dragThreshold = 10;
  const dragStart = useRef(0);
  const hasDragged = useRef(false);

  const x = useMotionValue(0);
  const allImages = Array(10).fill(IMAGES).flat();

  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden bg-black">
      <motion.div
        drag="x"
        dragConstraints={{
          left: -allImages.length * UNIT + window.innerWidth,
          right: 0,
        }}
        dragElastic={0.1}
        dragMomentum={true}
        style={{ x }}
        onDragStart={(_, info) => {
          dragStart.current = info.point.x;
          hasDragged.current = false;
        }}
        onDrag={() => {
          hasDragged.current = true;
        }}
        onDragEnd={(_, info) => {
          const distance = Math.abs(info.point.x - dragStart.current);
          // Reset hasDragged after a short delay
          setTimeout(() => {
            hasDragged.current = false;
          }, 100);

          if (distance < dragThreshold) {
            onImageClick();
          }
        }}
        className="flex gap-10 px-10 cursor-grab active:cursor-grabbing"
      >
        {allImages.map((src, i) => {
          const position = i * UNIT;
          const scale = useTransform(
            x,
            [-(position + 250), -position, -(position - 250)],
            [0.85, 1.15, 0.85],
          );

          return (
            <motion.div
              key={i}
              style={{
                scale,
                width: CARD_WIDTH,
                aspectRatio: "4/5",
              }}
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onPointerDown={() => {
                hasDragged.current = false;
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (!hasDragged.current) {
                  onImageClick();
                }
              }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
