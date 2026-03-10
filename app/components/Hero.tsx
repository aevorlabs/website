import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex h-170 w-full items-center gap-20 bg-slate-900 px-20 py-0">
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {/* Headline */}
        <h1 className="max-w-155 text-center text-[60px] leading-[1.1] font-extrabold text-white">
          Learn AI, LLMs, and Vibe Coding.
        </h1>

        {/* Subheadline */}
        <p className="max-w-145 text-[20px] leading-[1.55] text-slate-400">
          Hands-on training for teams and individuals.
          <br />
          Based in Singapore, available worldwide.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="flex items-center justify-center rounded-lg bg-indigo-500 px-8 py-3.5 text-[16px] font-semibold text-white transition-colors hover:bg-indigo-600"
          >
            Get in Touch
          </Link>
          <Link
            href="#offerings"
            className="flex items-center justify-center rounded-lg border-[1.5px] border-slate-700 px-8 py-3.5 text-[16px] font-medium text-slate-200 transition-colors hover:border-slate-500"
          >
            See Our Offerings
          </Link>
        </div>
      </div>
    </section>
  );
}
