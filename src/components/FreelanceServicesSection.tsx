import { Workflow, MessageCircle, FileText, Target } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "AI Automation Setup",
    desc: "Businesses hire freelancers to create automation workflows using AI tools.",
    earnings: "₹8,000 – ₹40,000 per project",
    tag: "High Demand",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot Implementation",
    desc: "Companies want AI chatbots on websites and WhatsApp for customer support and lead capture.",
    earnings: "₹10,000 – ₹50,000 per project",
    tag: "Lucrative",
  },
  {
    icon: FileText,
    title: "AI Content Automation Systems",
    desc: "Businesses automate blog writing, product descriptions, and marketing content using AI tools.",
    earnings: "₹5,000 – ₹25,000 per setup",
    tag: "Popular",
  },
  {
    icon: Target,
    title: "AI Lead Generation Workflows",
    desc: "Build automated systems that capture and organize leads for businesses.",
    earnings: "₹7,000 – ₹35,000 per project",
    tag: "In Demand",
  },
];

const FreelanceServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Proof of Opportunity</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          AI Freelancing Is Already a Real Opportunity
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Thousands of freelancers are already offering AI automation and AI-powered services to businesses worldwide.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {service.tag}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                <span className="text-xs font-medium text-primary">💰 {service.earnings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceServicesSection;
