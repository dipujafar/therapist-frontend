"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How can I upgrade, downgrade, or cancel my membership? ",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: " What if my family and the link don’t click? ",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: "What should I do if there’s an issue with my link?",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: " Can links help with tasks other than sitting?",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: " How does Hue-man Links ensure the safety of my loved one?",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: " What is the cancellation policy?",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: " What happens after I request a link?",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
  {
    question: "  Can I still book a link if my loved one is sick?",
    answer:
      "downgrade, just edit your plan at any time. If you wish to cancel, you can do so at the bottom of your profile. Please note that cancellations take effect immediately, so we suggest canceling after your last scheduled session.",
  },
];
const Faqs = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };
  return (
    <div>
      <h1 className="md:text-8xl text-5xl text-primary-blue text-center">
        FAQs
      </h1>

      <div className="w-full max-w-6xl mx-auto md:mt-16 mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" border-b-2 border-primary-black">
            <button
              className="flex gap-x-4 items-center w-full py-4 text-left transition-colors duration-200"
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-answer-${index}`}
            >
              {openItems.includes(index) ? (
                <ChevronUp className="h-7 w-7 text-primary-black font-bold" />
              ) : (
                <ChevronDown className="h-7 w-7 text-primary-black font-bold" />
              )}
              <span className="font-semibold  text-2xl">{faq.question}</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index)
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-4 text-primary-black/85 text-lg pl-7">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
