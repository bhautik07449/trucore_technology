import { AnimatePresence, motion } from "framer-motion";
import { techs } from "../data/technology_data";
import { useState } from "react";

const Technologies = ({ className = "bg-white" }) => {
  const [activeCategory, setActiveCategory] = useState("Web App");

  const filteredTechs = techs.filter(
    (p) => p.category === activeCategory
  );

  const categories = [
    "Web App",
    "Mobile App",
    "Backend",
    "Database",
    "eCommerce"
  ];

  return (
    <section className={`min-h-screen flex items-center py-12 lg:py-24 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#1e6fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Tech <span className="text-primary">Expertise!</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
              Discover the depth of our technical prowess spanning across a wide spectrum of modern tech stacks for your vision.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn-filter rounded-full px-6 py-2.5 ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width="40"
                      height="40"
                      loading="lazy"
                      className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;
