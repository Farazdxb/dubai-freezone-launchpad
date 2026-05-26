import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LogoBar } from "@/components/LogoBar";
import { ProductGrid } from "@/components/ProductGrid";
import { FeatureSpotlight } from "@/components/FeatureSpotlight";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { PerksIntegrations } from "@/components/PerksIntegrations";
import { SocialProof } from "@/components/SocialProof";
import { FreezoneOffersSection } from "@/components/FreezoneOffersSection";
import { SupportReassurance } from "@/components/SupportReassurance";
import { CTASection } from "@/components/CTASection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <LogoBar />
        <ProductGrid />
        <FeatureSpotlight />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <PerksIntegrations />
        <SocialProof />
        <FreezoneOffersSection />
        <SupportReassurance />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
