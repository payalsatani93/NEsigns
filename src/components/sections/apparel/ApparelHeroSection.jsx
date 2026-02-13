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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="containers">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
        >
          {products.map((product, index) => (
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
          className="w-full h-auto"
        />

        {/* Content */}
        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col">
          
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden bg-white mb-4 aspect-[4/5]">
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Title */}
          <h3 className="text-black text-sm sm:text-base font-medium">
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
            className="absolute bottom-2 right-2 
                       w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 
                       rounded-full bg-[#f4b740] 
                       flex items-center justify-center 
                       shadow-lg transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
