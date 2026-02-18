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
    const [currentWhySlide, setCurrentWhySlide] = useState(0);
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
                    <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-slate-100 p-12 py-16">
                        
                        {/* Optional Center Title */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Industries We Serve</p>
                        </div>

                        {/* Curved Industry Cards Layout with Arrows & Descriptions */}
                        <div className="relative h-[500px] w-full">
                            
                            {/* Curved Dashed Path (Decorative Background Only) */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 1400 500" preserveAspectRatio="none">
                                <path
                                    d="M 100 350 Q 700 50 1300 350"
                                    stroke="#001F3F"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="10 10"
                                />
                            </svg>

                            {/* Industry Cards with Vertical Layout: Card → Arrow → Text */}
                            {industries.map((ind, idx) => {
                                const isActive = activeId === ind.id;
                                const descriptions = [
                                    { title: "Secure export packaging", subtitle: "for bulk shipments" },
                                    { title: "Moisture-controlled cartons", subtitle: "for fresh produce" },
                                    { title: "High-speed packaging flow", subtitle: "for retail distribution" },
                                    { title: "Heavy-duty corrugated boxes", subtitle: "for industrial transport" },
                                    { title: "Shock-proof precision packing", subtitle: "for sensitive equipment" }
                                ];
                                
                                // Vertical positioning for each card group
                                const cardPositions = [
                                    { left: '10%', top: '280px' },  // Textile - bottom-left
                                    { left: '25%', top: '140px' },  // Agri - upper-left (moved right)
                                    { left: '43%', top: '40px' },   // FMCG - top-center (hero)
                                    { left: '61%', top: '140px' },  // FMDG - upper-right (moved left)
                                    { left: '76%', top: '280px' }   // Electrical - bottom-right
                                ];

                                return (
                                    <motion.div
                                        key={ind.id}
                                        id={ind.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                                        viewport={{ once: true }}
                                        className="absolute z-20 scroll-mt-32 flex flex-col items-center"
                                        style={{ 
                                            left: cardPositions[idx].left, 
                                            top: cardPositions[idx].top,
                                            transform: 'translateX(-50%)'
                                        }}
                                        onMouseEnter={() => setActiveId(ind.id)}
                                        onClick={() => handleIndustryClick(ind.id)}
                                    >
                                        {/* Card */}
                                        <div className={`relative w-[200px] h-[110px] rounded-full overflow-hidden shadow-xl transition-all duration-500 cursor-pointer border-[4px] ${isActive ? 'border-blue-600 scale-110 shadow-blue-200' : 'border-white'} backdrop-blur-[2px] hover:scale-105 hover:shadow-2xl hover:border-blue-400 ring-1 ring-slate-100/50 mb-3`}>
                                            <img src={ind.img} alt={ind.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                                                <h3 className="text-white font-bold text-sm tracking-wide px-4 leading-tight drop-shadow-md">{ind.title}</h3>
                                            </div>
                                        </div>

                                        {/* Downward Arrow */}
                                        <svg 
                                            className="w-6 h-6 mb-2 transition-all duration-300"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M12 4 L12 18 M12 18 L8 14 M12 18 L16 14"
                                                stroke={isActive ? "#2563eb" : "#cbd5e1"}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-300 group-hover:stroke-blue-600"
                                            />
                                        </svg>

                                        {/* Text Description (Vertical Group) */}
                                        <div className={`text-center max-w-[160px] transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                                            <p className={`text-xs font-semibold leading-tight mb-1 ${isActive ? 'text-slate-800' : 'text-slate-600'} transition-all duration-300`}>
                                                {descriptions[idx].title}
                                            </p>
                                            <p className="text-xs text-slate-400 leading-tight">
                                                {descriptions[idx].subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
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
                            {/* LEFT SIDE: IMAGE CAROUSEL WITH LAYERED CARDS */}
                            <div className="w-full lg:w-[55%] bg-[#0A111F] relative p-8 md:p-12 overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-auto">
                                {/* Subtle Animated Background Glows */}
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
                                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full" />
                                </div>

                                {/* STACKED CARD CAROUSEL WITH Z-AXIS SWAP ANIMATION */}
                                <div className="relative w-full h-[300px] md:h-[450px] max-w-[600px] z-10 flex items-center justify-center">
                                    {/* Calculate indices for 3 visible cards */}
                                    {[2, 1, 0].map((offset) => {
                                        const imageIndex = (currentWhySlide + offset) % activeIndustry.images.length;
                                        const isActive = offset === 0;
                                        const isSecondary = offset === 1;
                                        const isBackground = offset === 2;

                                        return (
                                            <motion.div
                                                key={`${activeId}-${imageIndex}-${offset}`}
                                                initial={false}
                                                animate={{
                                                    scale: isActive ? 1.02 : isSecondary ? 0.95 : 0.88,
                                                    x: isActive ? '20%' : isSecondary ? '5%' : '-5%',
                                                    y: isActive ? '15%' : isSecondary ? '5%' : '10%',
                                                    rotate: isActive ? 0 : isSecondary ? -3 : -8,
                                                    opacity: isActive ? 1 : isSecondary ? 0.9 : 0.6,
                                                    zIndex: isActive ? 30 : isSecondary ? 20 : 10
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: [0.23, 1, 0.32, 1]
                                                }}
                                                className="absolute w-[50%] md:w-[55%] h-[50%] md:h-[60%] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl"
                                                style={{
                                                    border: isActive ? '4px solid white' : isSecondary ? '4px solid rgba(255,255,255,0.1)' : '4px solid rgba(255,255,255,0.05)'
                                                }}
                                            >
                                                <img 
                                                    src={activeIndustry.images[imageIndex]} 
                                                    className="w-full h-full object-cover" 
                                                    alt="" 
                                                />
                                                <div className={`absolute inset-0 ${isActive ? 'bg-black/10' : isSecondary ? 'bg-black/20' : 'bg-black/30'}`} />
                                                
                                                {/* Industry Label on Active Card */}
                                                {isActive && (
                                                    <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-6">
                                                        <p className="text-white font-black text-sm md:text-xl uppercase tracking-tighter leading-none">
                                                            {activeIndustry.title}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* CAROUSEL ARROW BUTTONS */}
                                <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-40">
                                    {/* Left Arrow */}
                                    <button
                                        onClick={() => setCurrentWhySlide((prev) => (prev - 1 + activeIndustry.images.length) % activeIndustry.images.length)}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 shadow-lg pointer-events-auto group active:scale-95"
                                    >
                                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    {/* Right Arrow */}
                                    <button
                                        onClick={() => setCurrentWhySlide((prev) => (prev + 1) % activeIndustry.images.length)}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 shadow-lg pointer-events-auto group active:scale-95"
                                    >
                                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT SIDE: CLEAN CONTENT UI */}
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
                                    <div className="space-y-4 md:space-y-5">
                                        {activeIndustry.details.map((detail, i) => (
                                            <motion.div 
                                                key={i} 
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="flex items-center gap-3 md:gap-4 group"
                                            >
                                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-800 font-bold text-sm md:text-base">{detail}</span>
                                            </motion.div>
                                        ))}
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
