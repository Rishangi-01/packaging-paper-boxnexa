
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";
import { testimonialsSectionData } from "@/data";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const reduceMotion = useReducedMotion();
  const testimonials = testimonialsSectionData.items;

  return (
    <section
      id="testimonials"
      aria-label={testimonialsSectionData.ariaLabel}
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-12 w-full"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16">

        
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 flex items-center justify-center gap-4 sm:mb-5"
          >
            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#252a30] sm:text-[16px] sm:tracking-[4px]">
              {testimonialsSectionData.eyebrow}
            </span>

            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />
          </motion.div>

        
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.2rem,3.5vw,5rem)] font-bold leading-[1.2] tracking-[-1.5px] text-[#252a30]"
          >
            {testimonialsSectionData.title}{" "}
            <span className="text-[#e89519]">
              {testimonialsSectionData.highlight}
            </span>
          </motion.h2>

        
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-[15px] leading-relaxed text-[#555b62] sm:text-[18px] lg:text-[21px]"
          >
            {testimonialsSectionData.text}
          </motion.p>
        </div>

        
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative px-0 sm:px-12 lg:px-14"
        >

        
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            aria-label={testimonialsSectionData.previousLabel}
            className="absolute left-0 top-1/2 z-20 hidden h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full border border-[#dedede] bg-white text-[#252a30] shadow-sm transition-all duration-300 hover:border-[#e89519] hover:bg-[#e89519] hover:text-white sm:flex"
          >
            <ChevronLeft size={30} strokeWidth={2.2} />
          </button>

        
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            onSwiper={(instance) => setSwiper(instance)}
            onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            loop={true}
            speed={750}
            grabCursor={true}
            watchOverflow={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              bulletClass: "testimonial-bullet",
              bulletActiveClass: "testimonial-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.name} className="!h-auto py-2">

        
                <div
                  className={`group relative flex h-full min-h-[355px] flex-col justify-between overflow-hidden rounded-[20px] border bg-white p-6 transition-all duration-500 sm:min-h-[370px] sm:p-7 lg:p-8 ${
                    activeIndex === index
                      ? "border-[#e89519] shadow-[0_12px_30px_rgba(232,149,25,0.09)]"
                      : "border-[#dedede] hover:border-[#e89519] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]"
                  }`}
                >

        
                  <div>
                    <Quote
                      size={43}
                      strokeWidth={0}
                      fill="#e89519"
                      className="mb-3 rotate-180 text-[#e89519]"
                    />

        
                    <p className="text-[16px] font-medium leading-[1.65] text-[#30343a] sm:text-[17px] lg:text-[18px]">
                      {item.quote}
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <div className="my-6 h-px w-full bg-[#e7e7e7]" />

                  {/* CUSTOMER DETAILS */}
                  <div className="flex items-center gap-3 sm:gap-4">

                    {/* PROFILE IMAGE */}
                    <div className="relative h-[65px] w-[65px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#f5f1e9] sm:h-[75px] sm:w-[75px]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="75px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* NAME AND ROLE */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[16px] font-bold text-[#252a30] sm:text-[18px]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-[13px] leading-tight text-[#69717a] sm:text-[15px]">
                        {item.city}
                      </p>
                    </div>

                    {/* STARS */}
                    <div className="flex shrink-0 gap-[2px]" aria-label={`${item.rating} ${testimonialsSectionData.ratingLabel}`}>
                      {Array.from({ length: item.rating }, (_, index) => index + 1).map((star) => (
                        <Star
                          key={star}
                          size={16}
                          strokeWidth={1}
                          fill="#e89519"
                          className="text-[#e89519] sm:h-[19px] sm:w-[19px]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* ORANGE BOTTOM LINE */}
                  <div
                    className={`absolute bottom-0 left-0 h-[5px] w-full bg-[#e89519] transition-all duration-500 ${
                      activeIndex === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            aria-label={testimonialsSectionData.nextLabel}
            className="absolute right-0 top-1/2 z-20 hidden h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-[#e89519] text-white shadow-md transition-all duration-300 hover:bg-[#252a30] sm:flex"
          >
            <ChevronRight size={30} strokeWidth={2.2} />
          </button>

          {/* MOBILE NAVIGATION */}
          <div className="mt-6 flex items-center justify-center gap-5 sm:hidden">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              aria-label={testimonialsSectionData.previousLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dedede] text-[#252a30] transition hover:bg-[#e89519] hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              aria-label={testimonialsSectionData.nextLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e89519] text-white transition hover:bg-[#252a30]"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* CUSTOM PAGINATION */}
          <div className="testimonial-pagination mt-8 flex min-h-[18px] items-center justify-center gap-3" />

        </motion.div>
      </div>
    </section>
  );
}
