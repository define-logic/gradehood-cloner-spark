import { Cpu, TrendingUp, Workflow, UserPlus } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "AI Automation Freelancing",
    desc: "Learn how to create simple automation workflows using AI tools and offer them as freelance services to businesses.",
  },
  {
    icon: TrendingUp,
    title: "High-Demand AI Services",
    desc: "Discover the AI services companies are actively paying freelancers for today.",
  },
  {
    icon: Workflow,
    title: "Build AI Workflows Without Coding",
    desc: "Learn how to use tools like ChatGPT and Make.com to build useful AI workflows without programming.",
  },
  {
    icon: UserPlus,
    title: "Getting Your First Freelance Client",
    desc: "Step-by-step method to find and close your first AI freelancing client.",
  },
];

const BootcampLearnSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Bootcamp Curriculum</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You Will Learn In This Bootcamp
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Practical skills you can start using immediately to offer AI services and earn as a freelancer.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BootcampLearnSection;
