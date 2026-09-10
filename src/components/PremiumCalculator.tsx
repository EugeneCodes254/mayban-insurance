"use client";

import { useMemo, useState } from "react";
import { Calculator, Car, HeartPulse, ArrowRight, Info } from "lucide-react";

type CalculatorType = "Motor" | "Health";

export function PremiumCalculator() {
  const [type, setType] = useState<CalculatorType>("Motor");
  const [vehicleValue, setVehicleValue] = useState(1500000);
  const [cover, setCover] = useState("Comprehensive");
  const [dependants, setDependants] = useState(1);
  const [healthCover, setHealthCover] = useState(1000000);

  const estimate = useMemo(() => {
    if (type === "Motor") {
      if (!vehicleValue || vehicleValue <= 0) return null;
      const rate = cover === "Comprehensive" ? 0.035 : 7500;
      return cover === "Comprehensive" ? Math.max(vehicleValue * rate, 10000) : rate;
    }

    const base = healthCover <= 500000 ? 18000 : healthCover <= 1000000 ? 28000 : 42000;
    return base + Math.max(0, dependants - 1) * 9000;
  }, [type, vehicleValue, cover, dependants, healthCover]);

  const formatKES = (amount: number | null) =>
    amount === null ? "—" : `KES ${Math.round(amount).toLocaleString("en-KE")}`;

  return (
    <section id="calculator" className="relative overflow-hidden bg-[#F4F9F6] py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#087F6E]">Plan your cover</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#063F32] sm:text-5xl">
              Get an indicative premium in seconds.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
              Explore a simple estimate before speaking with our team. Your final premium depends on underwriting, policy terms and the information provided.
            </p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#DCE8E2] bg-white p-4 text-xs leading-5 text-slate-500">
              <Info size={16} className="mt-0.5 shrink-0 text-[#C9A24A]" />
              This calculator is indicative only and does not constitute a quotation or binding offer.
            </div>
          </div>

          <div className="rounded-[28px] border border-[#DCE8E2] bg-white p-5 shadow-[0_24px_70px_rgba(3,39,31,0.10)] sm:p-7">
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-[#EEF6F2] p-1.5">
              <button type="button" onClick={() => setType("Motor")} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition ${type === "Motor" ? "bg-[#063F32] text-white shadow-sm" : "text-slate-500"}`}>
                <Car size={16} /> Motor
              </button>
              <button type="button" onClick={() => setType("Health")} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition ${type === "Health" ? "bg-[#063F32] text-white shadow-sm" : "text-slate-500"}`}>
                <HeartPulse size={16} /> Health
              </button>
            </div>

            {type === "Motor" ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-600">Vehicle value</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">KES</span>
                    <input type="number" min="1" step="10000" value={vehicleValue} onChange={(e) => setVehicleValue(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 px-12 py-3.5 text-sm font-semibold outline-none focus:border-[#063F32] focus:ring-2 focus:ring-[#063F32]/10" />
                  </div>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-600">Cover type</span>
                  <select value={cover} onChange={(e) => setCover(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold outline-none focus:border-[#063F32]">
                    <option>Comprehensive</option>
                    <option>Third Party</option>
                  </select>
                </label>
              </div>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-600">Dependants</span>
                  <input type="number" min="1" max="20" value={dependants} onChange={(e) => setDependants(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-semibold outline-none focus:border-[#063F32]" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-600">Cover amount</span>
                  <select value={healthCover} onChange={(e) => setHealthCover(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold outline-none focus:border-[#063F32]">
                    <option value={500000}>KES 500,000</option>
                    <option value={1000000}>KES 1,000,000</option>
                    <option value={2000000}>KES 2,000,000</option>
                  </select>
                </label>
              </div>
            )}

            <div className="mt-7 rounded-2xl bg-[#063F32] p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E3C66B]">Indicative premium</p>
                <p className="mt-1 text-3xl font-black">{formatKES(estimate)}</p>
                <p className="mt-1 text-[11px] text-white/50">Indicative estimate only</p>
              </div>
              <a href="#quote" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-5 py-3 text-xs font-black text-[#03271F] transition hover:bg-[#E3C66B] sm:mt-0">
                Get an official quote <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
