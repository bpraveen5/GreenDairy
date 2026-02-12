import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: "review-01",
        quote: "The quality of milk from GreenDairy is unmatched. It's the only brand I recommend for pure nutrition. The delivery is always on time, and the freshness is evident in every drop.",
        author: {
            name: "Sarah Johnson",
            title: "Nutritionist",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
        }
    },
    {
        id: "review-02",
        quote: "Their butter and cream have a depth of flavor that transformed my pastries. Truly farm fresh. I've been using their products in my kitchen for over a year now.",
        author: {
            name: "Michael Chen",
            title: "Master Chef",
            avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
        }
    },
    {
        id: "review-03",
        quote: "My kids love the taste, and I love that it's delivered fresh every morning. So convenient! It's the only milk my children will drink now.",
        author: {
            name: "Emily Rodriguez",
            title: "Dedicated Mother",
            avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
        }
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section id="testimonials" className="section-padding bg-cream relative overflow-hidden">
            {/* Soft decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-leaf/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 text-leaf font-bold text-xs uppercase tracking-widest mb-12"
                >
                    Testimonials
                </motion.div>

                <div className="relative min-h-[400px] flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <Quote className="w-16 h-16 text-leaf/10 mb-8" />

                            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth leading-tight mb-10 text-balance">
                                "{reviews[currentIndex].quote}"
                            </blockquote>

                            <div className="flex flex-col items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-leaf/20 shadow-lg">
                                    <img
                                        src={reviews[currentIndex].author.avatarUrl}
                                        alt={reviews[currentIndex].author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-earth">{reviews[currentIndex].author.name}</h4>
                                    <p className="text-leaf font-semibold">{reviews[currentIndex].author.title}</p>
                                </div>
                            </div>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-leaf fill-leaf" />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2.5 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-8 bg-leaf' : 'w-2.5 bg-leaf/20 hover:bg-leaf/40'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
