import { X, Check } from "lucide-react";

const rows = [
  { bad: "Teach tools without context", good: "Teach real income-generating workflows" },
  { bad: "No hands-on practice", good: "Build practical AI workflows" },
  { bad: "No portfolio after the course", good: "Create sample portfolios to show clients" },
  { bad: "No project opportunities", good: "Get access to real freelance project opportunities" },
];

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Why Different</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What Makes This Program Different
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Most courses only teach theory. This program focuses on real application.
        </p>

        <div className="space-y-4">
          {rows.map((row, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated border border-border">
                <X size={18} className="text-destructive mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Most courses</span>
                  <p className="text-sm text-foreground/80">{row.bad}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated border border-primary/20">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-primary uppercase tracking-wider">This program</span>
                  <p className="text-sm text-foreground">{row.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
