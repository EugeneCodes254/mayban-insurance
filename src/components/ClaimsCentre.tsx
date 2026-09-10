"use client";

import { ArrowRight, CheckCircle2, FileText, MessageCircle, Phone, ShieldAlert, Upload } from "lucide-react";
import { useState } from "react";

const claimTypes = ["Motor accident", "Theft or loss", "Property damage", "Medical / health", "Other"];

export function ClaimsCentre() {
  const [claimType, setClaimType] = useState(claimTypes[0]);
  const [reported, setReported] = useState(false);

  const message = encodeURIComponent(`Hello Mayban Insurance, I need help reporting a claim. Claim type: ${claimType}.`);

  return (
    <section id="claim-centre" className="bg-[#F4F9F6] py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#087F6E]"><ShieldAlert size={14}/> Claims centre</div>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#063F32] sm:text-5xl lg:text-[56px]">When something goes wrong, know what to do next.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">Start a claim conversation with Mayban, understand the information to prepare, and choose the fastest way to reach our team.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                [Phone, "Call Mayban", "+254 733 669 260"],
                [MessageCircle, "WhatsApp support", "Start a claim conversation"],
                [FileText, "Have your policy details", "Policy number and incident details"],
              ].map(([Icon, title, detail]) => <div key={title as string} className="flex items-center gap-3 rounded-2xl border border-[#DDE9E3] bg-white p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6F2] text-[#087F6E]"><Icon size={17}/></span><span><strong className="block text-xs font-black text-[#063F32]">{title as string}</strong><span className="mt-0.5 block text-[11px] text-slate-400">{detail as string}</span></span></div>)}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#DDE9E3] bg-white p-5 shadow-[0_24px_70px_rgba(6,63,50,0.08)] sm:p-8">
            {!reported ? <>
              <div className="flex items-center justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#087F6E]">Step 1</p><h3 className="mt-1 text-xl font-black text-[#063F32]">What happened?</h3></div><span className="text-xs font-bold text-slate-400">No claim is submitted yet</span></div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {claimTypes.map(type => <button key={type} type="button" onClick={()=>setClaimType(type)} className={`rounded-2xl border p-4 text-left text-sm font-bold transition ${claimType===type?'border-[#087F6E] bg-[#F1F7F4] text-[#063F32]':'border-slate-200 text-slate-500 hover:border-[#BFD7CD]'}`}>{type}</button>)}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-[#BFD7CD] bg-[#F7FAF8] p-5"><div className="flex gap-3"><Upload size={18} className="mt-0.5 text-[#087F6E]"/><div><p className="text-sm font-black text-[#063F32]">Prepare supporting documents</p><p className="mt-1 text-xs leading-5 text-slate-400">Depending on your claim, our team may request documents such as a police abstract, medical documents, photographs, receipts or repair estimates.</p></div></div></div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/254733669260?text=${message}`} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#063F32] px-5 py-3.5 text-sm font-black text-white hover:bg-[#03271F]"><MessageCircle size={16}/> Start on WhatsApp</a><a href="tel:+254733669260" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DDE9E3] px-5 py-3.5 text-sm font-black text-[#063F32] hover:bg-[#F4F9F6]"><Phone size={16}/> Call</a></div>
              <button type="button" onClick={()=>setReported(true)} className="mt-4 w-full text-center text-[11px] font-bold text-slate-400 underline underline-offset-4">I&apos;ve spoken to Mayban — show me what happens next</button>
            </> : <div className="text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#063F32] text-[#E3C66B]"><CheckCircle2 size={27}/></div><p className="mt-5 text-[9px] font-black uppercase tracking-[0.2em] text-[#087F6E]">Next steps</p><h3 className="mt-2 text-2xl font-black text-[#063F32]">Your claim conversation is ready.</h3><div className="mx-auto mt-6 max-w-md space-y-3 text-left">{["Share your policy and incident details with our team.","Provide the supporting documents requested for assessment.","Keep your claim reference for follow-up and updates.","Settlement is handled according to your policy terms and claim outcome."].map((item,i)=><div key={item} className="flex gap-3 rounded-xl bg-[#F4F9F6] p-3 text-xs leading-5 text-slate-500"><span className="font-black text-[#C9A24A]">0{i+1}</span>{item}</div>)}</div><a href={`https://wa.me/254733669260?text=${message}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3.5 text-sm font-black text-[#03271F]">Continue with Mayban <ArrowRight size={16}/></a></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
