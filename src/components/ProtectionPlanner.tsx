"use client";

import { ArrowRight, BriefcaseBusiness, Car, HeartPulse, Home, ShieldCheck, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";

const options = [
  { id: "vehicle", label: "My vehicle", description: "Protect my car or commercial vehicle.", icon: Car, type: "Motor" },
  { id: "family", label: "My family", description: "Protect the people who depend on me.", icon: UsersRound, type: "Life" },
  { id: "health", label: "My health", description: "Plan for medical and healthcare costs.", icon: HeartPulse, type: "Health" },
  { id: "home", label: "My property", description: "Protect my home, assets or property.", icon: Home, type: "Business" },
  { id: "business", label: "My business", description: "Protect my business and its continuity.", icon: BriefcaseBusiness, type: "Business" },
];

export function ProtectionPlanner() {
  const [selected, setSelected] = useState("family");

  const recommendation = useMemo(
    () => options.find((option) => option.id === selected) ?? options[1],
    [selected]
  );

  return (
    <section id="planner" className="relative overflow-hidden bg-[#F4F9F6] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full border border-[#C9A24A]/10" />
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#087F6E]">
              <ShieldCheck size={14} />
              Protection planner
            </div>
            <h2 className="mt-4 font-serif text-[38px] font-bold leading-[1.04] tracking-[-0.04em] text-[#063F32] sm:text-5xl lg:text-[54px]">
              Not sure where to start?
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-slate-500 sm:text-base">
              Tell us what matters most to you and we&apos;ll point you toward a relevant Mayban cover to explore.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[11px] font-bold text-[#063F32]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <ShieldCheck size={15} className="text-[#C9A24A]" />
              </span>
              A starting point, not a substitute for professional advice.
            </div>
          </div>

          <div className="rounded-[30px] border border-[#DDE9E3] bg-white p-5 shadow-[0_24px_70px_rgba(6,63,50,0.08)] sm:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {options.map((option) => {
                const Icon = option.icon;
                const active = selected === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelected(option.id)}
                    className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-[#087F6E] bg-[#F1F7F4] shadow-sm"
                        : "border-[#E7EEEA] bg-white hover:border-[#BFD7CD] hover:bg-[#FAFCFB]"
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${active ? "bg-[#063F32] text-[#E3C66B]" : "bg-[#EEF6F2] text-[#087F6E]"}`}>
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-black text-[#063F32]">{option.label}</span>
                      <span className="mt-1 block text-[11px] leading-4 text-slate-400">{option.description}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl bg-[#063F32] p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#E3C66B]">Suggested starting point</p>
                <p className="mt-1.5 text-lg font-black">Explore {recommendation.label.replace("My ", "")} protection</p>
                <p className="mt-1 text-xs text-white/55">We&apos;ll help you understand the options before you decide.</p>
              </div>
              <a
                href={`/?type=${recommendation.type}#quote`}
                className="mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-5 py-3 text-xs font-black text-[#03271F] transition hover:-translate-y-0.5 hover:bg-[#E3C66B] sm:mt-0"
              >
                Explore cover
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
