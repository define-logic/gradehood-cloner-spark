import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "This session showed me exactly how to build automation workflows — I started freelancing the same week.",
    name: "Priya S.",
    role: "College Student",
  },
  {
    text: "Very practical and execution-focused. No fluff, just real use-cases I could start building immediately.",
    name: "Rahul M.",
    role: "Freelancer",
  },
  {
    text: "Clear roadmap with real automation examples. Finally understood how to turn AI skills into freelancing income.",
    name: "Ananya K.",
    role: "Working Professional",
  },
  {
    text: "The workflow demos were eye-opening. I had no idea you could build automation systems this easily without coding.",
    name: "Vikram D.",
    role: "Recent Graduate",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">What People Say</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Hear From Past Attendees
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-surface-elevated border border-border"
            >
              <Quote size={20} className="text-primary/40 mb-3" />
              <p className="text-foreground/90 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-foreground font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
