import { MessageCircle } from "lucide-react";

const whatsappNumber = "254733669260";
const message = encodeURIComponent(
  "Hello Mayban Insurance, I would like help with an insurance enquiry."
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Mayban Insurance on WhatsApp"
      className="group fixed bottom-24 right-4 z-40 flex items-center gap-2 rounded-full border border-white/70 bg-white px-3 py-3 shadow-[0_16px_45px_rgba(3,39,31,0.18)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(3,39,31,0.24)] sm:bottom-6 sm:right-6"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#063F32] text-[#E3C66B] transition group-hover:bg-[#087F6E]">
        <MessageCircle size={19} />
      </span>
      <span className="hidden pr-2 text-[11px] font-black text-[#063F32] sm:block">Chat with Mayban</span>
    </a>
  );
}
