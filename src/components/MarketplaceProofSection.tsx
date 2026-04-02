import { Briefcase, ShoppingBag, Globe2, Linkedin } from "lucide-react";

const platforms = [
  {
    icon: Briefcase,
    name: "Upwork",
    desc: "Thousands of projects related to AI automation and AI tools.",
    tag: "Top Platform",
  },
  {
    icon: ShoppingBag,
    name: "Fiverr",
    desc: "Freelancers offering AI services to global clients.",
    tag: "Popular",
  },
  {
    icon: Globe2,
    name: "Freelancer",
    desc: "Businesses looking for automation and AI workflow implementation.",
    tag: "Global",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    desc: "Many businesses directly hire freelancers for AI related projects.",
    tag: "Professional",
  },
];

const MarketplaceProofSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-primary text-sm font-medium text-center mb-3">Market Proof</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          AI Freelancers Are Already Getting Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          These platforms have thousands of active AI-related projects. The demand is real.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="group relative p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
            >
              <span className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {p.tag}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceProofSection;
