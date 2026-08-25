"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Insurance Products", href: "#products" },
  { name: "Claims", href: "#claims" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#063F32]/10 bg-white/98 backdrop-blur-xl">
      <div className="mx-auto flex h-[94px] max-w-[1280px] items-center justify-between px-5 sm:px-8">

        {/* LOGO */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="Mayban Insurance home"
        >
          <img
            src="/images/mayban-logo.png"
            alt="Mayban Insurance"
            className="h-[76px] w-auto object-contain object-left"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-semibold text-gray-700 transition hover:text-[#063F32]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 md:flex">

          <a
            href="tel:+254733669260"
            className="group flex items-center gap-2 text-sm font-semibold text-[#063F32]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF4EF] transition group-hover:bg-[#063F32] group-hover:text-white">
              <Phone size={16} />
            </span>

            <span>Call Us</span>
          </a>

          <a
            href="#quote"
            className="rounded-full bg-[#063F32] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#042D24] hover:shadow-md"
          >
            Get a Quote
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1F6F3] text-[#063F32] transition hover:bg-[#DCEBE4] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col px-5 pb-6 sm:px-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-gray-700 transition hover:text-[#063F32]"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-5 grid grid-cols-2 gap-3">

            <a
              href="tel:+254733669260"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full border border-[#063F32] px-4 py-3 text-sm font-bold text-[#063F32]"
            >
              <Phone size={16} />
              Call Us
            </a>

            <a
              href="#quote"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-full bg-[#063F32] px-4 py-3 text-sm font-bold text-white"
            >
              Get a Quote
            </a>

          </div>
        </nav>
      </div>
    </header>
  );
}
