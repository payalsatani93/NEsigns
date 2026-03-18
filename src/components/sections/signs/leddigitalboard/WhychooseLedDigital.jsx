import { motion } from "framer-motion";
import {
  Paintbrush2,
  BadgeDollarSign,
  Cpu,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "streamline-ultimate:award-ribbon-star-1-bold",
    title: "Custom Design",
    description:
      "Tailored dimensions and resolutions specifically engineered to fit your unique space and brand identity.",
  },
  {
    icon: "tabler:world-cog",
    title: "Competitive Pricing",
    description:
      "Premium quality components at industry-leading prices, ensuring the highest return on your advertising investment.",
  },
  {
    icon: "ri:user-settings-fill",
    title: "Advanced Tech",
    description:
      "High-refresh rates, HDR color accuracy, and smart cloud-based CMS for seamless content management anywhere.",
  },
  {
    icon: "solar:tag-price-bold",
    title: "Nationwide Installation",
    description:
      "Our expert logistics and technical teams provide professional on-site installation and calibration across the country.",
  },
  {
    icon: "mdi:book-edit",
    title: "Comprehensive Warranty",
    description:
      "Peace of mind guaranteed with our multi-year hardware warranty and rapid-response technical support services.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const subVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
};

export default function WhyChooseSection() {
  return (
    <section className=" py-16 px-4 sm:px-8 font-sans">
      {/* Header */}
      <div className="container text-center mb-14">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
        >
          Why Choose Our{" "}
          <span className="text-[#d4a017]">Digital LED Display Boards?</span>
        </motion.h2>
        <motion.p
          variants={subVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          We provide complete LED signage solutions from consultation to
          installation and ongoing support.
          <br className="hidden sm:block" />
          solutions that command attention.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5"
      >
        {/* Feature Cards (first 5) */}
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.025,
              boxShadow: "0 0 28px 2px rgba(212,160,23,0.13)",
              transition: { duration: 0.22 },
            }}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-7 flex flex-col gap-5 cursor-pointer group"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
            >
              <Icon icon={feat.icon} className="w-12 h-12 text-[#d4a017]" />
            </motion.div>

            {/* Text */}
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* CTA Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.22 },
          }}
          className="border border-white rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-5 relative overflow-hidden lg:row-span-3"
        >
          {/* subtle radial glow */}
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06)_0%,transparent_70%)] pointer-events-none" />

          <h3 className="text-white font-bold text-xl leading-tight relative z-10">
            Ready to Shine?
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed relative z-10">
            Ready to upgrade your visibility with professional indoor or outdoor
            digital LED boards? Contact us today for a free consultation and
            customized pricing.
          </p>
          <motion.button
            whileHover={{
              scale: 1.06,
              backgroundColor: "#d4a017",
              color: "#111",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 bg-white text-black font-bold text-sm px-12 py-3 rounded-full hover:bg-[#d4a017] transition-colors duration-200"
          >
            Get A Quote
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
