import SectionTag from './SectionTag';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    num: '01',
    title: 'Corporate Training',
    desc: 'Upskill your entire team with a customized curriculum built around your industry and tools.',
  },
  {
    num: '02',
    title: '1-on-1 Coaching',
    desc: 'Personalised coaching sessions tailored to your goals, pace, and current skill level.',
  },
  {
    num: '03',
    title: 'Remote (Zoom)',
    desc: 'Live interactive sessions online — ideal for global teams and international participants joining from anywhere.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-slate-900 py-20 lg:py-[80px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-12 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionTag label="DELIVERY" variant="dark" />
        <h2 className="text-3xl font-extrabold text-white sm:text-[40px]">
          How We Deliver Training
        </h2>
        <p className="max-w-[600px] text-base leading-relaxed text-slate-400 lg:text-lg">
          We meet you where you are — whether that&apos;s your office, a conference room, or a video
          call from anywhere in the world.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.num} className="border-slate-800 bg-transparent">
            <CardContent className="flex flex-col gap-4 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-950 text-base font-bold text-indigo-300">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}
