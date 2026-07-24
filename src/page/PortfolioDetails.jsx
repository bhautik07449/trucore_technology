import { useParams, Link } from "react-router-dom";
import { projects } from "../data/project_data";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function PortfolioDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Trucore Technology | {project.title}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <div className="mb-8">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </div>

          <div className="lg:flex gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[50%]"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                {project.category} • {project.tag}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Visit Project
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center md:justify-end w-full lg:w-[50%] mt-12 lg:mt-0"
            >
              <div className="relative group w-full">
                <div className="absolute inset-0 bg-primary rounded-3xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full rounded-3xl drop-shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02] border border-gray-100"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
