import React from "react";
import { motion } from "framer-motion";

export default function InfiniteLogoSlider() {
  const logos = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
        </svg>
      ),
    },
    {
      name: "Vue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M12 3L4 19h16L12 3z" fill="#42B883" />
          <path d="M12 3L8 11h8L12 3z" fill="#35495E" />
        </svg>
      ),
    },
    {
      name: "Angular",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M12 2L3 7l1.5 13L12 22l7.5-2L21 7l-9-5z" fill="#DD0031" />
          <path d="M12 2v20l7.5-2L21 7l-9-5z" fill="#C3002F" />
          <path d="M12 5.5L8.5 14h1.8l.7-2h4l.7 2h1.8L12 5.5z" fill="white" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" />
          <path d="M15.5 15c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2.5h1.5c0 .5.5 1 1 1s1-.5 1-1v-4h1.5v4z" fill="#000" />
          <path d="M8.5 15c0 1.5 1 2.5 2.5 2.5.8 0 1.5-.3 2-.8l-1-1c-.3.3-.6.4-1 .4-.5 0-1-.5-1-1h-1.5z" fill="#000" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178C6" />
          <path d="M13 8h-2v8h2V8zM18 12h-3v4h-2v-4h-1v-2h6v2z" fill="white" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#E34F26" />
          <path d="M12 5v14l5-1.5L18 5h-6z" fill="#EF652A" />
          <path d="M8 9h8v2h-6v2h6v2h-6v2h8l-.5 2-5.5 1.5v-3h2v1l2-.5.5-1.5H10v-2h6v-2H8V9z" fill="white" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#1572B6" />
          <path d="M12 5v14l5-1.5L18 5h-6z" fill="#33A9DC" />
          <path d="M16 9H8v2h6l-.5 2H8v2h5l-.5 2-2.5.5v2l4.5-1.5L16 9z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" fill="#339933" />
          <path d="M12 3v18l8-4.5v-9L12 3z" fill="#7EC728" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M12 3C8.5 3 6 4.5 6 7v3h6v1H6c-1.5 0-3 1-3 3s1.5 3 3 3h1v-2c0-1.5 1.5-3 3-3h6c1.5 0 3-1.5 3-3V7c0-2.5-2.5-4-6-4z" fill="#3776AB" />
          <path d="M12 21c3.5 0 6-1.5 6-4v-3h-6v-1h6c1.5 0 3-1 3-3s-1.5-3-3-3h-1v2c0 1.5-1.5 3-3 3H8c-1.5 0-3 1.5-3 3v3c0 2.5 2.5 4 6 4z" fill="#FFD43B" />
          <circle cx="9" cy="6" r="1" fill="white" />
          <circle cx="15" cy="18" r="1" fill="white" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <circle cx="12" cy="12" r="9" fill="black" stroke="white" strokeWidth="1.5" />
          <path d="M9 9h2v6H9V9zm4 0h2l-2 3 2 3h-2l-2-3 2-3z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" fill="#06B6D4" />
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M21.5 11.1l-9.6-9.6c-.6-.6-1.7-.6-2.3 0L7.1 4l2.5 2.5c.7-.2 1.4-.1 2 .5.6.6.7 1.4.5 2l2.4 2.4c.7-.2 1.4-.1 2 .5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.5-.4-2.2l-2.2-2.2v5.9c.2.1.4.2.5.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.2-.2.4-.3.7-.4V9.4c-.2-.1-.5-.2-.7-.4-.6-.6-.7-1.5-.4-2.2L6.8 4.3 2.5 8.6c-.6.6-.6 1.7 0 2.3l9.6 9.6c.6.6 1.7.6 2.3 0l9.6-9.6c.5-.6.5-1.7-.5-2.8z" fill="#F05032" />
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <rect x="2" y="10" width="3" height="3" fill="#2496ED" />
          <rect x="6" y="10" width="3" height="3" fill="#2496ED" />
          <rect x="10" y="10" width="3" height="3" fill="#2496ED" />
          <rect x="14" y="10" width="3" height="3" fill="#2496ED" />
          <rect x="6" y="7" width="3" height="2.5" fill="#2496ED" />
          <rect x="10" y="7" width="3" height="2.5" fill="#2496ED" />
          <rect x="10" y="4" width="3" height="2.5" fill="#2496ED" />
          <path d="M18 11c-.5-.5-1.5-.5-2 0-1 1-1 2-1 3 0 1.5 1 3 3 3s3-1.5 3-3c0-2-1.5-3.5-3-3z" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M12 3l-1 8.5c0 2.5 1 4.5 1 4.5s1-2 1-4.5L12 3z" fill="#47A248" />
          <path d="M12 16c-.5 0-1 .5-1 1v3c0 .5.5 1 1 1s1-.5 1-1v-3c0-.5-.5-1-1-1z" fill="#47A248" />
          <ellipse cx="12" cy="11" rx="6" ry="8" fill="#47A248" opacity="0.7" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <path d="M5 16l3-10 2 3.5L7 16z" fill="#FFA000" />
          <path d="M10 9.5L12 3l5 8-5 8-7-4 5-5.5z" fill="#F57C00" />
          <path d="M17 11l-5 8-7-4 5-5.5L12 3l5 8z" fill="#FFCA28" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container py-12 overflow-hidden">
      {/* First Row - Moving Right to Left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 border border-neutral-800"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row - Moving Left to Right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [-1400, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 border border-neutral-800"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Third Row - Moving Right to Left (Slower) */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 border border-neutral-800"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}