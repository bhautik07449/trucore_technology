import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ServiceDetails from "./page/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";
import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "./supabase";
import { Phone, Mail, Clock, Send, Loader2, X, CheckCircle2 } from "lucide-react";
const About = React.lazy(() => import('./page/About'));
const ServiceSection = React.lazy(() => import('./page/Services'));
const PortfolioSection = React.lazy(() => import('./page/Portfolio'));
const PortfolioDetails = React.lazy(() => import('./page/PortfolioDetails'));
const Contact = React.lazy(() => import('./page/Contact'));
const PrivacyPolicy = React.lazy(() => import('./page/PrivacyPolicy'));
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactGA from "react-ga4";
import AnalyticsTracker, { trackEvent } from "../AnalyticsTracker";

ReactGA.initialize("G-22Q678BMQF");

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^(?:\+91)?[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
        .required("Phone number is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const { error } = await supabase.from("contacts").insert([values]);
        if (error) {
          toast.error("Failed to send message ❌", {
            style: {
              borderRadius: "12px",
              background: "#ef4444",
              color: "#fff",
              fontWeight: "600"
            },
          });
        } else {
          trackEvent("Inquiry", "Submit", "Success");
          toast.custom((t) => (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`${t.visible ? "flex" : "hidden"} bg-white border border-gray-100 p-4 rounded-2xl shadow-2xl items-center gap-4 w-full max-w-[360px] min-w-[280px] pointer-events-auto`}
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900">Message Sent!</p>
                <p className="text-sm text-gray-500">We'll contact you shortly.</p>
              </div>
              <button onClick={() => toast.dismiss(t.id)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          ));
          resetForm();
          setShowPopup(false);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "trucoretechnology@gmail.com",
      color: "bg-purple-100/10 text-purple-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9512464749\n +91 9510353853",
      color: "bg-blue-100/10 text-blue-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon – Sat: 9 AM – 8 PM\nSu: 10 AM – 2 PM",
      color: "bg-emerald-100/10 text-emerald-400",
    },
  ];

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("popupShown");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showPopup]);

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: 20, right: 20 }}
        toastOptions={{
          style: {
            maxWidth: "360px",
            minWidth: "280px",
            fontSize: "14px",
            padding: "12px 16px",
          },
        }}
      />
      <div className="min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={
          <div className="flex h-screen items-center justify-center bg-white text-gray-900">
            <div className="flex flex-col items-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
              <p className="font-medium text-lg animate-pulse">Loading Trucore Technology...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<ServiceSection />} />
            <Route path="/service/*" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/portfolio/:id" element={<PortfolioDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </Suspense>

        <AnimatePresence>
          {showPopup && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
                onClick={() => setShowPopup(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl bg-white rounded-3xl md:rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto"
              >
                <div className="hidden md:flex md:col-span-5 bg-gray-900 p-8 lg:p-12 text-white flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -ml-24 -mb-24"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-1 bg-primary mb-8 rounded-full"></div>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                      Ready to Build <br />
                      <span className="text-primary">Your Next Big Idea?</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                      Take the first step towards digital excellence. Consult with our experts today.
                    </p>

                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${item.color} shrink-0`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            {/* <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{item.title}</p> */}
                            <p className="text-sm font-medium whitespace-pre-line leading-relaxed">{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 text-gray-500 text-xs relative z-10">
                    © 2026 Trucore Technology. All rights reserved.
                  </div>
                </div>

                <div className="col-span-1 md:col-span-7 p-6 lg:p-12 bg-white relative">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 lg:top-6 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="max-w-md mx-auto">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Consultation</h3>
                      <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            {...formik.getFieldProps('name')}
                            className={`w-full rounded-xl border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50/50 px-4 py-3 text-sm focus:border-primary transition-all outline-none`}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            {...formik.getFieldProps('email')}
                            className={`w-full rounded-xl border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-50/50 px-4 py-3 text-sm focus:border-primary transition-all outline-none`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="98767 87654"
                          value={formik.values.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                            formik.setFieldValue("phone", val);
                          }}
                          className={`w-full rounded-xl border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-200'} bg-gray-50/50 px-4 py-3 text-sm focus:border-primary transition-all outline-none`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="How can we help you?"
                          {...formik.getFieldProps('message')}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm focus:border-primary transition-all outline-none resize-none"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={formik.isSubmitting}
                        type="submit"
                        className="btn-primary w-full py-4 text-base font-bold disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-4"
                      >
                        {formik.isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Inquiry
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
};

export default App;
