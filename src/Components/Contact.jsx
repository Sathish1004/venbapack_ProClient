import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ContactHeroImg from '../assets/contactpage.jpg';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sathishj0423@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
         setIsSubmitted(true);
         e.target.reset();
      } else {
         setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
       console.error("Error:", error);
       setErrorMessage("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-slate-900 pt-20 relative overflow-hidden">
      
      {/* Premium Mirror Design Background Design */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Architectural Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F9FF] via-[#FFFFFF] to-[#F1F6FE]" />
        
        {/* Soft reflective light blobs (Mirror Reflections) */}
        <div className="absolute top-[10%] -left-[5%] w-[45%] h-[45%] bg-blue-100/40 rounded-full blur-[140px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[50%] bg-indigo-50/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[35%] right-[10%] w-[400px] h-[400px] bg-sky-50/60 rounded-full blur-[90px]" />
        <div className="absolute bottom-[30%] left-[20%] w-[300px] h-[300px] bg-white rounded-full blur-[60px] opacity-60" />
        
        {/* Mirror-like subtle technical grid for depth */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #1E73FF 1px, transparent 1px), linear-gradient(to bottom, #1E73FF 1px, transparent 1px)`,
               backgroundSize: '60px 60px' 
             }} 
        />
        
        {/* Diagonal Light Streak (Mirror Shine) */}
        <div className="absolute inset-0 opacity-[0.02] rotate-12 bg-gradient-to-r from-transparent via-white to-transparent w-[200%] h-full -translate-x-1/2" />
      </div>
      
      {/* HERO BANNER SECTION - FULL WIDTH SINGLE CONTAINER */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-white border-b border-slate-100 shadow-xl">
        
        {/* Full Image Background Container */}
        <div className="absolute inset-0 z-0 bg-white">
           <div 
             className="w-full h-full"
             style={{ 
               backgroundImage: `url("/mainconatct phn.png")`,
               backgroundSize: 'contain',
               backgroundPosition: '15% center',
               backgroundRepeat: 'no-repeat'
             }}
           />
        </div>

        {/* Layered Content Overlay - Positioned for clarity */}
        <div className="w-full h-full relative z-20 flex items-center justify-end px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-right flex flex-col items-end bg-white/10 backdrop-blur-[2px] p-6 rounded-2xl"
          >
            {/* Main Title with shadow for readability if overlapping */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-4 uppercase tracking-tighter font-premium leading-[0.9] drop-shadow-sm">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            
            {/* Gold Accent Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[4px] bg-[#D4AF37] rounded-full shadow-lg shadow-yellow-600/10 mb-6" 
            />

            <p className="text-slate-800 text-base md:text-lg font-bold leading-relaxed font-premium text-right max-w-md drop-shadow-sm">
              Explore bespoke industrial packaging with our 
              global engineering team. We provide high-performance 
              solutions tailored to your supply chain requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION - COMPACT SINGLE SCREEN VIEW */}
      <div id="send-message" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
           
           {/* LEFT COLUMN: INFO CARD + MAP */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col gap-5 h-full"
           >
              {/* 1. Contact Info Card */}
              <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-6 shadow-[0_10px_40px_-10px_rgba(30,115,255,0.08)] border border-white relative overflow-hidden group">
                 {/* Internal mirror reflection effect */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full" />
                 <div className="space-y-6 relative z-10">
                    
                    {/* HQ */}
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden shadow-sm border border-slate-100">
                          <img src="/mapinconatiner.jpg" alt="HQ" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Our HQ</h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">123 Industrial Estate, Phase III,<br />Coimbatore, Tamil Nadu – 641001</p>
                       </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden shadow-sm border border-slate-100">
                          <img src="/contact%20phn.jpg" alt="Phone" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Phone</h4>
                          <p className="text-slate-600 font-bold mb-0.5 text-base">+91 98765 43210</p>
                          <p className="text-slate-400 text-xs font-medium">Mon–Fri, 9am – 6pm IST</p>
                       </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden shadow-sm border border-slate-100">
                          <img src="/mail.jpg" alt="Email" className="w-full h-full object-cover" />
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
              className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-white/60 flex flex-col justify-center min-h-[500px]"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Send Us a Message</h3>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                  >
                    <div className="w-24 h-24 mb-4 bg-white rounded-full p-2 shadow-sm border border-slate-100">
                      <img 
                        src="/contact%20phn.jpg" 
                        alt="Message Sent" 
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h4>
                    <p className="text-slate-600 max-w-sm">
                      Thank you for contacting VenbaPack. We have received your inquiry and will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-[#1E73FF] text-white rounded-xl font-bold hover:bg-[#0B1C2D] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    action="https://formsubmit.co/sathishj0423@gmail.com" 
                    method="POST" 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                     {/* Hidden Configuration Fields */}
                     <input type="hidden" name="_captcha" value="false" />
                     <input type="hidden" name="_template" value="table" />
                     <input type="text" name="_honey" style={{ display: 'none' }} />
                     
                     {/* Name Field */}
                     <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400" placeholder="Your Name" required disabled={isSubmitting} />
                     </div>

                     {/* Phone Field */}
                     <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400" placeholder="Your Phone Number" required disabled={isSubmitting} />
                     </div>

                     {/* Email Field */}
                     <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email <span className="text-red-500">*</span></label>
                        <input type="email" name="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400" placeholder="your@email.com" required disabled={isSubmitting} />
                     </div>

                     {/* Message Field */}
                     <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Message</label>
                        <textarea name="message" rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 text-sm font-medium placeholder:text-slate-400 resize-none" placeholder="Tell us about your requirements..." required disabled={isSubmitting}></textarea>
                     </div>

                     {errorMessage && (
                       <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-medium">
                         <AlertCircle className="w-5 h-5 shrink-0" />
                         {errorMessage}
                       </div>
                     )}

                     <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.4)" } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        className={`w-full font-bold py-4 rounded-xl text-base shadow-lg transition-all uppercase tracking-widest mt-2 flex items-center justify-center gap-2 ${
                          isSubmitting 
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-[#1E73FF] to-[#0B1C2D] text-white hover:brightness-110 cursor-pointer'
                        }`}
                     >
                       {isSubmitting ? (
                         <>
                           <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           Sending...
                         </>
                       ) : (
                         "Get in Touch"
                       )}
                     </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
           </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
