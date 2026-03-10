'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTag from './SectionTag';

const cards = [
  {
    icon: '🧠',
    title: 'AI Fundamentals',
    desc: 'Understand how modern AI works — from machine learning basics to large language models. No PhD required. Build intuition that makes you dangerous.',
    link: 'Learn More →',
  },
  {
    icon: '✦',
    title: 'LLMs & Prompt Engineering',
    desc: 'Master prompting techniques, chain-of-thought reasoning, and RAG pipelines. Learn to build, fine-tune, and deploy real LLM-powered workflows.',
    link: 'Learn More →',
    featured: true,
  },
  {
    icon: '⚡',
    title: 'Vibe Coding',
    desc: 'Build real software using AI-assisted coding tools — Cursor, Claude, Copilot. Turn ideas into working apps without getting stuck in syntax.',
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
    <section id="what-we-teach" className="w-full bg-white px-6 py-20 sm:px-12 lg:px-[120px] lg:py-[80px]">
      {/* Header */}
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <SectionTag label="CURRICULUM" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">What We Teach</h2>
        <p className="max-w-[600px] text-base leading-relaxed text-slate-500 lg:text-lg">
          Practical, hands-on courses built for the real world — no fluff, just skills you can apply
          immediately.
        </p>
      </div>

      {/* Desktop: all cards visible */}
      <div className="mt-14 hidden gap-8 md:grid md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col gap-5 rounded-xl border border-slate-200 p-9 ${
              card.featured
                ? 'bg-gradient-to-br from-gray-50 to-indigo-50'
                : 'bg-white'
            }`}
          >
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
              className={`flex flex-col gap-5 rounded-xl border border-slate-200 p-8 ${
                cards[current].featured
                  ? 'bg-gradient-to-br from-gray-50 to-indigo-50'
                  : 'bg-white'
              }`}
            >
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous card"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
          >
            <ChevronLeft size={20} />
          </button>
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
          <button
            onClick={next}
            aria-label="Next card"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
