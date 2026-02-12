import React, { useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Box, ChevronRight, ShieldCheck, Truck, Leaf, Factory, Layers, Star, ShoppingBag, Scissors, Award, Heart, Utensils, Shirt, Sprout, Zap, ArrowUpRight, CheckCircle2, Package } from 'lucide-react';
import CorrugatedImg from '../assets/corrugated.jpg';
import RolledBoxImg from '../assets/Rolledbox.jpg'; // Keep for "Rolls"
import DieCutImg from '../assets/Die_Cut.jpg';
import AgriImg from '../assets/3D-Agri.png';
import AgriVegImg from '../assets/Agri_industry.jpg'; // Vegetable asset
import BiscuitImg from '../assets/biscuts packeges .jpeg';
import FMCGNewImg from '../assets/FMCG .jpeg';
import IndustrialDurablImg from '../assets/FMDGDurabl-3D.jpeg';
import TextileBoxImg from '../assets/Textileindustrty.jpg';
import FMCGBoxImgAsset from '../assets/FMCG.jpg';
import ElectricalImg from '../assets/Electronics .jpg';
import ApexBoxesImg from '../assets/apex boxes.jpg';
import FMDGBoxImg from '../assets/FMDG.jpg';
import HeroBg from '../assets/venbapack_hero_background.png';
import WhatWeDoBg from '../assets/Quality3d.jpg';
import { Link } from 'react-router-dom';
import FloatingBoxImg from '../assets/floating_box_dark.png';
import FloatingRollImg from '../assets/floating_roll_dark.png';
import RaffiaImg from '../assets/raffiabags.png';
import ManufactureImg from '../assets/manhufacture3d.jpg';
import PackagingImg from '../assets/package.jpg';
import MainBacck from '../assets/MainBacck.jpg';
import FinalLogo from '../assets/final_logo.jpeg';
import HeroBGImg from '../assets/HeroBG.png';
import FastMarquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

// Safe import helper for Marquee
const Marquee = (typeof FastMarquee === 'object' && FastMarquee.default) ? FastMarquee.default : FastMarquee;

const BestChoiceIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24">
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E2E8F0" strokeWidth="1" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.2" />
    <path d="M50 20 L55 35 L70 35 L58 43 L62 58 L50 50 L38 58 L42 43 L30 35 L45 35 Z" fill="#3B82F6" />
    <text x="50" y="68" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#1E293B" textAnchor="middle" style={{ letterSpacing: '0.1em' }}>PRECISION</text>
    <text x="50" y="78" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#1E293B" textAnchor="middle" style={{ letterSpacing: '0.1em' }}>QUALITY</text>
  </svg>
);

const QualitySealIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24">
    <path d="M50 5 L55 15 L65 15 L70 25 L80 25 L80 35 L90 40 L85 50 L90 60 L80 65 L80 75 L70 75 L65 85 L55 85 L50 95 L45 85 L35 85 L30 75 L20 75 L20 65 L10 60 L15 50 L10 40 L20 35 L20 25 L30 25 L35 15 L45 15 Z" fill="#F8FAFC" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" />
    <circle cx="50" cy="50" r="30" fill="white" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2" />
    <path d="M40 45 L50 35 L60 45 L60 65 L40 65 Z" fill="#3B82F6" fillOpacity="0.1" />
    <path d="M42 55 L48 61 L58 49" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50" y="78" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1E293B" textAnchor="middle" letterSpacing="1">DURABILITY</text>
  </svg>
);

const EcoFriendlyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="8" strokeOpacity="0.1" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M50 30 C60 30 65 40 65 50 C65 65 50 75 50 75 C50 75 35 65 35 50 C35 40 40 30 50 30 Z" fill="#10B981" fillOpacity="0.1" />
    <path d="M50 35 L50 65 M40 50 L60 50" fill="none" stroke="#10B981" strokeWidth="2" strokeOpacity="0.4" />
    <text x="50" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="#059669" textAnchor="middle">ECO</text>
    <path id="curve" d="M25 72 A30 30 0 0 0 75 72" fill="none" />
    <text fontSize="8" fontWeight="bold" fill="#059669" textAnchor="middle">
      <textPath href="#curve" startOffset="50%">FRIENDLY</textPath>
    </text>
  </svg>
);

const BestPriceIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24">
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E2E8F0" strokeWidth="1" />
    <rect x="22" y="22" width="56" height="56" rx="8" fill="#2563EB" transform="rotate(45 50 50)" />
    <text x="50" y="46" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="white" textAnchor="middle" style={{ letterSpacing: '0.05em' }}>BEST</text>
    <text x="50" y="62" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="white" textAnchor="middle" style={{ letterSpacing: '0.05em' }}>VALUE</text>
  </svg>
);

const Home = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Simple entry animation for hero content
      gsap.from(".hero-content", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const showcaseProducts = [
    { 
       id: 1, 
       name: "Corrugated Boxes", 
       desc: "Custom sizes for all industries", 
       img: AgriImg, 
       icon: Box
    },
    { 
       id: 2, 
       name: "Corrugated Rolls", 
       desc: "Flexible packaging solutions", 
       img: RolledBoxImg, 
       icon: Layers
    },
    { 
       id: 3, 
       name: "Die Cut Boxes", 
       desc: "Precision engineered designs", 
       img: BiscuitImg, 
       icon: Scissors
    },
    { 
       id: 4, 
       name: "Bundle Bags", 
       desc: "Heavy-duty raffia grade", 
       img: FMCGNewImg, 
       icon: ShoppingBag 
    },
  ];

  const industriesContent = [
    {
      id: 'textile',
      title: 'Textile Industry',
      subtitle: "Fabric & Garment Protection",
      desc: 'Our textile packaging solutions are designed to protect delicate fabrics and garments from moisture, dust, and transit damage. We offer specialized paper tubes for winding fabrics and durable corrugated boxes for export.',
      features: ["Moisture-resistant coatings", "High-crush strength tubes", "Export-compliant standards"],
      img: TextileBoxImg,
    },
    {
      id: 'agri',
      title: 'Agri Industry',
      subtitle: "Fresh Produce & Farm Supplies",
      desc: 'We understand the perishable nature of agricultural produce. Our ventilated boxes and robust crates ensure optimal airflow, maintaining freshness from farm to market while withstanding stacking pressures.',
      features: ["Ventilated box designs", "Food-grade materials", "Heavy-duty construction"],
      img: ApexBoxesImg,
    },
    {
      id: 'fmcg',
      title: 'FMCG Sector',
      subtitle: "Fast Moving Consumer Goods",
      desc: 'High-volume packaging solutions for fast-moving consumer goods. Our automated line-ready boxes ensure efficiency in packing while providing shelf-ready aesthetics for retail environments.',
      features: ["Retail-ready packaging", "Brand customization", "High-speed production"],
      img: FMCGBoxImgAsset,
    },
    {
      id: 'fmdg',
      title: 'FMDG Sector',
      subtitle: "Fast Moving Durable Goods",
      desc: 'Engineered protection for durable goods like appliances, furniture, and kitchenware. Our solutions focus on impact resistance and abrasion protection during long-haul logistics.',
      features: ["Impact absorption", "Corner protection", "Custom fit inserts"],
      img: FMDGBoxImg,
    },
    {
      id: 'electrical',
      title: 'Electrical & Industrial',
      subtitle: "Static & Shock Protection",
      desc: 'Sensitive electronics require specialized care. We provide anti-static options and shock-absorbing corrugated structures to prevent damage to fragile components during shipping.',
      features: ["Anti-static materials", "Precise die-cut inserts", "Shock-proof design"],
      img: ElectricalImg,
    },
  ];

  const [activeIndustry, setActiveIndustry] = React.useState(industriesContent[0]);

  const whyVenbaSlides = [ManufactureImg, PackagingImg, AgriImg, FMCGNewImg, IndustrialDurablImg];
  const [currentWhySlide, setCurrentWhySlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % whyVenbaSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [whyVenbaSlides.length]);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div 
        ref={heroRef} 
        className="relative h-screen min-h-[700px] w-full bg-cover bg-center overflow-hidden flex flex-col items-center text-center px-4" 
        style={{ 
          backgroundImage: `url(${HeroBg})`, 
          backgroundColor: '#0f172a' 
        }}
      >
        
        {/* Refined Cinematic Overlay: Lighter to show background branding */}
        <div className="absolute inset-0 bg-slate-900/20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />
        <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay z-0 pointer-events-none" />

        {/* --- HERO CONTENT --- */}
        <div className="relative z-20 max-w-5xl hero-content pt-[25vh] md:pt-[30vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl font-premium uppercase leading-[0.9]">
                 <br /> <span className="text-blue-600"></span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed font-premium opacity-95 drop-shadow-lg">
              Industrial grade corrugated boxes, rolls and bespoke packaging for global enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/products" className="group px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center gap-3 text-lg">
                Explore Products <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact#send-message" className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 rounded-full font-bold transition-all backdrop-blur-md flex items-center justify-center text-lg">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- VENBAPACK INDUSTRIES SECTION --- */}
      <section className="relative py-12 overflow-hidden bg-white">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 w-full px-[3%]">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight mb-2">
              VenbaPack <span className="text-[#1E90FF]">Industries</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E90FF] to-slate-400 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Unified Container with 50-50 Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Side: About Us Text - 50% Width */}
              <div className="p-8 lg:p-12 flex flex-col relative">
                {/* Subtle Background Patterns */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="absolute top-10 left-10 w-16 h-16 border-2 border-slate-400 rounded-lg rotate-12" />
                  <div className="absolute top-32 right-16 w-12 h-12 border-2 border-blue-400 rounded-full" />
                  <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-slate-400 rounded-lg -rotate-6" />
                  <div className="absolute bottom-32 right-12 w-14 h-14 border-2 border-blue-400 rounded-lg rotate-45" />
                  <div className="absolute top-1/2 left-1/4 w-10 h-10 border-2 border-slate-400 rounded-full" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    About Us
                  </h3>
                  
                  <div className="space-y-4 text-slate-700 text-[1.158rem] leading-relaxed font-medium">
                    <p>
                      <span className="font-bold text-slate-900">VenbaPack Industries</span> — With over a decade of expertise, we have established ourselves as a premier provider of high-quality, reliable, and sustainable packaging solutions. Operating from our state-of-the-art manufacturing facility, we serve a global clientele with precision-engineered corrugated packaging and industrial-strength materials.
                    </p>
                    
                    <p>
                      Our specialized approach combines cutting-edge innovation with uncompromising durability. We cater to diverse sectors including <span className="text-blue-600 font-bold">Textile, Agriculture, FMCG, and Industrial Manufacturing</span>, delivering tailor-made solutions that optimize your supply chain while prioritizing moisture resistance, crush strength, and eco-friendly standards.
                    </p>
                    
                    <p>
                      From custom-designed corrugated boxes to heavy-duty industrial packaging, our comprehensive product range meets the unique demands of every industry. We leverage advanced manufacturing technology and rigorous quality control processes to ensure each package delivers maximum protection during storage and transit.
                    </p>
                    
                 
                  </div>
                </div>
              </div>

              {/* Right Side: Image - 50% Width */}
              <div className="p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
                  <img 
                    src="/about main page.png" 
                    alt="VenbaPack Industries Packaging" 
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ maxHeight: '500px', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INDUSTRIES & EXPERTISE SECTION (CONSOLIDATED) --- */}
      <section className="py-8 bg-slate-50/50 relative overflow-hidden border-y border-slate-100">
        <div className="relative z-10 w-full px-[3%]">
          
          {/* Section Header */}
          <div className="text-center mb-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Sectors We Serve</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 font-premium uppercase tracking-tighter">
                  Industries & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Expertise</span>
              </h1>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-serif-premium italic">
                    "Tailored packaging excellence across diverse global sectors"
              </p>
            </motion.div>
          </div>

          {/* 2-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start relative z-10">
            
            {/* LEFT COLUMN: INTERACTIVE IMAGE LIST */}
            <div className="flex flex-col gap-4">
              {industriesContent.map((ind) => (
                <motion.div 
                  key={ind.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIndustry(ind)}
                  className={`relative h-28 md:h-32 w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                    activeIndustry.id === ind.id 
                    ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' 
                    : 'opacity-80 hover:opacity-100 shadow-md hover:shadow-lg'
                  }`}
                >
                  {/* Background Image */}
                  <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent transition-opacity ${activeIndustry.id === ind.id ? 'opacity-100' : 'opacity-80'}`} />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-between px-6 md:px-8 z-10">
                    <div>
                      <h3 className={`text-lg md:text-xl font-bold ${activeIndustry.id === ind.id ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                        {ind.title}
                      </h3>
                      {activeIndustry.id === ind.id && (
                        <motion.div layoutId="underline" className="h-1 w-12 bg-blue-500 rounded-full mt-2" />
                      )}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
                      activeIndustry.id === ind.id ? 'bg-blue-500 text-white' : 'bg-white/20 text-white group-hover:bg-white group-hover:text-slate-900'
                    }`}>
                      {activeIndustry.id === ind.id ? <ArrowRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN: DYNAMIC CONTENT CARD */}
            <div className="relative lg:sticky lg:top-32 overflow-hidden px-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 min-h-[600px]"
                >
                  {/* Header with Shrinking Title and Sliding Image */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <motion.h2 
                        initial={{ fontSize: "2.25rem" }}
                        animate={{ fontSize: "1.875rem" }}
                        transition={{ duration: 0.4 }}
                        className="font-black text-slate-900 mb-1 font-premium uppercase tracking-tighter"
                      >
                        {activeIndustry.title}
                      </motion.h2>
                      <h3 className="text-sm md:text-base font-bold text-blue-600 font-premium tracking-[0.2em] uppercase opacity-90">
                        {activeIndustry.subtitle}
                      </h3>
                    </div>

                    {/* Sliding Small Image Box */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                      className="w-[140px] h-[80px] md:w-[160px] md:h-[100px] bg-white rounded-2xl overflow-hidden shadow-md border border-slate-50 shrink-0"
                    >
                      <img 
                        src={activeIndustry.img} 
                        alt={activeIndustry.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                      />
                    </motion.div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-10 text-[1.1rem]">
                    {activeIndustry.desc}
                  </p>

                  <div className="space-y-4 mb-12">
                    {activeIndustry.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-200/50 shadow-sm hover:border-blue-200 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
                    Get specialized quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
      {/* --- OUR PRODUCT SECTION --- */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="relative z-10 w-full px-[3%]">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-premium">
              OUR <span className="text-blue-700">PRODUCT</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg md:text-xl font-medium mt-4 font-premium opacity-80">
              Innovative Packaging Solutions for Every Industry
            </p>
          </motion.div>

          {/* Product Grid: 2 Rows x 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { name: "Corrugated Boxes", video: "/Corrugated_box...mp4" },
              { name: "Corrugated Rolls & Sheets", video: "/corrugater rollsheet.mp4" },
              { name: "Die Cut Boxes", video: "/packagingfood_3.mp4" },
              { name: "Raffia Grade Bundle Bags", video: "/Packaging_vid1.mp4" },
              { name: "Gum Tapes", video: "/Gum_Tap.mp4" },
              { name: "Box Straps", video: "/Box_Strape.mp4" },
              { name: "Strapping Tools", video: "/strappingtools.mp4" },
              { name: "Bundle Stitching Ropes & Tools", video: "/BundleRopped.mp4" }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col h-full relative"
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.05))' }}
              >
                {/* Top Area: Seamless Video area */}
                <div className="relative h-[300px] overflow-hidden shrink-0 bg-slate-900 z-10">
                  <video
                    key={product.video}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    src={product.video}
                  />
                  {/* Subtle Top Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Bottom Area: Concave Base Container */}
                <div className="flex-grow flex flex-col relative z-20 -mt-14">
                  <div 
                    className="bg-gradient-to-b from-[#0B121A] to-[#04080D] text-white flex flex-col items-center justify-center p-6 transition-all duration-500 min-h-[160px] relative overflow-hidden"
                    style={{ 
                      clipPath: 'ellipse(130% 100% at 50% 100%)',
                      paddingTop: '45px'
                    }}
                  >
                    {/* Shadow for depth where video sits */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                    
                    {/* Simple Centered Product Name */}
                    <h3 className="relative z-10 text-center font-bold text-white text-lg md:text-xl font-premium leading-tight tracking-wide group-hover:text-blue-400 transition-all duration-300">
                      {product.name}
                    </h3>

                    {/* Branding Decorative Line */}
                    <div className="w-12 h-1 bg-blue-600 rounded-full mt-4 opacity-40 group-hover:w-20 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>

                {/* Card Edge Reveal */}
                <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-30" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY WE ARE THE BEST SECTION --- */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="w-full max-w-[95%] mx-auto">
          <div className="bg-gradient-to-br from-[#F0F7FF] to-white rounded-[32px] p-12 md:p-16 border border-blue-100/50 shadow-sm relative overflow-hidden">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase font-premium">
                Why We Are <span className="text-blue-700">the Best</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {/* Block 1: Precision Engineering */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 transition-transform group-hover:scale-110 flex items-center justify-center">
                  <BestChoiceIcon />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 font-premium">Precision Engineering</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  State-of-the-art manufacturing ensures every box meets exact structural standards.
                </p>
              </motion.div>

              {/* Block 2: Unmatched Durability */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 transition-transform group-hover:scale-110 flex items-center justify-center">
                  <QualitySealIcon />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 font-premium">Unmatched Durability</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Heavy-duty materials designed to protect your goods through the toughest journeys.
                </p>
              </motion.div>

              {/* Block 3: Eco-Conscious */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 transition-transform group-hover:scale-110 flex items-center justify-center">
                  <EcoFriendlyIcon />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 font-premium">Eco-Conscious</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  100% recyclable materials and sustainable production processes for a greener future.
                </p>
              </motion.div>

              {/* Block 4: Best Value */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 transition-transform group-hover:scale-110 flex items-center justify-center">
                  <BestPriceIcon />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 font-premium">Best Value</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Premium quality packaging solutions at competitive prices to optimize your bottom line.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full py-8 bg-white relative overflow-hidden flex items-center justify-center border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 font-premium uppercase tracking-tighter leading-[0.9]">
              Ready to Upgrade <br className="hidden md:block" />
              Your <span className="text-blue-600">Packaging?</span>
            </h2>
            
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
              Partner with an industry leader committed to quality, sustainability, and innovative design. 
              Let’s create the perfect solution for your products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                to="/contact#send-message" 
                className="w-full sm:w-auto px-10 py-4 bg-[#0B1C2D] text-white rounded-full font-bold text-base hover:bg-blue-700 transition-all shadow-[0_20px_40px_-15px_rgba(11,28,45,0.3)] flex items-center justify-center gap-3 group"
              >
                Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/products" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-[#0B1C2D] text-[#0B1C2D] rounded-full font-bold text-base hover:bg-slate-50 transition-all flex items-center justify-center font-premium uppercase tracking-widest"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



    </div>
  );
};

export default Home;
