import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import footerLogo from "../assets/tru-core-white-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/Trucoretech" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/Trucore_tech?igsh=NjY4NTJpMDhmaW53" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/135344391/admin/dashboard/" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Autonomous AI Agents & ML", href: "/service" },
    { name: "Full-Stack Web Engineering", href: "/service" },
    { name: "Mobile App Development (iOS/Android)", href: "/service" },
    { name: "Enterprise ERP & CRM Systems", href: "/service" },
    { name: "AI Business Automation & Bots", href: "/service" },
  ];

  const expertise = [
    { name: "OpenAI & LLM Fine-Tuning", href: "/service" },
    { name: "Next.js & React Applications", href: "/service" },
    { name: "Flutter & React Native Apps", href: "/service" },
    { name: "Zero-Trust Cloud Backends", href: "/service" },
    { name: "n8n AI Workflow Pipelines", href: "/service" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      content: "+91 95377 91849"
    },
    { 
      icon: Mail, 
      content: (
        <a href="mailto:contact@trucoretechnology.com" className="hover:text-[#00B4D8] transition-colors whitespace-nowrap">
          contact@trucoretechnology.com
        </a>
      ) 
    },
    {
      icon: MapPin,
      content: "315 Raj Imperia, Surat, Gujarat, India"
    },
  ];

  return (
    <footer className="bg-[#031B4E] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0056C6]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <img src={footerLogo} alt="Trucore Technologies" width="160" height="40" loading="lazy" decoding="async" className="h-10 w-auto mb-6 object-contain" />
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Engineering innovative digital solutions and enterprise AI systems for businesses globally.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0066FF] flex items-center justify-center text-white cursor-pointer transition-all duration-200 border border-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-white text-base font-bold mb-6 tracking-wide border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-white text-base font-bold mb-6 tracking-wide border-b border-white/10 pb-2">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-heading text-white text-base font-bold mb-6 tracking-wide border-b border-white/10 pb-2">Our Expertise</h3>
            <ul className="space-y-3">
              {expertise.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-white text-base font-bold mb-6 tracking-wide border-b border-white/10 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm gap-3">
                  <info.icon className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>{info.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Trucore Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#00B4D8] text-sm transition duration-200"
              >
                Privacy Policy
              </Link>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0066FF] flex items-center justify-center text-white transition duration-200 border border-white/10"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
