import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, Loader2, MapPin } from "lucide-react";
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
              borderRadius: "10px",
              background: "#1e293b",
              color: "#fff",
            },
          });
        } else {
          toast.custom((t) => (
            <div
              className={`bg-primary text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 max-w-[360px] min-w-[280px] ${t.visible ? "animate-enter" : "animate-leave"}`}
            >
              <span>🚀</span>
              <div>
                <p className="font-semibold">Message Sent!</p>
                <p className="text-sm opacity-80">Our team will contact you soon.</p>
              </div>
            </div>
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
      title: "Phone",
      content: "+91 95377 91849",
      bg: "bg-blue-50",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@trucoretechnology.com",
      bg: "bg-blue-50",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM",
      bg: "bg-blue-50",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "315 Raj Imperia, Surat, Gujarat, India",
      bg: "bg-blue-50",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-16 bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something <br />
              <span className="text-primary">Amazing Together</span>
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
              Have a project in mind? Reach out to us and let's turn your ideas
              into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl ${item.iconBg} shrink-0 h-fit`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 whitespace-pre-line mt-1">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={formik.handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary caret-primary outline-none transition"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary caret-primary outline-none transition"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone No <span className="text-red-500">*</span>
                  </label>
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
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary caret-primary outline-none transition"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary caret-primary outline-none transition resize-none"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn-primary w-full py-3.5 text-base disabled:opacity-65 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formik.isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
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
