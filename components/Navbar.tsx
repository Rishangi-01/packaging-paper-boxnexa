
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { headerData, standaloneSiteData } from "@/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav aria-label={headerData.ariaLabel} className="relative mx-auto flex min-h-[90px] w-full items-center justify-between px-5 py-2 shadow-[0_3px_18px_rgba(0,0,0,0.035)] sm:px-8 lg:min-h-[112px] lg:px-10 xl:px-12">

        
        <Link
              href={standaloneSiteData.homeHref}
              aria-label={`${standaloneSiteData.name} ${standaloneSiteData.homeLabel}`}
              className="inline-flex"
            >
              <div
                className="relative h-[100px] w-[250px] max-w-full sm:h-[95px] sm:w-[300px]"
              >
                <Image
                  src={standaloneSiteData.logo}
                  alt={standaloneSiteData.alt}
                  fill
                  sizes="(max-width: 640px) 300px, 380px"
                  className="object-contain object-left"
                  priority={false}
                />
              </div>
            </Link>

        {/* DESKTOP DIVIDER */}
        <div className="mx-5 hidden h-[53px] w-[2px] shrink-0 bg-gray-200 xl:block" />

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-9">
          {headerData.links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <Link
                href={link.href}
                className={`group relative whitespace-nowrap py-3 text-[16px] font-semibold transition-colors duration-300 2xl:text-[18px] ${
                  link.active
                    ? "text-[#d9840b]"
                    : "text-[#252a30] hover:text-[#d9840b]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#e89519] transition-all duration-300 ${
                    link.active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        
        <Link
          href={headerData.button.href}
          className="group relative hidden shrink-0 items-center gap-3 overflow-hidden bg-[#e89519] px-7 py-[15px] text-[17px] font-bold text-white transition-all duration-300 hover:bg-[#c8790c] hover:shadow-[0_8px_25px_rgba(232,149,25,0.3)] xl:flex 2xl:px-9"
          style={{
            clipPath: "polygon(9% 0, 100% 0, 91% 100%, 0 100%)",
          }}
        >
          <span className="relative z-10">{headerData.button.label}</span>

          <ArrowRight
            size={23}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
          />

          <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? standaloneSiteData.mobileMenu.closeLabel : standaloneSiteData.mobileMenu.openLabel}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-md bg-[#e89519] text-white transition-all duration-300 hover:bg-[#c8790c] xl:hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white shadow-xl xl:hidden"
          >
            <div className="mx-auto flex max-w-[1600px] flex-col py-5 px-5 sm:px-8 lg:px-12 xl:px-16">
              {headerData.links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between border-b border-gray-100 py-4 text-[15px] font-semibold transition-colors duration-300 ${
                      link.active
                        ? "text-[#e89519]"
                        : "text-[#252a30] hover:text-[#e89519]"
                    }`}
                  >
                    {link.label}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE CTA */}
              <Link
                href={headerData.mobileButton.href}
                onClick={() => setIsOpen(false)}
                className="mt-5 flex items-center justify-center gap-3 bg-[#e89519] px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-[#c8790c]"
              >
                {headerData.mobileButton.label}
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
