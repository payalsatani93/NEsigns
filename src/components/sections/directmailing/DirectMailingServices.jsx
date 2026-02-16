import { motion } from "framer-motion";
import {
  Users,
  Printer,
  Settings,
  Mail,
  FileStack,
  Package,
  MapPin,
  Truck,
  CreditCard,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Designing for Piece",
    icon: Users,
    delay: 0,
  },
  {
    id: 2,
    title: "Printing Your Piece",
    icon: Printer,
    delay: 0.1,
  },
  {
    id: 3,
    title: "Carrier Route Targeting",
    icon: Settings,
    delay: 0.2,
  },
  {
    id: 4,
    title: "Stack Bundling",
    icon: Mail,
    delay: 0.3,
  },
  {
    id: 5,
    title: "Mail Documentation",
    icon: FileStack,
    delay: 0.4,
  },
  {
    id: 6,
    title: "Mail Packaging",
    icon: Package,
    delay: 0.5,
  },
  {
    id: 7,
    title: "Post Office Assignment",
    icon: MapPin,
    delay: 0.6,
  },
  {
    id: 8,
    title: "Mail Shipping",
    icon: Truck,
    delay: 0.7,
  },
  {
    id: 9,
    title: "Postage Payment",
    icon: CreditCard,
    delay: 0.8,
  },
];

export default function DirectMailingServices() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                Icon={service.icon}
                delay={service.delay}
              />
            ))}
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white"
            >
              End-to-End{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e89b4f] via-[#f4d4a8] to-[#e89b4f]">
                Direct Mailing
              </span>
              <br />
              Services That Drive Results
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg lg:text-xl max-w-xl"
            >
              High-quality direct mail prints designed to engage recipients and
              drive real responses.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center group"
    >
      {/* Card */}
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/directmailing/MailCard_Bg.png')",
          }}
        />

        {/* Mail Image */}
        <img
          src="/images/directmailing/MailCard_img.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-300 group-hover:-translate-y-2"
        />

        {/* Icon Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center">
            <Icon
              className="w-8 h-8 text-gray-400 group-hover:text-[#e89b4f] transition-colors duration-300"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <p className="mt-5 text-gray-300 group-hover:text-white transition-colors duration-300 text-sm lg:text-base font-medium">
        {title}
      </p>
    </motion.div>
  );
}