import { ArrowRight } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join the Early Access Waitlist
        </h2>
        <p className="text-muted-foreground mb-8">
          Be among the first students to join the Gradehood AI Income Accelerator. No commitment needed — just your email.
        </p>

        <a
          href="https://tally.so/r/NpL8Op"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-green whitespace-nowrap"
        >
          Join Waitlist <ArrowRight size={18} />
        </a>

        <p className="text-xs text-muted-foreground mt-4">
          Free to join. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default WaitlistSection;
