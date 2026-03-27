import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need technical skills?",
    a: "No. This program is designed for complete beginners. If you can type and browse the internet, you have all the technical skills you need to get started.",
  },
  {
    q: "Will I definitely earn money after the program?",
    a: "We cannot guarantee income as it depends on individual effort and execution. However, the program gives you real, marketable skills and access to project opportunities.",
  },
  {
    q: "How much time is required?",
    a: "Plan for about 5–8 hours per week over the 4-week program. This includes live sessions, practice work, and building your portfolio samples.",
  },
  {
    q: "Is the program online?",
    a: "Yes, 100% online with live sessions. You can join from anywhere with an internet connection.",
  },
  {
    q: "When does the founding cohort start?",
    a: "We are currently accepting applications for the founding cohort. Join the waitlist to be notified as soon as dates are confirmed.",
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
