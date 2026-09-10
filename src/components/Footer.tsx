import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#03271F] text-white">
      <div className="mx-auto max-w-[1320px] px-5 pt-8 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#063F32] px-6 py-8 sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10">
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border border-[#C9A24A]/15" />
          <div className="relative max-w-[650px]">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E3C66B]">Ready when you are</p>
            <h2 className="mt-2 font-serif text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              Let&apos;s find the right protection for you.
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Tell us what you need covered and our team will help you take the next step.
            </p>
          </div>
          <a
            href="#quote"
            className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A24A] px-5 py-3.5 text-xs font-extrabold text-[#03271F] transition hover:-translate-y-0.5 hover:bg-[#E3C66B] lg:mt-0"
          >
            Get a Free Quote
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.75fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center" aria-label="Mayban Insurance home">
              <img
                src="/images/mayban-logo.png"
                alt="Mayban Insurance"
                className="h-[72px] w-auto object-contain"
              />
            </a>
            <p className="mt-5 max-w-[350px] text-sm leading-7 text-white/55">
              Insurance solutions designed to help individuals, families and businesses protect what matters most.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white/45">IRA Licensed</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white/45">Kenya</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white/45">Insurance Agency</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A24A]">Company</p>
            <div className="mt-5 space-y-3">
              <a href="#about" className="block text-sm text-white/55 transition hover:text-white">About Us</a>
              <a href="#products" className="block text-sm text-white/55 transition hover:text-white">Insurance Products</a>
              <a href="#claims" className="block text-sm text-white/55 transition hover:text-white">Claims</a>
              <a href="#faq" className="block text-sm text-white/55 transition hover:text-white">FAQs</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A24A]">Products</p>
            <div className="mt-5 space-y-3">
              <a href="#products" className="block text-sm text-white/55 transition hover:text-white">Motor Insurance</a>
              <a href="#products" className="block text-sm text-white/55 transition hover:text-white">Health Insurance</a>
              <a href="#products" className="block text-sm text-white/55 transition hover:text-white">Life Insurance</a>
              <a href="#products" className="block text-sm text-white/55 transition hover:text-white">Business Insurance</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A24A]">Contact</p>
            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <MapPin size={15} className="text-[#C9A24A]" />
                </span>
                <p className="text-sm leading-6 text-white/55">Ndovu Close, Ndovu Road,<br />Karen, Nairobi</p>
              </div>
              <a href="tel:+254733669260" className="flex items-center gap-3 text-sm text-white/55 transition hover:text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5"><Phone size={15} className="text-[#C9A24A]" /></span>
                +254 733 669 260
              </a>
              <a href="mailto:info@maybaninsurance.com" className="flex items-center gap-3 text-sm text-white/55 transition hover:text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5"><Mail size={15} className="text-[#C9A24A]" /></span>
                info@maybaninsurance.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[10px] font-semibold text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mayban Insurance. All rights reserved.</p>
          <p>IRA Agent Licence No. IRA/05/44057/2026</p>
        </div>
      </div>
    </footer>
  );
}
