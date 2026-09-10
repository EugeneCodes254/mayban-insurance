"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type CoverType = "Motor" | "Health" | "Life" | "Business";
const tabs: CoverType[] = ["Motor", "Health", "Life", "Business"];

export function QuoteForm() {
  const [coverType, setCoverType] = useState<CoverType>("Motor");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", vehicleValue: "", dependents: "", coverAmount: "", turnover: "", coverOption: "", planType: "" });

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type === "Motor" || type === "Health" || type === "Life" || type === "Business") setCoverType(type);
  }, []);

  function updateField(field: keyof typeof form, value: string) { setForm((current) => ({ ...current, [field]: value })); }
  function changeCover(type: CoverType) { setCoverType(type); setError(""); }

  const detailsComplete = useMemo(() => {
    if (coverType === "Motor") return !!form.vehicleValue && !!form.coverOption;
    if (coverType === "Health") return !!form.dependents && !!form.coverAmount;
    if (coverType === "Life") return !!form.dependents && !!form.planType;
    return !!form.turnover && !!form.coverOption;
  }, [coverType, form]);

  function goToContact() {
    setError("");
    if (!detailsComplete) { setError("Please complete the cover details before continuing."); return; }
    setStep(2);
  }

  function goToReview() {
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) { setError("Please enter your name, email and phone number."); return; }
    setStep(3);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ coverType, ...form }) });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Unable to submit your request.");
      setSubmitted(true);
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong. Please try again."); }
    finally { setLoading(false); }
  }

  function resetForm() {
    setSubmitted(false); setStep(1); setError("");
    setForm({ name: "", email: "", phone: "", vehicleValue: "", dependents: "", coverAmount: "", turnover: "", coverOption: "", planType: "" });
  }

  const inputClass = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#063F32] focus:ring-2 focus:ring-[#063F32]/10";
  const detailsLabel = coverType === "Motor" ? "Motor details" : coverType === "Health" ? "Health needs" : coverType === "Life" ? "Life planning" : "Business details";

  return <div>
    {submitted ? <div className="rounded-2xl border border-[#d8eadf] bg-[#F4F9F6] px-6 py-10 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#063F32] text-white"><CheckCircle2 size={28} /></div>
      <h3 className="mt-5 text-xl font-black text-[#063F32]">Quote request received</h3>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">Thank you, {form.name || "there"}. Our team will review your request and contact you using the details provided.</p>
      <button type="button" onClick={resetForm} className="mt-6 rounded-full border border-[#063F32] px-6 py-3 text-sm font-bold text-[#063F32] transition hover:bg-[#063F32] hover:text-white">Submit another request</button>
    </div> : <form onSubmit={handleSubmit}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">{[1, 2, 3].map((number) => <div key={number} className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black ${step >= number ? "bg-[#063F32] text-white" : "bg-[#EAF2EE] text-slate-400"}`}>{number}</div>)}<span className="ml-1 text-xs font-bold text-slate-500">{step === 1 ? "Choose cover" : step === 2 ? "Your details" : "Review & submit"}</span></div>
        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#087F6E]">Step {step} of 3</span>
      </div>

      {step === 1 && <div>
        <div className="mb-5 grid grid-cols-4 gap-1 rounded-xl bg-[#EDF3F0] p-1">{tabs.map((tab) => <button key={tab} type="button" onClick={() => changeCover(tab)} className={`rounded-lg px-2 py-3 text-xs font-semibold transition sm:text-sm ${coverType === tab ? "bg-[#063F32] text-white shadow-sm" : "text-gray-500 hover:text-[#063F32]"}`}>{tab}</button>)}</div>
        <p className="mb-4 text-sm font-black text-[#063F32]">{detailsLabel}</p>
        {coverType === "Motor" && <div className="space-y-4"><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Vehicle Value (KES)</span><input required type="number" min="1" value={form.vehicleValue} onChange={(e) => updateField("vehicleValue", e.target.value)} placeholder="e.g. 1,200,000" className={inputClass} /></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Cover Type</span><select required value={form.coverOption} onChange={(e) => updateField("coverOption", e.target.value)} className={inputClass}><option value="">Select cover type</option><option>Comprehensive</option><option>Third Party</option></select></label></div>}
        {coverType === "Health" && <div className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Number of Dependants</span><input required type="number" min="1" value={form.dependents} onChange={(e) => updateField("dependents", e.target.value)} placeholder="e.g. 3" className={inputClass} /></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Cover Amount (KES)</span><select required value={form.coverAmount} onChange={(e) => updateField("coverAmount", e.target.value)} className={inputClass}><option value="">Select amount</option><option value="500000">500,000</option><option value="1000000">1,000,000</option><option value="2000000">2,000,000</option></select></label></div>}
        {coverType === "Life" && <div className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Number of Dependants</span><input required type="number" min="0" value={form.dependents} onChange={(e) => updateField("dependents", e.target.value)} placeholder="e.g. 3" className={inputClass} /></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Plan Type</span><select required value={form.planType} onChange={(e) => updateField("planType", e.target.value)} className={inputClass}><option value="">Select plan</option><option>Life Protection</option><option>Education</option><option>Retirement</option></select></label></div>}
        {coverType === "Business" && <div className="space-y-4"><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Annual Business Turnover (KES)</span><input required type="number" min="1" value={form.turnover} onChange={(e) => updateField("turnover", e.target.value)} placeholder="e.g. 5,000,000" className={inputClass} /></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-gray-700">Cover Required</span><select required value={form.coverOption} onChange={(e) => updateField("coverOption", e.target.value)} className={inputClass}><option value="">Select business cover</option><option>Property</option><option>Business Interruption</option><option>Liability</option><option>All Risk</option></select></label></div>}
        <button type="button" onClick={goToContact} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#063F32] px-6 py-4 text-sm font-black text-white transition hover:bg-[#03271F]">Continue <ArrowRight size={18} /></button>
      </div>}

      {step === 2 && <div>
        <div className="grid gap-4"><label><span className="mb-1.5 block text-xs font-bold text-gray-700">Full Name</span><input required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="e.g. Wanjiru Kamau" className={inputClass} /></label><label><span className="mb-1.5 block text-xs font-bold text-gray-700">Email Address</span><input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" className={inputClass} /></label><label><span className="mb-1.5 block text-xs font-bold text-gray-700">Phone Number</span><input required type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="07XX XXX XXX" className={inputClass} /></label></div>
        <div className="mt-5 flex gap-3"><button type="button" onClick={() => setStep(1)} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#063F32] px-5 py-4 text-sm font-black text-[#063F32]"><ArrowLeft size={17} /> Back</button><button type="button" onClick={goToReview} className="flex flex-[2] items-center justify-center gap-2 rounded-xl bg-[#063F32] px-5 py-4 text-sm font-black text-white">Review <ArrowRight size={17} /></button></div>
      </div>}

      {step === 3 && <div>
        <div className="rounded-2xl border border-[#DCE8E2] bg-[#F7FAF8] p-5"><div className="flex items-center justify-between border-b border-[#DCE8E2] pb-4"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#087F6E]">Selected cover</p><p className="mt-1 text-lg font-black text-[#063F32]">{coverType} Insurance</p></div><ShieldCheck className="text-[#C9A24A]" size={24} /></div><div className="mt-4 grid gap-3 text-sm sm:grid-cols-2"><p><span className="text-slate-400">Name:</span> <strong>{form.name}</strong></p><p><span className="text-slate-400">Phone:</span> <strong>{form.phone}</strong></p><p><span className="text-slate-400">Email:</span> <strong className="break-all">{form.email}</strong></p><p><span className="text-slate-400">Details:</span> <strong>{coverType === "Motor" ? form.coverOption : coverType === "Health" ? `${form.dependents} dependant(s)` : coverType === "Life" ? form.planType : form.coverOption}</strong></p></div></div>
        <p className="mt-4 text-xs leading-5 text-slate-400">You are requesting an insurance quotation. A Mayban representative will contact you to discuss coverage, underwriting requirements and the final premium.</p>
        {error && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        <div className="mt-5 flex gap-3"><button type="button" onClick={() => setStep(2)} disabled={loading} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#063F32] px-5 py-4 text-sm font-black text-[#063F32]"><ArrowLeft size={17} /> Back</button><button type="submit" disabled={loading} className="flex flex-[2] items-center justify-center gap-2 rounded-xl bg-[#063F32] px-5 py-4 text-sm font-black text-white transition hover:bg-[#03271F] disabled:cursor-not-allowed disabled:opacity-60">{loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Submit Request <ArrowRight size={17} /></>}</button></div>
      </div>}

      {error && step !== 3 && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">{error}</div>}
      <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">Your information is submitted securely and will only be used to respond to your insurance enquiry.</p>
    </form>}
  </div>;
}
