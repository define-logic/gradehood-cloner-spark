import { Gift, CheckCircle2 } from "lucide-react";

const bonusItems = [
  "5 AI freelancing ideas (India-focused)",
  "Tools you can start using immediately",
  "Step-by-step beginner roadmap",
];

const BonusStripSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
          {/* Worth badge */}
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            Worth ₹499
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <Gift size={24} className="text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                🎁 Free Bonus: AI Freelancing Starter Kit
              </h3>
              <p className="text-sm text-muted-foreground">
                Delivered instantly after registration — yours to keep forever.
              </p>
              <div className="grid sm:grid-cols-3 gap-2">
                {bonusItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusStripSection;
