import { GraduationCap, Briefcase, UserCheck } from "lucide-react";

import { Sparkles } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "College Students", desc: "Who want to start freelancing and earn while studying" },
  { icon: Sparkles, label: "Complete Beginners", desc: "No coding background needed — start from zero" },
  { icon: Briefcase, label: "Freelancers", desc: "Looking to upgrade their services with AI tools" },
  { icon: UserCheck, label: "Anyone Interested in AI Income", desc: "Curious about earning using AI tools and automation" },
];

const WhoIsItForSection = () => {
  return (
    <section id="who-is-it-for" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-medium mb-3">Perfect For You</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          This Bootcamp Is Perfect For
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're just starting out or already working — if you want to earn through freelancing using AI, this workshop is for you.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon size={22} className="text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-2">{a.label}</p>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
