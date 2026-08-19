import { useParams, Link } from "react-router-dom";
import { serviceData } from "../data/service_details";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";

export default function ServiceDetails() {
  const params = useParams();
  const serviceName = params["*"];

  const data = serviceData.find((item) => item?.name === serviceName) || serviceData[0];

  return (
    <>
      <Helmet>
        <title>Trucore Technologies | {data?.title || "Enterprise Service"}</title>
        <meta name="description" content={`Explore ${data?.title} capabilities engineered by Trucore Technologies for modern enterprises.`} />
        <link rel="canonical" href={`https://www.trucoretechnology.com/service/${serviceName}`} />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FAFCFF]">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-[#0066FF]/12 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/3 left-[-10%] w-[30rem] h-[30rem] bg-[#031B4E]/08 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#00B4D8]/15 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="badge-logo mb-4 shadow-xs">
                <span className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse"></span>
                <span className="tracking-widest uppercase text-xs font-bold font-heading">
                  TRUCORE ENGINEERING • ENTERPRISE SOLUTIONS
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0A1628] leading-[1.15] mb-6 tracking-tight capitalize">
                {data?.title}
              </h1>

              <div className="space-y-4 mb-8">
                {data?.description?.map((li, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-[#0066FF]/15 shadow-xs"
                  >
                    <div className="w-8 h-8 bg-[#0066FF]/10 text-[#0066FF] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-base sm:text-lg text-textMuted leading-relaxed font-normal">
                      {li}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary px-8 py-4 text-sm font-bold shadow-xl"
                >
                  Schedule Technical Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-ghost px-7 py-4 text-sm font-semibold bg-white border border-[#0066FF]/20"
                >
                  View Related Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#0066FF]/20 via-[#00B4D8]/10 to-transparent shadow-2xl border border-[#0066FF]/20">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── KEY FEATURES / CAPABILITIES BENTO GRID ── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-[#0066FF]/10">
        <div className="container mx-auto px-4 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="badge-logo mb-3">Core Modules & Architecture</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0A1628] mb-4">
              {data?.item?.title || "Key Solution Capabilities"}
            </h2>
            <p className="max-w-xl mx-auto text-lg text-textMuted">
              Built on battle-tested microservices, automated pipelines, and cloud security frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.item?.list?.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full bg-[#FAFCFF] border border-[#0066FF]/15 p-8 rounded-3xl shadow-xs hover:shadow-2xl hover:border-[#00B4D8] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden">
                  
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0066FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    <div className="mb-6 w-12 h-12 rounded-2xl bg-[#0056C6]/10 text-[#0056C6] flex items-center justify-center group-hover:bg-[#0056C6] group-hover:text-white transition-all duration-300 shadow-xs">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3 group-hover:text-[#0066FF] transition-colors duration-300">
                      {service?.title}
                    </h3>

                    <p className="text-textMuted text-base leading-relaxed mb-6 font-normal">
                      {service?.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-[#0066FF]/10 text-xs font-bold font-heading text-[#031B4E]">
                    <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
                    <span>Enterprise Grade Module</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#031B4E] via-[#0A1628] to-[#030A16] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-logo mb-4 border-white/20 text-white bg-white/10">Accelerate Your Growth</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black mb-6 leading-tight">
              Ready to Deploy <span className="text-[#00E5FF]">{data?.title}</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-normal">
              Schedule a technical roadmap discussion with our senior AI & software architects today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary px-9 py-4 text-base font-bold shadow-2xl"
              >
                Start Project Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
