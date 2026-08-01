import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/tru-core-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { servicesMenu } from "../data/services_menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [serviceOpen, setServiceOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(null);
  const [mobileServiceOpen, setMobileServiceOpen] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setServiceOpen(false);
    setMobileServiceOpen(false);
    setActiveService(null);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b-2 border-[#1e68ff]/25"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/">
            <motion.img
              src={logo}
              alt="Trucore Technologies"
              width="160"
              height="44"
              className="h-11 w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) =>
              item.name === "Services" ? (
                <div
                  key="Services"
                  className="relative"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `relative cursor-pointer px-3 py-2 text-base font-medium transition-colors duration-200 group inline-flex items-center
                      ${isActive ? "text-[#1e68ff] font-semibold" : "text-[#0d1b3e] hover:text-[#1e68ff]"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Services
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#1e68ff] transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 -translate-x-1/3
                                   w-[1100px] bg-white shadow-2xl rounded-b-xl
                                   p-8 grid grid-cols-4 gap-8 z-50
                                   border-t-2 border-[#1e68ff]"
                      >
                        {servicesMenu.map((section) => (
                          <div key={section.title}>
                            <h4 className="font-semibold text-[#0d1b3e] text-sm uppercase tracking-wider mb-4 border-b border-[#1e68ff]/20 pb-2">
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.items.map((sub) => {
                                const Icon = sub?.icon;
                                return (
                                  <div key={sub?.name}>
                                    <NavLink
                                      to={sub?.link}
                                      onClick={() => setServiceOpen(false)}
                                      className="flex items-center gap-2.5 text-gray-600 text-sm cursor-pointer hover:text-[#1e68ff] transition-colors duration-150"
                                    >
                                      <Icon className="w-4 h-4 text-[#1e68ff] flex-shrink-0" />
                                      {sub?.name}
                                    </NavLink>
                                  </div>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div key={item.name} className="relative group">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium inline-block transition-colors duration-200
                      ${isActive ? "text-[#1e68ff] font-semibold" : "text-[#0d1b3e] hover:text-[#1e68ff]"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#1e68ff] transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </div>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1e68ff] hover:bg-[#0d1b3e] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-[#1e68ff]/30 hover:shadow-[#0d1b3e]/20 transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Let&apos;s Connect
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#0d1b3e] hover:text-[#1e68ff] hover:bg-[#1e68ff]/10 transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[998]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[999] shadow-2xl h-[100dvh] flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#1e68ff]/20">
                <img src={logo} alt="Trucore Technologies" width="140" height="36" className="h-9 w-auto" />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-1.5 rounded-lg text-[#0d1b3e] hover:text-[#1e68ff] hover:bg-[#1e68ff]/10 transition-all"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="relative h-full overflow-hidden">
                {/* Main Menu Panel */}
                <motion.div
                  animate={{ x: mobileServiceOpen ? "-100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full top-0 left-0 p-5 space-y-1 overflow-y-auto"
                >
                  {menuItems.map((item) =>
                    item.name === "Services" ? (
                      <button
                        key="services"
                        onClick={() => setMobileServiceOpen(true)}
                        className="w-full text-left px-3 py-3 text-base font-medium text-[#0d1b3e] hover:text-[#1e68ff] hover:bg-[#1e68ff]/5 rounded-lg flex justify-between items-center transition-all"
                      >
                        Services
                        <span className="text-[#1e68ff]">→</span>
                      </button>
                    ) : (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                          `block px-3 py-3 text-base font-medium rounded-lg transition-all ${
                            isActive
                              ? "text-[#1e68ff] bg-[#1e68ff]/8 font-semibold"
                              : "text-[#0d1b3e] hover:text-[#1e68ff] hover:bg-[#1e68ff]/5"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )
                  )}

                  <div className="pt-4">
                    <button
                      className="w-full bg-[#1e68ff] hover:bg-[#0d1b3e] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md shadow-[#1e68ff]/30"
                      onClick={() => {
                        navigate("/contact");
                        handleLinkClick();
                      }}
                    >
                      Let&apos;s Connect
                    </button>
                  </div>
                </motion.div>

                {/* Services Panel */}
                <motion.div
                  animate={{
                    x: mobileServiceOpen && !activeService ? "0%" : "100%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full top-0 left-0 bg-white p-5 overflow-y-auto"
                >
                  <button
                    onClick={() => setMobileServiceOpen(false)}
                    className="mb-5 flex items-center gap-1 text-[#1e68ff] font-medium text-sm"
                  >
                    ← Back
                  </button>

                  <h3 className="text-base font-bold mb-4 text-[#0d1b3e]">Services</h3>

                  {servicesMenu.map((section) => (
                    <button
                      key={section.title}
                      onClick={() => setActiveService(section)}
                      className="block w-full text-left py-3 px-3 border-b border-gray-100 text-[#0d1b3e] hover:text-[#1e68ff] hover:bg-[#1e68ff]/5 rounded-lg transition-all"
                    >
                      {section.title}
                    </button>
                  ))}
                </motion.div>

                {/* Sub-Service Panel */}
                <motion.div
                  animate={{
                    x: activeService ? "0%" : "100%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full top-0 left-0 bg-white p-5 overflow-y-auto"
                >
                  <button
                    onClick={() => setActiveService(null)}
                    className="mb-5 flex items-center gap-1 text-[#1e68ff] font-medium text-sm"
                  >
                    ← Back
                  </button>

                  <h3 className="text-base font-bold mb-4 text-[#0d1b3e]">
                    {activeService?.title}
                  </h3>

                  {activeService?.items.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.link}
                      onClick={handleLinkClick}
                      className="block py-3 px-3 border-b border-gray-100 text-gray-700 hover:text-[#1e68ff] hover:bg-[#1e68ff]/5 rounded-lg transition-all"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
