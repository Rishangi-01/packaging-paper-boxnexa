
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Box,
  Scroll,
  ShoppingBag,
  PackageCheck,
  ArrowUpRight,
} from "lucide-react";
import { servicesSectionData } from "@/data";

const serviceIcons = {
  box: Box,
  scroll: Scroll,
  "shopping-bag": ShoppingBag,
  layers: PackageCheck,
};

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const services = servicesSectionData.items.filter(
    (service): service is typeof service & { homeHref: string } =>
      service.homeHref !== undefined &&
      servicesSectionData.homeServiceSlugs.includes(service.slug)
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#faf9f7] py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16 lg:mb-20">

        
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 flex items-center justify-center gap-4 sm:mb-5"
          >
            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#252a30] sm:text-[16px] sm:tracking-[4px]">
              {servicesSectionData.eyebrow}
            </span>

            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />
          </motion.div>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,3.5vw,5rem)] font-semibold leading-[1.2] tracking-[-1.5px] text-[#252a30]"
          >
            {servicesSectionData.title}{" "}
            <span className="text-[#df901e]">
              {servicesSectionData.highlight}
            </span>
          </motion.h2>

          
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-5xl text-[15px] leading-[1.8] text-[#60646a] sm:text-[18px] lg:text-[21px]"
          >
            {servicesSectionData.text}
          </motion.p>
        </div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.homeIcon as keyof typeof serviceIcons];

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className="group h-full"
              >
                <Link
                  href={service.homeHref}
                  className="relative flex h-full flex-col overflow-hidden rounded-[9px] border border-[#eee9e2] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
                >

                  
                  <div className="relative aspect-[1.5/1] w-full overflow-hidden bg-[#eee9e2]">

                    <Image
                      src={service.homeImage}
                      alt={service.homeImageAlt ?? service.treatmentImageAlt ?? service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                  
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  
                    <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#e89519] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={21} />
                    </div>
                  </div>

                  
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-4 sm:px-6 sm:pb-7">

                  
                    <div className="mb-3 flex h-[46px] w-[46px] items-center justify-center text-[#df901e] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                      <Icon
                        size={43}
                        strokeWidth={1.7}
                      />
                    </div>

                  
                    <h3 className="text-[19px] font-bold leading-snug tracking-[-0.4px] text-[#252a30] transition-colors duration-300 group-hover:text-[#d88a17] sm:text-[20px] xl:text-[21px]">
                      {service.title}
                    </h3>

                  
                    <p className="mt-2 flex-1 text-[14px] leading-[1.8] text-[#555b62] sm:text-[15px]">
                      {service.text}
                    </p>

                  </div>

                  
                  <div className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-100 bg-[#e89519] transition-transform duration-500 group-hover:scale-x-100" />

                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
