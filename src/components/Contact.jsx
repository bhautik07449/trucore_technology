import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, Loader2, MapPin, User, MessageSquare, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { supabase } from "../supabase";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .required("Full name is required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email address is required"),
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
          toast.custom((t) => (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`${t.visible ? "flex" : "hidden"} bg-white border border-[#0066FF]/20 p-4 rounded-2xl shadow-2xl items-center gap-4 w-full max-w-[360px] min-w-[280px] pointer-events-auto`}
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-grow">
                <p className="font-bold font-heading text-[#0A1628]">Message Received!</p>
                <p className="text-xs text-textMuted">We will reach out within 24 hours.</p>
              </div>
            </motion.div>
          ));
          resetForm();
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Direct Line",
      content: "+91 95377 91849",
      bg: "bg-[#0066FF]/10",
      iconColor: "text-[#0066FF]",
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      content: "contact@trucoretechnology.com",
      bg: "bg-[#00B4D8]/10",
      iconColor: "text-[#00B4D8]",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon – Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 2:00 PM",
      bg: "bg-[#031B4E]/10",
      iconColor: "text-[#031B4E]",
    },
    {
      icon: MapPin,
      title: "Surat Office",
      content: "315 Raj Imperia, Surat, Gujarat, India",
      bg: "bg-[#0066FF]/10",
      iconColor: "text-[#0066FF]",
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#FAFCFF] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[30rem] h-[30rem] bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-[28rem] h-[28rem] bg-[#00B4D8]/12 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="badge-logo mb-3">GET IN TOUCH</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0A1628] mb-4">
              Let's Build Something <span className="text-gradient-logo">Extraordinary</span>
            </h2>
            <p className="mt-2 text-textMuted max-w-xl mx-auto text-base sm:text-lg font-normal">
              Have a project in mind or need technical advice? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#0066FF]/15 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3.5 rounded-xl ${item.bg} shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#0A1628] text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-textMuted whitespace-pre-line mt-1 font-normal">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Guarantees Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#031B4E] to-[#0A1628] text-white shadow-xl mt-6">
                <div className="flex items-center gap-2 text-[#00E5FF] font-heading font-bold text-sm mb-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Enterprise Service Guarantee</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  100% strict NDA compliance. Your project details and intellectual property are protected from day one.
                </p>
              </div>
            </motion.div>

            {/* Right Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-white rounded-3xl shadow-2xl border border-[#0066FF]/20 p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="mb-8">
                <div className="flex items-center gap-2 text-[#0066FF] font-heading text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-[#00B4D8]" />
                  <span>Direct Technical Inquiry</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#0A1628]">Send Us a Message</h3>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-6">

                {/* Full Name Input Field */}
                <div>
                  <label className="block text-xs font-bold font-heading uppercase tracking-wider text-[#0A1628] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full rounded-2xl border ${formik.touched.name && formik.errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#0066FF]/20 bg-[#FAFCFF]'} pl-11 pr-4 py-3.5 text-sm text-[#0A1628] placeholder-gray-400 focus:border-[#0066FF] focus:bg-white focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all duration-300 font-medium`}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">
                      <span>•</span> {formik.errors.name}
                    </p>
                  )}
                </div>

                {/* Grid row for Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input Field */}
                  <div>
                    <label className="block text-xs font-bold font-heading uppercase tracking-wider text-[#0A1628] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="alex@company.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full rounded-2xl border ${formik.touched.email && formik.errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#0066FF]/20 bg-[#FAFCFF]'} pl-11 pr-4 py-3.5 text-sm text-[#0A1628] placeholder-gray-400 focus:border-[#0066FF] focus:bg-white focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all duration-300 font-medium`}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">
                        <span>•</span> {formik.errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Input Field */}
                  <div>
                    <label className="block text-xs font-bold font-heading uppercase tracking-wider text-[#0A1628] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="98765 43210"
                        value={formik.values.phone}
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(/\D/g, "").slice(0, 10);
                          formik.setFieldValue("phone", numericValue);
                        }}
                        onBlur={formik.handleBlur}
                        className={`w-full rounded-2xl border ${formik.touched.phone && formik.errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#0066FF]/20 bg-[#FAFCFF]'} pl-11 pr-4 py-3.5 text-sm text-[#0A1628] placeholder-gray-400 focus:border-[#0066FF] focus:bg-white focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all duration-300 font-medium`}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">
                        <span>•</span> {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Textarea Field */}
                <div>
                  <label className="block text-xs font-bold font-heading uppercase tracking-wider text-[#0A1628] mb-2">
                    Project Details / Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-4 pointer-events-none text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project requirements, scope, timeline..."
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full rounded-2xl border border-[#0066FF]/20 bg-[#FAFCFF] pl-11 pr-4 py-3.5 text-sm text-[#0A1628] placeholder-gray-400 focus:border-[#0066FF] focus:bg-white focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all duration-300 resize-none font-medium"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn-primary w-full py-4 text-sm font-bold shadow-xl disabled:opacity-65 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formik.isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Project Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
