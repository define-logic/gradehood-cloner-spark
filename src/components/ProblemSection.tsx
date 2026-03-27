const ProblemSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">The Problem</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          The Reality Students Face Today
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-surface-elevated border border-border space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Most students graduate with...</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["Theoretical knowledge only", "No practical income skills", "No freelance experience", "No idea how to find clients"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-surface-elevated border border-primary/20 space-y-4 glow-green">
            <h3 className="text-lg font-semibold text-foreground">At the same time, businesses need...</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["AI content creation", "Lead generation workflows", "Simple automation tools", "Consistent content delivery"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          But most students don't know how to use AI effectively for business.{" "}
          <span className="text-primary font-medium">This creates a massive opportunity.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
