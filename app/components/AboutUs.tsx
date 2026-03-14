import Link from 'next/link';
import SectionTag from './SectionTag';
import { Button } from '@/components/ui/button';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center gap-12 bg-white px-6 py-20 sm:px-12 lg:flex-row lg:gap-[80px] lg:px-[120px] lg:py-[80px]"
    >
      {/* Left */}
      <div className="flex flex-1 flex-col gap-6">
        <SectionTag label="ABOUT" />
        <h2 className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
          About Aevor Labs
        </h2>
        <div className="flex flex-col gap-4 text-base leading-[1.75] text-slate-600">
          <p>
            Aevor Labs is a Singapore-based AI training company on a mission to make cutting-edge
            technology skills accessible to everyone. We believe you don&apos;t need a computer
            science degree to harness the power of AI — you just need the right guide.
          </p>
          <p>
            Founded by practitioners with real-world experience building AI systems, we design every
            course to be hands-on, immediately applicable, and genuinely engaging. From Fortune 500
            teams to solo entrepreneurs, we&apos;ve helped hundreds of learners across the globe
            level up.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          variant="brand"
          className="w-40 shrink-0 rounded-xl bg-[#6366F1] px-10 py-2.5 text-[16px] font-semibold text-white hover:bg-[#4F46E5] disabled:opacity-50"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>

      {/* Right — Illustration placeholder */}
      <div className="flex h-[300px] w-full shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,_#4338CA_0%,_#1E1B4B_60%,_#0F172A_100%)] sm:h-[380px] lg:w-[460px]">
        <span className="text-[64px]">🎓</span>
        <span className="text-sm text-indigo-500">Team photo / illustration</span>
      </div>
    </section>
  );
}
