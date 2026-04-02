import { CheckCircle2, Sparkles } from "lucide-react";

const reasons = [
  "Learn how AI freelancing actually works",
  "Understand high-demand AI services",
  "Discover beginner-friendly AI tools",
  "Learn the roadmap to your first freelance client",
];

const WhyAttendSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={16} className="text-primary" />
          <p className="text-primary text-sm font-medium">Why Join</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Why You Should Attend This Bootcamp
        </h2>

        <div className="space-y-4">
          {reasons.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 p-5 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-primary" />
              </div>
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
