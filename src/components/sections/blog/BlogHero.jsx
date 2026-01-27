import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlogHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const blogPosts = [
    {
      id: 1,
      date: "February - 22th 2024",
      title: "Will you be attending Affiliate Summit Europe?",
      excerpt:
        "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
      image: "/images/Blog/Img_01.png",
    },
    {
      id: 2,
      date: "February - 22th 2024",
      title: "Will you be attending Affiliate Summit Europe?",
      excerpt:
        "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
      image: "/images/Blog/Img_02.png",
    },
    {
      id: 3,
      date: "February - 22th 2024",
      title: "Will you be attending Affiliate Summit Europe?",
      excerpt:
        "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
      image: "/images/Blog/Img_03.png",
    },
  ];

  // Animation variants

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      borderColor: "rgba(75, 85, 99, 1)",
      boxShadow: "0 0 0 rgba(234, 179, 8, 0)",
    },
    hover: {
      borderColor: "rgba(234, 179, 8, 0.5)",
      boxShadow: "0 10px 40px rgba(234, 179, 8, 0.1)",
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: {
      y: 0,
      scale: 1,
    },
    hover: {
      y: 96, // Slide down 24 * 4 = 96px (translate-y-24)
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const excerptVariants = {
    rest: {
      opacity: 0,
      y: 20,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const arrowButtonVariants = {
    rest: {
      scale: 0,
      rotate: -90,
      opacity: 0,
      y: 0,
    },
    hover: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      y: 80,
      transition: {
        duration: 0.5,
        delay: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const arrowIconVariants = {
    rest: { x: 0 },
    hover: {
      x: [0, 5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
    },
  };

  return (
    <section>
      {/* Hero Image with Content */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] ">
        {/* Background Image */}
        <img
          src="/images/Blog/Blog_Hero_Img.png"
          alt="About NEsigns"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="items-center" />
        {/* Content on Image */}
        <div className="absolute inset-0 flex justify-center items-center p-4">
          <div className=" items-center">
            <h2 className="text-sm  text-[var(--color-gradient)] mb-2 text-center">
              Home / Blog
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
              BLOG
            </h1>
          </div>
        </div>
      </div>

      {/* blog card */}

      <section ref={sectionRef} className="relative mt-30">
        <div className="containers px-8">
          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={cardVariants}>
                <motion.div
                  className="relative cursor-pointer border rounded-lg overflow-hidden"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Date */}
                  <motion.div className="p-3 pb-3">
                    <motion.p
                      className="text-gray-400 text-sm mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.date}
                    </motion.p>
                  </motion.div>

                  {/* Title */}
                  <motion.div className="px-3 pb-6">
                    <motion.h3
                      className="text-white text-xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {post.title}
                    </motion.h3>
                  </motion.div>

                  {/* IMAGE + HIDDEN CONTENT */}
                  <div className="relative h-48">
                    {/* Hidden Content (Behind Image) */}
                    <div className="absolute inset-0 z-0">
                      <motion.div
                        className="absolute left-0 right-0"
                        variants={excerptVariants}
                      >
                        <p className="text-gray-400 text-sm mt-5 p-3">
                          {post.excerpt}
                        </p>
                      </motion.div>
                    </div>

                    {/* Image (Moves Down on Hover) */}
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover z-10 rounded-br-lg rounded-bl-lg"
                      variants={imageVariants}
                    />

                    {/* Arrow Button */}
                    <div className="flex justify-end relative mr-4">
                      <motion.div
                        className="absolute z-50 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center"
                        variants={arrowButtonVariants}
                      >
                        <motion.div variants={arrowIconVariants}>
                          <ArrowRight className="text-white w-6 h-6" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
