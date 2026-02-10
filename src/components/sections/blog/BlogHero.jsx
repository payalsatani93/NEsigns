import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
          
          {/* Background Image */}
          <motion.img
            src="/images/Blog/Blog_Hero_Img.png"
            alt="About NEsigns"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 " />

          {/* Content */}
          <div className="absolute inset-0 flex justify-center items-center p-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white text-center"
            >
              Will you be attending Affiliate Summit Europe?
            </motion.h1>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="relative bg-black text-white py-16 md:py-24">
        <motion.div
          className="container mx-auto px-4 max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* INTRODUCTION */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Introduction</h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Affiliate Summit Europe isn’t just a conference; it’s a meeting
              point for ideas, innovation, and opportunity. Each year, it
              creates a space where industry leaders and rising professionals
              come together to exchange insights, explore new strategies, and
              shape the future of performance marketing.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              From insightful keynote sessions to practical workshops, the
              summit offers valuable learning for every level of experience.
              Attendees gain first-hand knowledge about emerging trends,
              evolving technologies, and proven tactics that help businesses
              scale smarter and faster.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Beyond the sessions, the real value lies in the connections.
              Affiliate Summit Europe provides unmatched networking
              opportunities, allowing attendees to build meaningful
              relationships and long-term success.
            </p>
          </motion.div>

          {/* DIVIDER */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="my-10 border-t border-white/10"
          />

          {/* WHY IT MATTERS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">
              Why Affiliate Summit Europe Matters
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Affiliate Summit Europe isn’t just another conference; it’s a hub
              for innovation, collaboration, and growth.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
              <li>Industry-leading speakers sharing real-world strategies</li>
              <li>Networking with global brands and affiliates</li>
              <li>Latest trends in affiliate and digital marketing</li>
              <li>Opportunities to build long-term partnerships</li>
            </ul>
          </motion.div>

          {/* WHAT WE’RE LOOKING FORWARD TO */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-10 space-y-4"
          >
            <h3 className="text-lg font-semibold">
              What We're Looking Forward To
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
              <li>Connect with partners and fellow marketers</li>
              <li>Explore new collaboration opportunities</li>
              <li>Learn from industry experts</li>
              <li>Share insights face-to-face</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
