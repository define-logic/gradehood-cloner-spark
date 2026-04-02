import { MessageSquare, Bot, Cpu, Target, ArrowRight, ChevronDown } from "lucide-react";

const flowSteps = [
  {
    icon: MessageSquare,
    label: "Client Request",
    sub: "Business needs automation",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Bot,
    label: "AI Tool (ChatGPT)",
    sub: "Process & generate output",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Cpu,
    label: "Automation (Make.com)",
    sub: "Connect & automate workflow",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Target,
    label: "Business Result",
    sub: "Content, Leads, or Automation",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const AIWorkflowDiagram = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">How It Works</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Example: A Simple AI Automation Workflow
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          This is the kind of workflow you'll learn to build and offer as a freelance service.
        </p>

        {/* Desktop horizontal flow */}
        <div className="hidden sm:flex items-center justify-center gap-3">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className={`flex flex-col items-center text-center p-5 rounded-2xl bg-surface-elevated border ${step.border} min-w-[160px] hover:scale-105 transition-transform duration-300`}>
                <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-3`}>
                  <step.icon size={26} className={step.color} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{step.label}</h3>
                <p className="text-[11px] text-muted-foreground">{step.sub}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight size={20} className="text-primary/50 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="flex sm:hidden flex-col items-center gap-2">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              <div className={`flex flex-col items-center text-center p-5 rounded-2xl bg-surface-elevated border ${step.border} w-full max-w-[260px]`}>
                <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mb-3`}>
                  <step.icon size={22} className={step.color} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{step.label}</h3>
                <p className="text-[11px] text-muted-foreground">{step.sub}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <ChevronDown size={20} className="text-primary/50 my-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowDiagram;
