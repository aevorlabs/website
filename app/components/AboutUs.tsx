import Link from 'next/link';
import SectionTag from './SectionTag';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full bg-white py-20 lg:py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 sm:px-12 lg:flex-row lg:gap-[80px] lg:px-20">
      {/* Left */}
      <div className="flex flex-1 flex-col gap-6">
        <SectionTag label="ABOUT" />
        <h2 className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
          About Aevor Edge
        </h2>
        <div className="flex flex-col gap-4 text-base leading-[1.75] text-slate-600">
          <p>
            AI is reshaping the world— and Aevor Edge exists to make sure you&apos;re shaping it
            too. We&apos;re a Singapore-based AI training and consulting company on a mission to
            make cutting-edge technology skills accessible to everyone, regardless of background or
            experience.
          </p>
          <p>
            Founded by practitioners with real-world experience building AI systems, we design every
            course to be hands-on, impactful, and impossible to forget. From Fortune 500 giants to
            ambitious solo founders, we&apos;ve helped hundreds of learners across the globe level
            up and leave their competition behind.
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

      {/* Right */}
      <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[380px] lg:w-[460px]">
        <Image src="/about.jpg" alt="About us image" fill className="object-cover" />
      </div>
      </div>
    </section>
  );
}
