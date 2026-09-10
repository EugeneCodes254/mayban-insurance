import {
  ArrowRight,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { QuoteForm } from "./QuoteForm";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#063F32] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(201,162,74,0.18),transparent_30%),radial-gradient(circle_at_18%_85%,rgba(8,127,110,0.22),transparent_32%)]" />
      <div className="pointer-events-none absolute -right-32 top-16 h-[620px] w-[620px] rounded-full border border-white/8" />
      <div className="pointer-events-none absolute -right-20 top-28 h-[520px] w-[520px] rounded-full border border-[#C9A24A]/15" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-260px] h-[520px] w-[520px] rounded-full bg-[#087F6E]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-18 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.86fr] lg:gap-14">
          <div className="max-w-[700px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E3C66B]/25 bg-white/5 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#E3C66B] backdrop-blur-sm">
              <ShieldCheck size={14} />
              IRA Licensed Insurance Agency
            </div>

            <h1 className="max-w-[760px] font-serif text-[46px] font-bold leading-[0.99] tracking-[-0.045em] sm:text-[60px] lg:text-[76px]">
              Protect what matters.
              <span className="mt-3 block text-[#E3C66B]">Live with confidence.</span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-white/72 sm:text-[17px] sm:leading-8">
              Tailored insurance solutions for Kenyan individuals, families and
              businesses — with clear advice, responsive claims support and a
              team you can reach when it matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3.5 text-sm font-extrabold text-[#03271F] shadow-[0_14px_35px_rgba(201,162,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#E3C66B]"
              >
                Get a Free Quote
                <ArrowRight size={17} />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
              >
                Explore Cover
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-9 grid max-w-[650px] grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["7+", "Insurance solutions"],
                ["Kenya", "Nationwide support"],
                ["IRA", "Licensed agency"],
                ["24/7", "Claims guidance"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/12 pl-3.5 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-3.5">
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/45">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold text-white/55">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#C9A24A]" />
                Straightforward advice
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#C9A24A]" />
                Responsive claims
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#C9A24A]" />
                M-Pesa premium payments
              </span>
            </div>
          </div>

          <div id="quote" className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
            <div className="absolute -inset-8 rounded-[48px] bg-[#C9A24A]/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-4 -top-6 hidden w-[180px] rounded-3xl border border-white/10 bg-[#03271F]/90 p-4 shadow-2xl backdrop-blur-xl sm:block mayban-float">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A24A]/15">
                  <Sparkles size={18} className="text-[#E3C66B]" />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-white">Made for Kenya</p>
                  <p className="mt-0.5 text-[10px] text-white/45">Practical protection</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[30px] border border-white/10 bg-white p-5 text-[#063F32] shadow-[0_35px_100px_rgba(0,0,0,0.28)] sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C9A24A]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-serif text-[28px] font-bold tracking-[-0.025em] text-[#063F32] sm:text-[31px]">
                    Get your free quote
                  </h2>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    A simple first step. No obligation.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#063F32] shadow-sm">
                  <ShieldCheck size={21} className="text-[#C9A24A]" />
                </div>
              </div>

              <QuoteForm />
            </div>

            <a
              href="tel:+254733669260"
              className="relative mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold text-white/60 transition hover:text-white"
            >
              <Phone size={13} />
              Need help? +254 733 669 260
            </a>
          </div>
        </div>

        <div className="mt-14 hidden items-center gap-5 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 lg:flex">
          <span>Personal protection</span>
          <span className="h-1 w-1 rounded-full bg-[#C9A24A]" />
          <span>Family security</span>
          <span className="h-1 w-1 rounded-full bg-[#C9A24A]" />
          <span>Business continuity</span>
          <span className="h-1 w-1 rounded-full bg-[#C9A24A]" />
          <span>Long-term peace of mind</span>
        </div>
      </div>
    </section>
  );
}
