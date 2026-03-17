 
import FAQSection from "./_components/FAQSection";
import Hero from "./_components/Hero"; 
import HowItWorks from "./_components/HowItWorks";
import ServicesSection from "./_components/Services";
import TestimonialCarousel from "./_components/TestimonialCarousel";
import TrustSection from "./_components/TrustSection";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32">
      <Hero />
    <ServicesSection />
    <HowItWorks />
    <TrustSection />
    <TestimonialCarousel />
    <FAQSection />
      {/* 
      <Popular />
      <TopExpertise />
      <WhyChooseUs /> */}
    </div>
  );
}
