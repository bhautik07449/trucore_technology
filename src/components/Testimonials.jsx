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
    <section className="min-h-screen flex items-center py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              A Look at <span className="text-primary">Customer Experiences</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
              Witness the journey of delight and success through the words of our satisfied clients who have transformed their businesses with us.
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
            pagination={{
              clickable: true,
              dynamicBullets: true,
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
            className="pb-24"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex h-full py-4">
                <div className="w-full bg-white border border-gray-100 p-6 lg:p-8 rounded-3xl shadow-sm relative flex flex-col h-[400px]">
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-gray-100 opacity-20" />

                  <div className="flex-grow overflow-hidden">
                    <p className="text-textMuted text-md lg:text-lg italic leading-relaxed mb-6 relative z-10 line-clamp-8">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                    <div className="relative w-14 h-14 shrink-0">
                      <span className="w-12 h-12 border p-4 rounded-full flex items-center justify-center text-white bg-primary text-lg font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-btn absolute top-1/2 left-2 lg:-left-6 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="next-btn absolute top-1/2 right-2 lg:-right-6 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .swiper-pagination {
            display:none;
          }
        `}} />
      </div>
    </section>
  );
};

export default Testimonials;
