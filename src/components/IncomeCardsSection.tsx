import { Globe, Briefcase, CheckCircle2 } from "lucide-react";

const platforms = [
  { name: "Upwork", desc: "World's largest freelancing marketplace" },
  { name: "Fiverr", desc: "Gig-based services platform" },
  { name: "Freelancer", desc: "Global project marketplace" },
  { name: "LinkedIn", desc: "Professional networking & outreach" },
];

const checklist = [
  "Understanding high-demand AI freelance services",
  "Building simple AI workflows without coding",
  "Tools used by AI freelancers",
  "How beginners can start getting freelance projects",
];

const IncomeCardsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Platforms */}
        <div>
          <p className="text-primary text-sm font-medium text-center mb-3">Global Reach</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Where AI Freelancers Find Clients
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Businesses across the world are hiring freelancers on these platforms to implement AI tools and automation systems.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Globe size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bootcamp Checklist */}
        <div className="max-w-2xl mx-auto">
          <p className="text-primary text-sm font-medium text-center mb-3">Bootcamp Takeaways</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            What You Will Learn In The Bootcamp
          </h2>

          <div className="space-y-4">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated border border-border"
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeCardsSection;
