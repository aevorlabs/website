'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTag from './SectionTag';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const cards = [
  {
    icon: '🧠',
    title: 'AI Fundamentals',
    desc: 'Get to grips with modern AI — covering machine learning essentials to large language models. No prior expertise needed. Walk away thinking like an AI-powered professional.',
    link: 'Learn More →',
  },
  {
    icon: '✦',
    title: 'LLMs & Prompt Engineering',
    desc: 'Master the art of prompting, chain-of-thought reasoning, and RAG pipelines. Learn to build, fine-tune, and deploy LLM-powered workflows that actually get things done.',
    link: 'Learn More →',
  },
  {
    icon: '⚡',
    title: 'Vibe Coding',
    desc: 'Harness AI-assisted coding tools like Cursor, Claude, and Copilot to bring your ideas to life. Build working apps faster — without syntax slowing you down.',
    link: 'Learn More →',
  },
];

export default function WhatWeTeach() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? cards.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === cards.length - 1 ? 0 : c + 1));
  }, []);

  return (
    <section
      id="what-we-teach"
      className="w-full bg-white px-6 py-20 sm:px-12 lg:px-[120px] lg:py-[80px]"
    >
      {/* Header */}
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <SectionTag label="CURRICULUM" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">What We Teach</h2>
        <p className="max-w-[600px] text-base leading-relaxed text-slate-500 lg:text-lg">
          Hands-on AI courses engineered for impact — built around real workflows, real challenges,
          and skills you can apply the moment training ends.
        </p>
      </div>

      {/* Desktop: all cards visible */}
      <div className="mt-14 hidden gap-8 md:grid md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} className="border-slate-200 bg-white">
            <CardContent className="flex flex-col gap-5 p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-indigo-50 text-2xl">
                {card.icon === '✦' ? (
                  <span className="font-bold text-indigo-500">{card.icon}</span>
                ) : (
                  card.icon
                )}
              </div>
              <h3 className="text-[22px] font-bold text-slate-900">{card.title}</h3>
              <p className="text-[15px] leading-[1.65] text-slate-500">{card.desc}</p>
              <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-600">
                {card.link}
              </a>
            </CardContent>
          </Card>
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
            >
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex flex-col gap-5 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-indigo-50 text-2xl">
                    {cards[current].icon === '✦' ? (
                      <span className="font-bold text-indigo-500">{cards[current].icon}</span>
                    ) : (
                      cards[current].icon
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cards[current].title}</h3>
                  <p className="text-[15px] leading-[1.65] text-slate-500">{cards[current].desc}</p>
                  <a href="#" className="text-sm font-semibold text-indigo-500">
                    {cards[current].link}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            onClick={prev}
            variant="outline"
            size="icon"
            aria-label="Previous card"
            className="h-10 w-10 rounded-full border-slate-200 text-slate-600"
          >
            <ChevronLeft size={20} />
          </Button>
          <div className="flex gap-2">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? 'bg-indigo-500' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          <Button
            onClick={next}
            variant="outline"
            size="icon"
            aria-label="Next card"
            className="h-10 w-10 rounded-full border-slate-200 text-slate-600"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
