import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "This workshop gave me a clear picture of how I can use AI to offer freelance services. Very practical.",
    name: "Priya S.",
    role: "College Student",
  },
  {
    text: "I already freelance, but this session showed me how to use AI tools to deliver work faster and charge more.",
    name: "Rahul M.",
    role: "Freelancer",
  },
  {
    text: "No fluff — just real examples of how businesses use AI and how I can offer those services. Exactly what I needed.",
    name: "Ananya K.",
    role: "Working Professional",
  },
  {
    text: "I had no idea there were so many freelancing opportunities around AI. This workshop opened my eyes.",
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
