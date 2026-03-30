import { Sparkles } from "lucide-react";

const SoftTransitionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl border border-border bg-surface-elevated text-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles size={24} className="text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
            Want to Go Deeper?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            At the end of the workshop, you'll get an opportunity to join our full AI Income Accelerator program where we help you build real projects and start earning.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            No pressure — the workshop is 100% valuable on its own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftTransitionSection;
