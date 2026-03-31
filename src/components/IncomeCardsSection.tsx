import { PenTool, Workflow, BarChart3, Search, Users } from "lucide-react";

const opportunities = [
  {
    icon: PenTool,
    title: "AI-Powered Content Creation",
    desc: "Businesses need help creating blog posts, social media content, ad copy, and more using AI tools.",
  },
  {
    icon: Workflow,
    title: "Basic Workflow Automation",
    desc: "Companies pay freelancers to set up simple automations that save hours of repetitive work.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    desc: "Use AI to analyze business data, generate insights, and create professional reports.",
  },
  {
    icon: Search,
    title: "AI Research & Information Synthesis",
    desc: "Help businesses with market research, competitor analysis, and information gathering using AI.",
  },
  {
    icon: Users,
    title: "Productivity Systems for Teams",
    desc: "Set up AI-powered productivity tools and workflows that help teams work more efficiently.",
  },
];

const IncomeCardsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Real Demand</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Real Freelance Opportunities with AI
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Businesses already need help with these services. Freelancers who understand AI tools can provide real value and earn consistently.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
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

export default IncomeCardsSection;
