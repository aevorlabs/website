'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'What We Teach', href: '#what-we-teach' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#0F172A]">
      <div className="flex h-18 items-center justify-between px-6 sm:px-12 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/aevor-logo-white.png" alt="Aevor Labs Logo" width={36} height={36} />
          <span className="text-[20px] font-bold text-white">Aevor Labs</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] text-[#CBD5E1] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden rounded-[6px] bg-[#6366F1] px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#4F46E5] md:flex"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-slate-800 px-6 pt-4 pb-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-[#CBD5E1] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 w-fit rounded-[6px] bg-[#6366F1] px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#4F46E5]"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
