import { FileText, Users, Zap } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "AI Content Creation",
    description: "Social media, blog articles, product descriptions",
  },
  {
    icon: Users,
    title: "AI Lead Generation",
    description: "Build valuable lead lists for businesses",
  },
  {
    icon: Zap,
    title: "Simple Automation",
    description: "Workflows that save businesses time",
  },
];

const OpportunitySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-medium mb-3">The Opportunity</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          AI Skills Are Creating New Income Opportunities
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          With the right skills, students can start offering services like:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="inline-flex flex-col items-center gap-1 px-8 py-4 rounded-2xl bg-surface-elevated border border-primary/20">
          <span className="text-2xl font-bold text-gradient-green">₹3,000 – ₹20,000</span>
          <span className="text-sm text-muted-foreground">per project</span>
        </div>
        <p className="text-muted-foreground text-sm mt-4">
          Even small projects can generate real income. The key is knowing real skills, not just tools.
        </p>
      </div>
    </section>
  );
};

export default OpportunitySection;
