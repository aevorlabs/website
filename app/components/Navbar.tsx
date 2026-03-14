'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'What We Teach', href: '#what-we-teach' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-800/80 px-5 shadow-lg shadow-black/20 backdrop-blur-lg sm:px-8">
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
        <Button
          asChild
          className="hidden rounded-xl bg-[#6366F1] px-[14px] text-[14px] hover:bg-[#4F46E5] md:flex"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>

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
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/80 px-6 pt-4 pb-6 shadow-lg shadow-black/20 backdrop-blur-lg md:hidden">
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
          <Button
            asChild
            className="w-fit rounded-[6px] bg-[#6366F1] px-6 py-2.5 text-[14px] font-semibold hover:bg-[#4F46E5]"
          >
            <Link href="#contact" onClick={() => setOpen(false)}>
              Get in Touch
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
