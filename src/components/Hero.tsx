"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { QuoteForm } from "./QuoteForm";

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/16679358/pexels-photo-16679358.jpeg",
    label: "Family & Life",
  },
  {
    image:
      "https://images.pexels.com/photos/10154857/pexels-photo-10154857.jpeg",
    label: "Motor & Travel",
  },
  {
    image:
      "https://images.pexels.com/photos/33569518/pexels-photo-33569518.jpeg",
    label: "Business Protection",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-[#063F32] text-white">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: activeSlide === index ? 1 : 0,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,39,31,0.96)_0%,rgba(3,39,31,0.84)_34%,rgba(3,39,31,0.42)_61%,rgba(3,39,31,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,39,31,0.18)_0%,rgba(3,39,31,0.03)_42%,rgba(3,39,31,0.68)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(201,162,74,0.18),transparent_27%),radial-gradient(circle_at_18%_85%,rgba(8,127,110,0.2),transparent_32%)]" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-9 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-14 lg:pt-28">
        <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.72fr] lg:gap-12">
          <div className="max-w-[690px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E3C66B]/25 bg-[#03271F]/30 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-[#E3C66B] backdrop-blur-sm">
              <ShieldCheck size={13} />
              IRA Licensed Insurance Agency
            </div>

            <h1 className="max-w-[730px] font-serif text-[44px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[57px] lg:text-[70px]">
              Protect what matters.
              <span className="mt-2 block text-[#E3C66B]">Live with confidence.</span>
            </h1>

            <p className="mt-6 max-w-[590px] text-[14px] leading-6 text-white/75 sm:text-[16px] sm:leading-7">
              Tailored insurance solutions for Kenyan individuals, families and
              businesses — with clear advice, responsive claims support and a
              team you can reach when it matters.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-5 py-3 text-[13px] font-extrabold text-[#03271F] shadow-[0_12px_28px_rgba(201,162,74,0.18)] transition hover:-translate-y-0.5 hover:bg-[#E3C66B]"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
              >
                Explore Cover
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-8 grid max-w-[620px] grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                ["7+", "Insurance solutions"],
                ["Kenya", "Nationwide support"],
                ["IRA", "Licensed agency"],
                ["24/7", "Claims guidance"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-l border-white/12 pl-3 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-3"
                >
                  <p className="text-base font-black text-white">{value}</p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#C9A24A]" />
                Straightforward advice
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#C9A24A]" />
                Responsive claims
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#C9A24A]" />
                M-Pesa premium payments
              </span>
            </div>
          </div>

          <div id="quote" className="relative mx-auto w-full max-w-[420px] pt-9 lg:ml-auto lg:max-w-[430px]">
            <div className="pointer-events-none absolute right-1 top-0 z-20 hidden w-[170px] rounded-2xl border border-white/10 bg-[#03271F]/90 p-2.5 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#C9A24A]/15">
                  <Sparkles size={15} className="text-[#E3C66B]" />
                </span>
                <div>
                  <p className="text-[11px] font-extrabold text-white">Made for Kenya</p>
                  <p className="mt-0.5 text-[9px] text-white/45">Practical protection</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 rounded-[25px] border border-white/15 bg-white/95 p-4 text-[#063F32] shadow-[0_28px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.23em] text-[#C9A24A]">
                    Start here
                  </p>
                  <h2 className="mt-1.5 font-serif text-[24px] font-bold tracking-[-0.025em] text-[#063F32] sm:text-[26px]">
                    Get your free quote
                  </h2>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    A simple first step. No obligation.
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#063F32] shadow-sm">
                  <ShieldCheck size={17} className="text-[#C9A24A]" />
                </div>
              </div>

              <QuoteForm />
            </div>

            <a
              href="tel:+254733669260"
              className="relative z-10 mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold text-white/65 transition hover:text-white"
            >
              <Phone size={12} />
              Need help? +254 733 669 260
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 lg:mt-7">
          <div className="flex items-center gap-2" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                aria-label={`Show ${slide.label} slide`}
                aria-current={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === index ? "w-8 bg-[#E3C66B]" : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="hidden items-center gap-4 border-t border-white/10 pt-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white/35 sm:flex">
            <span>Personal protection</span>
            <span className="h-1 w-1 rounded-full bg-[#C9A24A]" />
            <span>Family security</span>
            <span className="h-1 w-1 rounded-full bg-[#C9A24A]" />
            <span>Business continuity</span>
            <span className="h-1 w-1 rounded-full bg-[#C9A24A]" />
            <span>Long-term peace of mind</span>
          </div>
        </div>
      </div>
    </section>
  );
}
