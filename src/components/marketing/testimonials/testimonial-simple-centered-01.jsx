import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PaginationDot } from "@/components/application/pagination/pagination-dot";
import { Avatar } from "@/components/base/avatar/avatar";
import { StarIcon } from "@/components/foundations/rating-stars";

const reviews = [
    {
        id: "review-01",
        quote: "The quality of milk from GreenDairy is unmatched. It's the only brand I recommend for pure nutrition.",
        author: {
            name: "Sarah Johnson",
            title: "Nutritionist",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
        },
    },
    {
        id: "review-02",
        quote: "Their butter and cream have a depth of flavor that transformed my pastries. Truly farm fresh.",
        author: {
            name: "Michael Chen",
            title: "Master Chef",
            avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
        },
    },
    {
        id: "review-03",
        quote: "My kids love the taste, and I love that it's delivered fresh every morning. So convenient!",
        author: {
            name: "Emily Rodriguez",
            title: "Dedicated Mother",
            avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
        },
    },
];

const transition = {
    type: "spring",
    duration: 0.8,
};

export const TestimonialSimpleCentered01 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    return (
        <section className="bg-cream/30 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col items-center gap-10">
                    <figure className="flex max-w-4xl flex-col gap-8 text-center">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.blockquote
                                key={currentReviewIndex + "-quote"}
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ...transition,
                                        delay: 0.4,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.98,
                                    y: 20,
                                    transition: {
                                        ...transition,
                                        delay: 0.06,
                                    },
                                }}
                                className="origin-bottom text-3xl font-bold text-balance text-earth will-change-transform md:text-5xl"
                            >
                                {reviews[currentReviewIndex].quote}
                            </motion.blockquote>
                            <motion.figcaption
                                key={currentReviewIndex + "-author"}
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ...transition,
                                        delay: 0.5,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.98,
                                    y: 20,
                                    transition,
                                }}
                                className="flex origin-bottom flex-col items-center gap-4 will-change-transform"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <Avatar src={reviews[currentReviewIndex].author.avatarUrl} alt={reviews[currentReviewIndex].author.name} size="2xl" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-bold text-earth">{reviews[currentReviewIndex].author.name}</p>
                                        <cite className="text-lg text-leaf font-medium not-italic">{reviews[currentReviewIndex].author.title}</cite>
                                    </div>
                                </div>
                                <motion.div aria-hidden="true" className="flex gap-1">
                                    {Array.from({
                                        length: 5,
                                    }).map((_, index) => (
                                        <motion.div
                                            key={`${currentReviewIndex}-${index}`}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.9,
                                                y: 6,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                y: 0,
                                                transition: {
                                                    ...transition,
                                                    delay: 0.5 + index * 0.1,
                                                },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.9,
                                                y: 6,
                                                transition: {
                                                    ...transition,
                                                    delay: 0,
                                                },
                                            }}
                                        >
                                            <StarIcon />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.figcaption>
                        </AnimatePresence>
                    </figure>

                    <PaginationDot page={currentReviewIndex + 1} total={3} size="lg" onPageChange={(page) => setCurrentReviewIndex(page - 1)} />
                </div>
            </div>
        </section>
    );
};


