import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import TextileImg from '../assets/Textileindustrty.jpg';
import AgriImg from '../assets/Agri_industry.jpg';
import FMCGImg from '../assets/FMCG.jpg';
import FMDGImg from '../assets/FMDG.jpg';
import ElectricalImg from '../assets/Electronics .jpg';

const industries = [
    { id: 'textile', title: 'Textile Industry', img: TextileImg },
    { id: 'agri', title: 'Agri Industry', img: AgriImg },
    { id: 'fmcg', title: 'FMCG', img: FMCGImg },
    { id: 'fmdg', title: 'FMDG', img: FMDGImg },
    { id: 'electrical', title: 'Electrical Products', img: ElectricalImg },
];

const Industries = () => {
    // Symmetrical Curve Layout (5 items)
    // Values calculated for a 1400px+ width to ensure perfectly equal gaps
    const positions = [
        { left: '10%', top: '250px', transform: 'translateX(-50%)' },
        { left: '30%', top: '85px', transform: 'translateX(-50%)' },
        { left: '50%', top: '30px', transform: 'translateX(-50%)' },
        { left: '70%', top: '85px', transform: 'translateX(-50%)' },
        { left: '90%', top: '250px', transform: 'translateX(-50%)' },
    ];

    return (
        <section id="sectors" className="relative w-full py-24 pb-40 overflow-hidden bg-white font-sans">
            
            {/* --- PREMIUM BACKGROUND --- */}
            {/* Soft Light Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50"></div>
            
            {/* Subtle World Map Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden flex items-center justify-center">
                <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                   alt="" 
                   className="w-[110%] h-auto grayscale brightness-0 select-none"
                />
            </div>
            
            {/* Radial glow for center balance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002B5B] mb-6 tracking-tight font-premium"
                    >
                        Smart Packaging for Every Industry
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Explore our specialized packaging solutions, carefully crafted for diverse industries with precision, durability, and innovation.
                    </motion.p>
                </div>

                {/* --- CURVED INDUSTRY LAYOUT (DESKTOP) --- */}
                <div className="relative h-[420px] w-full mt-12 hidden lg:block">
                    {/* Decorative Curve Line (Subtle) */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" viewBox="0 0 1400 400">
                        <path
                            d="M 140 250 Q 700 -190 1260 250"
                            stroke="#002B5B"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="8 8"
                        />
                    </svg>

                    {industries.map((ind, idx) => (
                        <motion.div
                            key={ind.id}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                delay: idx * 0.12, 
                                duration: 0.8, 
                                ease: [0.21, 1.02, 0.73, 0.99] 
                            }}
                            viewport={{ once: true }}
                            className="absolute z-20"
                            style={positions[idx]}
                        >
                            <div className="group relative w-[260px] h-[140px] rounded-full overflow-hidden shadow-2xl transition-all duration-500 cursor-default border-4 border-white backdrop-blur-sm hover:scale-105 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] ring-1 ring-slate-200">
                                {/* Background Image */}
                                <img 
                                    src={ind.img} 
                                    alt={ind.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/70 transition-opacity duration-300" />

                                {/* Industry Name */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                                        {ind.title}
                                    </h3>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- RESPONSIVE LAYOUT (TABLET/MOBILE) --- */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {industries.map((ind, idx) => (
                        <motion.div 
                            key={ind.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-full h-[140px] rounded-full overflow-hidden border-4 border-white shadow-xl group"
                        >
                            <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-center">
                                <h3 className="text-white font-bold text-xl">{ind.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Industries;
