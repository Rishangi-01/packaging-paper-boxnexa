
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    id: 1,
    title: "Our Location",
    description: "47, Shardhanand Marg, G.B. Road, Delhi – 110006",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=47+Shardhanand+Marg+G.B.+Road+Delhi+110006",
  },
  {
    id: 2,
    title: "Call Us",
    description: "011-40197514 / 15",
    icon: Phone,
    href: "tel:+911140197514",
  },
  {
    id: 3,
    title: "Email Us",
    description: "contact@boxnexa.com",
    icon: Mail,
    href: "mailto:contact@boxnexa.com",
  },
];

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Packaging Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:contact@boxnexa.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
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
      id="contact"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >

      
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[350px] w-[350px] rounded-full bg-[#e89519]/[0.045] blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">

      
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative"
          >

      
            <div className="mb-5 flex items-center gap-4 sm:mb-7">
              <span className="h-[5px] w-12 bg-[#e89519] sm:w-[65px]" />

              <span className="text-[13px] font-bold uppercase tracking-[3px] text-[#252a30] sm:text-[16px] sm:tracking-[4px]">
                Contact Us
              </span>
            </div>

      
            <h2 className="text-[clamp(2.7rem,5vw,4.2rem)] font-bold leading-[1.12] tracking-[-1.5px] text-[#252a30]">
              Get in{" "}
              <span className="text-[#e89519]">
                Touch
              </span>
            </h2>

      
            <p className="mt-5 max-w-[650px] text-[16px] leading-[1.7] text-[#62676e] sm:text-[18px] lg:text-[20px]">
              Have a requirement or a question? Reach out to our team
              for quick assistance and the right packaging solution.
            </p>

      
            <div className="mt-8 space-y-4 sm:mt-9 sm:space-y-5">

              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.id === 1 ? "_blank" : undefined}
                    rel={item.id === 1 ? "noopener noreferrer" : undefined}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: -25 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: reduceMotion ? 0 : index * 0.15,
                    }}
                    className="group flex items-center gap-4 sm:gap-5"
                  >

      
                    <div className="flex h-[75px] w-[75px] shrink-0 items-center justify-center rounded-[20px] bg-[#faf5ed] transition-all duration-500 group-hover:bg-[#e89519] group-hover:shadow-[0_10px_25px_rgba(232,149,25,0.2)] sm:h-[85px] sm:w-[85px] sm:rounded-[22px]">

                      <Icon
                        size={36}
                        strokeWidth={1.9}
                        className="text-[#e89519] transition-all duration-500 group-hover:scale-110 group-hover:text-white sm:h-[40px] sm:w-[40px]"
                      />

                    </div>

      
                    <div className="h-[60px] w-[2px] shrink-0 bg-[#dedede] transition-colors duration-300 group-hover:bg-[#e89519] sm:h-[65px]" />

      
                    <div className="min-w-0">
                      <h3 className="text-[18px] font-bold text-[#252a30] transition-colors duration-300 group-hover:text-[#df901e] sm:text-[21px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[14px] leading-[1.6] text-[#41464d] sm:text-[17px]">
                        {item.description}
                      </p>
                    </div>

                  </motion.a>
                );
              })}

            </div>

      
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 40, scale: 0.96 }
              }
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.2,
              }}
              className="relative mx-auto mt-10 h-[220px] w-full max-w-[620px] sm:mt-12 sm:h-[290px] lg:mx-0 lg:mt-7 lg:h-[300px] xl:h-[330px]"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -8, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/images/contact-packaging.webp"
                  alt="BOXNEXA paper packaging boxes and kraft paper"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain object-center lg:object-left-bottom"
                />
              </motion.div>
            </motion.div>

          </motion.div>

      
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 45 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
            className="relative rounded-[20px] border border-[#eee8e3] bg-[#faf7f4] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.025)] sm:rounded-[24px] sm:p-8 lg:p-9 xl:p-11"
          >

      
            <h3 className="mb-7 text-[27px] font-bold tracking-[-1px] text-[#252a30] sm:mb-9 sm:text-[34px]">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

      
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="h-[60px] w-full rounded-[14px] border border-[#dedede] bg-white px-5 text-[15px] text-[#252a30] outline-none transition-all duration-300 placeholder:text-[#555b62] hover:border-[#e89519]/60 focus:border-[#e89519] focus:ring-4 focus:ring-[#e89519]/10 sm:text-[17px]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="h-[60px] w-full rounded-[14px] border border-[#dedede] bg-white px-5 text-[15px] text-[#252a30] outline-none transition-all duration-300 placeholder:text-[#555b62] hover:border-[#e89519]/60 focus:border-[#e89519] focus:ring-4 focus:ring-[#e89519]/10 sm:text-[17px]"
                  />
                </div>

              </div>

      
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="h-[60px] w-full rounded-[14px] border border-[#dedede] bg-white px-5 text-[15px] text-[#252a30] outline-none transition-all duration-300 placeholder:text-[#555b62] hover:border-[#e89519]/60 focus:border-[#e89519] focus:ring-4 focus:ring-[#e89519]/10 sm:text-[17px]"
                />
              </div>

      
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="min-h-[150px] w-full resize-y rounded-[14px] border border-[#dedede] bg-white px-5 py-5 text-[15px] text-[#252a30] outline-none transition-all duration-300 placeholder:text-[#555b62] hover:border-[#e89519]/60 focus:border-[#e89519] focus:ring-4 focus:ring-[#e89519]/10 sm:min-h-[160px] sm:text-[17px]"
                />
              </div>

      
              <div className="pt-1">

                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  className="group inline-flex min-h-[60px] w-full items-center justify-center gap-4 rounded-[13px] bg-[#ed9410] px-8 py-4 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(237,148,16,0.16)] transition-all duration-300 hover:bg-[#d98208] sm:w-auto sm:min-w-[285px] sm:text-[18px]"
                >
                  <span>Send Message</span>

                  <ArrowRight
                    size={23}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </motion.button>

              </div>

      
              {submitted && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm font-medium text-green-700"
                >
                  <CheckCircle2 size={18} />
                  Your email application should open with your enquiry.
                </p>
              )}

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
