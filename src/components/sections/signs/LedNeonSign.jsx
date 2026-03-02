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
      <div className="relative z-10 flex items-center justify-center w-[258px] h-[62px] mx-auto  rounded-xl mb-10
      gap-3 bg-transparent backdrop-blur-[10px] ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Your text"
          className="rounded-xl px-6 py-3 text-white placeholder-gray-400 border text-[18px] 
           border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-pink)] focus:border-transparent
          bg-transparent backdrop-blur-[10px] shadow-lg w-[192px] h-[50px]"
        />

        <button
          onClick={handleSubmit}
          className="w-[40px] h-[40px] rounded-full bg-[var(--color-pink)] flex items-center justify-center hover:scale-105 transition"
        >
          <Check className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
