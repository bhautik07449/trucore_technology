import { Helmet } from "react-helmet-async";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import logo from "../assets/named_logo.png";
import { motion } from "framer-motion";
import {
  Briefcase, ArrowRight, CheckCircle, Globe, Smartphone,
  LayoutGrid, Star, Users, Zap, TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import TeamStats from "../components/TeamStats";

const stats = [
  { icon: LayoutGrid, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "40+", label: "Happy Clients" },
  { icon: Globe, value: "8+", label: "Industries Served" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

const highlights = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Scalable, high-performance web platforms built with modern stacks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    desc: "Cross-platform iOS & Android apps that users love.",
  },
  {
    icon: TrendingUp,
    title: "ERP & CRM Systems",
    desc: "Custom enterprise software to streamline business operations.",
  },
  {
    icon: Zap,
    title: "AI-Powered Products",
    desc: "Intelligent automation and data-driven digital products.",
  },
];

const industries = [
  { label: "Healthcare", color: "bg-blue-100 text-blue-700" },
  { label: "Retail & E-commerce", color: "bg-purple-100 text-purple-700" },
  { label: "Recruitment", color: "bg-green-100 text-green-700" },
  { label: "Agriculture", color: "bg-yellow-100 text-yellow-700" },
  { label: "Wellness", color: "bg-pink-100 text-pink-700" },
  { label: "Trade & Logistics", color: "bg-orange-100 text-orange-700" },
  { label: "Education", color: "bg-indigo-100 text-indigo-700" },
  { label: "Finance", color: "bg-teal-100 text-teal-700" },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We start with a free consultation to understand your goals, challenges, and vision.",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    desc: "You receive a detailed proposal, timeline, and transparent pricing — no surprises.",
  },
  {
    number: "03",
    title: "Design & Build",
    desc: "Our team designs, develops, and iterates with regular updates and client feedback.",
  },
  {
    number: "04",
    title: "Launch & Support",
    desc: "We deliver a tested, polished product and provide ongoing support post-launch.",
  },
];

export default function PortfolioSection() {
  return (
    <>
      <Helmet>
        <title>Kenayos Technology | Portfolio - Web, App & Software Projects</title>
        <meta
          name="description"
          content="Explore Kenayos Technology portfolio showcasing innovative website development, mobile app development, UI/UX design, ecommerce solutions, and custom software projects."
        />
        <meta
          name="keywords"
          content="portfolio, web development, app development, software projects, kenayos work"
        />
        <link rel="canonical" href="https://kenayos.com/portfolio" />
        <meta property="og:title" content="Kenayos Technology | Portfolio" />
        <meta
          property="og:description"
          content="Kenayos portfolio — web development, mobile app projects, ERP systems, and custom software built for real businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kenayos.com/portfolio" />
        <meta property="og:image" content={logo} />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative pt-24 pb-16 lg:pt-8 lg:pb-0">
          <div className="flex flex-col lg:flex-row items-center gap-14 w-full">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[55%]"
            >
              {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Our Success Stories
              </div> */}

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Bridging Tech & Dreams: <br />
                <span className="text-primary">Our Portfolio</span>
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                We proudly present a curated collection of our most transformative
                software solutions and applications. Explore our portfolio to
                witness how we've partnered with businesses, both big and small,
                to translate their visions into reality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                {[
                  { title: "Custom Development", desc: "Tailored to your needs" },
                  { title: "Mobile Innovation", desc: "Next-gen app solutions" },
                  { title: "Cloud Integration", desc: "Seamless & Scalable" },
                  { title: "UI/UX Excellence", desc: "User-centric design" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:bg-primary/90 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT – Stats grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center md:justify-end w-full lg:w-[40%] mt-10 lg:mt-0"
            >
              <img
                src="https://www.budventure.technology/public/frontend/images/project/Main_Image.webp"
                alt="Portfolio Illustration"
                className="w-full max-w-[280px] md:max-w-md h-auto object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES STRIP ── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Industries We've Worked With
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((ind, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${ind.color}`}
              >
                {ind.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <TeamStats />

      {/* ── PROJECTS GRID ── */}
      <Portfolio show={true} />

      {/* ── OUR PROCESS ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Idea to <span className="text-primary">Shipped Product</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We follow a transparent, collaborative process to ensure every project is delivered on time, on budget, and beyond expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full hover:border-primary/20 relative pt-16">
                  <span className="absolute top-4 right-6 text-6xl font-bold text-gray-50 group-hover:text-primary/5 transition-colors duration-500 select-none">
                    {step.number}
                  </span>
                  <div className="absolute -top-5 left-8 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mt-32 -ml-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -mb-32 -mr-32" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Build Something <br />
              <span className="text-primary">Amazing?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Let's collaborate on your next big idea. From web apps to mobile products and enterprise systems — our team is ready to deliver.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-primary/90 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 text-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
