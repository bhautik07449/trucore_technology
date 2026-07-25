import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
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
    // { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/Trucoretech" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/Trucore_tech?igsh=NjY4NTJpMDhmaW53" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/115810898/admin/dashboard/" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service/angular" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "AI Automation & Development", href: "/service/ai_chatbot" },
    { name: "Website Development", href: "/service/react" },
    { name: "Mobile App Development", href: "/service/flutter" },
    { name: "Digital Marketing", href: "/service/social-media-marketing" },
    { name: "Graphic Design", href: "/service/node" },
  ];

  const expertise = [
    { name: "Custom ERP & CRM Softwere Development", href: "/service/ai_chatbot" },
    { name: "AI Automation & Custom Agent Development", href: "/service/react" },
    { name: "Inventory Management System", href: "/service/flutter" },
    { name: "Digital Branding Service", href: "/service/social-media-marketing" },
    { name: "E Commerce Development", href: "/service/node" },
  ];

  const contactInfo = [
    {
      icon: Phone, content: (
        <>
          +91 9574432483 <br /> +91 9510353853
        </>
      )
    },
    { icon: Mail, content: "info@Trucore.com" },
    {
      icon: MapPin, content: (
        <>
          303 Dhara arced, <br /> Suart, Gujarat, India
        </>
      )
    },
  ];

  return (
    <footer className="bg-accent pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <img src={footerLogo} alt="Trucore Technology" className="h-10 w-auto mb-6" />
            <p className="text-white mb-6 leading-relaxed">
              Creating innovative digital solutions for businesses worldwide. We
              transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center text-white cursor-pointer transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white hover:text-primary transition duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Expertise</h3>
            <ul className="space-y-4">
              {expertise.map((expertise, index) => (
                <li key={index}>
                  <a
                    href={expertise.href}
                    className="text-white hover:text-primary transition duration-300"
                  >
                    {expertise.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start text-white">
                  <info.icon className="w-5 h-5 mr-3 mt-1" />
                  <span>{info.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Trucore Technology. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy-policy"
                className="text-white hover:text-primary transition duration-300"
              >
                Privacy Policy
              </Link>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition duration-300"
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
