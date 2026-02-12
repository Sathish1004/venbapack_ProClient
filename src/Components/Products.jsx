import React from "react";
import { ArrowRight, Box, Truck, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Products = () => {
  const allProducts = [
    {
      id: "corrugated-boxes",
      title: "Corrugated Boxes",
      desc: "Heavy-duty corrugated boxes engineered for maximum stacking strength and superior crush resistance. Designed for industrial shipping and warehouse storage, these boxes provide reliable protection for every delivery, ensuring your products remain secure throughout the entire supply chain journey.",
      img: "/outcorugated.png",
    },
    {
      id: "corrugated-rolls",
      title: "Corrugated Rolls & Sheets",
      desc: "Shock-absorbing rolls and sheets provide versatile cushioning for irregular items and fragile components. These premium materials protect against vibrations, impacts, and scratches during industrial transit, offering flexible wrapping solutions that conform to any product shape or size requirement.",
      img: "/rollsout.png",
    },
    {
      id: "die-cut",
      title: "Die Cut Boxes",
      desc: "Precision die-cut packaging for products requiring an exact fit and custom dimensions. These innovative tape-free solutions offer professional aesthetics with rugged industrial-grade protection, featuring easy assembly designs that reduce packaging time while maintaining structural integrity and brand presentation excellence.",
      img: "/die_cutout.png",
    },
    {
      id: "raffia-bags",
      title: "Raffia Grade Bundle Bags",
      desc: "High-strength woven bags for industrial bulk storage and transport of agricultural and textile products. These moisture-resistant bags handle heavy weights with ease and absolute security, featuring reinforced stitching and UV-stabilized materials that ensure long-lasting durability in demanding outdoor and warehouse environments.",
      img: "/raffiaoutc.png",
    },
    {
      id: "gum-tapes",
      title: "Gum Tapes",
      desc: "Advanced adhesive gum tapes create permanent, tamper-evident bonds on corrugated surfaces for maximum security. These professional-grade tapes provide essential moisture protection for global shipping operations, featuring water-activated adhesive technology that penetrates box fibers to create an unbreakable seal resistant to temperature fluctuations.",
      img: "/gumtapeout.png",
    },
    {
      id: "box-straps",
      title: "Box Straps",
      desc: "High-tensile box straps for secure bundling of heavy export loads and consolidated shipments. Manufactured from superior polyester with exceptional break strength, they ensure stable and unified cargo during handling, featuring weather-resistant properties and consistent tension retention that prevents load shifting throughout international transit.",
      img: "/strapbox copy.png",
    },
    {
      id: "strapping-tools",
      title: "Strapping Tools",
      desc: "Ergonomic strapping tools optimized for high-speed industrial operations and repetitive packaging tasks. These durable professional tools allow for consistent tensioning and secure sealing with minimal effort, reducing operator fatigue while increasing productivity through precision-engineered mechanisms designed for thousands of reliable cycles.",
      img: "/toolsboxx.png",
    },
    {
      id: "stitching-ropes",
      title: "Bundle Stitching Ropes & Tools",
      desc: "Premium nylon and cotton ropes for reliable bundle security and traditional packaging methods. These high-strength solutions ensure tight closures during long-distance industrial transport, offering excellent knot retention and abrasion resistance that withstands rough handling while maintaining bundle integrity across diverse shipping conditions.",
      img: "/outbundele.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-12 font-sans">
      
      {/* HERO BANNER - TOP CONTAINER */}
      <section className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full-Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/product banner.png" 
            alt="VenbaPack Product Solutions" 
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
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider">
            Our Products
          </h1>
          
          {/* Gold Accent Line */}
          <div className="w-[120px] h-[3px] bg-[#D4AF37] mx-auto" />
        </motion.div>
      </section>

      {/* PRODUCTS GRID SECTION */}
      <section className="bg-white py-[60px] px-4 md:px-[2%] relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F0F7FF] via-white to-[#F0F7FF] opacity-70" />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-[0.05] grayscale"
          />
        </div>

        <div className="max-w-[1490px] mx-auto relative z-10">
          
          {/* Section Heading - Centered */}
          <div className="text-center mb-20 max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-5xl font-black tracking-tighter text-slate-800 mb-6">
                Core Product Line
              </h2>
              <div className="w-24 h-1.5 bg-[#1E73FF] mx-auto rounded-full shadow-lg shadow-blue-200 mb-10" />
              
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed italic font-serif-premium">
                Advanced industrial packaging solutions engineered for maximum durability, absolute safety, and seamless global logistics excellence.
              </p>
            </motion.div>
          </div>
          
          {/* Flexbox container with items-stretch to ensure all children have the same height */}
          <div className="flex flex-wrap justify-center gap-[24px] items-stretch">
            {allProducts.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group hover:shadow-[0px_10px_30px_rgba(0,0,0,0.12)] transition-all duration-500 border border-slate-100"
              >
                {/* Product Image - Fixed Height for consistency */}
                <div className="h-[225px] w-full overflow-hidden shrink-0">
                   <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                </div>

                {/* Content Area - flex-grow ensures this fills the card height */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  {/* Title - Bold 20px - min-height 2 lines to keep alignment */}
                  <h3 className="text-[22px] font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight min-h-[54px] flex items-center justify-center text-center">
                    {prod.title}
                  </h3>

                  {/* Description Box with Curved Blue Accent Strip - Fixed min-height for uniform alignment */}
                  <div className="relative mb-4 bg-[#F9FAFB] rounded-[12px] p-4 border border-slate-50 overflow-hidden flex-grow min-h-[105px] flex items-center justify-center">
                    
                    <p className="text-[16px] text-slate-900 leading-relaxed font-premium text-center font-medium">
                       {prod.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* GLOBAL LOGISTICS & IEC SECTION */}
      {/* GLOBAL LOGISTICS & IEC SECTION - LIGHT MIRROR THEME */}
      <section className="bg-white py-0 overflow-hidden">
        <div className="w-full bg-gradient-to-r from-[#F0F7FF] via-[#FFFFFF] to-[#F0F7FF] flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Subtle Reflective Mirror Overlay */}
          <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />

          {/* LEFT SIDE — IMAGE CONTAINER (50%) */}
          <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[450px] flex items-center justify-center p-6 md:p-12 z-10">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-[0px_20px_45px_rgba(30,115,255,0.1)] border border-white/80">
              <img 
                src="/mapinconatiner.jpg" 
                alt="Global Logistics & Trade Map" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT SIDE — TEXT CONTAINER (50%) */}
          <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-20 flex flex-col justify-center relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-8 text-slate-800 font-premium tracking-tight uppercase">
                We import premium raw materials 
              </h2>

              <div className="space-y-6">
                <p className="text-slate-600 text-sm md:text-base lg:text-xl leading-relaxed font-premium text-justify lg:text-left font-medium">
                  The Importer Exporter Code (IEC) is a key business identification number mandatory for exports or imports. No person shall make any import or export except under an IEC Number granted by the Directorate General of Foreign Trade (DGFT). This 10-digit code is essential for businesses engaged in international trade, as it facilitates seamless transactions and compliance with global trade regulations. The IEC is required for customs clearance, foreign exchange transactions, and availing export incentives.
                </p>
                
                <div className="pt-8 flex items-center gap-4">
                  <div className="w-16 h-[2.5px] bg-blue-500/30 rounded-full" />
                  <span className="text-[11px] uppercase tracking-[0.4em] font-black text-blue-600/70">Global Logistics Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
