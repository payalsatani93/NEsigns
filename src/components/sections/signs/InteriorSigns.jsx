import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InteriorSignsPage = () => {
  const [activeCategory, setActiveCategory] = useState("ada");

  const categories = [
    {
      id: "ada",
      name: "ADA Signage",
      image:
        "https://images.unsplash.com/photo-1607827448299-a099b845ff0f?w=200&h=150&fit=crop",
    },
    {
      id: "dimensional",
      name: "Dimensional Letters",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=150&fit=crop",
    },
    {
      id: "directional",
      name: "Directional Signs",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&h=150&fit=crop",
    },
    {
      id: "graphics",
      name: "Custom Graphics & Decals",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=200&h=150&fit=crop",
    },
    {
      id: "canvas",
      name: "Custom Canvas Prints",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=150&fit=crop",
    },
    {
      id: "tradeshow",
      name: "Trade Show Signage",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=150&fit=crop",
    },
    {
      id: "corporate",
      name: "Corporate Branding Signs",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=150&fit=crop",
    },
    {
      id: "banners",
      name: "Banners and Posters",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=150&fit=crop",
    },
    {
      id: "custom",
      name: "Any custom Interior Signs",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop",
    },
    {
      id: "menu",
      name: "Menu Boards",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=150&fit=crop",
    },
    {
      id: "backdrop",
      name: "Step and Repeat Backdrop",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&h=150&fit=crop",
    },
    {
      id: "banner-stands",
      name: "Banner Stands",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=200&h=150&fit=crop",
    },
    {
      id: "acrylic",
      name: "Acrylic Signs",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=150&fit=crop",
    },
  ];

  const galleryImages = {
    ada: [
      "https://images.unsplash.com/photo-1607827448299-a099b845ff0f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=400&fit=crop",
    ],
    dimensional: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
    ],
    directional: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    ],
    graphics: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
    ],
    canvas: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400&h=400&fit=crop",
    ],
    tradeshow: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop",
    ],
    corporate: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop",
    ],
    banners: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop",
    ],
    custom: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
    ],
    menu: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1529417305485-480f579e1e6e?w=400&h=400&fit=crop",
    ],
    backdrop: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop",
    ],
    "banner-stands": [
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
    ],
    acrylic: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
    ],
  };

  return (
    <div className=" p-6 ">
      <Link
        to="/categories/interior-sign"
        className="inline-flex items-center text-neutral-400 hover:text-white transition"
      >
        <ArrowLeft size={22} />
      </Link>
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          {/* Back Arrow */}

          <div className="flex items-center gap-3 mb-3">
            <span className="text-[var(--color-gradient)] text-sm tracking-[0.2em] font-light">
              INTERIOR SIGNS
            </span>
            <ArrowRight className="text-[var(--color-gradient)] arrow-bounce" size={22} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[var(--color-gradient)]">High-Quality</span> Interior Signs
            You Can Trust
          </h1>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center bg-[#2a2a2a] rounded-xl overflow-hidden border-2 transition-all duration-300 hover:border-[#d4a574] hover:-translate-y-1 ${
                activeCategory === category.id
                  ? "border-[var(--color-gradient)]"
                  : "border-[#3a3a3a]"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-20 object-cover flex-shrink-0"
              />
              <span className="px-5 py-4 text-left font-semibold text-base flex-1">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {galleryImages[activeCategory].map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorSignsPage;
