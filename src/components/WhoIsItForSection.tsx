import { GraduationCap, Briefcase, Sparkles, UserCheck } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Students", desc: "Build automation skills that pay while you learn" },
  { icon: Briefcase, label: "Freelancers", desc: "Add AI automation services to your offerings" },
  { icon: Sparkles, label: "Beginners", desc: "No experience needed — start building from zero" },
  { icon: UserCheck, label: "Working Professionals", desc: "Explore automation as a freelancing side income" },
];

const WhoIsItForSection = () => {
  return (
    <section id="who-is-it-for" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-medium mb-3">Perfect For You</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Who This Workshop Is For
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're a student or professional — if you want to build real automation workflows and explore freelancing use-cases, this is for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="p-5 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <a.icon size={22} className="text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">{a.label}</p>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
