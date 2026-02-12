import { Beef, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-cream pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-leaf p-2 rounded-xl">
                                <Beef className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-earth tracking-tight">
                                Green<span className="text-leaf">Dairy</span>
                            </span>
                        </div>
                        <p className="text-earth/60 leading-relaxed mb-8">
                            Providing nature's best since 1998. Our commitment to quality
                            and freshness makes us the preferred choice for thousands of families.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-earth mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Products', 'About Us', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-earth/60 hover:text-leaf transition-colors flex items-center group">
                                        {item}
                                        <ArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 opacity-0 group-hover:opacity-100 transition-all ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-earth mb-8">Our Products</h4>
                        <ul className="space-y-4">
                            {['Fresh Milk', 'Organic Butter', 'Handcrafted Cheese', 'Pure Ghee', 'Fresh Yogurt'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-earth/60 hover:text-leaf transition-colors flex items-center group">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-earth mb-8">Newsletter</h4>
                        <p className="text-earth/60 mb-6 text-sm">Subscribe to get updates on new products and farm stories.</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="bg-white px-4 py-3 rounded-xl outline-none w-full border border-earth/10 focus:border-leaf transition-all"
                            />
                            <button className="bg-leaf text-white px-6 py-3 rounded-xl font-bold hover:bg-leaf/90 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                <div className="pt-10 border-t border-earth/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-earth/40 text-sm">© 2026 GreenDairy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-earth/40 text-sm hover:text-earth transition-colors">Privacy Policy</a>
                        <a href="#" className="text-earth/40 text-sm hover:text-earth transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
