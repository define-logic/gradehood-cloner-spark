import { ArrowRight, CalendarDays, Clock, Users } from "lucide-react";

const REGISTER_URL = "https://tally.so/r/NpL8Op";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-radial-top" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          AI → Skills → Income
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          Free AI Income Workshop:{" "}
          <span className="text-gradient-hero">
            Learn How to Start Earning with AI
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Discover real ways to earn using AI tools — even if you're starting from zero.
        </p>

        {/* Date & Time Strip */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface-elevated text-sm">
            <CalendarDays size={16} className="text-primary" />
            <span className="text-foreground font-medium">Coming Soon — Date TBA</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface-elevated text-sm">
            <Clock size={16} className="text-primary" />
            <span className="text-foreground font-medium">Live Online Session</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-sm">
            <Users size={16} className="text-primary" />
            <span className="text-primary font-medium">Limited seats for live session</span>
          </div>
        </div>

        {/* Primary CTA */}
        <div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all glow-green"
          >
            Reserve Your Free Seat <ArrowRight size={20} />
          </a>
          <p className="text-xs text-muted-foreground mt-3">100% Free · No credit card · No commitment</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
