import { MessageCircle, FileText, Target, RefreshCw } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "AI Chatbot Setup",
    desc: "Businesses pay freelancers to create AI chatbots for customer support and lead generation.",
    tag: "High Demand",
  },
  {
    icon: FileText,
    title: "AI Content Automation",
    desc: "Automate blog posts, product descriptions, and social media content using AI tools.",
    tag: "Popular",
  },
  {
    icon: Target,
    title: "AI Lead Generation Systems",
    desc: "Build automated systems that collect and qualify leads for businesses.",
    tag: "Lucrative",
  },
  {
    icon: RefreshCw,
    title: "AI Workflow Automation",
    desc: "Automate repetitive business tasks like emails, reporting, and data entry.",
    tag: "In Demand",
  },
];

const FreelanceServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">Real Opportunities</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Real AI Freelance Services Businesses Pay For
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          These are actual services freelancers are delivering to businesses using AI tools right now.
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
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceServicesSection;
