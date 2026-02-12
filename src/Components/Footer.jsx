import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1020] text-white">
            <div className="w-full py-[60px]">
                {/* 4 Equal Columns - 25% width each */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[95%] mx-auto">
                    
                    {/* Column 1: Logo + Brand (25% width) */}
                    <div className="space-y-6">
                        {/* Small Horizontal Rectangle Logo Container */}
                        <div className="bg-white rounded-2xl px-5 py-3 inline-block shadow-[0_4px_15px_rgba(0,0,0,0.1)] w-auto min-w-[170px] max-w-[200px]">
                            <Link to="/" className="block">
                                <img 
                                   src="/VenbaPack_MainLogo.png" 
                                   alt="VenbaPack Logo" 
                                   className="h-16 w-full object-contain mx-auto" 
                                />
                            </Link>
                        </div>
                        
                        {/* Brand Description */}
                        <p className="text-white text-[15px] leading-[1.8] font-medium opacity-90">
                            Pioneering the future of industrial packaging with sustainable, durable, and custom-engineered solutions for a global market.
                        </p>
                        

                    </div>

                    {/* Column 2: Quick Links (25% width) */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-[17px] font-bold text-white mb-6 uppercase tracking-wider">QUICK LINKS</h3>
                        <ul className="space-y-4">
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About Us', path: '/about' },
                                { label: 'Industries', path: '/industries' },
                                { label: 'Products', path: '/products' },
                                { label: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link 
                                        to={item.path} 
                                        className="text-white text-[16px] hover:text-blue-400 transition-colors inline-block font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Products (25% width) */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-[17px] font-bold text-white mb-6 uppercase tracking-wider">OUR PRODUCTS</h3>
                        <ul className="space-y-4">
                            {[
                                'Corrugated Boxes',
                                'Industrial Rolls',
                                'Die Cut Solutions',
                                'Fabric/Textile Tubes',
                                'Edge Protectors'
                            ].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to="/products" 
                                        className="text-white text-[16px] hover:text-blue-400 transition-colors inline-block font-medium"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us (25% width) */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-[17px] font-bold text-white mb-6 uppercase tracking-wider">CONTACT US</h3>
                        <div className="space-y-5 text-[16px] text-white font-medium">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                                <p className="leading-relaxed">
                                    123 Industrial Estate, Phase III,<br />
                                    Coimbatore, Tamil Nadu – 641001
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-blue-400 shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors tracking-wide">
                                    +91 98765 43210
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-blue-400 shrink-0" />
                                <a href="mailto:sales@venbapack.com" className="hover:text-blue-400 transition-colors">
                                    sales@venbapack.com
                                </a>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-8">
                            {[
                                { Icon: Facebook, href: "#", label: "Facebook" },
                                { Icon: Instagram, href: "#", label: "Instagram" },
                                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                                { Icon: Twitter, href: "#", label: "Twitter" }
                            ].map(({ Icon, href, label }, i) => (
                                <a 
                                    key={i} 
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all text-white border border-white/5"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Copyright */}
                <div className="border-t border-white/10 mt-16 pt-8 max-w-[95%] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white text-[14px] font-medium opacity-80">
                        <p>© {currentYear} VenbaPack Industry. All Rights Reserved.</p>
                        <p>
                            Designed  and Developed by <a href="https://prolyncinfotech.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">prolync.in</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
