import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/project_data";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink, Tag } from "lucide-react";
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
      className="bg-gray-50 min-h-screen flex items-center py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              A Glance At Our{" "}
              <span className="text-primary">Completed Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
              Check out our project portfolio to witness how we translate our
              clients' vision into reality with premium digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Category Filter — only shown on full portfolio page */}
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary"
                }`}
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
            transition={{ duration: 0.4 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  {/* <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="flex gap-3">
                      <span className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    </div>
                  </div> */}
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-textMuted text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
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
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => {
                trackEvent("Portfolio", "Click", "Explore Full Portfolio");
                navigate("/portfolio");
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
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
