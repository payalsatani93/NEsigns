import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function TestimonialSlider() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const testimonials = [
        {
            id: 1,
            image: '/images/Testimonial/Img_01.png',
            name: 'Elisa Grant',
            position: 'Legacy Solutions Engineer',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            rating: 5
        },
        {
            id: 2,
            image: '/images/Testimonial/Img_02.png',
            name: 'John Anderson',
            position: 'Product Designer',
            text: 'Outstanding service and exceptional quality! The team went above and beyond to deliver results that exceeded our expectations.',
            rating: 5
        },
        {
            id: 3,
            image: '/images/Testimonial/Img_03.png',
            name: 'Sarah Mitchell',
            position: 'Marketing Director',
            text: 'Professional, creative, and reliable. Working with this team has been an absolute pleasure from start to finish.',
            rating: 5
        },
        {
            id: 4,
            image: '/images/Testimonial/Img_04.png',
            name: 'Michael Chen',
            position: 'CEO & Founder',
            text: 'Incredible attention to detail and dedication to excellence. Highly recommend their services to anyone looking for quality.',
            rating: 5
        }
    ];

    const [loopSlides, setLoopSlides] = useState([]);
    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const intervalRef = useRef(null);

    // Setup loop slides
    useEffect(() => {
        setLoopSlides([
            testimonials[testimonials.length - 1],
            ...testimonials,
            testimonials[0]
        ]);
        setIndex(1);
    }, []);

    // Auto slide
    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setTransition(true);
            setIndex((prev) => prev + 1);
        }, 5000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    // Infinite loop reset
    useEffect(() => {
        if (!loopSlides.length) return;

        if (index === testimonials.length + 1) {
            setTimeout(() => {
                setTransition(false);
                setIndex(1);
            }, 800);
        }

        if (index === 0) {
            setTimeout(() => {
                setTransition(false);
                setIndex(testimonials.length);
            }, 800);
        }
    }, [index, loopSlides.length]);

    const nextSlide = () => {
        setTransition(true);
        setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setTransition(true);
        setIndex((prev) => prev - 1);
    };

    // Animation variants
    const quoteVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.5,
            rotate: -45 
        },
        visible: {
            opacity: 0.3,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            scale: 0.8 
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.95 
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const starVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: (i) => ({
            scale: 1,
            rotate: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut"
            }
        }
    };

    const authorVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut"
            }
        }
    };

    const dotVariants = {
        inactive: { 
            scale: 1,
            backgroundColor: 'rgba(75, 85, 99, 1)'
        },
        active: { 
            scale: 1.3,
            backgroundColor: 'rgba(234, 179, 8, 1)',
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        },
        hover: {
            scale: 1.2,
            backgroundColor: 'rgba(107, 114, 128, 1)',
            transition: {
                duration: 0.2
            }
        }
    };

    const renderTestimonialCard = (testimonial, idx) => (
        <div key={idx} className="w-full flex-shrink-0">
            <div className="flex items-center justify-center px-4 sm:px-6 md:px-10">
                {/* Combined Card with Image and Content */}
                <motion.div 
                    className="relative flex flex-col md:flex-row items-center max-w-5xl w-full mt-10"
                    initial="hidden"
                    animate="visible"
                >
                    {/* Person Image - Overlapping */}
                    <motion.div 
                        className="relative z-20 mb-4 md:mb-0"
                        variants={imageVariants}
                    >
                        <motion.div 
                            className="w-48 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-xl overflow-hidden bg-gray-700 shadow-2xl mx-auto"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Testimonial Card - Overlapped by Image */}
                    <motion.div 
                        className="relative md:-ml-16 z-10 w-full"
                        variants={cardVariants}
                    >
                        {/* Content */}
                        <motion.div 
                            className="relative border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 md:pl-24 bg-black"
                            whileHover={{
                                borderColor: 'rgba(234, 179, 8, 0.5)',
                                boxShadow: '0 0 30px rgba(234, 179, 8, 0.1)',
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Stars */}
                            <motion.div 
                                className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center md:justify-start"
                                initial="hidden"
                                animate="visible"
                            >
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        custom={i}
                                        variants={starVariants}
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-current"
                                        viewBox="0 0 24 24"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </motion.svg>
                                ))}
                            </motion.div>

                            {/* Testimonial Text */}
                            <motion.p 
                                className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-center md:text-left"
                                variants={textVariants}
                            >
                                {testimonial.text}
                            </motion.p>

                            {/* Author Info */}
                            <motion.div 
                                className="text-center md:text-left"
                                variants={authorVariants}
                            >
                                <h4 className="text-white text-lg sm:text-xl font-bold mb-1">
                                    {testimonial.name}
                                </h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    {testimonial.position}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Gray Background Bar Behind Content - Hidden on mobile */}
                        <motion.div 
                            className="hidden md:block absolute left-1/4 w-40 h-10 bg-gray-800 bg-opacity-30 rounded-b-3xl -z-10"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );

    return (
        <section 
            ref={sectionRef}
            className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20"
        >
            {/* Left Quote */}
            <motion.div 
                className="absolute top-5 left-4 sm:left-10 md:left-20 lg:left-30"
                variants={quoteVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg width="60" height="50" viewBox="0 0 120 100" fill="none" 
                    className="sm:w-24 sm:h-20 md:w-32 md:h-26 lg:w-[120px] lg:h-[100px]">
                        <path d="M0 80 L0 0 L50 0 L20 80 Z" fill="#6B7280" />
                        <path d="M60 80 L60 0 L110 0 L80 80 Z" fill="#6B7280" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Right Quote */}
            <motion.div 
                className="absolute bottom-5 right-4 sm:right-10 md:right-20 lg:right-30"
                variants={quoteVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        rotate: [180, 182, 180]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <path d="M0 80 L0 0 L50 0 L20 80 Z" fill="#6B7355" />
          <path d="M60 80 L60 0 L110 0 L80 80 Z" fill="#6B7355" opacity="0.9" />
        </svg>
                </motion.div>
            </motion.div>

            <motion.div 
                className="container bg-gradient-to-tr from-black via-black to-[#503d1c] py-12 sm:py-16 md:py-20 items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Main Slider Container */}
                <div className="relative overflow-hidden w-full">
                    <motion.div
                        className="flex"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                            transition: transition ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                        }}
                    >
                        {loopSlides.map((testimonial, idx) => 
                            renderTestimonialCard(testimonial, idx)
                        )}
                    </motion.div>
                </div>

                {/* Navigation Dots */}
                <motion.div 
                    className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {testimonials.map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => {
                                setTransition(true);
                                setIndex(i + 1);
                            }}
                            className="w-3 h-3 rounded-full"
                            variants={dotVariants}
                            initial="inactive"
                            animate={i === (index - 1 + testimonials.length) % testimonials.length ? "active" : "inactive"}
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
