
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Leaf,
  Layers3,
} from "lucide-react";
import { FaAward } from "react-icons/fa6";

const features = [
  {
    title: "Premium",
    subtitle: "Quality",
    icon: FaAward,
  },
  {
    title: "Sustainable",
    subtitle: "& Eco-Friendly",
    icon: Leaf,
  },
  {
    title: "Custom",
    subtitle: "Solutions",
    icon: Layers3,
  },
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14 xl:gap-16">

          {/* LEFT IMAGE SECTION */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -70 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              ease: "easeOut",
            }}
            className="group relative"
          >
            
            <div className="relative aspect-[1.04/1] w-full overflow-hidden bg-[#f4f1ed] sm:aspect-[1.1/1] lg:aspect-[0.98/1]">

              <Image
                src="/images/about-factory.webp"
                alt="BOXNEXA paper manufacturing and packaging facility"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* SUBTLE IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />

              {/* ORANGE CORNER ACCENT */}
              <div className="absolute bottom-0 left-0 h-2 w-0 bg-[#e89519] transition-all duration-700 group-hover:w-full" />
            </div>

            {/* DECORATIVE BORDER */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full border border-[#e89519]/40 sm:-bottom-4 sm:-right-4" />
          </motion.div>

          {/* RIGHT CONTENT SECTION */}
          <div className="flex flex-col">

            {/* SECTION LABEL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-5 sm:mb-8"
            >
              <span className="h-[5px] w-12 bg-[#e89519] sm:w-[65px]" />

              <span className="text-[13px] font-bold uppercase tracking-[4px] text-[#252a30] sm:text-[16px]">
                About Us
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5.2rem)] font-light leading-[1.12] tracking-[-2px] text-[#252a30]"
            >
              About{" "}
              <span className="font-normal text-[#df901e]">
                BOXNEXA
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[16px] leading-[1.8] text-[#42464b] sm:text-[18px] lg:mt-7 lg:text-[19px] xl:text-[20px]"
            >
              <strong className="font-bold text-[#252a30]">
                BOXNEXA
              </strong>{" "}
              is a trusted name in paper and packaging solutions,
              delivering high-quality, durable, and eco-friendly
              packaging for businesses across diverse industries.
              We combine modern manufacturing, premium materials,
              and a customer-focused approach to create packaging
              that protects, presents, and adds value to your products.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: 0.25,
              }}
              className="mt-8 grid grid-cols-3 divide-x divide-gray-300 sm:mt-12 lg:mt-12"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={false}
                    whileHover={
                      reduceMotion
                        ? {}
                        : { y: -8 }
                    }
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col items-center px-2 text-center sm:px-4"
                  >
                    {/* ICON BOX */}
                    <div className="mb-4 flex h-[75px] w-[85px] items-center justify-center rounded-[20px] bg-[#f7f4ef] transition-all duration-500 group-hover:bg-[#e89519] sm:mb-5 sm:h-[95px] sm:w-[105px] sm:rounded-[24px]">
                      <Icon
                        size={45}
                        strokeWidth={1.7}
                        className="text-[#d88a17] transition-all duration-500 group-hover:scale-110 group-hover:text-white sm:h-[53px] sm:w-[53px]"
                      />
                    </div>

                    {/* FEATURE TEXT */}
                    <h3 className="text-[14px] font-medium leading-snug text-[#252a30] sm:text-[19px] lg:text-[21px]">
                      {feature.title}
                    </h3>

                    <p className="mt-0.5 text-[13px] font-medium leading-snug text-[#252a30] sm:text-[17px] lg:text-[19px]">
                      {feature.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
