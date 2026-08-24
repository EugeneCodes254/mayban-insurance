"use client";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Headphones,
  SearchCheck,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Report your claim",
    description:
      "Notify the Mayban team as soon as possible and provide the basic details surrounding the incident.",
    icon: Send,
  },
  {
    number: "02",
    title: "Submit documents",
    description:
      "Provide the relevant supporting documents so our claims team can begin assessing your case.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "Our team reviews the claim, verifies the circumstances and determines the applicable settlement.",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Settlement",
    description:
      "Once approved, your claim is processed and settlement is arranged according to your policy.",
    icon: CheckCircle2,
  },
];

const claimTypes = [
  "Motor claim",
  "Health claim",
  "Property claim",
  "Business claim",
  "Life claim",
  "Other",
];

export function ClaimsProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [claimType, setClaimType] = useState("");

  return (
    <section
      id="claims"
      className="relative overflow-hidden bg-[#F3F7F5] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#087F6E]/10 blur-[90px]" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">

        {/* HEADER */}
        <div className="max-w-[760px]">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9A762E]">
            Claims
          </p>

          <h2 className="mt-3 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#063F32] sm:text-5xl lg:text-6xl">
            When something goes wrong,
            <span className="block text-[#087F6E]">
              we're here to help.
            </span>
          </h2>

          <p className="mt-5 max-w-[650px] text-base leading-7 text-gray-500">
            We aim to make the claims process clear and straightforward,
            giving you support from the moment you report an incident until
            your claim is settled.
          </p>
        </div>

        {/* PROCESS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = index === activeStep;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`group rounded-[26px] border p-6 text-left transition duration-300 ${
                  active
                    ? "border-[#063F32] bg-[#063F32] text-white shadow-[0_20px_50px_rgba(6,63,50,0.16)]"
                    : "border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      active
                        ? "bg-white/10 text-[#C9A24A]"
                        : "bg-[#EAF4EF] text-[#063F32]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <span
                    className={`text-xs font-black ${
                      active ? "text-white/30" : "text-gray-200"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className={`mt-7 text-lg font-black ${
                    active ? "text-white" : "text-[#063F32]"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    active ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* BOTTOM PANEL */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">

          {/* DOCUMENTS */}
          <div className="rounded-[30px] bg-[#063F32] p-7 text-white sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <ShieldCheck
                  size={22}
                  className="text-[#C9A24A]"
                />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d6a23c]">
                  Before you submit
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Have your documents ready
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Policy or certificate details",
                "National ID or identification",
                "Incident details",
                "Relevant photographs",
                "Police abstract where applicable",
                "Invoices or supporting documents",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#087F6E]"
                  />

                  <span className="text-xs text-white/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* START CLAIM */}
          <div className="rounded-[30px] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F2EC] text-[#063F32]">
              <Headphones size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-black text-[#063F32]">
              Ready to start a claim?
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Select the type of claim and our team can guide you through
              the next steps.
            </p>

            <label
              htmlFor="claim-type"
              className="mt-6 block text-xs font-bold text-gray-700"
            >
              Claim type
            </label>

            <select
              id="claim-type"
              value={claimType}
              onChange={(e) => setClaimType(e.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#063F32] focus:ring-2 focus:ring-[#063F32]/10"
            >
              <option value="">Select claim type</option>

              {claimTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <a
              href="#contact"
              className={`mt-4 flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition ${
                claimType
                  ? "bg-[#063F32] text-white hover:bg-[#042D24]"
                  : "pointer-events-none bg-gray-100 text-gray-400"
              }`}
            >
              Start My Claim
              <ArrowRight size={17} />
            </a>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-gray-400">
              <Headphones size={13} />
              Our team is ready to assist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
