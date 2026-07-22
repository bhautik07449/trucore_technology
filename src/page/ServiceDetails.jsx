import { useParams } from "react-router-dom";
import { serviceData } from "../data/service_details";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import logo from "../assets/named_logo.png";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  const params = useParams();
  const serviceName = params["*"];

  const data = serviceData.find((item) => item?.name == serviceName);

  return (
    <>
      <Helmet>
        <title>Trucore Technology | {data?.title || "Services"}</title>
        <meta name="description" content="Discover the range of services offered by Trucore Technology, including web development, app development, UI/UX design, and custom software solutions." />
        <meta name="keywords" content="services, web development, app development, UI/UX design, custom software" />

        <link rel="canonical" href={`https://Trucore.com/service/${serviceName}`} />

        <meta property="og:title" content={`Trucore Technology | ${data?.title}`} />
        <meta property="og:description" content="Discover the range of services offered by Trucore Technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://Trucore.com/service/${serviceName}`} />
        <meta property="og:image" content={logo} />
      </Helmet>

      <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <div className="lg:flex gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[60%]"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Expert Solutions
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight capitalize">
                {data?.title}
              </h1>

              <div className="space-y-6">
                {data?.description?.map((li, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                      {li}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center md:justify-end w-full lg:w-[40%] mt-12 lg:mt-0"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary rounded-3xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="relative w-full max-w-[280px] md:max-w-full rounded-3xl drop-shadow-2xl object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {data?.item?.title || "Key Features"}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.item?.list?.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full bg-white border-2 border-gray-200 p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                  <div className="mb-8 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                    {service?.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed flex-grow">
                    {service?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
