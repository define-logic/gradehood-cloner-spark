import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "This helped me understand how to start with AI — I had no idea there were so many practical ways to earn.",
    name: "Priya S.",
    role: "College Student",
  },
  {
    text: "Very practical and beginner-friendly. I felt confident about taking my first steps after the session.",
    name: "Rahul M.",
    role: "Freelancer",
  },
  {
    text: "Clear roadmap, no confusion. Unlike other webinars, this one actually gave actionable steps.",
    name: "Ananya K.",
    role: "Working Professional",
  },
  {
    text: "I was skeptical, but the tools and ideas shared were genuinely useful. Highly recommend for anyone starting out.",
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
