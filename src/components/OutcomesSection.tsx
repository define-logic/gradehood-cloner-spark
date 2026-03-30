import { Eye, Compass, Rocket } from "lucide-react";

const outcomes = [
  {
    icon: Eye,
    title: "Understand AI Automation Opportunities",
    desc: "See exactly how people are building workflows and earning through freelancing right now.",
  },
  {
    icon: Compass,
    title: "Choose Your First Automation Use-Case",
    desc: "Know which workflow to build first based on your skills and situation.",
  },
  {
    icon: Rocket,
    title: "Start Building Immediately",
    desc: "Leave with a clear execution plan and tools to build your first workflow today.",
  },
];

const OutcomesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">After The Session</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You'll Be Able to Do After This Session
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Walk away with real-use case execution clarity — not vague motivation.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
