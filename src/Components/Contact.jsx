import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';
import ContactHeroImg from '../assets/contactpage.jpg';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-20">
      
      {/* HERO BANNER SECTION - MAXIMIZED HEIGHT */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-end overflow-hidden bg-[#e2eff5]">
        
        {/* Seamless Background Image - Positioned Left */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact phn.jpg" 
            alt="" 
            className="w-full h-full object-cover object-left md:object-left-top opacity-90"
          />
          
          {/* Mirror Shade Reflective Overlays */}
          <div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-white/70 via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-white/60 via-white/20 to-transparent pointer-events-none" />
          
          {/* Gradual Fade to Content Side */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#e2eff5] via-[#e2eff5]/40 to-transparent" />
        </div>

        {/* Content Container - Right Aligned with Seamless Integration */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-right flex flex-col items-end"
          >
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-4 uppercase tracking-tighter font-premium leading-[0.9]">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            
            {/* Gold Accent Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[4px] bg-[#D4AF37] rounded-full shadow-lg shadow-yellow-600/10 mb-6" 
            />

            <p className="text-slate-700 text-sm md:text-base font-medium max-w-lg leading-relaxed font-premium opacity-90 text-justify">
              Reach out to our engineering team for bespoke packaging 
              solutions, custom technical specifications, and global trade compliance expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION - COMPACT SINGLE SCREEN VIEW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
           
           {/* LEFT COLUMN: INFO CARD + MAP */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col gap-5 h-full"
           >
              {/* 1. Contact Info Card */}
              <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
                 <div className="space-y-6 relative z-10">
                    
                    {/* HQ */}
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                          <MapPin className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Our HQ</h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">123 Industrial Estate, Phase III,<br />Coimbatore, Tamil Nadu – 641001</p>
                       </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                          <Phone className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Phone</h4>
                          <p className="text-slate-600 font-bold mb-0.5 text-base">+91 98765 43210</p>
                          <p className="text-slate-400 text-xs font-medium">Mon–Fri, 9am – 6pm IST</p>
                       </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 shadow-sm">
                          <Mail className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Email</h4>
                          <p className="text-slate-500 text-sm font-medium">sales@venbapack.com</p>
                          <p className="text-slate-500 text-sm font-medium">support@venbapack.com</p>
                       </div>
                    </div>

                    {/* Response Text */}
                    <div className="pt-3 border-t border-slate-50">
                       <p className="text-emerald-600 font-bold text-xs flex items-center gap-2">
                          <span className="animate-pulse"></span> We usually respond within 24 hours.
                       </p>
                    </div>
                 </div>
              </div>

              {/* 2. Live Map Container */}
              <div className="w-full h-[250px] bg-slate-100 rounded-[24px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.208177579899!2d76.9558323!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1652796345678!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VenbaPack HQ Map"
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
              </div>
           </motion.div>

           {/* RIGHT COLUMN: FORM */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="bg-white p-8 md:p-12 rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col justify-center"
           >
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Send Us a Message</h3>
              <form className="space-y-6">
                 
                 {/* Name Field */}
                 <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400" placeholder="Your Name" required />
                 </div>

                 {/* Phone Field */}
                 <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400" placeholder="Your Phone Number" required />
                 </div>

                 {/* Email Field */}
                 <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400" placeholder="your@email.com" required />
                 </div>

                 {/* Message Field */}
                 <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Message</label>
                    <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400 resize-none" placeholder="Tell us about your requirements..."></textarea>
                 </div>

                 <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl text-base shadow-lg hover:brightness-110 transition-all uppercase tracking-widest mt-2"
                 >
                   Forward Inquiry
                 </motion.button>
              </form>
           </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
