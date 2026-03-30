import { ClipboardCheck, Video, MapPin } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardCheck,
    title: "Register",
    desc: "Reserve your free seat in 10 seconds.",
  },
  {
    num: "02",
    icon: Video,
    title: "Attend Live Workshop",
    desc: "Join the practical session — build workflows in real time.",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Get Your Execution Roadmap",
    desc: "Walk away with a clear plan, tools, and your free starter kit.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Simple Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          <div className="hidden sm:block absolute top-[3.5rem] left-[16.7%] right-[16.7%] h-px bg-border" />

          {steps.map((step) => (
            <div key={step.num} className="relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                <step.icon size={24} className="text-primary" />
              </div>
              <span className="text-xs text-primary font-bold tracking-wider">STEP {step.num}</span>
              <h3 className="font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
