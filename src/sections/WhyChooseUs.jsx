import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { Truck, Scale, Leaf, Clock } from 'lucide-react';

const Counter = ({ value }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    useEffect(() => {
        return spring.on("change", (latest) => {
            setCount(Math.floor(latest));
        });
    }, [spring]);

    return <motion.span ref={ref}>{count}</motion.span>;
};

const WhyChooseUs = () => {
    const stats = [
        {
            icon: <Truck className="w-10 h-10" />,
            value: 2,
            suffix: "H",
            label: "Fastest Delivery",
            desc: "From farm to table within 2 hours of milking."
        },
        {
            icon: <Scale className="w-10 h-10" />,
            value: 50,
            suffix: "kg",
            label: "Fresh Daily",
            desc: "Over 50kg of fresh cheese produced daily."
        },
        {
            icon: <Leaf className="w-10 h-10" />,
            value: 100,
            suffix: "%",
            label: "Eco Friendly",
            desc: "Recyclable packaging and zero waste farming."
        },
        {
            icon: <Clock className="w-10 h-10" />,
            value: 24,
            suffix: "/7",
            label: "Customer Support",
            desc: "We are always here to help you anytime."
        }
    ];

    return (
        <section className="section-padding bg-[var(--color-earth)] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 text-9xl font-bold">MILK</div>
                <div className="absolute bottom-10 right-10 text-9xl font-bold">FRESH</div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-6 p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-[var(--color-leaf)] transition-colors duration-500">
                                {stat.icon}
                            </div>
                            <h3 className="text-5xl font-bold mb-2">
                                <Counter value={stat.value} />{stat.suffix}
                            </h3>
                            <p className="text-xl font-bold text-[var(--color-leaf)] mb-4">{stat.label}</p>
                            <p className="text-white/60 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
