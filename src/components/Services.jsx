import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { services } from "../data/service_data";
import ReactGA from "react-ga4";

const Services = () => {

  return (
    <section
      id="services"
      className="min-h-screen flex items-center py-12 bg-gray-50 relative overflow-hidden"
    >

      <div className="container mx-auto relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Platforms </span> We Specialize In
          </h2>
          <p className="mt-2 text-lg lg:text-xl text-textMuted">
            Explore our all-round IT services to unleash innovation and drive creativity in your next project with us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-2 border-primary/10 rounded-2xl"
              onClick={() =>
                ReactGA.event({
                  category: "Services",
                  action: "Clicked Service Card",
                  label: service.title,
                })
              }
            >
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 h-full lg:flex gap-4">
                <img
                  src={service?.icon}
                  alt={service?.title}
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-textMuted text-md md:text-lg">{service.description}</p>
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
