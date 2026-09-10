import { BadgeCheck, BriefcaseBusiness, Headphones, ShieldCheck } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "IRA Licensed", value: "Insurance agency" },
  { icon: BadgeCheck, label: "7 Cover Solutions", value: "Personal & business" },
  { icon: Headphones, label: "Direct Support", value: "+254 733 669 260" },
  { icon: BriefcaseBusiness, label: "Kenya Focused", value: "Serving clients nationwide" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 border-b border-[#DCE8E2] bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-[#E6EEEA] sm:grid-cols-4 sm:px-8 lg:px-10">
        {signals.map((signal) => {
          const Icon = signal.icon;
          return (
            <div key={signal.label} className="flex items-center gap-3 px-4 py-4 sm:px-5 lg:py-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF6F2] text-[#087F6E]">
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[10px] font-black uppercase tracking-[0.12em] text-[#063F32] sm:text-[11px]">
                  {signal.label}
                </p>
                <p className="mt-0.5 truncate text-[10px] text-slate-400">{signal.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
