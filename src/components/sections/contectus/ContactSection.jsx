import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
       {/* Background Patch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute md:w-[400px] md:h-[600px] w-100 h-100 
                           top-[-20px] right-[0]
                           bg-[var(--color-patch)]
                           opacity-100
                           rounded-full
                           blur-[250px]
                           overflow-visible
                           pointer-events-none"
            />
      <div className="containers">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Section - 2 columns */}
          <motion.div
            className="text-white space-y-4 sm:space-y-6 lg:space-y-8 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Geometric Cube */}
            <motion.div className="flex items-start" variants={itemVariants}>
              <img
                src="/images/contact/Cube_Vactor.png"
                alt="Geometric Cube"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-80"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                GREAT
              </h1>
            </motion.div>

            {/* Description Text */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-sm">
                Let's take your business to the next level together. Reach out
                to us for service inquiries, collaboration ideas, or guidance on
                upcoming projects we're excited to assist you
              </p>
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form - 3 columns */}
          <motion.div
            className="relative lg:col-span-3 mt-6 lg:mt-0"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Geometric Cube in top right */}
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 z-10"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 0.8, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/images/contact/Cube_Vactor.png"
                alt="Geometric Cube"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
              />
            </motion.div>

            {/* Bottom Wireframe in bottom left */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 md:-bottom-8 md:-left-12 lg:-bottom-12 lg:-left-16 z-10"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 0.6, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/images/contact/Vector_atBottum.png"
                alt="Wireframe Database"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-60 xl:h-60 object-contain"
              />
            </motion.div>

            <motion.div
              className="bg-[var(--color-muted)]/40 backdrop-blur-[20px] border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Form Header */}
              <motion.div className="mb-4 sm:mb-6" variants={fieldVariants}>
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                  Contact Form
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Fill out the form below and our team will get back to you
                  promptly. Let's connect and create solutions together.
                </p>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 pb-6 sm:pb-10 relative z-0">
                {/* Full Name */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2 block">
                    Full name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Input your full name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    required
                  />
                </motion.div>

                {/* Email Address */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2 block">
                    Email address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Input your email address"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    required
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2 block">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-1 sm:px-3 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                      <option value="+61">+61</option>
                      <option value="+81">+81</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Input contact number"
                      className="flex-1 px-0 text-center sm:text-start sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    />
                  </div>
                </motion.div>

                {/* Service */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2 block">
                    What service do you need?{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Signage</option>
                    <option value="mobile-app">Printing</option>
                    <option value="ui-ux">Direct Mailling</option>
                    <option value="consulting">Web Designing</option>
                    <option value="other">SEO</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2 block">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave your message here"
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div className="pt-2 sm:pt-3" variants={fieldVariants}>
                  <Link to="/contactUs">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-primary)] text-sm sm:text-base text-white font-medium sm:float-right transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit
                    </motion.button>
                  </Link>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;