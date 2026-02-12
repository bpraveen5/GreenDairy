import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Star } from 'lucide-react';

const ProductCard = ({ product, index }) => {
    const [imgSrc, setImgSrc] = React.useState(product.image);
    const fallbackImage = "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1974&auto=format&fit=crop";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-leaf/5"
        >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-cream/40 mb-6">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={imgSrc}
                    alt={product.name}
                    onError={() => setImgSrc(fallbackImage)}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-earth">{product.rating}</span>
                </div>
            </div>

            <div className="px-4 pb-4">
                <p className="text-leaf text-sm font-bold uppercase tracking-wider mb-2">{product.category}</p>
                <h3 className="text-2xl font-bold text-earth mb-2 group-hover:text-leaf transition-colors">{product.name}</h3>
                <p className="text-earth/60 text-sm mb-6 line-clamp-2">{product.desc}</p>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-earth">${product.price}</span>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-leaf hover:bg-leaf/90 text-white rounded-2xl shadow-lg shadow-leaf/20 transition-all"
                    >
                        <ShoppingBasket className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const Products = () => {
    const products = [
        {
            name: "Fresh Whole Milk",
            category: "Pure Milk",
            price: "4.50",
            rating: "4.9",
            desc: "Freshly squeezed and pasteurized from our farm cows. Rich in nutrients.",
            image: "https://images.unsplash.com/photo-1563636619-e91001933965?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Organic Butter",
            category: "Dairy",
            price: "6.20",
            rating: "4.8",
            desc: "Churned traditionally for that rich, creamy taste and golden texture.",
            image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Aged Cheddar",
            category: "Cheese",
            price: "12.00",
            rating: "5.0",
            desc: "Aged for 12 months for a sharp and intense flavor profile. Perfect for platters.",
            image: "https://images.unsplash.com/photo-1618164435735-413d33046bc9?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Natural Yogurt",
            category: "Dairy",
            price: "3.80",
            rating: "4.7",
            desc: "Probiotic rich, smooth, and perfect for breakfast or healthy snacks.",
            image: "https://images.unsplash.com/photo-1571212247385-2da937119921?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Pure Cow Ghee",
            category: "Clarified Butter",
            price: "18.50",
            rating: "4.9",
            desc: "Golden, grainy and aromatic ghee from grass-fed cows. Traditional essence.",
            image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Fresh Paneer",
            category: "Cottage Cheese",
            price: "8.40",
            rating: "4.8",
            desc: "Soft and fresh cottage cheese made daily. High in protein.",
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <section id="products" className="section-padding bg-cream/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-leaf font-bold tracking-widest uppercase text-sm"
                    >
                        Our Store
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-earth mt-4"
                    >
                        Fresh From Our <span className="text-leaf">Dairy</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} product={product} index={idx} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="btn-secondary">View All Products</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
