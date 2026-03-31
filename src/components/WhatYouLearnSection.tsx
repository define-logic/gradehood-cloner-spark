import { Bot, Workflow, BarChart3, PenTool, Search } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "How Businesses Use AI to Automate Processes",
    desc: "See how companies are using AI to handle repetitive tasks and streamline operations.",
  },
  {
    icon: Workflow,
    title: "How Freelancers Deliver Services Faster with AI",
    desc: "Learn how freelancers are using AI tools to work smarter and deliver more value to clients.",
  },
  {
    icon: BarChart3,
    title: "AI for Business Data Analysis & Insights",
    desc: "Understand how to use AI to analyze data, generate reports, and provide actionable insights.",
  },
  {
    icon: PenTool,
    title: "Creating Business Content Using AI Tools",
    desc: "Learn how to produce professional content — from copy to visuals — using AI efficiently.",
  },
  {
    icon: Search,
    title: "Identifying Freelance Opportunities with AI",
    desc: "Discover where AI creates the most value and how to position yourself to capture those opportunities.",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section id="workshop" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Session Breakdown</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You'll Learn in This Workshop
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A practical session focused on how AI is used in real business contexts — and how you can offer these skills as freelance services.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
