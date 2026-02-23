import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Customer Retention & Reactivation",
    description:
      "NE Signs supports your customer retention efforts with customized loyalty programs, promotional campaigns, branded merchandise, direct mail solutions, and engaging email marketing strategies.",
    color: "#d94f4f",
    image: "/images/directmailing/Card_1.png",
  },
  {
    id: 2,
    title: "Direct Mail Advertising Solutions",
    description:
      "Reach your target audience with precision-crafted direct mail campaigns. From design to delivery, we handle every step to maximize your response rates and ROI.",
    color: "#c99a0e",
    image: "/images/directmailing/Card_2.png",
  },
  {
    id: 3,
    title: "EDDM Service (Every Door Direct Mail)",
    description:
      "Saturate neighborhoods with Every Door Direct Mail. Cost-effective, wide-reach campaigns that put your message in every mailbox on targeted postal routes.",
    color: "#2563eb",
    image: "/images/directmailing/Card_3.png",
  },
  {
    id: 4,
    title: "Mailing, Fulfillment & Distribution Services",
    description:
      "End-to-end fulfillment solutions from printing and kitting to warehousing and nationwide distribution. Streamline your supply chain with our expert team.",
    color: "#16a34a",
    image: "/images/directmailing/Card_4.png",
  },
  {
    id: 5,
    title: "Variable Data Printing & Mapping Solutions",
    description:
      "Personalize every piece at scale with variable data printing. Combined with smart mapping tools, we help you target the right households in the right ZIP codes.",
    color: "#b5179e",
    image: "/images/directmailing/Card_5.png",
  },
];

export default function DirectMailingSection() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => {
          const isHovered = hoveredId === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative w-[320px] h-[472px] bg-white rounded-3xl p-3 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
            >
              {/* IMAGE */}
              <div
                className={`w-full overflow-hidden rounded-2xl transition-all duration-500`}
                style={{
                  height: isHovered ? "96px" : "344px",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div
                className="absolute left-3 right-3 bottom-3 rounded-2xl p-6 flex flex-col transition-all duration-500"
                style={{
                  backgroundColor: card.color,
                  height: isHovered ? "344px" : "96px",
                }}
              >
                {/* TITLE */}
                <h3 className="text-white font-bold text-lg leading-snug">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-white/90 text-sm mt-4 transition-all duration-400 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {card.description}
                </p>

                {/* BUTTON */}
                <button
                  className={`mt-auto bg-black text-white text-sm font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-400 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  Get Service Now →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}