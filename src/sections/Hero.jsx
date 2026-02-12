import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
    {
        id: 1,
        image: "/hero/cow-1.png",
        title: "Pure Freshness from Our Farm",
        desc: "Experience the richest, creamiest milk sourced from happy, grass-fed cows.",
        cta: "Shop Now"
    },
    {
        id: 2,
        image: "/hero/cow-2.png",
        title: "100% Organic Dairy Products",
        desc: "Nature's best, delivered fresh to your doorstep every morning.",
        cta: "Explore Store"
    },
    {
        id: 3,
        image: "/hero/cow-3.jpg",
        title: "Traditional Care, Modern Purity",
        desc: "We blend age-old farming wisdom with the highest standards of hygiene.",
        cta: "Our Process"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
            {/* Background Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={carouselData[current].image}
                        alt="Dairy Farm"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-10 md:px-20 flex flex-col justify-center">
                <motion.div
                    key={`content-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
                        {carouselData[current].title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                        {carouselData[current].desc}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold rounded-full transition-colors text-lg shadow-lg"
                    >
                        {carouselData[current].cta}
                    </motion.button>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            {/* Pagination Indicators (Dashes) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {carouselData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`transition-all duration-300 rounded-full h-1.5 ${current === idx ? 'w-10 bg-white' : 'w-6 bg-white/40'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
