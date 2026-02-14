import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black opacity-50" />

            <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block mb-4 text-red-500 font-mono tracking-widest text-sm uppercase">
                        Verkefni: Fyrirtækjasamskipti 2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                        Að mæta í Kveik
                        <span className="block text-gray-500 text-3xl md:text-5xl mt-2 font-normal">
                            og af hverju það skiptir máli
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Samskiptaráðgjöf fyrir Tesla á Íslandi í skugga umræðu um öryggi og orðspor.
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Access</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
