
"use client";

import dynamic from "next/dynamic";
import { testimonialsSectionData } from "@/data";

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection"),
  {
    ssr: false,
    loading: () => (
      <section
        className="w-full min-h-[500px] bg-white"
        aria-label={testimonialsSectionData.loadingLabel}
      />
    ),
  }
);

export default function TestimonialsSectionLoader() {
  return <TestimonialsSection />;
}
