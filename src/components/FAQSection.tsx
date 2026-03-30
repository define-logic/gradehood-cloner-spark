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
    q: "Do I need any technical or coding skills?",
    a: "Not at all. This workshop is designed for complete beginners. No coding, no prior AI experience needed.",
  },
  {
    q: "What will I actually learn?",
    a: "You'll learn how to use AI tools to automate tasks, build simple workflows step-by-step, and explore freelancing use-cases — all with live demos.",
  },
  {
    q: "Is this a full course?",
    a: "No — this is a free live practical session. At the end, you'll have the option to join our full program if you want to go deeper.",
  },
  {
    q: "What is the AI Income Starter Kit?",
    a: "It's a free bonus delivered instantly after registration — includes AI automation ideas (India-focused), recommended tools, and a step-by-step beginner roadmap.",
  },
  {
    q: "How long is the session?",
    a: "Approximately 60–90 minutes including live Q&A and workflow demos.",
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
