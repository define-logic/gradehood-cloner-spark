import { Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    role: "Freelancer",
    income: "₹65,000",
    period: "/month",
    desc: "Offering AI automation services to businesses",
  },
  {
    icon: GraduationCap,
    role: "Student",
    income: "₹32,000",
    period: "/month",
    desc: "Building automation workflows as a side gig",
  },
  {
    icon: TrendingUp,
    role: "Side Hustler",
    income: "₹1.2L",
    period: "/month",
    desc: "Running an AI automation services business",
  },
];

const IncomeCardsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Real-World Numbers</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What AI Automation Freelancers Are Earning
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Real income ranges from people building automation workflows in India today.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.role}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon size={24} className="text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-2">{card.role}</p>
              <div className="mb-3">
                <span className="text-3xl font-extrabold text-primary">{card.income}</span>
                <span className="text-muted-foreground text-sm">{card.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncomeCardsSection;
