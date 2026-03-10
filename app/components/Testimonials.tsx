'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import SectionTag from './SectionTag';

const testimonials = [
  {
    quote:
      '"The LLM & Prompt Engineering workshop completely changed how our product team works. We shipped an AI feature in the first week after training."',
    name: 'Sarah Lim',
    role: 'Head of Product · TechCorp SG',
  },
  {
    quote:
      '"I had zero coding experience. After the Vibe Coding course I built and launched a side project in two months. Aevor Labs made it feel possible."',
    name: 'Marcus Tan',
    role: 'Marketing Manager · Freelance',
  },
  {
    quote:
      '"We ran a company-wide AI training for 40 staff. Incredibly well-organised, highly relevant content, and the trainer made complex topics genuinely fun."',
    name: 'Priya Nair',
    role: 'L&D Director · Fintech Co.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const stars = '★★★★★';

  return (
    <section className="w-full bg-[#F8FAFF] px-6 py-20 sm:px-12 lg:px-[120px] lg:py-[80px]">
      {/* Header */}
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <SectionTag label="TESTIMONIALS" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">
          What Our Learners Say
        </h2>
      </div>

      {/* Desktop: all cards */}
      <div className="mt-14 hidden gap-7 md:grid md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-8`}
          >
            <span className="text-base text-indigo-500">{stars}</span>
            <p className="flex-1 text-[15px] leading-[1.7] text-slate-700">{t.quote}</p>
            <div>
              <p className="text-sm font-bold text-slate-900">{t.name}</p>
              <p className="text-[13px] text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="relative mt-14 md:hidden">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-8`}
            >
              <span className="text-base text-indigo-500">{stars}</span>
              <p className="text-[15px] leading-[1.7] text-slate-700">
                {testimonials[current].quote}
              </p>
              <div>
                <p className="text-sm font-bold text-slate-900">{testimonials[current].name}</p>
                <p className="text-[13px] text-slate-500">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? 'bg-indigo-500' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <p className="mb-5 text-sm text-black/50">Companies and employees we have helped</p>
        <div className="flex items-center justify-center gap-5">
          <div>
            <Image src="/testimonials/axs_logo.png" alt="AXS logo" width={72} height={60} />
          </div>
          <div>
            <Image
              src="/testimonials/jpm_logo_sm.png"
              alt="JPMorgan logo"
              width={235}
              height={30}
            />
          </div>
          <div>
            <Image src="/testimonials/shopee_logo.png" alt="Shopee logo" width={188} height={60} />
          </div>
        </div>
      </div>
    </section>
  );
}
