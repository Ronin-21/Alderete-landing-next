import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import MidBanner from "@/components/MidBanner";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <MidBanner />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
