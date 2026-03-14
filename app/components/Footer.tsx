import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const coursesLinks = [
  { label: 'AI Fundamentals', href: '#what-we-teach' },
  { label: 'LLMs & Prompt Engineering', href: '#what-we-teach' },
  { label: 'Vibe Coding', href: '#what-we-teach' },
];

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get in Touch', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 px-6 py-16 sm:px-12 lg:px-[120px]">
      {/* Main */}
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
        {/* Brand */}
        <div className="flex max-w-[320px] flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-2 rounded-[2px] bg-indigo-500" />
            <span className="text-xl font-bold text-white">Aevor edge</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            AI, LLM &amp; Vibe Coding training for teams and individuals. Based in Singapore.
          </p>
          <a href="mailto:hello@aevoredge.com" className="text-sm font-medium text-indigo-500">
            hello@aevoredge.com
          </a>
          <span className="text-sm text-slate-500">📍 Singapore</span>
        </div>

        {/* Nav Columns */}
        <div className="flex flex-wrap gap-16 sm:gap-20">
          {/* Courses */}
          <div className="flex flex-col gap-[14px]">
            <span className="text-sm font-bold text-white">Courses</span>
            {coursesLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-[14px]">
            <span className="text-sm font-bold text-white">Company</span>
            {companyLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-[14px]">
            <span className="text-sm font-bold text-white">Connect</span>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              <span className="inline-block h-5 w-5 rounded bg-blue-700" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <Separator className="my-12 bg-slate-800" />

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-[13px] text-slate-600">© 2026 Aevor edge. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-[13px] text-slate-600 transition-colors hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="#" className="text-[13px] text-slate-600 transition-colors hover:text-slate-400">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
