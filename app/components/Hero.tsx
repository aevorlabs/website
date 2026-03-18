import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="flex w-full items-center bg-slate-900 py-20 sm:py-24 lg:h-170 lg:py-0">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 px-6 sm:gap-8 sm:px-12 lg:px-20">
        {/* Headline */}
        <h1 className="max-w-155 text-center text-[36px] leading-[1.15] font-extrabold text-white sm:text-[48px] lg:text-[60px] lg:leading-[1.1]">
          Learn AI, LLMs, and Vibe Coding.
        </h1>

        {/* Subheadline */}
        <p className="max-w-145 text-center text-[16px] leading-[1.55] text-slate-400 sm:text-[18px] lg:text-[20px]">
          Hands-on training for teams and individuals.
          <br />
          Based in Singapore, available worldwide.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            variant="brand"
            radius="lg"
            size="lg"
            className="w-fit shrink-0 bg-[#6366F1] px-10 py-[14px] text-[16px] font-semibold text-white hover:bg-[#4F46E5]"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            radius="lg"
            size="lg"
            className="w-fit shrink-0 px-10 py-[14px] text-[16px] font-semibold text-white"
          >
            <Link href="#offerings">See Our Offerings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
