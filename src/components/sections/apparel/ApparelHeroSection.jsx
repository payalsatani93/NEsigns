import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, image: "/images/apparelimg/T_1.png", title: "Basic T-shirt", link: "/products/tshirt-1" },
  { id: 2, image: "/images/apparelimg/T_2.png", title: "Basic T-shirt", link: "/products/tshirt-2" },
  { id: 3, image: "/images/apparelimg/T_3.png", title: "Basic T-shirt", link: "/products/tshirt-3" },
  { id: 4, image: "/images/apparelimg/T_4.png", title: "Basic T-shirt", link: "/products/tshirt-4" },
  { id: 5, image: "/images/apparelimg/T_5.png", title: "Basic T-shirt", link: "/products/tshirt-5" },
  { id: 6, image: "/images/apparelimg/T_6.png", title: "Basic T-shirt", link: "/products/tshirt-6" },
  { id: 7, image: "/images/apparelimg/T_7.png", title: "Basic T-shirt", link: "/products/tshirt-7" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ApparelHeroSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:overflow-visible overflow-hidden">
      
      {/* Top Right Patch - only once, behind everything */}
      <div
        className="absolute md:w-[400px] md:h-[500px] w-[300px] h-[300px] z-0
           top-0 right-0
           bg-[var(--color-patch)]
           opacity-100
           blur-[190px]
           pointer-events-none"
      />

      <div className="containers relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="relative w-full">

        {/* Background Shape */}
        <img
          src="/images/apparelimg/White_Curvebg.png"
          alt="Card background"
          className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]"
        />

        {/* Content */}
        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col">

          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden mb-4">
            <motion.img
              src={product.image}
              alt={product.title}
              className="sm:w-[354px] sm:h-[301px] w-[250px] h-[210px] object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Title */}
          <h3 className="text-black text-[22px]">
            {product.title}
          </h3>
        </div>

        {/* Floating Button */}
        <Link to={product.link}>
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 45,
              boxShadow: "0 12px 30px rgba(244, 183, 64, 0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute -bottom-3 right-0
                       2xl:w-[55px] 2xl:h-[55px] xl:w-[48px] xl:h-[48px] w-[43px] h-[43px]
                       rounded-full bg-[#f4b740]
                       flex items-center justify-center
                       shadow-lg transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}