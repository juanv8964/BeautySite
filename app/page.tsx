import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSignalsSection } from "@/components/trust-signals-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <TrustSignalsSection />
      <ServicesSection />
      <FeaturesSection />
      <PricingSection />
      <ProcessSection />
      <GallerySection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
