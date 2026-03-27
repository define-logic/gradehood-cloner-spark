import { CheckCircle2, Sparkles } from "lucide-react";

const outcomes = [
  "Understand practical AI workflows businesses pay for",
  "Have a small portfolio of work samples",
  "Know how to find clients and price services",
  "Be ready to offer freelance services immediately",
];

const OutcomesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Program Outcomes</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You Will Have By The End
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          By the end of the program, students will be ready to start offering real freelance services.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {outcomes.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-5 rounded-xl bg-surface-elevated border border-border"
            >
              <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 glow-green">
          <div className="flex items-start gap-3">
            <Sparkles size={20} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-primary uppercase tracking-wider mb-1">Bonus</p>
              <h4 className="text-lg font-semibold mb-2">Start Earning Freelance Income</h4>
              <p className="text-sm text-muted-foreground">
                Some students may start earning small freelance income during or right after the program. Income depends on student effort and execution — but the opportunity is real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
