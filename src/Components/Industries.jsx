import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Sprout, ShoppingBag, Truck, Zap, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

import TextileImg from '../assets/Textileindustrty.jpg';
import AgriImg from '../assets/Agri_industry.jpg';
import FMCGImg from '../assets/FMCG.jpg';
import FMDGImg from '../assets/FMDG.jpg';
import ElectricalImg from '../assets/Electronics .jpg';

const Industries = () => {
    // Default to the first industry
    const [selectedId, setSelectedId] = useState('textile');

    const industries = [
        {
            id: 'textile',
            title: 'Textile Industry',
            subtitle: "Fabric & Garment Protection",
            desc: 'Our textile packaging solutions are designed to protect delicate fabrics and garments from moisture, dust, and transit damage. We offer specialized paper tubes for winding fabrics and durable corrugated boxes for export.',
            features: ["Moisture-resistant coatings", "High-crush strength tubes", "Export-compliant standards"],
            icon: Shirt,
            img: TextileImg,
        },
        {
            id: 'agri',
            title: 'Agri Industry',
            subtitle: "Fresh Produce & Farm Supplies",
            desc: 'We understand the perishable nature of agricultural produce. Our ventilated boxes and robust crates ensure optimal airflow, maintaining freshness from farm to market while withstanding stacking pressures.',
            features: ["Ventilated box designs", "Food-grade materials", "Heavy-duty construction"],
            icon: Sprout,
            img: AgriImg,
        },
        {
            id: 'fmcg',
            title: 'FMCG Sector',
            subtitle: "Fast Moving Consumer Goods",
            desc: 'High-volume packaging solutions for fast-moving consumer goods. Our automated line-ready boxes ensure efficiency in packing while providing shelf-ready aesthetics for retail environments.',
            features: ["Retail-ready packaging", "Brand customization", "High-speed production"],
            icon: ShoppingBag,
            img: FMCGImg,
        },
        {
            id: 'fmdg',
            title: 'FMDG Sector',
            subtitle: "Fast Moving Durable Goods",
            desc: 'Engineered protection for durable goods like appliances, furniture, and kitchenware. Our solutions focus on impact resistance and abrasion protection during long-haul logistics.',
            features: ["Impact absorption", "Corner protection", "Custom fit inserts"],
            icon: Truck,
            img: FMDGImg,
        },
        {
            id: 'electrical',
            title: 'Electrical & Industrial',
            subtitle: "Static & Shock Protection",
            desc: 'Sensitive electronics require specialized care. We provide anti-static options and shock-absorbing corrugated structures to prevent damage to fragile components during shipping.',
            features: ["Anti-static materials", "Precise die-cut inserts", "Shock-proof design"],
            icon: Zap,
            img: ElectricalImg,
        },
    ];

    const activeIndustry = industries.find(ind => ind.id === selectedId) || industries[0];

    return (
        <div className="bg-white min-h-screen text-slate-900 pt-20 font-sans">
            
            {/* --- HEADER SECTION --- */}
            <section className="py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50 to-white opacity-80 -z-10" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-yellow-600 font-bold tracking-widest uppercase text-xs mb-3 block">Sectors We Serve</span>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 text-slate-900 font-premium uppercase tracking-tighter">
                           Industries & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Expertise</span>
                        </h1>
                        <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-serif-premium italic">
                             "Tailored packaging excellence across diverse global sectors"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT: 2-COLUMN LAYOUT --- */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    
                    {/* LEFT COLUMN: INTERACTIVE IMAGE LIST */}
                    <div className="flex flex-col gap-4">
                         {industries.map((ind) => (
                             <motion.div 
                                key={ind.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedId(ind.id)}
                                className={`relative h-28 md:h-32 w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                                    selectedId === ind.id 
                                    ? 'ring-2 ring-yellow-500 shadow-xl shadow-yellow-500/20' 
                                    : 'opacity-80 hover:opacity-100 shadow-md hover:shadow-lg'
                                }`}
                             >
                                 {/* Background Image */}
                                 <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                 
                                 {/* Gradient Overlay */}
                                 <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent transition-opacity ${selectedId === ind.id ? 'opacity-100' : 'opacity-80'}`} />

                                 {/* Content Overlay */}
                                 <div className="absolute inset-0 flex items-center justify-between px-6 md:px-8 z-10">
                                     <div>
                                         <h3 className={`text-lg md:text-xl font-bold ${selectedId === ind.id ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                                            {ind.title}
                                         </h3>
                                         {selectedId === ind.id && (
                                             <motion.div layoutId="underline" className="h-1 w-12 bg-yellow-500 rounded-full mt-2" />
                                         )}
                                     </div>
                                     <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
                                         selectedId === ind.id ? 'bg-yellow-500 text-white' : 'bg-white/20 text-white group-hover:bg-white group-hover:text-slate-900'
                                     }`}>
                                         {selectedId === ind.id ? <ArrowRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                     </div>
                                 </div>
                             </motion.div>
                         ))}
                    </div>

                    {/* RIGHT COLUMN: DYNAMIC CONTENT CARD */}
                    <div className="relative sticky top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndustry.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50"
                            >
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 font-premium uppercase">{activeIndustry.title}</h2>
                                <h3 className="text-lg font-bold text-blue-600 mb-8 font-premium tracking-[0.2em] uppercase opacity-90">{activeIndustry.subtitle}</h3>
                                
                                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                    {activeIndustry.desc}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {activeIndustry.features.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-yellow-200 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    to="/contact#send-message"
                                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center gap-2 group"
                                >
                                    Get specialized quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Industries;
