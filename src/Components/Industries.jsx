import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Asset Imports
import TextileImg from '../assets/Textileindustrty.jpg';
import AgriImg from '../assets/Agri_industry.jpg';
import FMCGImg from '../assets/FMCG.jpg';
import FMDGImg from '../assets/FMDG.jpg';
import ElectricalImg from '../assets/Electronics .jpg';

const industries = [
    { 
        id: 'textile', 
        title: 'Textile Industry', 
        img: TextileImg,
        description: 'Providing high-strength textile tubes and specialized packaging that protects fabrics during high-speed production and global transit.',
        highlight: '20% Damage Reduction',
        details: [
            "Heavy-duty paper tubes for fabric rolls",
            "Moisture-resistant outer packaging",
            "Custom edge protectors for finished goods"
        ],
        images: [
            "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80",
            "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=600&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80"
        ]
    },
    { 
        id: 'agri', 
        title: 'Agri Industry', 
        img: AgriImg,
        description: 'Engineered ventilated boxes and moisture-resistant rolls designed to preserve the freshness of agricultural products from farm to fork.',
        highlight: 'Freshness Guaranteed',
        details: [
            "Ventilated corrugated boxes for produce",
            "Bulk bins for large-scale grain storage",
            "UV-protected packaging for outdoor storage"
        ],
        images: [
            "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=600&q=80",
            "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80",
            "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80"
        ]
    },
    { 
        id: 'fmcg', 
        title: 'FMCG', 
        img: FMCGImg,
        description: 'Reliable secondary packaging solutions for fast-moving consumer goods, ensuring shelf-ready precision and transit durability.',
        highlight: 'Shelf-Ready Precision',
        details: [
            "Automated packing line compatible boxes",
            "Multi-color printed retail displays",
            "High-crush strength shipping cartons"
        ],
        images: [
            "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80",
            "https://images.unsplash.com/photo-1506484334402-40ff22e0d467?w=600&q=80"
        ]
    },
    { 
        id: 'fmdg', 
        title: 'FMDG', 
        img: FMDGImg,
        description: 'Specialized packaging for heavy industrial and durable goods, focusing on extreme load-bearing capacity and impact protection.',
        highlight: 'Extreme Load Bearing',
        details: [
            "Double & triple wall corrugated sheets",
            "Heavy-duty timber-hybrid packaging",
            "Anti-static protection for machinery"
        ],
        images: [
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
            "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
            "https://images.unsplash.com/photo-1580674285054-9304e1417ca4?w=600&q=80"
        ]
    },
    { 
        id: 'electrical', 
        title: 'Electrical Products', 
        img: ElectricalImg,
        description: 'Precision packaging for delicate electrical components, utilizing ESD-safe materials and advanced cushioning technology.',
        highlight: 'ESD-Safe Protection',
        details: [
            "Custom die-cut inserts for components",
            "Anti-static bubble wrap and rolls",
            "Reinforced boxes for heavy appliances"
        ],
        images: [
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
            "https://images.unsplash.com/photo-1580584126748-52ce94656bb8?w=600&q=80",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
        ]
    },
];

const Industries = () => {
    const [activeId, setActiveId] = useState('textile');
    const detailRef = useRef(null);
    const location = useLocation();

    // Symmetrical Curve Positions (Adjusted for overlapping container)
    const positions = [
        { left: '8%', top: '220px' },
        { left: '26%', top: '90px' },
        { left: '44%', top: '20px' },
        { left: '62%', top: '90px' },
        { left: '80%', top: '220px' },
    ];

    const activeIndustry = industries.find(ind => ind.id === activeId);

    // Handle initial hash or hash changes
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash && industries.some(ind => ind.id === hash)) {
            setActiveId(hash);
            // Smaller timeout for direct navigation
            setTimeout(() => {
                detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        }
    }, [location.hash]);

    const handleIndustryClick = (id) => {
        setActiveId(id);
        // Give a small delay for the state update, then scroll
        setTimeout(() => {
            detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    return (
        <section id="sectors" className="relative w-full overflow-hidden bg-white font-sans">
            
            {/* --- HERO SECTION WITH GLOBE BACKGROUND --- */}
            <div className="relative w-full min-h-[70vh] flex items-center justify-center pt-32 md:pt-36 pb-48 md:pb-56">
                
                {/* Background Globe/Map */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 via-white to-slate-100"></div>
                <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none flex items-center justify-center">
                    <img 
                       src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                       alt="" 
                       className="w-[85%] h-auto grayscale"
                    />
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 z-0" />

                {/* Hero Content - Centered */}
                <div className="relative z-10 w-full max-w-[900px] px-6 text-center">
                    {/* Top Tagline */}
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6"
                    >
                        Delivering Excellence Worldwide
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001F3F] mb-4 leading-tight tracking-tight"
                    >
                        Smart Packaging Solutions
                    </motion.h1>

                    {/* Gradient Highlight Text */}
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700"
                    >
                        Across the Globe
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        From precision-engineered corrugated boxes to industrial-strength packaging materials, 
                        we deliver reliable solutions that protect your products and optimize your supply chain across every industry.
                    </motion.p>
                </div>

                {/* --- OVERLAPPING INDUSTRY CARDS CONTAINER --- */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-[1400px] px-6 z-20 hidden lg:block">
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-white/60 p-12 min-h-[500px]">
                        
                        {/* Curved Industry Cards Layout */}
                        <div className="relative h-[480px] w-full">
                            
                            {/* Curved Dashed Path */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" viewBox="0 0 1400 480" preserveAspectRatio="none">
                                <path
                                    d="M 100 380 Q 700 -80 1300 380"
                                    stroke="#001F3F"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="10 10"
                                />
                            </svg>

                            {/* Industry Cards */}
                            {industries.map((ind, idx) => {
                                const cardPositions = [
                                    { left: '5%', top: '320px' },
                                    { left: '22%', top: '160px' },
                                    { left: '42%', top: '60px' },
                                    { left: '62%', top: '160px' },
                                    { left: '79%', top: '320px' },
                                ];
                                
                                return (
                                    <motion.div
                                        key={ind.id}
                                        id={ind.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="absolute z-10 scroll-mt-32"
                                        style={{ 
                                            left: cardPositions[idx].left, 
                                            top: cardPositions[idx].top,
                                            transform: 'translateX(-50%)'
                                        }}
                                        onMouseEnter={() => setActiveId(ind.id)}
                                        onClick={() => handleIndustryClick(ind.id)}
                                    >
                                        <div className={`group relative w-[200px] h-[110px] rounded-full overflow-hidden shadow-lg transition-all duration-500 cursor-pointer border-[3px] ${activeId === ind.id ? 'border-blue-600 scale-110' : 'border-white'} hover:scale-105 hover:shadow-xl`}>
                                            <img src={ind.img} alt={ind.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />
                                            <div className="absolute inset-0 flex items-center justify-center p-3 text-center">
                                                <h3 className="text-white font-bold text-sm tracking-wide leading-tight drop-shadow-lg">{ind.title}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* CENTER GLASSMORPHISM CONTENT BLOCK */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[520px]"
                            >
                                <div className="relative bg-white/95 backdrop-blur-2xl rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/80 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] transition-all duration-500">
                                    
                                    {/* Top Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-3xl shadow-lg">
                                            🌐
                                        </div>
                                    </div>

                                    {/* Heading */}
                                    <h3 className="text-2xl font-black text-[#001F3F] text-center mb-3 leading-tight">
                                        Integrated Logistics & <br />Packaging Solutions
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm text-center leading-relaxed mb-6">
                                        We deliver end-to-end packaging and logistics support tailored for diverse industries. From lightweight retail distribution to heavy industrial transport, our solutions ensure safety, speed, and reliability.
                                    </p>

                                    {/* 5 Highlight Points - 2 Column Layout */}
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            { icon: '👔', title: 'Textile', desc: 'Export-ready carton structuring' },
                                            { icon: '🌾', title: 'Agri', desc: 'Ventilated & moisture-controlled boxes' },
                                            { icon: '🛒', title: 'FMCG', desc: 'High-volume rapid packaging systems' },
                                            { icon: '📦', title: 'FMDG', desc: 'Reinforced heavy-load protection' },
                                            { icon: '⚡', title: 'Electrical', desc: 'Anti-static & shock-safe packaging' }
                                        ].map((item, idx) => (
                                            <motion.div 
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (idx * 0.1) }}
                                                className="flex items-center gap-3 group/item"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-base shrink-0 group-hover/item:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-bold text-[#001F3F] leading-tight">
                                                        <span className="text-blue-600">{item.title}</span> – {item.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Decorative Corner Accents */}
                                    <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-blue-200 rounded-tr-2xl opacity-40" />
                                    <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-blue-200 rounded-bl-2xl opacity-40" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SPACING FOR OVERLAPPING CARDS --- */}
            <div className="h-48 lg:h-56 bg-gradient-to-b from-slate-100 to-white"></div>

            <div className="w-full max-w-[1600px] px-6 mx-auto relative z-10 flex flex-col items-center">

                {/* --- INTERACTIVE DETAIL CONTAINER (Now Responsive) --- */}
                <div ref={detailRef} className="w-full mt-16 scroll-mt-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full flex flex-col lg:flex-row rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-[8px] md:border-[12px] border-white min-h-[500px] md:min-h-[600px] relative bg-white"
                        >
                            {/* LEFT SIDE: CREATIVE DARK THEME IMAGE UI */}
                            <div className="w-full lg:w-[55%] bg-[#0A111F] relative p-8 md:p-12 overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-auto">
                                {/* Subtle Animated Background Glows */}
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
                                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full" />
                                </div>

                                {/* STAGGERED 3-IMAGE LAYOUT */}
                                <div className="relative w-full h-[300px] md:h-[450px] max-w-[600px] z-10 flex items-center justify-center">
                                    {/* Image 3 (Bottom Layer / Back) */}
                                    <motion.div 
                                        initial={{ opacity: 0, rotate: -5, x: 20 }}
                                        animate={{ opacity: 1, rotate: -8, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute top-[10%] left-[5%] w-[60%] md:w-[65%] h-[60%] md:h-[70%] rounded-[24px] md:rounded-[32px] overflow-hidden border-4 border-white/5 shadow-2xl grayscale-[0.2]"
                                    >
                                        <img src={activeIndustry.images[2]} className="w-full h-full object-cover" alt="" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </motion.div>

                                    {/* Image 2 (Middle Layer) */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="absolute bottom-[5%] right-[5%] w-[55%] md:w-[60%] h-[55%] md:h-[65%] rounded-[24px] md:rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl"
                                    >
                                        <img src={activeIndustry.images[1]} className="w-full h-full object-cover" alt="" />
                                        <div className="absolute inset-0 bg-black/10" />
                                    </motion.div>

                                    {/* Image 1 (Front / Focus) */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="absolute top-[15%] left-[20%] w-[50%] md:w-[55%] h-[50%] md:h-[60%] rounded-[24px] md:rounded-[32px] overflow-hidden border-[4px] md:border-[6px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20"
                                    >
                                        <img src={activeIndustry.images[0]} className="w-full h-full object-cover" alt="" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-6">
                                            <p className="text-white font-black text-sm md:text-xl uppercase tracking-tighter leading-none">{activeIndustry.title}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* RIGHT SIDE: PREMIUM CONTENT UI */}
                            <div className="w-full lg:w-[45%] bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase rounded-full mb-6">
                                        Tailored Industry Solutions
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001F3F] mb-6 md:mb-8 leading-[1.1] md:leading-[1] tracking-tighter">
                                        Precision Driven <br/>
                                        <span className="text-blue-600">{activeIndustry.title}.</span>
                                    </h2>
                                    <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                                        {activeIndustry.description}
                                    </p>

                                    {/* Checklist */}
                                    <div className="space-y-4 md:space-y-5 mb-10 md:mb-12">
                                        {activeIndustry.details.map((detail, i) => (
                                            <motion.div 
                                                key={i} 
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="flex items-center gap-3 md:gap-4 group"
                                            >
                                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-800 font-bold text-sm md:text-base">{detail}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Footer Info / Badge & CTA */}
                                    <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 md:pt-10 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center gap-6">
                                            <div className="text-center">
                                                <p className="text-blue-600 font-black text-2xl md:text-3xl leading-none">99.9%</p>
                                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Reliability</p>
                                            </div>
                                            <div className="h-10 w-[2px] bg-slate-100" />
                                            <div>
                                                <p className="text-[#001F3F] font-bold text-xs md:text-sm leading-tight text-center sm:text-left">ISO Certified <br/>Packaging Standards</p>
                                            </div>
                                        </div>
                                        
                                        <button className="flex-1 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-blue-600 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 hover:bg-[#001F3F] hover:-translate-y-1 transition-all duration-300">
                                            Get a Custom Quote
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- MOBILE LAYOUT SLOTS --- */}
                <div className="lg:hidden flex flex-col items-center gap-10 w-full max-w-md px-4 mt-16">
                    {industries.map((ind, idx) => (
                        <motion.div 
                            key={ind.id}
                            id={ind.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            onClick={() => handleIndustryClick(ind.id)}
                            className={`relative w-full h-[150px] rounded-full overflow-hidden border-[4px] shadow-lg group transition-all duration-300 scroll-mt-32 ${activeId === ind.id ? 'border-blue-600 scale-[1.03]' : 'border-white'}`}
                        >
                            <img src={ind.img} alt={ind.title} className="w-full h-full object-cover transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6 text-center">
                                <h3 className="text-white font-extrabold text-2xl drop-shadow-lg">{ind.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Industries;
