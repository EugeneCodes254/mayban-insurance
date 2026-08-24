"use client";

import {
  ArrowRight,
  Car,
  HeartPulse,
  LifeBuoy,
  Building2,
  Ship,
  FileCheck2,
  HandCoins,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "motor",
    title: "Motor Insurance",
    short: "Protect your vehicle",
    description:
      "Comprehensive protection for your private or commercial vehicle against accidents, theft and other unexpected risks.",
    icon: Car,
    number: "01",
  },
  {
    id: "health",
    title: "Health Insurance",
    short: "Protect your health",
    description:
      "Flexible medical protection designed to help you access quality healthcare while protecting your finances.",
    icon: HeartPulse,
    number: "02",
  },
  {
    id: "life",
    title: "Life Insurance",
    short: "Protect your family",
    description:
      "Financial protection that helps secure the people who depend on you and plan confidently for the future.",
    icon: LifeBuoy,
    number: "03",
  },
  {
    id: "property",
    title: "Property & Business",
    short: "Protect what you've built",
    description:
      "Insurance solutions for homes, commercial property, businesses, assets and operational risks.",
    icon: Building2,
    number: "04",
  },
  {
    id: "marine",
    title: "Marine Insurance",
    short: "Protect your cargo",
    description:
      "Protection for goods and cargo transported by sea, air or land against covered transit risks.",
    icon: Ship,
    number: "05",
  },
  {
    id: "performance",
    title: "Performance Bond",
    short: "Secure your obligations",
    description:
      "Support your contractual commitments with guarantees designed to provide confidence to your business partners.",
    icon: FileCheck2,
    number: "06",
  },
  {
    id: "advance",
    title: "Advance Payment Guarantee",
    short: "Protect advance payments",
    description:
      "A guarantee that provides security around advance payments made under qualifying contracts.",
    icon: HandCoins,
    number: "07",
  },
];

export function Products() {
  const [active, setActive] = useState(products[0]);

  function selectProduct(product: (typeof products)[number]) {
    setActive(product);
  }

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#061525] py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087e8b]/10 blur-[100px]" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d5a23b]">
              Insurance Products
            </p>

            <h2 className="mt-3 max-w-[760px] text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Protection for every part of your life.
            </h2>
          </div>

          <p className="text-sm leading-7 text-white/55 lg:pb-1">
            From everyday essentials to complex business risks, our insurance
            solutions are designed to help you protect what matters.
          </p>
        </div>

        {/* PRODUCT SELECTOR */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* PRODUCT LIST */}
          <div className="space-y-2">
            {products.map((product) => {
              const Icon = product.icon;
              const selected = active.id === product.id;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => selectProduct(product)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    selected
                      ? "border-white/10 bg-white text-[#061525]"
                      : "border-white/5 bg-white/[0.035] text-white hover:bg-white/[0.07]"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      selected
                        ? "bg-[#061525] text-[#e0ad43]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-black ${
                        selected ? "text-[#061525]" : "text-white"
                      }`}
                    >
                      {product.title}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        selected ? "text-gray-500" : "text-white/40"
                      }`}
                    >
                      {product.short}
                    </p>
                  </div>

                  <span
                    className={`text-[10px] font-black ${
                      selected ? "text-[#b4852d]" : "text-white/20"
                    }`}
                  >
                    {product.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* FEATURED PRODUCT */}
          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0a3141] to-[#073b31] p-8 sm:p-10">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#d5a23b]/20" />

            <div className="relative flex h-full flex-col justify-between">

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                    <active.icon
                      size={30}
                      className="text-[#e1b24e]"
                    />
                  </div>

                  <span className="text-6xl font-black text-white/[0.06]">
                    {active.number}
                  </span>
                </div>

                <p className="mt-10 text-[10px] font-black uppercase tracking-[0.25em] text-[#d7aa4b]">
                  Mayban Insurance
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  {active.title}
                </h3>

                <p className="mt-5 max-w-[550px] text-sm leading-7 text-white/60">
                  {active.description}
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d5a23b] px-6 py-3.5 text-sm font-black text-[#061525] transition hover:bg-[#e5ba61]"
                >
                  Get a Quote
                  <ArrowRight size={17} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
