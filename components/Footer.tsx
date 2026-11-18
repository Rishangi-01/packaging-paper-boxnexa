
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { footerSectionData, standaloneSiteData } from "@/data";

const contactIcons = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
};

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
    <footer aria-label={footerSectionData.ariaLabel} className="relative overflow-hidden bg-white">

      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-[400px] w-[260px] rotate-[42deg] bg-gradient-to-b from-[#fff4e8] to-[#fffaf5]" />

      <div className="pointer-events-none absolute -bottom-40 -right-10 h-[350px] w-[170px] rotate-[42deg] bg-gradient-to-b from-[#fff4e8] to-[#fffaf5]" />

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-[1600px] pb-14 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20 px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.55fr_0.85fr_1.3fr] lg:gap-12">

          {/* COMPANY INFORMATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative lg:pr-10"
          >

            {/* LOGO */}
            <Link
              href={standaloneSiteData.homeHref}
              aria-label={`${standaloneSiteData.name} ${standaloneSiteData.homeLabel}`}
              className="inline-flex"
            >
              <motion.div
                whileHover={
                  reduceMotion ? undefined : { scale: 1.035 }
                }
                transition={{ duration: 0.3 }}
                className="relative h-[100px] w-[300px] max-w-full sm:h-[115px] sm:w-[380px]"
              >
                <Image
                  src={standaloneSiteData.logo}
                  alt={standaloneSiteData.alt}
                  fill
                  sizes="(max-width: 640px) 300px, 380px"
                  className="object-contain object-left"
                  priority={false}
                />
              </motion.div>
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[470px] text-[16px] leading-[1.7] text-[#30343a] sm:text-[18px]">
              {footerSectionData.about}
            </p>

          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
            className="border-t border-[#dedede] pt-8 md:border-t-0 md:pt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >

            <h3 className="text-[25px] font-bold tracking-tight text-[#252a30] sm:text-[29px]">
              {footerSectionData.columns[0].title}
            </h3>

            {/* ORANGE LINE */}
            <div className="mt-4 h-[4px] w-[72px] rounded-full bg-[#ed9410]" />

            {/* LINKS */}
            <ul className="mt-6 space-y-4">

              {footerSectionData.columns[0].links.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={
                    reduceMotion ? false : { opacity: 0, x: -15 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-[17px] font-medium text-[#292e35] transition-colors duration-300 hover:text-[#e89519] sm:text-[20px]"
                  >

                    <ChevronRight
                      size={19}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#e89519]"
                    />

                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />

                  </Link>
                </motion.li>
              ))}

            </ul>

          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.25 }}
            className="border-t border-[#dedede] pt-8 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >

            <h3 className="text-[25px] font-bold tracking-tight text-[#252a30] sm:text-[29px]">
              {footerSectionData.contactTitle}
            </h3>

            {/* ORANGE LINE */}
            <div className="mt-4 h-[4px] w-[72px] rounded-full bg-[#ed9410]" />

            {/* CONTACT LIST */}
            <div className="mt-7 space-y-6 sm:space-y-7">

              {footerSectionData.contactDetails.map((item, index) => {
                const Icon = contactIcons[item.icon as keyof typeof contactIcons];

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.icon === "map-pin" ? "_blank" : undefined}
                    rel={item.icon === "map-pin" ? "noopener noreferrer" : undefined}
                    initial={
                      reduceMotion ? false : { opacity: 0, x: 20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    className="group flex items-start gap-4"
                  >

                    {/* ICON */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#ed9410] transition-all duration-300 group-hover:scale-110 group-hover:text-[#252a30] sm:h-11 sm:w-11">

                      <Icon
                        size={34}
                        strokeWidth={2}
                        className="sm:h-[38px] sm:w-[38px]"
                      />

                    </div>

                    {/* TEXT */}
                    <div className="pt-0.5 text-[16px] leading-[1.65] text-[#252a30] transition-colors duration-300 group-hover:text-[#e89519] sm:text-[19px]">
                      {item.value}
                    </div>

                  </motion.a>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="relative overflow-hidden border-t border-[#3c414b] bg-[#252a33]">

        {/* SUBTLE BACKGROUND EFFECT */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#252a33] via-[#2b303a] to-[#252a33]" />

        <div className="relative mx-auto flex max-w-[1650px] flex-col items-center justify-between gap-3 px-5 py-6 sm:px-8 sm:py-7 md:flex-row lg:px-12">

          <motion.p
            initial={
              reduceMotion ? false : { opacity: 0, y: 10 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[14px] text-white/90 sm:text-left sm:text-[17px]"
          >
            {footerSectionData.copyright}
          </motion.p>

        </div>

      </div>

    </footer>
  );
}
