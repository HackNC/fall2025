// FAQPage.tsx
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    // {
    //   question: "What is a hackathon?",
    //   answer:
    //     "A hackathon is a weekend of fun and learning. You'll become a better programmer, meet awesome people, and make cool projects. There will also be opportunities to win fun prizes and network with our sponsors.",
    // },
    {
      question: "Is this hackathon in-person or hybrid?",
      answer:
        "This year, we are running a completely in-person hackathon! We have lots of fun events and workshops for you all and most importantly, free food!",
    },
    {
      question: "Do I need extensive coding knowledge for HackNC?",
      answer:
        "Not at all! HackNC is a completely beginner friendly event, and we have a project track specifically for beginners. We'll have plenty of resources to help you get started, including beginner workshops, mentors, and more.",
    },
    {
      question: "Who can hack?",
      answer:
        "If you are a student at UNC, there is no age requirement. If you are coming from outside UNC, you must be 18 years of age or older to attend! High schoolers, undergraduates, and graduate students from any school are welcome to participate as hackers.",
    },
    // {
    //   question: "How do teams work?",
    //   answer:
    //     "Teams can be organized prior to HackNC or during the event itself. If you are already in a team, then you're all set! If not, that's completely fine! We have a team building event on Friday (Nov 1st), where you can meet other participants and form your teams. We strongly recommend around 3-4 members.",
    // },
    {
      question: "Where do I park?",
      answer:
        "Parking will be free over the weekend. Please find availability in Rams Deck, Craige Deck, or Cobb Deck.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  // Recalculate each answer's full height (so we can animate max-height)
  useEffect(() => {
    const recalc = () => {
      setHeights(answerRefs.current.map((el) => (el ? el.scrollHeight : 0)));
    };

    // initial
    recalc();

    // update on window resize
    window.addEventListener("resize", recalc);

    // use ResizeObserver to track content changes if available
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(recalc);
      answerRefs.current.forEach((el) => {
        if (el) ro!.observe(el);
      });
    }

    return () => {
      window.removeEventListener("resize", recalc);
      ro?.disconnect();
    };
  }, []);

  return (
    <section
      id="faq"
      className="py-16 px-4 sm:px-6 lg:px-8 font-['Jersey_15'] text-primary-light"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 text-primary-light drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            // compute maxHeight for this item (fallback to measuring ref if heights not ready)
            const measured =
              heights[index] ?? answerRefs.current[index]?.scrollHeight ?? 0;
            const isOpen = openFAQ === index;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-gradient-top to-gradient-bottom rounded-lg border border-primary-light border-opacity-10 drop-shadow-[20px_20px_20px_rgba(182, 205, 255, 0.8)] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-accent-purple hover:bg-opacity-30 transition-all"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="text-primary-light" size={24} />
                    ) : (
                      <ChevronDown className="text-primary-light" size={24} />
                    )}
                  </div>
                </button>

                {/* Animated wrapper: always in DOM, but max-height toggles */}
                <div
                  id={`faq-answer-${index}`}
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight: isOpen ? `${measured}px` : "0px",
                    transition: "max-height 300ms ease",
                    overflow: "hidden",
                  }}
                >
                  {/* inner content has padding/background so when maxHeight is 0, no visible space */}
                  <div className="px-6 pb-4 py-5 bg-primary-dark bg-opacity-30">
                    <p className="text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
