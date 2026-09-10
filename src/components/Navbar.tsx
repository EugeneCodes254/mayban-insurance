"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Covers", href: "#products", dropdown: true },
  { label: "Claims", href: "#claims" },
  { label: "FAQs", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(3,39,31,0.07)] backdrop-blur-xl"
          : "border-b border-slate-100 bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" onClick={closeMenu} className="flex items-center" aria-label="Mayban Insurance home">
          <img
            src="/images/mayban-logo.png"
            alt="Mayban Insurance"
            className="h-[48px] w-auto object-contain sm:h-[52px]"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[13px] font-bold text-slate-600 transition hover:bg-[#F1F7F4] hover:text-[#063F32]"
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown size={14} className="transition group-hover:rotate-180" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+254733669260"
            className="flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-bold text-slate-600 transition hover:text-[#063F32]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF6F2]">
              <Phone size={14} className="text-[#087F6E]" />
            </span>
            +254 733 669 260
          </a>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#063F32] px-5 py-3 text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(6,63,50,0.16)] transition hover:-translate-y-0.5 hover:bg-[#03271F]"
          >
            Get a Quote
            <ArrowRight size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063F32] shadow-sm transition hover:border-[#C9A24A] lg:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white shadow-[0_20px_40px_rgba(3,39,31,0.08)] lg:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col px-5 py-3 sm:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-bold text-slate-700 transition hover:text-[#063F32]"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={16} />}
              </a>
            ))}

            <a
              href="tel:+254733669260"
              onClick={closeMenu}
              className="mt-3 flex items-center gap-3 rounded-2xl bg-[#F4F9F6] px-4 py-3.5 text-sm font-bold text-[#063F32]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                <Phone size={15} className="text-[#087F6E]" />
              </span>
              +254 733 669 260
            </a>

            <a
              href="#quote"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#063F32] px-5 py-4 text-sm font-extrabold text-white"
            >
              Get a Quote
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
