import React from "react";
import Header from "../common/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  const faqData = [
    {
      id: "0",
      question: "What type of photography do you specialize in?",
      answer:
        "We specialize in wedding photography, portrait photography, commercial photography, and corporate headshots. Our mission is to capture moments that tell stories and leave a lasting impression.",
    },
    {
      id: "1",
      question: "How can I book a photography session with you?",
      answer:
        "You can reach us directly via phone at 08160813750 or send us a message through our contact form. We will respond promptly to discuss your needs and schedule a session.",
    },
    {
      id: "2",
      question: "What equipment do you use for your photography?",
      answer:
        "We use state-of-the-art photography equipment and professional post-production software to ensure every image meets the highest quality standards.",
    },
    {
      id: "3",
      question: "Can I request a specific location for a session?",
      answer:
        "Absolutely! We work with clients to find the perfect setting for your shoot, whether at our centrally located studio or an outdoor/event venue of your choice.",
    },
    {
      id: "4",
      question: "What is your editing process like?",
      answer:
        "Our post-production process is meticulous and professional. We carefully edit each image to enhance colour, lighting, and composition while preserving a natural, authentic look.",
    },
    {
      id: "5",
      question: "Are digital files included in your photography packages?",
      answer:
        "Yes! All our packages include high-resolution digital files. We also offer customizable packages with add-on services to enhance your experience.",
    },
    {
      id: "6",
      question: "Do you offer prints of your photographs?",
      answer:
        "Yes, we offer high-quality prints, albums, and other photo products available for purchase. Contact us for details on available sizes and pricing.",
    },
    {
      id: "7",
      question:
        "How long does it take to receive the edited photos after a session?",
      answer:
        "We pride ourselves on a quick turnaround. You will typically receive your edited photos within 7–14 business days, depending on the scope of the session.",
    },
  ];

  const validIndexForBorderRight = (index: number) => {
    if (index === 0 || index === 2 || index === 4 || index === 6) {
      return true;
    }
    return false;
  };
  return (
    <section className="">
      <section className="flex justify-between gap-[1.25rem] mb-[3.12rem]">
        <div>
          <Header title="faqs" description="Frequently Asked Questions" />
        </div>
      </section>
      <div className="flex justify-between gap-[3.12rem] flex-col xl:flex-row">
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 md:grid-cols-2"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              value={faq.id}
              key={faq.id}
              className={`border-y border-y-lightDark px-[3.12rem] py-[1.88rem] ${
                validIndexForBorderRight(index)
                  ? "md:border-r md:border-r-lightDark"
                  : ""
              }`}
            >
              <AccordionTrigger className="text-customGrayAlt2 font-[600] text-[1rem] md:text-[1.25rem] uppercase">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-customGrayAlt text-[0.875rem] md:text-[1.125rem]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
