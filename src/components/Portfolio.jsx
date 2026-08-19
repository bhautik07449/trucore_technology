import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/project_data";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { trackEvent } from "../../AnalyticsTracker";

const categories = ["All", "Web", "Mobile"];

const Portfolio = ({ show = false }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = show ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="bg-[#FAFCFF] py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-logo mb-4">Our Track Record</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0A1628] mb-6">
              A Glance At Our{" "}
              <span className="text-gradient-logo font-extrabold">Featured Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
              Explore how we engineer cutting-edge digital experiences and custom software for industry-leading clients worldwide.
            </p>
          </motion.div>
        </div>

        {/* Category Filter — only shown on full portfolio page */}
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-filter ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#0066FF]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1.5"
              >
                {/* Image Container with hardware acceleration */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    width="400"
                    height="240"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-white/90 backdrop-blur-md text-[#0056C6] text-xs font-bold font-heading rounded-full shadow-sm border border-[#0066FF]/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-0.5 bg-[#0056C6]/10 text-[#0056C6] text-xs font-bold rounded-full uppercase tracking-wider font-heading">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-textMuted text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-1 text-[#0066FF] text-sm font-semibold font-heading group-hover:gap-2 transition-all">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All button — only on homepage */}
        {!show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-14"
          >
            <button
              onClick={() => {
                trackEvent("Portfolio", "Click", "Explore Full Portfolio");
                navigate("/portfolio");
              }}
              className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-base font-bold"
            >
              Explore Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
