import { ArrowRight } from "lucide-react";

const modules = [
  {
    num: "Module 1",
    title: "AI Content Creation",
    description: "Create marketing content businesses need every day.",
    items: ["Social media posts", "Blog articles", "Product descriptions"],
  },
  {
    num: "Module 2",
    title: "AI Lead Generation",
    description: "Find potential customers for businesses and build valuable lead lists.",
    items: ["Prospect research", "Lead list building", "Outreach copy"],
  },
  {
    num: "Module 3",
    title: "AI Automation Basics",
    description: "Understand simple automation workflows that save businesses time.",
    items: ["Workflow design", "Tool integration", "Time-saving systems"],
  },
  {
    num: "Module 4",
    title: "Freelancing Fundamentals",
    description: "Everything you need to start earning from day one.",
    items: ["Finding clients", "Pricing services", "Delivering projects"],
  },
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Introducing</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Gradehood AI Income Accelerator
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          A practical program where students learn AI-powered freelance services and work on real-world projects.
        </p>

        {/* Flow */}
        <div className="flex items-center justify-center gap-4 mb-12 text-sm font-medium">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">Learning</span>
          <ArrowRight size={16} className="text-muted-foreground" />
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">Practicing</span>
          <ArrowRight size={16} className="text-muted-foreground" />
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">Earning</span>
        </div>

        <h3 className="text-xl font-semibold text-center mb-8">What You Will Learn</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{mod.num}</span>
              <h4 className="text-lg font-bold mt-2 mb-2">{mod.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{mod.description}</p>
              <ul className="space-y-2">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
