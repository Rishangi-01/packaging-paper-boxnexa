
"use client";

import dynamic from "next/dynamic";

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection"),
  {
    ssr: false,
    loading: () => (
      <section
        className="w-full min-h-[500px] bg-white"
        aria-label="Loading testimonials"
      />
    ),
  }
);

export default function TestimonialsSectionLoader() {
  return <TestimonialsSection />;
}
