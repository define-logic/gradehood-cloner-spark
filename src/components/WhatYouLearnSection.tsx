import { Lightbulb, Layers, Wrench, Map } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "How People Earn Using AI Today",
    desc: "Real examples and income streams — not theory or hype.",
  },
  {
    icon: Layers,
    title: "3 Beginner-Friendly Income Methods",
    desc: "Practical approaches anyone can start with zero experience.",
  },
  {
    icon: Wrench,
    title: "Tools You Can Start Immediately",
    desc: "Hands-on walkthrough of free AI tools you'll use right away.",
  },
  {
    icon: Map,
    title: "Step-by-Step Roadmap",
    desc: "A clear path from today to your first AI-powered income.",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section id="workshop" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Workshop Content</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You'll Learn
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          In this live session, we cover everything you need to start your AI income journey.
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
