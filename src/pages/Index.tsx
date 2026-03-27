import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OpportunitySection from "@/components/OpportunitySection";
import ProgramSection from "@/components/ProgramSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import WeeklyPlanSection from "@/components/WeeklyPlanSection";
import ComparisonSection from "@/components/ComparisonSection";
import OutcomesSection from "@/components/OutcomesSection";
import FoundingCohortSection from "@/components/FoundingCohortSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <OpportunitySection />
      <ProgramSection />
      <WhoIsItForSection />
      <WeeklyPlanSection />
      <ComparisonSection />
      <OutcomesSection />
      <FoundingCohortSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
