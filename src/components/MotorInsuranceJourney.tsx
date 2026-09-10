"use client";

import { ArrowLeft, ArrowRight, Car, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

const steps = ["Vehicle", "Cover", "Driver", "Next step"];

export function MotorInsuranceJourney() {
  const [step, setStep] = useState(0);
  const [vehicle, setVehicle] = useState({ make: "", model: "", year: "", value: "" });
  const [cover, setCover] = useState("Comprehensive");
  const [use, setUse] = useState("Private");
  const [experience, setExperience] = useState("More than 3 years");

  const canContinue = useMemo(() => {
    if (step === 0) return vehicle.make.trim() && vehicle.model.trim() && vehicle.year && Number(vehicle.value) > 0;
    return true;
  }, [step, vehicle]);

  const whatsappMessage = encodeURIComponent(
    `Hello Mayban Insurance, I would like a motor insurance quote. Vehicle: ${vehicle.make} ${vehicle.model} (${vehicle.year}), estimated value KES ${Number(vehicle.value || 0).toLocaleString("en-KE")}, cover: ${cover}, use: ${use}.`
  );

  return (
    <section id="motor-journey" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#087F6E]">Motor insurance</p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#063F32] sm:text-5xl">
            Build your motor cover request.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Tell us about your vehicle and what you need. We&apos;ll use the details to prepare the right conversation with our team.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[30px] border border-[#DDE9E3] bg-[#F7FAF8] shadow-[0_24px_70px_rgba(6,63,50,0.08)]">
          <div className="border-b border-[#E3ECE7] bg-white px-5 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-2">
              {steps.map((label, index) => (
                <div key={label} className="flex min-w-0 flex-1 items-center gap-2">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${index <= step ? "bg-[#063F32] text-[#E3C66B]" : "bg-[#EEF3F0] text-slate-400"}`}>{index < step ? <CheckCircle2 size={15} /> : index + 1}</span>
                  <span className={`hidden text-[11px] font-black sm:block ${index <= step ? "text-[#063F32]" : "text-slate-400"}`}>{label}</span>
                  {index < steps.length - 1 && <span className="mx-1 hidden h-px flex-1 bg-[#E4ECE8] sm:block" />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {step === 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063F32] text-[#E3C66B]"><Car size={20} /></span><div><h3 className="text-lg font-black text-[#063F32]">Tell us about your vehicle</h3><p className="text-xs text-slate-400">Basic details are enough to get started.</p></div></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[['make','Vehicle make','e.g. Toyota'],['model','Vehicle model','e.g. RAV4']].map(([key,label,placeholder]) => <label key={key} className="block"><span className="mb-2 block text-xs font-black text-slate-600">{label}</span><input value={vehicle[key as keyof typeof vehicle]} onChange={e=>setVehicle({...vehicle,[key]:e.target.value})} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#063F32]" /></label>)}
                  <label className="block"><span className="mb-2 block text-xs font-black text-slate-600">Year of manufacture</span><input type="number" min="1980" max="2030" value={vehicle.year} onChange={e=>setVehicle({...vehicle,year:e.target.value})} placeholder="2022" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#063F32]" /></label>
                  <label className="block"><span className="mb-2 block text-xs font-black text-slate-600">Estimated vehicle value (KES)</span><input type="number" min="1" value={vehicle.value} onChange={e=>setVehicle({...vehicle,value:e.target.value})} placeholder="1,500,000" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#063F32]" /></label>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="text-lg font-black text-[#063F32]">Choose your preferred cover</h3>
                <p className="mt-1 text-xs text-slate-400">Your final cover and terms are confirmed by Mayban.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[['Comprehensive','Broader protection for your vehicle and relevant insured risks.'],['Third Party','Third-party liability cover for eligible motor use.']].map(([name,desc])=><button key={name} type="button" onClick={()=>setCover(name)} className={`rounded-2xl border p-5 text-left transition ${cover===name?'border-[#087F6E] bg-[#F1F7F4]':'border-slate-200 bg-white hover:border-[#BFD7CD]'}`}><div className="flex items-center justify-between"><span className="text-sm font-black text-[#063F32]">{name}</span><span className={`h-4 w-4 rounded-full border-2 ${cover===name?'border-[#063F32] bg-[#C9A24A]':'border-slate-300'}`} /></div><p className="mt-2 text-xs leading-5 text-slate-400">{desc}</p></button>)}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-lg font-black text-[#063F32]">A little about the driver</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block"><span className="mb-2 block text-xs font-black text-slate-600">Vehicle use</span><select value={use} onChange={e=>setUse(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#063F32]"><option>Private</option><option>Business</option><option>Commercial</option></select></label>
                  <label className="block"><span className="mb-2 block text-xs font-black text-slate-600">Driving experience</span><select value={experience} onChange={e=>setExperience(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#063F32]"><option>Less than 1 year</option><option>1–3 years</option><option>More than 3 years</option></select></label>
                </div>
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#DCE8E2] bg-white p-4 text-xs leading-5 text-slate-500"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#C9A24A]" />These details help our team understand your motor insurance needs. They do not create a policy or guarantee acceptance.</div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#063F32] text-[#E3C66B]"><CheckCircle2 size={27}/></div>
                <h3 className="mt-5 text-2xl font-black text-[#063F32]">Your motor request is ready</h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">We have your vehicle and cover preferences. Choose how you want to continue with Mayban.</p>
                <div className="mx-auto mt-6 max-w-md rounded-2xl bg-[#F4F9F6] p-5 text-left text-xs leading-6 text-slate-500"><p><strong className="text-[#063F32]">Vehicle:</strong> {vehicle.make} {vehicle.model} ({vehicle.year})</p><p><strong className="text-[#063F32]">Cover:</strong> {cover}</p><p><strong className="text-[#063F32]">Use:</strong> {use}</p><p><strong className="text-[#063F32]">Value:</strong> KES {Number(vehicle.value).toLocaleString('en-KE')}</p></div>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><a href={`/?type=Motor#quote`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063F32] px-6 py-3.5 text-sm font-black text-white hover:bg-[#03271F]">Continue to quote <ArrowRight size={16}/></a><a href={`https://wa.me/254733669260?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#087F6E] bg-white px-6 py-3.5 text-sm font-black text-[#063F32] hover:bg-[#F1F7F4]"><MessageCircle size={16}/> WhatsApp Mayban</a></div>
              </div>
            )}

            {step < 3 && <div className="mt-8 flex items-center justify-between gap-3"><button type="button" disabled={step===0} onClick={()=>setStep(step-1)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-500 disabled:invisible"><ArrowLeft size={16}/> Back</button><button type="button" disabled={!canContinue} onClick={()=>setStep(step+1)} className="inline-flex items-center gap-2 rounded-full bg-[#063F32] px-6 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40">Continue <ArrowRight size={16}/></button></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
