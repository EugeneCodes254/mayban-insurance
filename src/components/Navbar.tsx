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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(3,39,31,0.07)] backdrop-blur-xl"
          : "border-b border-white/10 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:h-[80px] sm:px-8 lg:px-10">
        <a href="#home" onClick={closeMenu} className="flex items-center" aria-label="Mayban Insurance home">
          <img
            src="/images/mayban-logo.png"
            alt="Mayban Insurance"
            className={`h-[52px] w-auto object-contain sm:h-[58px] ${
              scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group inline-flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[12px] font-bold transition ${
                scrolled
                  ? "text-slate-600 hover:bg-[#F1F7F4] hover:text-[#063F32]"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown size={13} className="transition group-hover:rotate-180" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:+254733669260"
            className={`flex items-center gap-2 rounded-full px-2.5 py-2 text-[12px] font-bold transition ${
              scrolled ? "text-slate-600 hover:text-[#063F32]" : "text-white/90 hover:text-white"
            }`}
          >
            <span className={`flex h-7 w-7 items-center justify-center rounded-full ${scrolled ? "bg-[#EEF6F2]" : "bg-white/12"}`}>
              <Phone size={13} className={scrolled ? "text-[#087F6E]" : "text-[#E3C66B]"} />
            </span>
            +254 733 669 260
          </a>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-4.5 py-2.5 text-[12px] font-extrabold text-[#03271F] shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[#E3C66B]"
          >
            Get a Quote
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            scrolled
              ? "border-slate-200 bg-white text-[#063F32] shadow-sm"
              : "border-white/20 bg-black/10 text-white backdrop-blur-sm"
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
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
