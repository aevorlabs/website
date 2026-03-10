'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTag from './SectionTag';

const faqs = [
  {
    q: 'Who are your courses for?',
    a: 'Our courses are designed for professionals, teams, and individuals at any skill level — from complete beginners curious about AI to engineers wanting to deepen their LLM knowledge. We\u2019ve trained marketing managers, product designers, developers, and C-suite executives.',
  },
  {
    q: 'Do I need coding experience?',
    a: 'Not at all. Our AI Fundamentals and Vibe Coding courses are designed for non-technical learners. We start from the basics and build up gradually.',
  },
  {
    q: 'How long are the sessions?',
    a: 'Sessions typically range from half-day workshops (3–4 hours) to multi-day intensives. We tailor the format based on your team\u2019s schedule and learning goals.',
  },
  {
    q: 'Can you build a custom curriculum?',
    a: 'Absolutely. We work closely with your team to design a curriculum around your industry, tools, and specific objectives.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on the format, group size, and duration. Reach out via the contact form and we\u2019ll provide a tailored quote within one business day.',
  },
  {
    q: 'Do you train outside Singapore?',
    a: 'Yes — we offer remote training worldwide via Zoom, and can arrange on-site sessions internationally on request.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#F8FAFF] px-6 py-20 sm:px-12 lg:px-[240px] lg:py-[80px]">
      {/* Header */}
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <SectionTag label="FAQ" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion */}
      <div className="mt-12 flex flex-col">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const isLast = i === faqs.length - 1;
          return (
            <div key={i} className={`${!isLast ? 'border-b border-slate-200' : ''}`}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-semibold text-slate-900">{faq.q}</span>
                <span
                  className={`shrink-0 text-xl font-light ${isOpen ? 'text-indigo-500' : 'text-slate-400'}`}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[15px] leading-[1.65] text-slate-500">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
