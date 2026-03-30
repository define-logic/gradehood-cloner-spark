import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BonusStripSection from "@/components/BonusStripSection";
import TrustRow from "@/components/TrustRow";
import IncomeCardsSection from "@/components/IncomeCardsSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import OutcomesSection from "@/components/OutcomesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SoftTransitionSection from "@/components/SoftTransitionSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <BonusStripSection />
      <TrustRow />
      <IncomeCardsSection />
      <WhatYouLearnSection />
      <WhoIsItForSection />
      <OutcomesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <SoftTransitionSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
