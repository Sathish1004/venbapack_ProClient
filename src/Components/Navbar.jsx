import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Package, Layers, Scissors, ShoppingBag, StickyNote, Archive, Shirt, Factory, Sprout, ShoppingCart, Truck, Zap, Phone, Mail, Award, Globe2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


// Asset Imports
import TextileImg from '../assets/Textileindustrty.jpg';
import AgriImg from '../assets/Agri_industry.jpg';
import FMCGImg from '../assets/FMCG.jpg';
import FMDGImg from '../assets/FMDG.jpg';
import ElectricalImg from '../assets/Electronics .jpg';
import CorrugatedImg from '../assets/corrugated.jpg';
import RolledBoxImg from '../assets/Rolledbox.jpg';
import DieCutImg from '../assets/Die_Cut.jpg';
import RaffiaImg from '../assets/raffiabags.png';
import AccessoryImg from '../assets/BoxesAccesarieos.jpg';
import MenuBg from '../assets/mainbackside.jpg';
import FinalLogo from '../assets/final_logo.jpeg';

// --- TOP BAR COMPONENT ---
const TopBar = () => {
  return (
    <div className="bg-white text-[#00008B] py-1 text-sm md:text-base font-medium relative z-50 border-b border-slate-100">
      <div className="w-full flex justify-end items-center px-4 md:px-6">
        
        {/* Right Side: Contact Info */}
        <div className="flex items-center gap-4 md:gap-6 text-[#00008B] shrink-0 font-premium text-[15px] md:text-[16px] tracking-wide font-medium">
           <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 text-[#00008B]" />
              <span className="hidden xs:inline text-[#00008B]">+91 98765 43210</span>
           </a>
           <a href="mailto:sales@venbapack.com" className="hidden md:flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 text-[#00008B]" />
              <span className="lowercase text-[#00008B]">sales@venbapack.com</span>
           </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
    },
    {
      name: 'Business Sectors',
      path: '/industries',
      type: 'dropdown',
      items: [
        { name: 'Textile Industry', path: '/industries#textile', icon: Shirt, subtitle: "Fabric protection", img: TextileImg },
        { name: 'Agri Industry', path: '/industries#agri', icon: Sprout, subtitle: "Fresh produce packaging", img: AgriImg },
        { name: 'FMCG', path: '/industries#fmcg', icon: ShoppingCart, subtitle: "Retail-ready boxes", img: FMCGImg },
        { name: 'FMDG', path: '/industries#fmdg', icon: Truck, subtitle: "Durable goods logistics", img: FMDGImg },
        { name: 'Electrical Products', path: '/industries#electrical', icon: Zap, subtitle: "Shock-proof & static-safe", img: ElectricalImg },
      ]
    },
    {
      name: 'Products',
      path: '/products',
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="fixed w-full z-50 flex flex-col">
      <TopBar />
      <nav className="bg-white border-b border-slate-100 shadow-sm relative z-40">
        <div className="w-full">
          <div className="flex items-center justify-between h-[70px] px-4 sm:px-6 lg:px-8">
            
            {/* LOGO */}
            <Link to="/" className="flex-shrink-0 flex items-center justify-start bg-white">
               <img 
                  src="/VenbaPack_MainLogo.png" 
                  alt="Venbapack Logo" 
                  className="h-[66px] w-auto object-contain brightness-105 contrast-110 saturate-110"
               />
            </Link>
            
            {/* DESKTOP MENU - Moved to Right */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.type && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.type && setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1 cursor-pointer relative py-4">
                     <Link
                      to={item.path}
                      className={item.name === 'Contact Us' 
                        ? "bg-[#00008B] text-white font-sans text-base font-semibold px-6 py-2 rounded-[999px] hover:bg-[#0000CD] transition-all duration-300 whitespace-nowrap"
                        : `font-sans text-base font-semibold transition-colors duration-300 whitespace-nowrap ${
                            location.pathname === item.path ? 'text-[#1E90FF]' : 'text-slate-700 hover:text-[#1E90FF]'
                          }`
                      }
                    >
                      {item.name}
                    </Link>
                    {item.type && <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#1E90FF] group-hover:-rotate-180 transition-all duration-300" />}
                    
                    {/* Hover Underline Animation - only for non-button items */}
                    {item.name !== 'Contact Us' && (
                      <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[#1E90FF] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                    )}
                  </div>

                  {/* --- DROPDOWN ANIMATION WRAPPER --- */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute right-[-220px] lg:right-[-280px] top-full pt-3 z-50"
                      >
                         {/* --- INDUSTRIES MEGA MENU --- */}
                         {item.name === 'Business Sectors' && (
                            <div className="w-[850px] bg-white/98 backdrop-blur-xl rounded-[28px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)] border border-white/40 overflow-hidden ring-1 ring-slate-900/5 transition-shadow duration-300 p-6">
                               <div className="flex">
                                  {/* Left: Featured Image / Context */}
                                  <div className="w-1/3 bg-gradient-to-br from-slate-50 to-white rounded-[20px] p-6 flex flex-col justify-end relative overflow-hidden">
                                     <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${MenuBg})` }} />
                                     <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Industries We Serve</h3>
                                        <p className="text-sm text-slate-500 mb-4">Tailored packaging solutions for diverse sectors.</p>
                                        <Link to="/industries" className="text-sm font-bold text-[#1E90FF] flex items-center gap-1 hover:gap-2 transition-all">
                                           View All Industries <ArrowRight className="w-4 h-4" />
                                        </Link>
                                     </div>
                                  </div>
                                  
                                  {/* Right: Grid */}
                                  <div className="w-2/3 pl-6 grid grid-cols-2 gap-4">
                                     {item.items.map((sub, idx) => (
                                        <Link 
                                           key={idx} 
                                           to={sub.path}
                                           className="flex items-center gap-4 p-3 rounded-[16px] hover:bg-blue-50/50 transition-all group/card"
                                        >
                                           <div className="w-12 h-12 rounded-[10px] overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                                              <img src={sub.img} alt={sub.name} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500" />
                                           </div>
                                           <div>
                                              <h4 className="text-sm font-bold text-slate-800 group-hover/card:text-[#1E90FF] transition-colors">{sub.name}</h4>
                                              <p className="text-xs text-slate-500">{sub.subtitle}</p>
                                           </div>
                                        </Link>
                                     ))}
                                  </div>
                               </div>
                            </div>
                         )}


                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#1E90FF] transition-colors bg-slate-50 border border-slate-100"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-slate-50 overflow-hidden shadow-xl"
            >
              <div className="px-6 py-8 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-bold py-3 border-b border-slate-50 flex items-center justify-between ${
                        location.pathname === item.path ? 'text-[#1E90FF]' : 'text-slate-800'
                      }`}
                    >
                      {item.name}
                      <ArrowRight className="w-5 h-5 opacity-30" />
                    </Link>
                  </div>
                ))}
                
                {/* Mobile Contact Button Upgrade */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full block text-center bg-[#00008B] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20 active:scale-95 transition-transform"
                  >
                    Quick Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>

  );
};

export default Navbar;
