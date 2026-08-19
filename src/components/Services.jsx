import { motion } from "framer-motion";
import { services } from "../data/service_data";
import ReactGA from "react-ga4";

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-[#FAFCFF] relative overflow-hidden"
    >
      <div className="container mx-auto relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-logo mb-4">Core Competencies</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0A1628] mb-6">
            Platforms We <span className="text-gradient-logo font-extrabold">Specialize In</span>
          </h2>
          <p className="mt-2 text-lg text-textMuted max-w-2xl mx-auto">
            Explore our end-to-end engineering solutions designed to turn complex business requirements into high-impact digital realities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group border border-[#0066FF]/15 rounded-3xl bg-white hover:border-[#00B4D8]/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              onClick={() =>
                ReactGA.event({
                  category: "Services",
                  action: "Clicked Service Card",
                  label: service.title,
                })
              }
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <img
                    src={service?.icon}
                    alt={service?.title}
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                    className="w-20 h-20 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md border border-[#0066FF]/10"
                  />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#0A1628] group-hover:text-[#0066FF] mb-3 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-textMuted text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {service.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-3 py-1 bg-[#FAFCFF] border border-[#0066FF]/15 rounded-full text-xs font-bold text-[#031B4E] font-heading"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
