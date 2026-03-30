import { Zap, Layers, Briefcase, Play } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Automate Repetitive Tasks with AI",
    desc: "Learn how to use AI tools to eliminate boring, time-consuming work instantly.",
  },
  {
    icon: Layers,
    title: "Build Simple Automation Workflows",
    desc: "Step-by-step walkthrough of building real workflows you can use right away.",
  },
  {
    icon: Briefcase,
    title: "Freelancing & Side Income Use-Cases",
    desc: "See how these workflows translate into real freelancing opportunities and side income.",
  },
  {
    icon: Play,
    title: "Real Examples of AI Automation in Action",
    desc: "Live demos of automation systems working — not slides, not theory.",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section id="workshop" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Session Breakdown</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You'll Learn in This Session
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A hands-on, practical session focused on building real automation workflows — not generic AI theory.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
