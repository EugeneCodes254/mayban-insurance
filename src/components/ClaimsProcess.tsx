"use client";

import { ArrowRight, CheckCircle2, FileText, SearchCheck, Send } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Report Your Claim",
    description: "Call our team, use the app, or visit any branch to notify us and share the basic details.",
    icon: Send,
  },
  {
    number: "02",
    title: "Assessment",
    description: "An assessor is assigned and reviews your claim, usually within 48 hours.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Approval",
    description: "We confirm cover and approve valid claims with clear communication on the outcome.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Fast Payout",
    description: "Once approved, settlement is arranged promptly according to your policy terms.",
    icon: FileText,
  },
];

export function ClaimsProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="claims" className="relative overflow-hidden bg-[#063F32] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-16 top-32 h-52 w-52 rounded-full border border-[#C9A24A]/15" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-[760px]">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E3C66B]">
            How It Works
          </p>

          <h2 className="mt-4 max-w-[780px] font-serif text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Claiming with us is refreshingly simple.
          </h2>

          <p className="mt-6 max-w-[690px] text-base leading-7 text-white/60">
            No hidden steps, no unnecessary delays — just four clear stages from reporting your claim to settlement.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = index === activeStep;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className="group text-left"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className={`font-serif text-4xl font-bold transition ${active ? "text-white/80" : "text-white/20 group-hover:text-white/40"}`}>
                    {step.number}
                  </span>
                  <Icon size={20} className={active ? "text-[#E3C66B]" : "text-white/20 group-hover:text-[#E3C66B]"} />
                </div>

                <h3 className={`mt-6 text-lg font-black transition ${active ? "text-white" : "text-white/80"}`}>
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.description}
                </p>

                <div className={`mt-7 h-1 rounded-full transition-all duration-300 ${active ? "w-16 bg-[#C9A24A]" : "w-8 bg-white/10 group-hover:w-12 group-hover:bg-[#C9A24A]/60"}`} />
              </button>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold">Need help with a claim?</p>
            <p className="mt-1 text-sm text-white/45">Our team is ready to guide you through the next step.</p>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 self-start rounded-full bg-[#C9A24A] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#20b7ae]">
            Talk to our team
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
