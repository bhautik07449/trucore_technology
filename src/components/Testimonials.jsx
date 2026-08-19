import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/Testimonials_data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-logo mb-4">Client Feedback & Success</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
              What Our Clients Say <span className="text-gradient-logo font-black">About Trucore</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
              Read how our AI architectures, custom web platforms, and mobile apps have driven growth for leaders globally.
            </p>
          </motion.div>
        </div>

        <div className="relative group px-4 md:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex h-full py-4">
                <div className="w-full bg-white border border-[#0066FF]/15 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#0066FF]/40 transition-all duration-300 relative flex flex-col justify-between h-[380px]">
                  <Quote className="absolute top-6 right-8 w-14 h-14 text-[#0066FF]/10 shrink-0" />

                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-textMuted text-sm lg:text-base italic leading-relaxed relative z-10 line-clamp-6 mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#031B4E] to-[#0066FF] flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-md shrink-0">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#0A1628] text-base leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-[#0066FF] font-heading font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label="Previous testimonial"
            className="prev-btn absolute top-1/2 left-0 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#0066FF]/20 text-[#031B4E] hover:bg-[#0066FF] hover:text-white transition-all duration-300 opacity-90 hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next testimonial"
            className="next-btn absolute top-1/2 right-0 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#0066FF]/20 text-[#031B4E] hover:bg-[#0066FF] hover:text-white transition-all duration-300 opacity-90 hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
