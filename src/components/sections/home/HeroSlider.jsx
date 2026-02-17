import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    { id: 0, image: "/images/Hero/Img-1.png", title: "BRANDED DOOR HANGERS" },
    { id: 1, image: "/images/Hero/Img-2.png", title: "PREMIUM BUSINESS CARDS" },
    { id: 2, image: "/images/Hero/Img-3.png", title: "METROPOLITAN MAGAZINE" },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [animate] = useState(true);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const getNextSlide = () => {
        return (currentSlide + 1) % slides.length;
    };

    const handleNext = () => {
        if (animating) return;
        setDirection(1);
        setAnimating(true);
        setTimeout(() => {
            setCurrentSlide(getNextSlide());
            setAnimating(false);
        }, 1200);
    };

    const handlePrev = () => {
        if (animating) return;
        setDirection(-1);
        setAnimating(true);
        setTimeout(() => {
            setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
            setAnimating(false);
        }, 1200);
    };

    useEffect(() => {
        const interval = setInterval(() => handleNext(), 5000);
        return () => clearInterval(interval);
    }, [currentSlide, animating]);

    // Smooth spring configuration
    const smoothSpring = {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
    };

    // Ultra-smooth card flip with custom easing
    const cardVariants = {
        enter: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
            zIndex: 2,
        },
        center: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
            zIndex: 2,
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96] // Custom cubic bezier for smoothness
            }
        },
        exit: {
            x: 13,
            y: 8,
            rotate: 15,
            opacity: 1,
            scale: 1,
            zIndex: 1,
            transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1], // Smooth easeInOut curve
            }
        }
    };

    // Background card with smooth fade
    const backgroundCardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            filter: "brightness(0.3) blur(2px)"
        },
        visible: {
            opacity: 1,
            scale: 0.98,
            filter: "brightness(0.5) blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Smoother label animation
    const labelVariants = {
        hidden: { 
            opacity: 0, 
            x: -30,
            filter: "blur(10px)"
        },
        visible: { 
            opacity: 1, 
            x: 0,
            filter: "blur(0px)",
            transition: {
                ...smoothSpring,
                delay: 0.3
            }
        }
    };

    return (
        <section className="flex flex-col xl:flex-row xl:gap-20 gap-0 items-center xl:mt-15 mt-25 px-4  md:overflow-visible overflow-hidden">
            {/* LEFT SLIDER */}
            <div className="xl:w-2/3 w-full relative">
                <motion.div
                    initial={{ opacity: 0, y: 64 }}
                    animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 64 }}
                    transition={smoothSpring}
                >
                    <div 
                        className="relative xl:h-[500px] lg:h-[450px] md:h-[400px] h-[350px] flex items-center justify-center" 
                        style={{ perspective: '1500px' }}
                    >
                        {/* NEXT CARD (Behind - always visible) */}
                        <motion.div
                            key={`bg-${getNextSlide()}`}
                            className="absolute inset-0"
                            style={{ zIndex: 1 }}
                            variants={backgroundCardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-lg">
                                <motion.img
                                    src={slides[getNextSlide()].image}
                                    alt={slides[getNextSlide()].title}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            </div>
                        </motion.div>

                        {/* CURRENT CARD (Front - with smooth AnimatePresence) */}
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={currentSlide}
                                className="absolute inset-0"
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                style={{ 
                                    transformOrigin: 'top right',
                                    willChange: 'transform'
                                }}
                            >
                                <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-lg">
                                    <motion.img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.05 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 1.02 }}
                                        transition={{ 
                                            duration: 1.2, 
                                            ease: [0.25, 0.46, 0.45, 0.94] 
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* IMAGE LABEL - Smooth entrance */}
                        <motion.div 
                            className="absolute bottom-20 left-8 px-6 py-4 z-50"
                            variants={labelVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.p 
                                className="text-[var(--color-gradient)] text-xs tracking-widest mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                I N D U C T I O N
                            </motion.p>
                            <motion.h3 
                                className="text-[var(--color-primary)] md:text-3xl text-2xl font-bold mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, ...smoothSpring }}
                            >
                                PRINT ON PRODUCT
                            </motion.h3>
                            <motion.div 
                                className="w-auto h-px bg-gradient-to-r from-[var(--color-gradient)] to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                style={{ transformOrigin: 'left' }}
                            />
                        </motion.div>

                        {/* NAV BUTTONS - Smooth interactions */}
                        <motion.div 
                            className="absolute bottom-8 left-10 flex gap-3 z-50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, ...smoothSpring }}
                        >
                            <motion.button
                                onClick={handlePrev}
                                disabled={animating}
                                className="w-12 h-12 bg-black text-white text-2xl font-bold hover:bg-yellow-600 transition-colors duration-300 shadow-lg rounded"
                                whileHover={{ 
                                    scale: 1.1,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { type: "spring", stiffness: 600, damping: 15 }
                                }}
                            >
                                ←
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                disabled={animating}
                                className="w-12 h-12 bg-yellow-500 text-black text-2xl font-bold hover:bg-yellow-600 transition-colors duration-300 shadow-lg rounded"
                                whileHover={{ 
                                    scale: 1.1,
                                    boxShadow: "0 10px 30px rgba(234, 179, 8, 0.4)",
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { type: "spring", stiffness: 600, damping: 15 }
                                }}
                            >
                                →
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT CONTENT - Staggered smooth animations */}
            <motion.div 
                className="xl:w-1/3 w-full p-4 xl:mt-0 mb-15 mt-5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, ...smoothSpring }}
            >
                <motion.div 
                    className="mb-4 xl:block hidden"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, ...smoothSpring }}
                >
                    <img src="/images/Hero/DecorLine.png" alt="" />
                </motion.div>

                <div className="">
                    <motion.p 
                        className="text-gray-400 text-sm italic mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.
                    </motion.p>

                    <motion.div 
                        className="w-full h-px bg-gradient-to-r from-yellow-500 to-transparent mb-4"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        style={{ transformOrigin: 'left' }}
                    />

                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, ...smoothSpring }}
                    >
                        <motion.div 
                            className="w-14 h-14 rounded-full bg-white to-yellow-600 flex items-center justify-center text-white font-bold overflow-hidden"
                            whileHover={{ 
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300, damping: 15 }
                            }}
                        >
                        </motion.div>
                        <div>
                            <p className="text-white font-bold text-sm">
                                Eleanor Pena
                            </p>
                            <p className="text-gray-500 text-xs">
                                Product Designer
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
