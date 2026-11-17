import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSectionLoader from "@/components/TestimonialsSectionLoader";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <TestimonialsSectionLoader />
      <ContactSection />
    </div>
  );
}
