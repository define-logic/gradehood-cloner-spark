import { Lightbulb, Wrench, Play, Users, Radio } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Lightbulb,
    title: "Understanding the AI Freelance Opportunity",
    desc: "Learn why businesses are rapidly adopting AI tools and what freelance opportunities are emerging.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "AI Tools That Power These Services",
    desc: "Overview of tools like ChatGPT, Make.com and automation platforms used by freelancers.",
  },
  {
    num: "03",
    icon: Play,
    title: "Live Example of an AI Workflow",
    desc: "Demonstration of how simple AI workflows can automate tasks for businesses.",
  },
  {
    num: "04",
    icon: Users,
    title: "How Beginners Start Getting Clients",
    desc: "Learn where freelancers find projects and how beginners land their first client.",
  },
];

const BootcampInsideSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wide">
            <Radio size={12} className="animate-pulse" />
            LIVE TRAINING
          </span>
        </div>

        <p className="text-primary text-sm font-medium text-center mb-3">Inside The Bootcamp</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          What Happens Inside The Live AI Income Bootcamp
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          In this live session we will walk through the real process of building AI freelance services step-by-step.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              <div className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary/20 transition-colors">
                  <step.icon size={24} className="text-primary" />
                </div>
                <span className="text-[10px] text-primary font-bold tracking-widest">STEP {step.num}</span>
                <h3 className="font-semibold text-foreground mt-1 mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BootcampInsideSection;
