import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CorrugatedImg from '../assets/corrugated.jpg';

const About = () => {
  // Left review cards data (rotates independently)
  const leftReviews = [
    {
      name: "Lakshmi Industries",
      role: "FMCG Client",
      text: "VenbaPack provides high-quality, eco-friendly packaging that aligns perfectly with our brand values. Reliable and professional service."
    },
    {
      name: "Arun Agro Foods",
      role: "Agriculture Sector",
      text: "Their packaging keeps our produce fresh and safe during transport. Excellent quality!"
    },
    {
      name: "Kumar Exports",
      role: "Food Supplier",
      text: "Strong cartons and timely delivery. Very satisfied with VenbaPack."
    }
  ];

  // Right review cards data (rotates independently)
  const rightReviews = [
    {
      name: "Tech Electronics Ltd",
      role: "Electronics Manufacturer",
      text: "VenbaPack's custom packaging provides excellent protection for our sensitive products."
    },
    {
      name: "Ramesh Kumar",
      role: "Logistics Partner",
      text: "Lightweight yet durable cartons have improved our shipping efficiency."
    },
    {
      name: "Harish Traders",
      role: "Retail Distributor",
      text: "Best quality corrugated boxes we have used so far."
    }
  ];

  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
  const [currentRightIndex, setCurrentRightIndex] = useState(0);

  // Left card navigation
  const handleLeftPrev = () => {
    setCurrentLeftIndex((prev) => (prev === 0 ? leftReviews.length - 1 : prev - 1));
  };

  const handleLeftNext = () => {
    setCurrentLeftIndex((prev) => (prev === leftReviews.length - 1 ? 0 : prev + 1));
  };

  // Right card navigation
  const handleRightPrev = () => {
    setCurrentRightIndex((prev) => (prev === 0 ? rightReviews.length - 1 : prev - 1));
  };

  const handleRightNext = () => {
    setCurrentRightIndex((prev) => (prev === rightReviews.length - 1 ? 0 : prev + 1));
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
      <section className="w-full bg-white py-8 px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          
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
              About VenbaPack Industries
            </h2>

            {/* Description Text */}
            <div className="space-y-6 text-[#4A5568] text-[16.5px] md:text-[18px] leading-[1.8] max-w-[1100px] mx-auto">
              <p>
                Founded with a core focus on manufacturing excellence, <span className="font-bold text-[#0B1220]">VenbaPack Industries</span> has spent over a decade perfecting the art of industrial packaging. Our state-of-the-art facility in Coimbatore serves as the hub for precision engineering, where we transform raw materials into high-performance packaging solutions that protect your most valuable goods.
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
        <div className="w-full px-[5%]">
          
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
            <div className="max-w-[1400px] mx-auto">
              
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
                    To become a globally trusted leader in sustainable and innovative packaging solutions, 
                    empowering businesses with durable, eco-conscious, and high-performance industrial packaging.
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
                    To deliver high-quality, cost-effective, and environmentally responsible packaging solutions 
                    that enhance product safety, branding, and operational efficiency for our clients.
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
                    We are guided by quality and precision in manufacturing, sustainability and eco responsibility, 
                    innovation in packaging design, a customer-centric approach, and unwavering reliability and trust 
                    in everything we do.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT & LOGISTICS SERVICES */}
      <section className="w-full bg-white py-12 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F0F7FF] via-white to-[#F0F7FF] opacity-70" />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80" 
            alt="Logistics Background" 
            className="w-full h-full object-cover opacity-[0.05] grayscale"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-[5%] relative z-10">
          
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#0B1633] mb-4 tracking-tight">
              TRANSPORT SERVICES
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto mb-6 rounded-full" />
            <p className="text-[17px] text-[#475569] max-w-3xl mx-auto leading-relaxed font-medium">
              Seamless, secure, and efficient logistics to deliver VenbaPack packaging solutions across industries and borders.
            </p>
          </motion.div>

          {/* Transport Boxes Grid - 4 Cards in Row with Up-Down Pattern */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Box 1 - Truck Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-[#2F3F2A] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/5 hover:bg-[#1E5AFF] hover:border-[#1E5AFF] hover:-translate-y-3 transition-all duration-500"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" 
                  alt="Truck Transport" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-blue-900/40" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-white flex items-center justify-center text-xl shadow-lg border border-white/20 transition-colors">🚚</div>
                   <h3 className="text-xl font-bold text-white tracking-tight">Truck Transport</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#D1D5DB] group-hover:text-white text-[15px] leading-relaxed transition-colors">
                  Reliable nationwide transport for safe and timely delivery of corrugated boxes and packaging materials.
                </p>
              </div>
            </motion.div>

            {/* Box 2 - Ocean Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-[#2F3F2A] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/5 hover:bg-[#1E5AFF] hover:border-[#1E5AFF] hover:-translate-y-3 transition-all duration-500 md:mt-12"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" 
                  alt="Sea Shipping" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-blue-900/40" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-white flex items-center justify-center text-xl shadow-lg border border-white/20 transition-colors">🚢</div>
                   <h3 className="text-xl font-bold text-white tracking-tight">Ocean Transport</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#D1D5DB] group-hover:text-white text-[15px] leading-relaxed transition-colors">
                  Cost-effective bulk shipping for international clients, ensuring secure and damage-free transit.
                </p>
              </div>
            </motion.div>

            {/* Box 3 - Air Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-[#2F3F2A] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/5 hover:bg-[#1E5AFF] hover:border-[#1E5AFF] hover:-translate-y-3 transition-all duration-500"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" 
                  alt="Air Cargo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-blue-900/40" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-white flex items-center justify-center text-xl shadow-lg border border-white/20 transition-colors">✈️</div>
                   <h3 className="text-xl font-bold text-white tracking-tight">Air Delivery</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#D1D5DB] group-hover:text-white text-[15px] leading-relaxed transition-colors">
                  Fast and secure air delivery for urgent packaging orders, ensuring quick turnaround worldwide.
                </p>
              </div>
            </motion.div>

            {/* Box 4 - Rail Logistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-[#2F3F2A] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/5 hover:bg-[#1E5AFF] hover:border-[#1E5AFF] hover:-translate-y-3 transition-all duration-500 md:mt-12"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80" 
                  alt="Rail Transport" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-blue-900/40" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-white flex items-center justify-center text-xl shadow-lg border border-white/20 transition-colors">🚂</div>
                   <h3 className="text-xl font-bold text-white tracking-tight">Rail Logistics</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#D1D5DB] group-hover:text-white text-[15px] leading-relaxed transition-colors">
                  Cost-effective bulk transport with eco-friendly efficiency for large-scale packaging deliveries.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* CUSTOMER REVIEWS SECTION */}
      <section className="w-full bg-white py-14 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute top-10 left-10 text-8xl">🌿</div>
          <div className="absolute bottom-20 left-20 text-7xl">📦</div>
          <div className="absolute top-1/3 right-10 text-6xl">🍃</div>
        </div>

        <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
          
          {/* Section Title with Animated Underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F7A3D] mb-3">
              Customer Reviews
            </h2>
            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
              className="h-[3px] bg-[#0F7A3D] mx-auto rounded-full"
            />
          </motion.div>

          {/* 3-Column Layout: Left Card | Center Fixed Card | Right Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* LEFT REVIEW CARD (SLIDES INDEPENDENTLY) */}
            <motion.div
              key={`left-${currentLeftIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-[14px] p-6 shadow-lg hover:-translate-y-[5px] hover:shadow-2xl hover:border-2 hover:border-[#1E5CFF] transition-all duration-300 border-2 border-transparent"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              {/* Name */}
              <h4 className="text-lg font-bold text-[#0B1633] mb-1">
                {leftReviews[currentLeftIndex].name}
              </h4>
              <p className="text-sm text-[#1E5CFF] mb-4">{leftReviews[currentLeftIndex].role}</p>
              
              {/* Review Text */}
              <p className="text-[#334155] text-[14px] leading-relaxed mb-6">
                "{leftReviews[currentLeftIndex].text}"
              </p>
              
              {/* Navigation Arrows - Only controls LEFT card */}
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={handleLeftPrev}
                  className="w-9 h-9 rounded-full bg-[#1E5CFF] text-white flex items-center justify-center hover:bg-[#0B5ED7] transition-colors text-lg font-bold"
                  aria-label="Previous left review"
                >
                  ◀
                </button>
                <button 
                  onClick={handleLeftNext}
                  className="w-9 h-9 rounded-full bg-[#1E5CFF] text-white flex items-center justify-center hover:bg-[#0B5ED7] transition-colors text-lg font-bold"
                  aria-label="Next left review"
                >
                  ▶
                </button>
              </div>
            </motion.div>

            {/* CENTER FIXED CARD (NEVER MOVES OR CHANGES) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[16px] overflow-hidden shadow-2xl h-[450px] flex items-center justify-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                   src="/custoemr review .jpg" 
                   alt="VenbaPack Customer Review" 
                   className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              {/* Content - FIXED, NEVER CHANGES */}
              <div className="relative z-10 text-center px-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Your feedback<br />is our strength!
                </h3>
                
                {/* Stars */}
                <div className="flex gap-2 justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-4xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-white text-lg leading-relaxed">
                  Share your experience<br />and help us grow.
                </p>
              </div>
            </motion.div>

            {/* RIGHT REVIEW CARD (SLIDES INDEPENDENTLY) */}
            <motion.div
              key={`right-${currentRightIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-[14px] p-6 shadow-lg hover:-translate-y-[5px] hover:shadow-2xl hover:border-2 hover:border-[#1E5CFF] transition-all duration-300 border-2 border-transparent"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              {/* Name */}
              <h4 className="text-lg font-bold text-[#0B1633] mb-1">
                {rightReviews[currentRightIndex].name}
              </h4>
              <p className="text-sm text-[#1E5CFF] mb-4">{rightReviews[currentRightIndex].role}</p>
              
              {/* Review Text */}
              <p className="text-[#334155] text-[14px] leading-relaxed mb-6">
                "{rightReviews[currentRightIndex].text}"
              </p>
              
              {/* Navigation Arrows - Only controls RIGHT card */}
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={handleRightPrev}
                  className="w-9 h-9 rounded-full bg-[#1E5CFF] text-white flex items-center justify-center hover:bg-[#0B5ED7] transition-colors text-lg font-bold"
                  aria-label="Previous right review"
                >
                  ◀
                </button>
                <button 
                  onClick={handleRightNext}
                  className="w-9 h-9 rounded-full bg-[#1E5CFF] text-white flex items-center justify-center hover:bg-[#0B5ED7] transition-colors text-lg font-bold"
                  aria-label="Next right review"
                >
                  ▶
                </button>
              </div>
            </motion.div>

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
        <div className="w-full px-[5%] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] py-20 px-8 md:px-16 text-center w-full"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-6">
              Your Packaging <span className="text-[#1E73FF]">Partner Awaits</span>
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
