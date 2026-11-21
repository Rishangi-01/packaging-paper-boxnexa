
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Box,
  ScrollText,
  ShoppingBag,
  Layers3,
  ArrowUpRight,
} from "lucide-react";
import { productsSectionData } from "@/data";

const productIcons = {
  box: Box,
  scroll: ScrollText,
  "shopping-bag": ShoppingBag,
  layers: Layers3,
};

export default function ProductsSection() {
  const reduceMotion = useReducedMotion();
  const content = productsSectionData.homeSection;

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
      y: 40,
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
      id="products"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16 lg:mb-20">

          {/* SUB HEADING */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-4 sm:mb-7"
          >
            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#252a30] sm:text-[16px] sm:tracking-[4px]">
              {content.eyebrow}
            </span>

            <span className="h-[5px] w-10 bg-[#e89519] sm:w-[55px]" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.9rem)] font-bold leading-[1.2] tracking-[-1.5px] text-[#252a30]"
          >
            {content.title}{" "}
            <span className="text-[#df901e]">
              {content.highlight}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-5xl text-[15px] leading-[1.8] text-[#50565d] sm:text-[18px] lg:text-[21px]"
          >
            {content.description}
          </motion.p>
        </div>

        {/* PRODUCTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6"
        >
          {productsSectionData.collections.map((product) => {
            const Icon = productIcons[product.icon as keyof typeof productIcons];

            return (
              <motion.div
                key={product.number}
                variants={cardVariants}
                className="group h-full"
              >
                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-[11px] border border-[#dedede] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#e89519] hover:shadow-[0_15px_35px_rgba(0,0,0,0.09)]"
                >

                  {/* PRODUCT IMAGE */}
                  <div className="relative aspect-[1.05/1] w-full overflow-hidden bg-white p-3 sm:p-4">

                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* IMAGE HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-[#e89519]/0 transition-colors duration-500 group-hover:bg-[#e89519]/[0.035]" />

                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="flex min-h-[105px] items-center gap-4 px-5 py-5 sm:gap-5 sm:px-6 sm:py-6">

                    {/* PRODUCT ICON */}
                    <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center text-[#e89519] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg] sm:h-[65px] sm:w-[65px]">
                      <Icon
                        size={53}
                        strokeWidth={1.6}
                        className="h-10 w-10 sm:h-[53px] sm:w-[53px]"
                      />
                    </div>

                    {/* VERTICAL DIVIDER */}
                    <div className="h-[55px] w-[2px] shrink-0 bg-[#d2d2d2] transition-colors duration-300 group-hover:bg-[#e89519] sm:h-[65px]" />

                    {/* PRODUCT TITLE */}
                    <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.5px] text-[#252a30] transition-colors duration-300 group-hover:text-[#d88a17] sm:text-[21px] lg:text-[19px] xl:text-[21px]">
                      {product.homeTitle}
                    </h3>
                  </div>

                  {/* ORANGE BOTTOM BORDER */}
                  <div className="absolute bottom-0 left-0 h-[5px] w-full origin-left scale-x-100 bg-[#e89519] transition-all duration-500 group-hover:h-[7px]" />

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
