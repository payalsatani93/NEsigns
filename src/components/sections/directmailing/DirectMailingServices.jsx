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
  { id: 1, title: "Designing for Piece", icon: Users, delay: 0 },
  { id: 2, title: "Printing Your Piece", icon: Printer, delay: 0.1 },
  { id: 3, title: "Carrier Route Targeting", icon: Settings, delay: 0.2 },
  { id: 4, title: "Stack Bundling", icon: Mail, delay: 0.3 },
  { id: 5, title: "Mail Documentation", icon: FileStack, delay: 0.4 },
  { id: 6, title: "Mail Packaging", icon: Package, delay: 0.5 },
  { id: 7, title: "Post Office Assignment", icon: MapPin, delay: 0.6 },
  { id: 8, title: "Mail Shipping", icon: Truck, delay: 0.7 },
  { id: 9, title: "Postage Payment", icon: CreditCard, delay: 0.8 },
];

export default function DirectMailingServices() {
  return (
    <section className="relative py-5 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="containers">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left Side - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1"
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
            className="space-y-4 sm:space-y-6 flex flex-col order-1 lg:order-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white"
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
              className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl"
            >
              High-quality direct mail prints designed to engage recipients and
              drive real responses.
            </motion.p>
          </motion.div>

          {/* Top Right Lines circle */}
          <div className="absolute lg:bottom-10 bottom-0 right-4 sm:right-10 md:right-20 w-16 sm:w-20 md:w-auto lg:block hidden">
            <div className="relative">
              <img src="/images/Line_Circle.png" alt="" className="w-full" />
            </div>
          </div>

          {/* Right Golden Patch */}
          <div
            className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 md:w-[500px] md:h-[500px]
                 bottom-0 right-0
                 bg-[var(--color-patch)]
                 opacity-100
                 blur-[150px] sm:blur-[200px] md:blur-[250px]
                 overflow-visible
                 pointer-events-none"
          />
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
      <div className="relative w-full aspect-square max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[176px] xl:max-w-[192px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl mx-auto">
        {/* 1️⃣ Folder Body - z-0 */}
        <img
          src="/images/directmailing/MailCard_Bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* 2️⃣ Mail Content - z-20 */}
        <img
          src="/images/directmailing/MailCard_img.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 md:p-5 lg:p-6
            z-20 transition-transform duration-300 ease-out
            group-hover:-translate-y-3"
        />

        {/* 3️⃣ Folder Front Lip - z-30 (bottom only) */}
        <img
          src="/images/directmailing/MailCard_Top_Bg.png"
          alt=""
          className="absolute bottom-0 left-0 w-full object-contain z-30 pointer-events-none"
        />

        {/* 4️⃣ Icon - z-40 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          <Icon
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-400 group-hover:text-[#e89b4f] transition-colors duration-300"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Title */}
      <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm lg:text-base font-medium leading-tight">
        {title}
      </p>
    </motion.div>
  );
}