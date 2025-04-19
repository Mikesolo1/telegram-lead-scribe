
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { CustomCursor } from "@/components/ui/custom-cursor";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col antialiased">
      <AnimatedBackground />
      <CustomCursor />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
