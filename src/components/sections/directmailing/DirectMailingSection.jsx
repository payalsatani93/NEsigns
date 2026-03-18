import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <>
      {/*  Direct Mailing Hero Section */}
    <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden
  bg-[url('/images/directmailing/Hero_img.png')]
  bg-center bg-cover bg-no-repeat px-4 sm:px-6 lg:px-10"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 text-center max-w-5xl mx-auto">
    
    {/* Heading */}
    <h1
      className="text-[22px] xs:text-[26px] sm:text-[34px] md:text-[48px] lg:text-[64px] xl:text-[72px]
      leading-tight font-bold text-white"
    >
      Results-Oriented Direct
      <br className="hidden sm:block" />
      Mailing Approaches
    </h1>

    {/* Paragraph */}
    <p
      className="mt-4 sm:mt-6 text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]
      text-gray-300 leading-relaxed px-2 sm:px-0"
    >
      Results-driven direct mail strategies use targeted data and
      personalized messaging to boost response rates, generate leads, and
      maximize ROI.
    </p>

    {/* Buttons */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
      
      {/* Contact Button */}
      <Link to="/contactUs" className="w-full sm:w-auto">
        <button
          className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full
          bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)]
          text-[14px] sm:text-[16px] flex items-center justify-center gap-2
          transition-all duration-300"
        >
          Contact Now
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>

      {/* Explore Button */}
      <Link to="/services" className="w-full sm:w-auto">
        <button
          className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border 
          border-white/30 text-white
          text-[14px] sm:text-[16px] flex items-center justify-center gap-2
          transition-all duration-300 hover:bg-white hover:text-black"
        >
          Explore all service
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>

    </div>
  </div>
</section>


      {/*  direct mailing our Techniques card section */}
      <section className="containers">
        <div
          className="flex flex-col items-center
                   sm:grid sm:grid-cols-2
                   lg:grid-cols-3
                   xl:flex xl:flex-row xl:items-start
                   justify-center
                   gap-6"
        >
          {cards.map((card) => {
            const isHovered = hoveredId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative bg-white rounded-3xl p-3 cursor-pointer
                         transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
                         w-full max-w-[320px] sm:w-full sm:max-w-none
                         xl:w-[320px] xl:h-[472px]"
                style={{ height: "472px" }}
              >
                {/* IMAGE */}
                <div
                  className="w-full overflow-hidden rounded-2xl transition-all duration-500"
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
                  className="absolute left-3 right-3 bottom-3 rounded-2xl p-3 flex flex-col transition-all duration-500"
                  style={{
                    backgroundColor: card.color,
                    height: isHovered ? "344px" : "96px",
                  }}
                >
                  {/* TITLE */}
                  <h3
                    className="text-white font-bold sm:text-[18px] text-[16px] mt-2
                 text-center items-center justify-center"
                  >
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className={`text-white/90 text-sm mt-4 transition-all duration-[400ms] ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* BUTTON */}
                  <button
                    className={`mt-auto bg-black text-white text-sm font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-[400ms] ${
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
    </>
  );
}
