
"use client";

import { motion, useReducedMotion } from "motion/react";
import { heroSectionData } from "@/data";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const slide = heroSectionData.slides[0];
  const title = slide.title;
  const textLines = heroSectionData.homeTextLines;

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative isolate min-h-[650px] w-full overflow-hidden bg-[#25282c] sm:min-h-[720px] lg:min-h-[calc(100vh-112px)]">

      
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.5,
          ease: "easeOut",
        }}
        className="absolute inset-0 -z-20 bg-cover bg-[position:20%_center] sm:bg-[position:60%_center] lg:bg-center"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />

      
      <div className="mx-auto flex h-full min-h-[500px] max-w-[1600px] items-center py-20 sm:min-h-[720px] lg:min-h-0 px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="w-full max-w-[680px]">

      
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-7 flex items-center gap-5 sm:mb-9"
          >
            <span className="h-[5px] w-12 bg-[#e89519] sm:w-[60px]" />

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#292d32] sm:text-[15px] sm:tracking-[4px]">
              {slide.eyebrow}
            </span>
          </motion.div>

      
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="text-[clamp(3.3rem,7.5vw,5.8rem)] font-extrabold leading-[0.98] text-[#24272c]"
          >
            {title[0]}
            <span className="block text-[#e89519]">{title[1]}</span>
            <span className="block">{title[2]}</span>
          </motion.h1>

      
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-[590px] text-[17px] font-medium leading-[1.65] text-[#33383e] sm:mt-5 sm:text-[21px] lg:text-[24px]"
          >
            {textLines[0]}
            <span className="block">{textLines[1]}</span>
          </motion.p>

        </div>
      </div>

    </section>
  );
}
