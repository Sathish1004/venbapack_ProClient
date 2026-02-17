import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import TextileImg from '../assets/Textileindustrty.jpg';
import AgriImg from '../assets/Agri_industry.jpg';
import FMCGImg from '../assets/FMCG.jpg';
import FMDGImg from '../assets/FMDG.jpg';
import ElectricalImg from '../assets/Electronics .jpg';

const Industries = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const industries = [
        {
            id: 'textile',
            title: 'Textile Industry',
            img: TextileImg,
        },
        {
            id: 'agri',
            title: 'Agri Industry',
            img: AgriImg,
        },
        {
            id: 'fmcg',
            title: 'FMCG',
            img: FMCGImg,
        },
        {
            id: 'fmdg',
            title: 'FMDG',
            img: FMDGImg,
        },
        {
            id: 'electrical',
            title: 'Electrical Products',
            img: ElectricalImg,
        },
    ];

    // Perfect curved arc positioning with equal spacing
    const curvePositions = [
        { top: '50%', left: '8%' },     // Textile (Left)
        { top: '20%', left: '23%' },    // Agri (Left-Top)
        { top: '8%', left: '50%', transform: 'translateX(-50%)' },  // FMCG (Center Top)
        { top: '20%', right: '23%' },   // FMDG (Right-Top)
        { top: '50%', right: '8%' },    // Electrical (Right)
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-slate-900 pt-32 pb-32 font-sans relative overflow-hidden">
            
            {/* --- PREMIUM BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 opacity-[0.04] blur-[6px]"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-100/20 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-3 block"
                    >
                        Our Business Sectors
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight"
                    >
                        Smart Packaging <br className="hidden md:block" />
                        <span className="text-blue-900">For Every Industry</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Explore our specialized packaging solutions, carefully crafted for diverse industries with precision, durability, and innovation.
                    </motion.p>
                </div>

                {/* --- CURVED INDUSTRY SELECTOR (STATIC) --- */}
                <div className="relative min-h-[500px] flex items-center justify-center">
                    
                    {/* Decorative Curve Line */}
                    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1200 600">
                        <path
                            d="M 150 350 Q 350 120, 600 80 T 1050 350"
                            stroke="#00008B"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="10 10"
                        />
                    </svg>

                    {/* OVAL INDUSTRY CARDS (DESKTOP) */}
                    <div className="hidden lg:block absolute inset-0">
                        {industries.map((ind, idx) => {
                            const pos = curvePositions[idx];
                            const isHovered = hoveredId === ind.id;

                            return (
                                <motion.div
                                    key={ind.id}
                                    onMouseEnter={() => setHoveredId(ind.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="absolute cursor-pointer group"
                                    style={pos}
                                    initial={{ opacity: 0, y: 30, scale: 0.85 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        scale: 1
                                    }}
                                    transition={{ delay: idx * 0.12, duration: 0.6, ease: "backOut" }}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                >
                                    {/* HORIZONTAL OVAL CARD */}
                                    <div className={`
                                        w-[260px] h-[140px] rounded-full overflow-hidden relative transition-all duration-500
                                        ${isHovered 
                                            ? 'ring-[5px] ring-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.45)]' 
                                            : 'ring-[3px] ring-white shadow-2xl'
                                        }
                                    `}>
                                        {/* Background Image */}
                                        <img 
                                            src={ind.img} 
                                            alt={ind.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Gradient Overlay */}
                                        <div className={`
                                            absolute inset-0 transition-all duration-500 flex items-center justify-center
                                            ${isHovered 
                                                ? 'bg-gradient-to-br from-orange-500/40 via-orange-600/30 to-blue-900/40' 
                                                : 'bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70'
                                            }
                                        `} />

                                        {/* Industry Name */}
                                        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                            <h3 className="text-white font-black text-xl leading-tight tracking-tight">
                                                {ind.title}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* MOBILE: Horizontal Scroll Ovals */}
                    <div className="lg:hidden flex gap-4 px-6 overflow-x-auto no-scrollbar pb-6 w-full">
                        {industries.map((ind, idx) => (
                            <motion.div 
                                key={ind.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="shrink-0 w-[220px] h-[120px] rounded-full overflow-hidden relative cursor-pointer ring-[3px] ring-white shadow-xl hover:ring-orange-400 transition-all duration-300 group"
                            >
                                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 group-hover:from-orange-500/40 group-hover:via-orange-600/30 group-hover:to-blue-900/40 transition-all duration-500 flex items-center justify-center">
                                    <h3 className="text-white font-black text-base text-center px-4">{ind.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Industries;
