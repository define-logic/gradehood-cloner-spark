import { ArrowRight, Users } from "lucide-react";

const REGISTER_URL = "https://tally.so/r/NpL8Op";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 glow-green">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
            Reserve Your Free Seat Now
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-primary mb-6">
            <Users size={16} />
            <span>Limited seats for live interaction</span>
          </div>

          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all"
          >
            Claim Your Seat & Learn AI Automation <ArrowRight size={20} />
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            100% Free · No spam · Unsubscribe anytime
          </p>
          <p className="text-xs text-primary/70 mt-1 font-medium">Next session filling fast</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
