import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join the Early Access Waitlist
        </h2>
        <p className="text-muted-foreground mb-8">
          Be among the first students to join the Gradehood AI Income Accelerator. No commitment needed — just your email.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
            <p className="text-primary font-semibold text-lg">You're on the list! 🎉</p>
            <p className="text-muted-foreground text-sm mt-2">We'll reach out when the founding cohort opens.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3.5 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-green whitespace-nowrap"
            >
              Join Waitlist <ArrowRight size={18} />
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          Free to join. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default WaitlistSection;
