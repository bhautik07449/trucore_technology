import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements.",
    icon: Search,
    color: "bg-blue-600",
    bg: "bg-blue-50"
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Our team creates wireframes and designs that align with your brand and objectives.",
    icon: Palette,
    color: "bg-purple-600",
    bg: "bg-purple-50"
  },
  {
    number: "03",
    title: "Development",
    description: "We build your solution using modern technologies and best practices.",
    icon: Code,
    color: "bg-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Thorough testing ensures everything works perfectly before going live.",
    icon: Rocket,
    color: "bg-green-600",
    bg: "bg-green-50"
  },
];

const ProcessSteps = () => {
  return (
    <section className="min-h-screen flex items-center py-16 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
            We follow a proven process to deliver exceptional results for every project, ensuring success from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col pt-16">
                <span className="absolute top-4 right-8 text-7xl font-bold text-gray-50 group-hover:text-primary/5 transition-colors duration-500">
                  {step.number}
                </span>

                <div className={`absolute -top-6 left-8 w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color.replace('bg-', 'text-')}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-textMuted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
