import { MessageSquare, Zap, Link2, PenTool, Settings } from "lucide-react";

const tools = [
  { icon: MessageSquare, name: "ChatGPT", desc: "AI conversations & content generation" },
  { icon: Settings, name: "Make.com", desc: "Visual workflow automation" },
  { icon: Zap, name: "Zapier", desc: "App integrations & task automation" },
  { icon: PenTool, name: "AI Content Tools", desc: "Writing, images & media creation" },
  { icon: Link2, name: "Automation Workflow Tools", desc: "End-to-end process automation" },
];

const AIToolsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Tools & Platforms</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          AI Tools You Will Learn
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          These tools are used by freelancers worldwide to build AI-powered services for businesses.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tool.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
