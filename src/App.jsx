import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import FarmVideo from './sections/FarmVideo';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const LoadingScreen = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#FFF8E7] flex flex-col items-center justify-center text-center px-6"
    >
      <div className="relative w-32 h-52 mb-8">
        {/* Bottle Outline */}
        <div className="absolute inset-0 border-4 border-[#8D6E63]/20 rounded-b-[2.5rem] rounded-t-2xl overflow-hidden shadow-inner">
          {/* Milk Filling Animation */}
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 bg-white"
          >
            {/* Milk Waves */}
            <motion.div
              animate={{ x: ["-10%", "10%", "-10%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-4 bg-white -mt-2 rounded-full border-t border-cream/20 shadow-lg scale-150"
            />
          </motion.div>
        </div>
        {/* Bottle Cap */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#8D6E63] rounded-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-[#8D6E63] font-bold text-3xl tracking-[0.2em]">GREEN DAIRY</h2>
        <div className="flex gap-1 justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-leaf rounded-full"
            />
          ))}
        </div>
        <p className="text-[#8D6E63]/50 text-sm font-medium italic">Preparing your fresh experience...</p>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-leaf selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-leaf origin-left z-[100]"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhyChooseUs />
            <Products />
            <FarmVideo />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
