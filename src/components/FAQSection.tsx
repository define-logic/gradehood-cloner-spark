import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this workshop really free?",
    a: "Yes, 100% free. No hidden charges, no credit card required. Just register and show up.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Not at all. This workshop is designed for complete beginners. If you can browse the internet, you can follow along.",
  },
  {
    q: "Will this be recorded?",
    a: "The live session offers interactive Q&A which you'll miss in a recording. We highly recommend attending live for the best experience.",
  },
  {
    q: "What is the AI Income Starter Kit?",
    a: "It's a free bonus you get when you register — includes 5 India-focused AI income ideas, recommended tools, and a step-by-step beginner roadmap.",
  },
  {
    q: "How long is the workshop?",
    a: "The live session runs approximately 60–90 minutes including Q&A time.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <p className="text-primary text-sm font-medium text-center mb-3">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-surface-elevated"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
