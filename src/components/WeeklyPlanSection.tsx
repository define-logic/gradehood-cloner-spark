const weeks = [
  {
    num: 1,
    title: "AI Fundamentals & Tools",
    desc: "Get hands-on with the best AI tools available. Understand how to use them for real business work.",
  },
  {
    num: 2,
    title: "AI Content Services",
    desc: "Build a complete content creation workflow. Create samples you can show to real clients.",
  },
  {
    num: 3,
    title: "AI Lead Generation",
    desc: "Learn systematic methods to find and qualify business leads using AI tools.",
  },
  {
    num: 4,
    title: "Automation + Freelancing",
    desc: "Automation basics and how to land your first freelance project and price your services.",
  },
];

const WeeklyPlanSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Program Structure</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          4 Week Practical Program
        </h2>

        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-border" />

          {weeks.map((week) => (
            <div key={week.num} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold shrink-0">
                {week.num}
              </div>
              <div className="pt-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Week {week.num}</p>
                <h4 className="text-lg font-semibold mb-2">{week.title}</h4>
                <p className="text-sm text-muted-foreground">{week.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPlanSection;
