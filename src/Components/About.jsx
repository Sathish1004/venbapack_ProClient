import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CorrugatedImg from '../assets/corrugated.jpg';
import WhatWeDoBg from '../assets/Quality3d.jpg';

const About = () => {
const testimonials = [
  {
    name: "Lakshmi Industries",
    type: "FMCG Client",
    stars: 5,
    text: "VenbaPack provides high-quality, eco-friendly packaging that aligns perfectly with our brand values. Reliable and professional service."
  },
  {
    name: "Harish Traders",
    type: "Retail Distributor",
    stars: 5,
    text: "Best quality corrugated boxes we have used so far. The durability is unmatched in the market."
  },
  {
    name: "Sri Krishna Exports",
    type: "Textile Partner",
    stars: 5,
    text: "Their specialized textile tubes are perfect. We've seen a 20% reduction in transit damage since switching."
  },
  {
    name: "Global Logistics",
    type: "Agri Exporter",
    stars: 5,
    text: "Efficient production and timely delivery. Their boxes withstand cross-border shipping perfectly."
  }
];

const formatBrandText = (text) => {
  if (!text) return text;
  const parts = text.split(/(VenbaPack)/g);
  return parts.map((part, i) => 
    part === "VenbaPack" ? <span key={i} className="venbapack-brand">VenbaPack</span> : part
  );
};

const TestimonialCard = ({ offset }) => {
  const [index, setIndex] = React.useState(offset % testimonials.length);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden w-full aspect-square max-w-[420px] group/card">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[index].stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-1 font-premium uppercase tracking-tighter">
              {testimonials[index].name}
            </h4>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-80">
              {testimonials[index].type}
            </p>
            
            <p className="text-slate-600 italic leading-relaxed text-base md:text-lg px-2 line-clamp-4">
              "{formatBrandText(testimonials[index].text)}"
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button 
                onClick={(e) => { e.stopPropagation(); prev(); }} 
                className="w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all pointer-events-auto active:scale-90"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); next(); }} 
                className="w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all pointer-events-auto active:scale-90"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>

        <div className="absolute bottom-4 flex flex-col items-center gap-6">
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full ${index === i ? 'w-8 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-12 font-sans">
      
      {/* HERO BANNER - TOP CONTAINER (AMALAN STYLE) */}
      <section className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full-Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/rectangele_abotu..png" 
            alt="VenbaPack Global Packaging Solutions" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          {/* Optional Small Text Above Title */}
          <p className="text-[#1E73FF] text-sm md:text-base font-semibold tracking-[1px] mb-4 uppercase">
            
          </p>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            About Us
          </h1>
          
          {/* Gold Accent Line */}
          <div className="w-[120px] h-[3px] bg-[#D4AF37] mx-auto" />
        </motion.div>
      </section>

      {/* ABOUT VENBAPACK – SINGLE FULL-WIDTH SECTION */}
      <section className="w-full bg-white py-8 px-[3%]">
        <div className="max-w-full mx-auto">
          
          {/* Full-Width Gradient Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF2] rounded-[24px] p-12 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
          >
            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0B1220] mb-8 text-center">
              About <span className="venbapack-brand">VenbaPack Industries</span>
            </h2>

            {/* Description Text */}
            <div className="space-y-6 text-[#4A5568] text-[18.5px] md:text-[18px] leading-[1.8] max-w-full mx-auto">
              <p>
                Founded with a core focus on manufacturing excellence, <span className="font-bold text-[#0B1220] venbapack-brand">VenbaPack Industries</span> has spent over a decade perfecting the art of industrial packaging. Our state-of-the-art facility in Coimbatore serves as the hub for precision engineering, where we transform raw materials into high-performance packaging solutions that protect your most valuable goods.
              </p>

              <p>
                We specialize in a massive array of products—from heavy-duty corrugated boxes and industrial-grade rolls to custom-designed die-cut solutions. Each product we manufacture undergoes rigorous quality checks to ensure it meets international standards for crush strength, moisture resistance, and edge protection. Our commitment to using eco-conscious materials means we help your brand reduce its carbon footprint without sacrificing durability or safety.
              </p>

              <p>
                By partnering with leading brands across the Textile, Agriculture, FMCG, and Industrial sectors, we have built a reputation for deep technical expertise and unwavering reliability. We don't just supply boxes; we provide the strategic packaging engineering that keeps your supply chain moving efficiently and securely.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* VENBAPACK — VISION, MISSION & CORE VALUES */}
      <section className="w-full bg-white py-6">
        <div className="w-full px-[3.5%]">
          
          {/* Section Heading with Animated Underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1633] mb-4">
              OUR PURPOSE, PROMISE & PRINCIPLES
            </h2>
            {/* Animated Blue Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="h-[3px] bg-[#1A73E8] mx-auto rounded-full"
            />
          </motion.div>

          {/* Big Parent Container */}
          <div className="w-full bg-[#F4F6FA] rounded-[16px] py-10 px-[5%]">
            <div className="max-w-[1440px] mx-auto">
              
              {/* Three Cards Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Box 1 — Our Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-[#F0F7FF] to-white rounded-[14px] p-8 shadow-[0px_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] hover:shadow-[0px_10px_30px_rgba(26,115,232,0.25)] border-2 border-[#E3F0FF] hover:border-[#1A73E8] transition-all duration-300"
                >
                  {/* Circular Badge with VenbaPack Logo */}
                  <div className="flex justify-start mb-6">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4A9FF5] flex items-center justify-center shadow-lg">
                      <img 
                        src="/VenbaPack_MainLogo.png" 
                        alt="VenbaPack Vision" 
                        className="w-[35px] h-[35px] object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A73E8] mb-4 text-left">
                    Our Vision
                  </h3>
                  <p className="text-[#334155] text-[15px] leading-relaxed text-left">
                    To lead the industry in sustainable packaging through innovation, quality, and global excellence.
                  </p>
                </motion.div>

                {/* Box 2 — Our Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-[#FCF0F7] to-white rounded-[14px] p-8 shadow-[0px_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] hover:shadow-[0px_10px_30px_rgba(233,30,99,0.25)] border-2 border-[#FFE8F3] hover:border-[#E91E63] transition-all duration-300"
                >
                  {/* Circular Badge with VenbaPack Logo (Pink/Purple) */}
                  <div className="flex justify-start mb-6">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center shadow-lg">
                      <img 
                        src="/VenbaPack_MainLogo.png" 
                        alt="VenbaPack Mission" 
                        className="w-[35px] h-[35px] object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#E91E63] mb-4 text-left">
                    Our Mission
                  </h3>
                  <p className="text-[#334155] text-[15px] leading-relaxed text-left">
                    To provide high-quality, eco-friendly packaging that ensures product safety and operational efficiency.
                  </p>
                </motion.div>

                {/* Box 3 — Our Core Values */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-[#F0F7FF] to-white rounded-[14px] p-8 shadow-[0px_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] hover:shadow-[0px_10px_30px_rgba(26,115,232,0.25)] border-2 border-[#E3F0FF] hover:border-[#1A73E8] transition-all duration-300"
                >
                  {/* Circular Badge with VenbaPack Logo (Blue Theme) */}
                  <div className="flex justify-start mb-6">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4A9FF5] flex items-center justify-center shadow-lg">
                      <img 
                        src="/VenbaPack_MainLogo.png" 
                        alt="VenbaPack Core Values" 
                        className="w-[35px] h-[35px] object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A73E8] mb-4 text-left">
                    Core Values
                  </h3>
                  <p className="text-[#334155] text-[15px] leading-relaxed text-left">
                    Excellence in manufacturing, sustainability, innovation, and trust in every partnership.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — REPLACED TRANSPORT SECTION */}
      <section className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center py-16 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Warehouse Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-[480px]">
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" 
                    alt="Modern Warehouse Logistics" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              {/* Subtitle */}
              <span className="text-blue-600 font-bold text-base md:text-lg tracking-[0.25em] uppercase mb-6 block font-industrial">
                WHY CHOOSE US
              </span>
              
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-black text-[#0B1633] mb-6 tracking-tight leading-[1.1]">
                Complete Packaging & <br className="hidden md:block" />Logistics Solutions
              </h2>
              
              {/* Description */}
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
                We combine decades of industrial expertise with modern machinery and a powerful delivery network to ensure your products are protected and delivered with absolute precision.
              </p>

              {/* Feature Cards */}
              <div className="space-y-4">
                {[
                  {
                    title: "Advanced Manufacturing",
                    desc: "Corrugated boxes, PP woven sacks, and gum tapes produced with high-precision technology.",
                    icon: "🏗️",
                    bgColor: "bg-blue-50",
                    iconColor: "text-blue-600"
                  },
                  {
                    title: "Strong Supply Chain",
                    desc: "Efficient storage, handling, and fast order processing to keep your business moving.",
                    icon: "📦",
                    bgColor: "bg-indigo-50",
                    iconColor: "text-indigo-600"
                  },
                  {
                    title: "Reliable Delivery",
                    desc: "Safe, on-time logistics across regions with professional coordination and real-time tracking.",
                    icon: "🚚",
                    bgColor: "bg-emerald-50",
                    iconColor: "text-emerald-600"
                  }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-[20px] border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.iconColor} flex items-center justify-center text-2xl shadow-sm shrink-0 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0B1633] mb-1">{feature.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full px-[3%]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-premium">
              Customer <span className="text-blue-600">Reviews</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
            
            {/* Left Card: Slider 1 */}
            <div className="hidden lg:flex justify-center">
               <TestimonialCard offset={0} />
            </div>

            {/* Center: Static Image */}
            <div className="order-first lg:order-none flex justify-center">
                <div className="w-full max-w-[450px] aspect-square rounded-[40px] overflow-hidden shadow-2xl relative group">
                    <img 
                      src="/custoemr review .jpg" 
                      alt="Feedback Center" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex flex-col items-center justify-center text-center p-8">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-[1] font-premium">
                          Your feedback <br /> is our strength!
                        </h3>
                        <div className="flex gap-1.5 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                            ))}
                        </div>
                        <p className="text-white/90 text-sm md:text-base font-bold uppercase tracking-widest max-w-[200px]">
                          Share your experience and help us grow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Card: Slider 2 */}
            <div className="flex justify-center">
               <TestimonialCard offset={1} />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 – CTA */}
      <section className="w-full py-20 relative overflow-hidden">
        {/* Light Gradient Background with Subtle Packaging Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] to-white">
          {/* Blurred Background Image */}
          <div 
            className="absolute inset-0 opacity-[0.12] blur-[10px]"
            style={{
              backgroundImage: `url(${CorrugatedImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        {/* Full Width Content Container */}
        <div className="w-full px-[2.5%] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] py-20 px-8 md:px-16 text-center w-full"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-6">
            YOUR PACKAGING PARTNER <span className="text-[#1E73FF]">FOR EVERY CUSTOMER SEGMENT</span>
            </h2>
            
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Partner with an industry leader committed to quality, sustainability, and innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#1E73FF] text-white rounded-full font-semibold hover:bg-[#1557CC] transition-all shadow-lg flex items-center justify-center gap-3 group"
              >
                Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/products" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center uppercase tracking-wider"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
