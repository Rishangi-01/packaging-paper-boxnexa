
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ShoppingCart,
  ConciergeBell,
  Pill,
  CarFront,
  Package,
  Laptop,
  BookOpen,
  Factory,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Retail &",
    subtitle: "E-Commerce",
    icon: ShoppingCart,
    href: "/industries/retail-ecommerce",
  },
  {
    id: 2,
    title: "Food &",
    subtitle: "Beverage",
    icon: ConciergeBell,
    href: "/industries/food-beverage",
  },
  {
    id: 3,
    title: "Pharmaceutical",
    subtitle: "& Healthcare",
    icon: Pill,
    href: "/industries/pharmaceutical-healthcare",
  },
  {
    id: 4,
    title: "Automotive",
    subtitle: "& Engineering",
    icon: CarFront,
    href: "/industries/automotive-engineering",
  },
  {
    id: 5,
    title: "FMCG &",
    subtitle: "Consumer Goods",
    icon: Package,
    href: "/industries/fmcg-consumer-goods",
  },
  {
    id: 6,
    title: "Electronics",
    subtitle: "& Appliances",
    icon: Laptop,
    href: "/industries/electronics-appliances",
  },
  {
    id: 7,
    title: "Publishing",
    subtitle: "& Stationery",
    icon: BookOpen,
    href: "/industries/publishing-stationery",
  },
  {
    id: 8,
    title: "Manufacturing",
    subtitle: "& Industrial",
    icon: Factory,
    href: "/industries/manufacturing-industrial",
  },
];

export default function IndustriesSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-6xl text-center sm:mb-16 lg:mb-20">

          {/* EYEBROW */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 flex items-center justify-center gap-4 sm:mb-5"
          >
            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#252a30] sm:text-[16px] sm:tracking-[4px]">
              Industries We Serve
            </span>

            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-[-1.5px] text-[#252a30]"
          >
            Packaging Solutions for{" "}
            <span className="text-[#df901e]">
              Diverse Industries
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-5xl text-[15px] leading-[1.8] text-[#555b62] sm:text-[18px] lg:text-[21px]"
          >
            Reliable and customized paper packaging for a wide
            range of industry applications.
          </motion.p>
        </div>

        {/* INDUSTRIES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                variants={cardVariants}
                className="group h-full"
              >
                <Link
                  href={industry.href}
                  className="relative flex min-h-[155px] h-full items-center gap-4 overflow-hidden rounded-[17px] border border-[#dedede] bg-white px-4 py-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#e89519] hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)] sm:gap-4 sm:px-5 lg:min-h-[180px] xl:gap-5 xl:px-6"
                >

                  {/* ICON BACKGROUND */}
                  <div className="flex h-[85px] w-[85px] shrink-0 items-center justify-center rounded-[20px] bg-[#faf6ef] transition-all duration-500 group-hover:bg-[#e89519] sm:h-[100px] sm:w-[100px] sm:rounded-[23px] xl:h-[115px] xl:w-[115px]">

                    <Icon
                      size={54}
                      strokeWidth={1.7}
                      className="text-[#df901e] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg] group-hover:text-white sm:h-[60px] sm:w-[60px]"
                    />

                  </div>

                  {/* VERTICAL DIVIDER */}
                  <div className="h-[75px] w-[2px] shrink-0 bg-[#d6d6d6] transition-colors duration-500 group-hover:bg-[#e89519] sm:h-[90px]" />

                  {/* INDUSTRY NAME */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-bold leading-[1.4] tracking-[-0.5px] text-[#252a30] transition-colors duration-300 group-hover:text-[#d88a17] sm:text-[19px] xl:text-[21px]">
                      {industry.title}

                      <span className="block">
                        {industry.subtitle}
                      </span>
                    </h3>
                  </div>

                  {/* HOVER ARROW */}
                  <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#e89519] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* BOTTOM ORANGE LINE */}
                  <div className="absolute bottom-0 left-0 h-[5px] w-full bg-[#e89519] transition-all duration-500 group-hover:h-[7px]" />

                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
