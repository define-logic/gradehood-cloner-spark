import { GraduationCap, Briefcase, Sparkles, Wallet } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "College students" },
  { icon: Briefcase, label: "Fresh graduates" },
  { icon: Sparkles, label: "Beginners interested in AI" },
  { icon: Wallet, label: "Anyone wanting to build a side income" },
];

const WhoIsItForSection = () => {
  return (
    <section id="who-is-it-for" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm font-medium mb-3">Who Is This For</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Built for Students & Beginners
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          This program is ideal for anyone who wants to build a real income skill set — with zero prior coding or technical experience required.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-4 p-5 rounded-xl bg-surface-elevated border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon size={20} className="text-primary" />
              </div>
              <span className="text-foreground font-medium">{a.label}</span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
          <p className="text-foreground font-medium mb-1">You do not need coding skills.</p>
          <p className="text-muted-foreground text-sm">
            Everything in this program is designed for beginners. If you can type a message, you can do this.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
