import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/named_logo.png";
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white backdrop-blur-md shadow-sm"
        : ""
        }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">

          <NavLink to='/' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={logo} alt="Kenayos Technology" className="h-10 w-auto" />
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.name === "Services" ? (
                <div
                  key="Services"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <NavLink
                    to='/service'
                    className={({ isActive }) =>
                      `cursor-pointer px-3 py-2 text-lg font-medium transition-colors
                      ${isActive ? "text-primary font-semibold" : "text-gray-800 hover:text-primary"}`
                    }
                  >
                    Services
                  </NavLink>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-20 -translate-x-1/2
                                   w-[1100px] bg-white shadow-2xl rounded-sm
                                   p-8 grid grid-cols-4 gap-8 z-50"
                      >
                        {servicesMenu.map((section) => (
                          <div key={section.title}>
                            <h4 className="font-semibold text-gray-900 text-lg mb-4 border-b pb-2">
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.items.map((sub) => {
                                const Icon = sub?.icon
                                return (
                                  <div key={sub?.name} className="">
                                    <NavLink
                                      to={sub?.link}
                                      onClick={() => setServiceOpen(false)}
                                      className="flex items-center gap-3 text-gray-600 text-lg cursor-pointer hover:text-primary transition-colors"
                                    >
                                      <Icon className="text-xl cursor-pointer" />
                                      {sub?.name}
                                    </NavLink>
                                  </div>
                                )
                              })}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `px-3 py-2 text-lg font-medium inline-block transition-colors
                  ${isActive ? "text-primary font-semibold" : "text-gray-800 hover:text-primary"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              )
            )}
          </div>

          <div className="hidden md:block ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-xl font-medium"
              onClick={() => navigate("/contact")}
            >
              Let’s Connect
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-primary hover:bg-primary/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

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
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h2 className="text-lg font-semibold">Kenayos Technology</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="relative h-full overflow-hidden">
                <motion.div
                  animate={{ x: mobileServiceOpen ? "-100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full top-0 left-0 p-5 space-y-5 overflow-y-auto"
                >
                  {menuItems.map((item) =>
                    item.name === "Services" ? (
                      <button
                        key="services"
                        onClick={() => setMobileServiceOpen(true)}
                        className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center"
                      >
                        Services →
                      </button>
                    ) : (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={handleLinkClick}
                        className="block text-lg text-gray-800"
                      >
                        {item.name}
                      </NavLink>
                    )
                  )}

                  <button
                    className="w-full bg-primary text-white py-3 rounded-xl mt-4"
                    onClick={() => {
                      navigate("/contact");
                      handleLinkClick();
                    }}
                  >
                    Let’s Connect
                  </button>
                </motion.div>

                <motion.div
                  animate={{
                    x: mobileServiceOpen && !activeService ? "0%" : "100%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full top-0 left-0 bg-white p-5 overflow-y-auto"
                >
                  <button
                    onClick={() => setMobileServiceOpen(false)}
                    className="mb-4 text-gray-500"
                  >
                    ← Back
                  </button>

                  <h3 className="text-lg font-semibold mb-4">Services</h3>

                  {servicesMenu.map((section) => (
                    <button
                      key={section.title}
                      onClick={() => setActiveService(section)}
                      className="block w-full text-left py-3 border-b text-gray-800"
                    >
                      {section.title}
                    </button>
                  ))}
                </motion.div>

                <motion.div
                  animate={{
                    x: activeService ? "0%" : "100%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full top-0 left-0 bg-white p-5"
                >
                  <button
                    onClick={() => setActiveService(null)}
                    className="mb-4 text-gray-500"
                  >
                    ← Back
                  </button>

                  <h3 className="text-lg font-semibold mb-4">
                    {activeService?.title}
                  </h3>

                  {activeService?.items.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.link}
                      onClick={handleLinkClick}
                      className="block py-3 border-b text-gray-700"
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
    </nav >
  );
};

export default Navbar;
