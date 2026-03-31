import { Target, DollarSign, Lightbulb } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "How AI Solves Real Business Problems",
    desc: "Not just tool tutorials — we show you the actual business problems AI is solving today.",
  },
  {
    icon: DollarSign,
    title: "How Freelancers Can Monetize AI Skills",
    desc: "Learn which AI skills businesses are willing to pay for and how to position yourself.",
  },
  {
    icon: Lightbulb,
    title: "Practical Service Ideas Businesses Pay For",
    desc: "Get concrete service ideas that companies are already hiring freelancers to deliver.",
  },
];

const WhatMakesDifferentSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Why This Workshop</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What Makes This Workshop Different
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Most AI tutorials focus only on tools. This workshop focuses on how to turn AI knowledge into real freelancing income.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {differentiators.map((item) => (
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

export default WhatMakesDifferentSection;
