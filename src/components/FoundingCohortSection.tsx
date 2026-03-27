import { Tag, HeartHandshake, Trophy } from "lucide-react";

const perks = [
  {
    icon: Tag,
    title: "Early Access Pricing",
    desc: "Founding members get the best price before we launch publicly.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Mentorship",
    desc: "Get personal attention and guidance from program mentors.",
  },
  {
    icon: Trophy,
    title: "Priority for Projects",
    desc: "First access to real freelance project opportunities as they come in.",
  },
];

const FoundingCohortSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm font-medium mb-3">Limited Founding Cohort</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Be Part of the First Batch
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="p-6 rounded-2xl bg-surface-elevated border border-border text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <perk.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{perk.title}</h3>
              <p className="text-sm text-muted-foreground">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="inline-flex flex-col items-center gap-2 p-8 rounded-2xl bg-surface-elevated border border-primary/20 glow-green">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Founding Cohort Pricing</p>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl text-muted-foreground line-through">₹12,000</span>
            <span className="text-4xl font-extrabold text-primary">FREE</span>
          </div>
          <p className="text-sm text-muted-foreground">For limited time only — founding cohort members pay nothing.</p>
          <div className="flex flex-col gap-1 mt-2 text-xs text-muted-foreground">
            <span>✦ Seats are limited</span>
            <span>✦ Price goes to ₹12,000 after founding batch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingCohortSection;
