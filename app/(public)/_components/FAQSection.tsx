import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How do I book a service?",
    answer:
      "Simply search for the service you need, compare available providers, choose your preferred time, and confirm your booking online.",
  },
  {
    question: "Are the service providers verified?",
    answer:
      "Yes, all our service providers undergo a multi-step verification process including background checks and skill assessments to ensure quality.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payment is handled securely through our platform. We support all major credit cards and digital wallets. Funds are typically held until the service is completed.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes, you can reschedule or cancel through your dashboard. Please note that cancellations made within 24 hours of the service may incur a small fee.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is our priority. If you're not happy with the results, please contact our support team within 48 hours to initiate our money-back guarantee process.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Our support team is available 24/7 via the live chat on our website or through email at support@servicejourney.com.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12 tracking-tight">
          FAQ
        </h2>

        {/* Accordion Container */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-blue-200 rounded-lg px-6 transition-all data-[state=open]:border-blue-400 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-slate-800 hover:no-underline text-lg py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-[15px] pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}