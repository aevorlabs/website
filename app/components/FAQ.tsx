import SectionTag from './SectionTag';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Who are your courses for?',
    a: `Our courses are designed for professionals, teams, and individuals at any skill level — but if you want to streamline workflows and let AI handle the heavy lifting, you're exactly who we built this for.`,
  },
  {
    q: 'Do I need coding experience?',
    a: 'Not at all. Our AI Fundamentals and Vibe Coding courses are designed for non-technical learners. We take the "no-code" promise seriously.',
  },
  {
    q: 'How long are the sessions?',
    a: `Sessions typically range from half-day workshops (3-4 hours) to multi-day intensives. We tailor the format based on your team's schedule and learning goals.`,
  },
  {
    q: 'Can you build a custom curriculum?',
    a: `Absolutely — it's kind of our thing. We work closely with your team to design a curriculum around your industry, tools, and goals.`,
  },
  {
    q: 'What does it cost?',
    a: `Your team deserves a solution built around you, not a price list. Reach out via the contact form and we'll craft your custom quote within one business day.`,
  },
  {
    q: 'Do you train outside Singapore?',
    a: 'Our AI training has no borders! Join us remotely via Zoom from anywhere in the world, or let us bring the experience on-site to your team internationally.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full bg-[#F8FAFF] px-6 py-20 sm:px-12 lg:px-[240px] lg:py-[80px]"
    >
      {/* Header */}
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <SectionTag label="FAQ" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible defaultValue="item-0" className="mt-12">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-slate-200">
            <AccordionTrigger className="text-slate-900 [&>svg]:text-slate-400">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-[1.65] text-slate-500">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
