import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function LedDegitalSlider() {
  const [activeTab, setActiveTab] = useState("outdoor");

  const categories = {
    outdoor: [
      { title: "Car wash", img: "/images/digitalboard/s1.png" },
      { title: "Schools", img: "/images/digitalboard/s2.png" },
      { title: "Retail Stores", img: "/images/digitalboard/s9.png" },
      { title: "Shopping centres", img: "/images/digitalboard/s4.png" },
      { title: "Car dealerships", img: "/images/digitalboard/s5.png" },
    ],
    indoor: [
      { title: "Retail Stores", img: "/images/digitalboard/s9.png" },
      { title: "Event venues", img: "/images/digitalboard/s7.png" },
      { title: "Hotels & hospitality", img: "/images/digitalboard/s8.png" },
      { title: "Corporate Offices", img: "/images/digitalboard/s6.png" },
      { title: "Exhibitions", img: "/images/digitalboard/s10.png" },
      { title: "Churches", img: "/images/digitalboard/s11.png" },
      { title: "Healthcare facilities", img: "/images/digitalboard/s3.png" },
    ],
  };

  // Triple the items to create a seamless infinite loop during drag
  const displayItems = [
    ...categories[activeTab],
    ...categories[activeTab],
    ...categories[activeTab],
  ];

  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const controls = useRef(null);
  const startAnimation = () => {
    controls.current?.stop();

    controls.current = animate(x, ["0%", "-33.33%"], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
    });
  };

  // Auto-play logic
  useEffect(() => {
    startAnimation();
    return () => controls.current?.stop();
  }, [activeTab]);

  // Digital Signage cards
  const data = [
    {
      id: 1,
      title: "Churches",
      desc: "Our church LED signs and digital display boards help ministries communicate",
      color: "hover:bg-blue-500",
    },
    {
      id: 2,
      title: "Bars & Restaurants",
      desc: "Improve communication across campus with LED boards",
      color: "hover:bg-yellow-500",
      modal: {
        title: "Restaurant & Bar Digital LED Boards",
        desc: "Upgrade your marketing with restaurant digital signage and LED menu boards.",
        ideal: [
          "Daily specials",
          "Happy hour promotions",
          "Live music announcements",
          "Digital menu boards",
        ],
        benefits: [
          "Instant content updates",
          "Increased foot traffic",
          "Modern customer experience",
        ],
      },
    },
    {
      id: 3,
      title: "Events & Concert",
      desc: "Create unforgettable visual experiences",
      color: "hover:bg-purple-500",
    },
    {
      id: 4,
      title: "Outdoor Billboards",
      desc: "Maximum visibility & advertising revenue",
      color: "hover:bg-red-500",
    },
    {
      id: 5,
      title: "Outdoor LED Signs",
      desc: "Built for performance & durability",
      color: "hover:bg-orange-500",
    },
    {
      id: 6,
      title: "Schools & UNI",
      desc: "Attract more customers & increase daily sales",
      color: "hover:bg-indigo-500",
    },
    {
      id: 7,
      title: "Automotive",
      desc: "Drive traffic & increase sales",
      color: "hover:bg-green-500",
    },
    {
      id: 8,
      title: "Hospitality",
      desc: "Elevate guest experience",
      color: "hover:bg-pink-500",
    },
    {
      id: 9,
      title: "Healthcare",
      desc: "Clear communication when it matters most",
      color: "hover:bg-amber-500",
    },
    {
      id: 10,
      title: "Shopping Mall",
      desc: "Capture high-traffic attention",
      color: "hover:bg-fuchsia-500",
    },
    {
      id: 11,
      title: "Retail Store",
      desc: "Convert foot traffic into sales",
      color: "hover:bg-lime-500",
    },
    {
      id: 12,
      title: "Car Wash",
      desc: "Display pricing and services clearly",
      color: "hover:bg-cyan-500",
    },
  ];
  const [active, setActive] = useState(null);
  return (
    <section className="containers overflow-hidden py-20 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-center gap-10 mb-12 text-white text-lg font-medium">
          <button
            onClick={() => setActiveTab("outdoor")}
            className={`relative pb-2 transition-all ${
              activeTab === "outdoor" ? "text-white" : "text-white/40"
            }`}
          >
            Outdoor Digital
            {activeTab === "outdoor" && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("indoor")}
            className={`relative pb-2 transition-all ${
              activeTab === "indoor" ? "text-white" : "text-white/40"
            }`}
          >
            Indoor Digital
            {activeTab === "indoor" && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
              />
            )}
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-visible">
          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            onDragEnd={() => {
              // Optional: Resume animation after drag
              const currentX = x.get();
              controls.current = animate(x, [currentX, "-100%"], {
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              });
            }}
            //  STOP on hover
            onMouseEnter={() => controls.current?.stop()}
            // ▶ RESUME on leave
            onMouseLeave={() => startAnimation()}
            className="flex gap-6 cursor-grab active:cursor-grabbing w-max"
          >
            {displayItems.map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden group *: w-[180px] h-[240px]
                  sm:w-[220px] sm:h-[300px]
                  md:w-[260px] md:h-[340px]
                  lg:w-[280px] lg:h-[380px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* ✅ BLACK OVERLAY */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Overlay shadow for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center p-6">
                  <p className="text-white font-bold text-center text-xl uppercase tracking-wider">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
