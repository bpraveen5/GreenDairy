import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-leaf" />,
            title: "Quality Certified",
            desc: "Our farm follows international quality standards for milk processing."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-leaf" />,
            title: "100% Organic",
            desc: "No hormones, no antibiotics. Just pure nature in every drop."
        },
        {
            icon: <HeartPulse className="w-6 h-6 text-leaf" />,
            title: "Healthy Choice",
            desc: "Rich in vitamins and minerals to keep your family strong and active."
        }
    ];

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative SVG Pattern */}
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M10,10 Q50,90 90,10" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop"
                                alt="Our Farm"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-earth/40 to-transparent" />
                        </div>
                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:right-10 glass p-8 rounded-2xl max-w-xs z-20"
                        >
                            <p className="text-4xl font-bold text-leaf mb-2">25+</p>
                            <p className="text-earth font-semibold">Years of Farming Excellence</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-leaf font-bold tracking-wider uppercase text-sm">About GreenDairy</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-earth mt-4 mb-6 leading-tight">
                            Taking Care Of Our <span className="text-leaf">Cows & Nature</span> Since 1998
                        </h2>
                        <p className="text-lg text-earth/70 mb-8 leading-relaxed">
                            GreenDairy started as a small family farm with a single mission: to provide the freshest,
                            most nutritious milk to our local community. Today, we've grown but our values remain the same.
                            We treat our cows like family and our land with respect.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * idx }}
                                    className="flex gap-4 p-4 rounded-2xl hover:bg-cream/50 transition-colors"
                                >
                                    <div className="bg-leaf/10 p-3 h-fit rounded-xl">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-earth mb-1">{feature.title}</h4>
                                        <p className="text-earth/60">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
