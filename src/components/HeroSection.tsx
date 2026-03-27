import { ArrowRight, CheckCircle2 } from "lucide-react";

const badges = ["No coding required", "Beginner friendly", "Real business projects"];

const stats = [
  { value: "4 Weeks", label: "Practical Program" },
  { value: "₹3K–₹20K", label: "Per Project" },
  { value: "100%", label: "Online & Live" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-radial-top" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Founding Cohort — Limited Seats Available
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          Learn AI Skills &{" "}
          <span className="text-gradient-hero">
            Start Your First Freelance Income
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          A practical program where students learn AI-powered services businesses actually pay for and get access to real freelance project opportunities.
        </p>

        {/* Checkmarks */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 size={18} className="text-primary" />
              {badge}
            </div>
          ))}
        </div>

        {/* Pricing pill */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-surface-elevated">
          <span className="text-muted-foreground line-through text-sm">₹12,000</span>
          <span className="text-primary font-bold text-xl">FREE</span>
          <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium">
            Founding Cohort Only
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-green"
          >
            Join Early Access Waitlist <ArrowRight size={18} />
          </a>
          <a
            href="#program"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
          >
            See Program Details
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
