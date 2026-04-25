import { ContactSection } from "@/components/contact-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <PricingSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
