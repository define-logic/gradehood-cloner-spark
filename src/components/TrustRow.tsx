import { Shield, Code2, Radio } from "lucide-react";

const items = [
  { icon: Shield, label: "Beginner Friendly" },
  { icon: Code2, label: "No Coding Required" },
  { icon: Radio, label: "Live Interactive Session" },
];

const TrustRow = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-10">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
            <item.icon size={16} className="text-primary" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustRow;
