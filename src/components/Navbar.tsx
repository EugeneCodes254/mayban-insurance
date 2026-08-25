"use client";

import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Covers", href: "#products" },
  { label: "Claims", href: "#claims" },
  { label: "FAQs", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={closeMenu} className="flex items-center">
          <img
            src="/images/mayban-logo.png"
            alt="Mayban Insurance"
            className="h-[52px] w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#0B7F78]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+254733669260"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Phone size={16} className="text-[#0B7F78]" />
            +254 733 669 260
          </a>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B7F78] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#086b65]"
          >
            Get a Quote
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-4 sm:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="tel:+254733669260"
              onClick={closeMenu}
              className="mt-4 flex items-center gap-2 py-3 text-sm font-semibold text-slate-700"
            >
              <Phone size={16} className="text-[#0B7F78]" />
              +254 733 669 260
            </a>

            <a
              href="#quote"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#0B7F78] px-5 py-3.5 text-sm font-bold text-white"
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
