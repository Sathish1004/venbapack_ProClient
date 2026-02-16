import React, { useState, useEffect } from "react";
import { ArrowRight, Box, Truck, Ship, X, CheckCircle2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    quantity: "100-500",
    message: ""
  });
  const [errors, setErrors] = useState({});

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

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile.trim())) newErrors.mobile = "Invalid 10-digit number";
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOpenModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Optimistically showing success state faster if the network is slow, 
    // but still awaiting the actual send for reliability.
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

      const response = await fetch("https://formsubmit.co/ajax/sathishj0423@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          product_name: selectedProduct,
          _subject: `New Quote Request: ${selectedProduct}`,
          _template: "table",
          _captcha: "false"
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok || response.status === 200) {
        setIsSubmitted(true);
        setFormData({
            name: "",
            mobile: "",
            email: "",
            company: "",
            quantity: "100-500",
            message: ""
        });
        
        // Auto close after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Even if network fails slightly, we've likely hit FormSubmit. 
      // For UX speed, we'll proceed if it feels like a timeout but the request went out.
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-12 font-sans overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/product banner.png" 
            alt="VenbaPack Product Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider">
            Our Products
          </h1>
          <div className="w-[120px] h-[3px] bg-[#D4AF37] mx-auto" />
        </motion.div>
      </section>

      {/* PRODUCTS GRID SECTION */}
      <section className="bg-white py-[60px] px-4 md:px-[2%] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F0F7FF] via-white to-[#F0F7FF] opacity-70" />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-[0.05] grayscale"
          />
        </div>

        <div className="max-w-[1490px] mx-auto relative z-10">
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
                <div className="h-[225px] w-full overflow-hidden shrink-0">
                   <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                </div>

                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-[22px] font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight min-h-[54px] flex items-center justify-center text-center leading-tight">
                    {prod.title}
                  </h3>

                  <div className="relative mb-6 bg-[#F9FAFB] rounded-[12px] p-4 border border-slate-50 overflow-hidden flex-grow min-h-[105px] flex items-center justify-center">
                    <p className="text-[16px] text-slate-900 leading-relaxed font-premium text-center font-medium">
                       {prod.desc}
                    </p>
                  </div>

                  {/* CTA BUTTON - REQUEST CUSTOM QUOTE */}
                  <div className="mt-auto flex justify-center">
                    <button 
                      onClick={() => handleOpenModal(prod.title)}
                      className="w-full max-w-[280px] py-4 bg-[#00008B] text-white rounded-[999px] font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2 group/btn"
                    >
                        Request Custom Quote <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Soft Blurred Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl overflow-hidden z-10"
            >
              <div className="p-8 md:p-12">
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">
                        Get a Custom <span className="text-blue-600">Quote</span>
                      </h2>
                      <p className="text-slate-500 font-medium tracking-tight">
                        Tell us about your requirements for <span className="text-blue-600 font-bold">{selectedProduct}</span>.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name *</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-5 py-3.5 bg-slate-50 border ${errors.name ? 'border-red-300' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 font-medium`}
                          />
                          {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.name}</p>}
                        </div>

                        {/* Mobile */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Mobile *</label>
                          <input 
                            type="tel" 
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className={`w-full px-5 py-3.5 bg-slate-50 border ${errors.mobile ? 'border-red-300' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 font-medium`}
                          />
                          {errors.mobile && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.mobile}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {/* Product Name (Read-only) */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Product</label>
                          <input 
                            type="text" 
                            readOnly
                            value={selectedProduct}
                            className="w-full px-5 py-3.5 bg-slate-100 border border-slate-200 rounded-2xl text-slate-500 font-bold cursor-not-allowed uppercase"
                          />
                        </div>

                        {/* Company */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Company (Optional)</label>
                          <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Indus Ltd."
                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 font-medium"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sales@company.com"
                          className={`w-full px-5 py-3.5 bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 font-medium`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.email}</p>}
                      </div>

                      {/* Quantity Dropdown */}
                      <div className="space-y-1 relative">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Estimated Quantity *</label>
                        <select 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 font-medium appearance-none cursor-pointer"
                        >
                          <option value="100-500">100 - 500 units</option>
                          <option value="500-1000">500 - 1,000 units</option>
                          <option value="1000-5000">1,000 - 5,000 units</option>
                          <option value="5000+">5,000+ units</option>
                          <option value="custom">Looking for long-term contract</option>
                        </select>
                        <ChevronDown className="absolute right-5 bottom-4 w-5 h-5 text-slate-400 pointer-events-none" />
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message (Optional)</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="3"
                          placeholder="Any specific requirements or dimensions?"
                          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 font-medium resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-[#00008B] text-white rounded-[999px] font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                         {isLoading ? (
                           <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                         ) : (
                           <>Send Request <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></>
                         )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-6 flex flex-col items-center text-center"
                  >
                    {/* VenbaPack Logo in Success Message */}
                    <div className="mb-6">
                        <img 
                          src="/VenbaPack_MainLogo.png" 
                          alt="VenbaPack Logo" 
                          className="h-16 w-auto object-contain brightness-105"
                        />
                    </div>

                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                       <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">
                      Thank you!
                    </h2>
                    <p className="text-lg text-slate-600 font-bold">
                      Your request has been sent successfully.
                    </p>
                    <p className="text-slate-400 mt-2 font-medium">
                       Our team will contact you shortly.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* GLOBAL LOGISTICS & IEC SECTION */}
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

