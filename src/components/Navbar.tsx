"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Products", href: "#products" },
  { name: "Why Us", href: "#about" },
  { name: "Claims", href: "#claims" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#082640] text-white shadow-[0_8px_30px_rgba(4,25,43,0.12)]">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="Mayban Insurance home"
        >
          <img
            src="/images/mayban-logo.png"
            alt="Mayban Insurance"
            className="h-[62px] w-auto object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-[13px] font-semibold text-white/85 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+254733669260"
            className="flex items-center gap-2 text-[13px] font-semibold text-white/90 transition hover:text-white"
          >
            <Phone size={15} />
            +254 733 669 260
          </a>

          <a
            href="#quote"
            className="rounded-full bg-[#10A7A0] px-6 py-3 text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(16,167,160,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0d948e]"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#082640] transition-all duration-300 md:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col px-5 pb-6 sm:px-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-white/85 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href="tel:+254733669260"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-3 text-sm font-bold text-white"
            >
              <Phone size={16} />
              Call Us
            </a>

            <a
              href="#quote"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-full bg-[#10A7A0] px-4 py-3 text-sm font-bold text-white"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
