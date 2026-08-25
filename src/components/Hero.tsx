import {
  ArrowRight,
  ShieldCheck,
  Phone,
  CheckCircle2,
} from "lucide-react";

import { QuoteForm } from "./QuoteForm";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#082640] text-white">
      <div className="pointer-events-none absolute -right-44 -top-44 h-[620px] w-[620px] rounded-full bg-[#10A7A0]/12 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-52 left-1/3 h-[520px] w-[520px] rounded-full bg-[#10A7A0]/8 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[120px] h-[460px] w-[700px] rounded-[50%] border border-white/10 rotate-[16deg]" />
      <div className="pointer-events-none absolute right-[-230px] top-[175px] h-[460px] w-[700px] rounded-[50%] border border-[#10A7A0]/20 rotate-[16deg]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16 lg:py-[82px]">
        <div className="max-w-[700px]">
          <div className="mb-7 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#54d4cb]">
            <ShieldCheck size={15} />
            IRA Licensed Insurance Agency
          </div>

          <h1 className="max-w-[700px] font-serif text-[45px] font-bold leading-[1.03] tracking-[-0.035em] sm:text-[58px] lg:text-[70px]">
            Cover that stands with you,
            <span className="mt-2 block text-white">
              wherever life in Kenya takes you.
            </span>
          </h1>

          <p className="mt-7 max-w-[610px] text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
            Motor, health, life and business insurance built for Kenyan
            families and enterprises — straightforward policies, responsive
            claims, and support that speaks your language.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#10A7A0] px-7 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(16,167,160,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0d948e]"
            >
              Explore Cover
              <ArrowRight size={17} />
            </a>

            <a
              href="#claims"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              How Claims Work
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">
            <div>
              <p className="text-lg font-black text-white">7+</p>
              <p className="mt-1 text-[11px] text-white/50">Insurance solutions</p>
            </div>

            <div>
              <p className="text-lg font-black text-white">24/7</p>
              <p className="mt-1 text-[11px] text-white/50">Claims support</p>
            </div>

            <div>
              <p className="text-lg font-black text-white">Kenya</p>
              <p className="mt-1 text-[11px] text-white/50">Nationwide coverage</p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-white/60">
              <CheckCircle2 size={17} className="text-[#10A7A0]" />
              M-Pesa premium payments
            </div>
          </div>
        </div>

        <div id="quote" className="relative lg:ml-auto lg:w-full lg:max-w-[500px]">
          <div className="absolute -inset-5 rounded-[38px] bg-[#10A7A0]/10 blur-2xl" />

          <div className="relative rounded-[14px] border border-slate-200/80 bg-white p-6 text-[#082640] shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#10A7A0]">
                  Free Quote
                </p>
                <h2 className="mt-2 font-serif text-[28px] font-bold tracking-tight text-[#082640] sm:text-[31px]">
                  Get your free quote
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  Takes less than 2 minutes. No obligation.
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#082640]">
                <ShieldCheck size={21} className="text-[#10A7A0]" />
              </div>
            </div>

            <QuoteForm />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/45">
            <Phone size={13} />
            Need help? Call +254 733 669 260
          </div>
        </div>
      </div>
    </section>
  );
}
