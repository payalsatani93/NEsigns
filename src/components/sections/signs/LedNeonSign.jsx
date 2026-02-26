import { Check } from "lucide-react";
import { useState } from "react";

export default function LedNeonSign() {
  const [input, setInput] = useState("");
  const [displayText, setDisplayText] = useState("Create");

  const handleSubmit = () => {
    if (input.trim()) {
      setDisplayText(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

 return (
  <div
    className="relative h-[798px] flex flex-col overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/ledneonsign/Hero_Img.png')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Center Content */}
    <div className="relative z-10 flex flex-col flex-1 items-center justify-center px-4 text-center">

      {/* Neon Text */}
      <span
        key={displayText}
        className="text-white break-words"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontWeight: 400,
          letterSpacing: "0.02em",
        }}
      >
        {displayText}
      </span>

    </div>

    {/* Bottom Input */}
    <div className="relative z-10 pb-10 flex items-center justify-center gap-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Your text"
        className="rounded-full px-6 py-3 text-gray-600 placeholder-gray-400 outline-none
        text-base bg-white/90 backdrop-blur-md shadow-lg w-[220px]"
      />

      <button
        onClick={handleSubmit}
        className="w-12 h-12 rounded-full bg-[#F4258C] flex items-center justify-center hover:scale-105 transition"
      >
        <Check className="w-5 h-5 text-white" />
      </button>
    </div>
  </div>
);
}