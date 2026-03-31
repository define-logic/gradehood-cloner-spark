import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BonusStripSection from "@/components/BonusStripSection";
import TrustRow from "@/components/TrustRow";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import IncomeCardsSection from "@/components/IncomeCardsSection";
import WhatMakesDifferentSection from "@/components/WhatMakesDifferentSection";
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
      <WhatYouLearnSection />
      <IncomeCardsSection />
      <WhatMakesDifferentSection />
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
