import { ArrowRight, Phone } from "lucide-react";

export function MobileActions() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_16px_45px_rgba(3,39,31,0.18)] backdrop-blur-xl sm:hidden">
      <a
        href="tel:+254733669260"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F1F7F4] px-3 py-3 text-xs font-black text-[#063F32]"
      >
        <Phone size={15} className="text-[#087F6E]" />
        Call Us
      </a>
      <a
        href="#quote"
        className="flex flex-[1.35] items-center justify-center gap-2 rounded-xl bg-[#063F32] px-3 py-3 text-xs font-black text-white"
      >
        Get a Quote
        <ArrowRight size={15} className="text-[#E3C66B]" />
      </a>
    </div>
  );
}
