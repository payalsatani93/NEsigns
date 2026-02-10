import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="py-10">
      <div className="containers">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - 2 columns */}
          <motion.div 
            className="text-white space-y-6 lg:space-y-8 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Geometric Cube */}
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <img 
                src="/images/contact/Cube_Vactor.png" 
                alt="Geometric Cube" 
                className="w-16 h-16 sm:w-35 sm:h-35 object-contain opacity-80"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                LET'S BUILD<br />
                SOMETHING<br />
                GREAT
              </h1>
            </motion.div>

            {/* Description Text */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
                Let's take your business to the next level together. Reach out to us for service inquiries, collaboration ideas, or guidance on upcoming projects we're excited to assist you
              </p>
            </motion.div>

            {/* Bottom Wireframe */}
            <motion.div 
              className="flex justify-end"
              variants={itemVariants}
            >
              <img 
                src="/images/contact/Vector_atBottum.png" 
                alt="Wireframe Database" 
                className="w-32 h-32 sm:w-50 sm:h-50 object-contain opacity-60"
              />
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form - 3 columns */}
          <motion.div 
            className="relative lg:col-span-3"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Geometric Cube in top right */}
            <motion.div 
              className="absolute -top-8 -right-6 sm:-top-15 z-10"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 0.8, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="/images/contact/Cube_Vactor.png" 
                alt="Geometric Cube" 
                className="w-16 h-16 sm:w-35 sm:h-35 object-contain"
              />
            </motion.div>

            {/* Form Card */}
            <motion.div 
              className="bg-[var(--color-graybg)] bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Form Header */}
              <motion.div 
                className="mb-6"
                variants={fieldVariants}
              >
                <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
                  Contact Form
                </h2>
                <p className="text-gray-500 text-sm">
                  Fill out the form below and our team will get back to you promptly. Let's connect and create solutions together.
                </p>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 pb-10">
                {/* Full Name */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-500 text-sm mb-2 block">
                    Full name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Input your full name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    required
                  />
                </motion.div>

                {/* Email Address */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-500 text-sm mb-2 block">
                    Email address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Input your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    required
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-500 text-sm mb-2 block">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-3 py-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
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
                      placeholder="Input your contact number"
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition"
                    />
                  </div>
                </motion.div>

                {/* Service */}
                <motion.div variants={fieldVariants}>
                  <label className="text-gray-500 text-sm mb-2 block">
                    What service do you need? <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition appearance-none cursor-pointer"
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
                  <label className="text-gray-500 text-sm mb-2 block">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave your message here"
                    rows="2"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 transition resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  className="pt-2"
                  variants={fieldVariants}
                >
                  <Link to="/contactUs">
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="groupw-full sm:w-auto px-12 py-4 rounded-full 
                        bg-gradient-to-r from-[var(--color-tertiary)] to-[var(--color-primary)] 
                        text-md float-end
                        transition-all duration-300"
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