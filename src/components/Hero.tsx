import {
  ArrowRight,
  ShieldCheck,
  Phone,
  CheckCircle2,
} from "lucide-react";

import { QuoteForm } from "./QuoteForm";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#061525] text-white"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#0b8f9b]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#d99b27]/10 blur-[100px]" />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute right-[-120px] top-[80px] h-[420px] w-[650px] rounded-[50%] border border-[#1d6574]/30 rotate-[18deg]" />

      <div className="pointer-events-none absolute right-[-160px] top-[120px] h-[420px] w-[650px] rounded-[50%] border border-[#d7a23b]/20 rotate-[18deg]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">

        {/* LEFT */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-[#d8b15d] backdrop-blur">
            <ShieldCheck size={15} />
            IRA Licensed Insurance Agency
          </div>

          <h1 className="max-w-[720px] text-[48px] font-black leading-[1.02] tracking-[-0.045em] sm:text-[62px] lg:text-[70px]">
            Cover that stands with you,
            <span className="mt-3 block bg-gradient-to-r from-[#d6a23a] via-[#f0c766] to-[#0aa8b8] bg-clip-text text-transparent">
              wherever life in Kenya takes you.
            </span>
          </h1>

          <p className="mt-7 max-w-[620px] text-base leading-8 text-white/65 sm:text-lg">
            Motor, health, life and business insurance built for Kenyan
            families and enterprises — straightforward policies, fast claims,
            and support that speaks your language.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d19a2e] to-[#e0b34d] px-7 py-4 text-sm font-extrabold text-[#061525] shadow-[0_12px_35px_rgba(209,154,46,0.22)] transition hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight size={17} />
            </a>

            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Explore Cover
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
            <div>
              <p className="text-xl font-black text-white">
                7+
              </p>
              <p className="mt-1 text-xs text-white/45">
                Insurance solutions
              </p>
            </div>

            <div>
              <p className="text-xl font-black text-white">
                24/7
              </p>
              <p className="mt-1 text-xs text-white/45">
                Claims support
              </p>
            </div>

            <div>
              <p className="text-xl font-black text-white">
                Kenya
              </p>
              <p className="mt-1 text-xs text-white/45">
                Nationwide coverage
              </p>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-[#0bb3c3]"
              />

              <span className="text-xs text-white/55">
                M-Pesa premium payments
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — QUOTE CARD */}
        <div id="quote" className="relative">
          <div className="absolute -inset-4 rounded-[38px] bg-gradient-to-br from-[#0b8f9b]/20 via-transparent to-[#d19a2e]/15 blur-2xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-white p-6 text-[#061525] shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#b4852d]">
                  Free Quote
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#07372c] sm:text-3xl">
                  Get your free quote
                </h2>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Takes less than 2 minutes. No obligation.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#061525]">
                <ShieldCheck
                  size={23}
                  className="text-[#e0ad43]"
                />
              </div>
            </div>

            <QuoteForm />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
            <Phone size={13} />
            Need help? Call +254 733 669 260
          </div>
        </div>
      </div>
    </section>
  );
}
