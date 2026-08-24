"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of insurance does Mayban offer?",
    answer:
      "Mayban provides insurance solutions covering areas such as motor, health, life, property and business, marine insurance, performance bonds and advance payment guarantees.",
  },
  {
    question: "How can I get an insurance quote?",
    answer:
      "Use the quote form on this website, select the type of cover you need and provide your contact details. Our team can then follow up with you regarding your requirements.",
  },
  {
    question: "How do I make a claim?",
    answer:
      "Report the incident as soon as possible and provide the relevant policy and supporting documents. The claims team will guide you through assessment and settlement.",
  },
  {
    question: "Can I get insurance for my business?",
    answer:
      "Yes. Business insurance can help protect your property, assets, operations and contractual obligations against covered risks.",
  },
  {
    question: "How quickly are claims paid?",
    answer:
      "Approved claims are processed once the necessary assessment and supporting documentation have been completed. Processing times depend on the circumstances and complexity of each claim.",
  },
  {
    question: "Can I speak to someone before choosing a policy?",
    answer:
      "Yes. Our team can help you understand the available options and identify cover appropriate for your needs.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F3F7F5] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">

        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9A762E]">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#063F32] sm:text-5xl">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-gray-500">
            Everything you need to know before choosing your cover.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-gray-100 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#063F32] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-[#063F32] text-white"
                        : "bg-[#EAF2EE] text-[#063F32]"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8">
                    <p className="max-w-[800px] text-sm leading-7 text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
