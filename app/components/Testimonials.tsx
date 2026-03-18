'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTag from './SectionTag';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote:
      '"A much needed breath of fresh air in the AI courses space! Have been looking for a practical course such as this for my department. We built something for our processes and it actually improved workflow efficiency. 10/10 would recommend!"',
    name: 'Sarah Lim',
    role: 'Head of Product',
    attended: 'Vibe Coding Workshop',
    courseType: 'On-Site Coaching',
  },
  {
    quote:
      '"I have zero coding experience. After the course, its still at zero which is perfect because I did not want to learn coding. If you are here to learn coding, you are at the wrong place because this course doesn\'t teach coding. It teaches people who wants to use a no-code solution to build apps. Never have I thought I would be able to "code" an app in 2026, but here we are. Thank you Aevor Edge!"',
    name: 'Marcus Tan',
    role: 'Marketing Manager, Freelance',
    attended: 'Vibe Coding Workshop',
    courseType: ' 1-on-1 Coaching',
  },
  {
    quote:
      '"We ran a company-wide training, starting with just 1 department. Content is incredibly well-thought out, highly relevant, and more importantly,  the apps built helps eased our pain points. I particularly enjoy how the trainer uses familiar analogies to make complex topics easy to comprehend."',
    name: 'Priya Nair',
    role: 'Learning and Development Director',
    attended: 'Vibe Coding Workshop',
    courseType: 'Corporate Training',
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

  const stars = '★ ★ ★ ★ ★';

  return (
    <section className="w-full bg-[#F8FAFF] py-20 lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-12 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionTag label="TESTIMONIALS" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">
          What Our Learners Say
        </h2>
      </div>

      {/* Desktop: all cards */}
      <div className="mt-14 hidden gap-7 md:grid md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-slate-200 bg-white">
            <CardContent className="flex h-full flex-col justify-between gap-5 p-8">
              <span className="text-center text-[32px] text-yellow-500">{stars}</span>
              <p className="flex-1 text-[15px] leading-[1.7] text-slate-700">{t.quote}</p>
              <div>
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-[13px] text-slate-500">{t.role}</p>
                <p className="mt-2 text-[13px] text-slate-900">
                  <b>Attended:</b> {t.attended}, {t.courseType}
                </p>
              </div>
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
                  <span className="text-center text-[24px] text-yellow-500">{stars}</span>
                  <p className="text-[15px] leading-[1.7] text-slate-700">
                    {testimonials[current].quote}
                  </p>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{testimonials[current].name}</p>
                    <p className="text-[13px] text-slate-500">{testimonials[current].role}</p>
                  </div>
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
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border-slate-200 text-slate-600"
          >
            <ChevronLeft size={20} />
          </Button>
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
          <Button
            onClick={next}
            variant="outline"
            size="icon"
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border-slate-200 text-slate-600"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
