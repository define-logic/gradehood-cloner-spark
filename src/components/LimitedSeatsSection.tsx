import { ArrowRight, Clock, Users } from "lucide-react";

const REGISTER_URL = "https://tally.so/r/NpL8Op";

const LimitedSeatsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative p-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.05] to-orange-500/[0.05] text-center overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock size={18} className="text-yellow-400" />
            <span className="text-yellow-400 text-xs font-bold tracking-wider uppercase">Limited Availability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
            Limited Seats Available
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            To keep the training interactive and allow time for questions, we are limiting the number of participants in the first bootcamp batch.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-yellow-400/80 mb-6">
            <Users size={16} />
            <span>Small batch for personalized interaction</span>
          </div>

          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all"
          >
            Reserve My Seat <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LimitedSeatsSection;
