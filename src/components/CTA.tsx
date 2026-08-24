import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#063F32] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C9A24A]">
              Get in touch
            </p>

            <h2 className="mt-4 max-w-[700px] text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Let's protect what matters to you.
            </h2>

            <p className="mt-6 max-w-[620px] text-base leading-7 text-white/60">
              Have a question about your cover, need a quote or require
              assistance with a claim? Our team is ready to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-7 py-4 text-sm font-black text-[#063F32] transition hover:bg-[#e5ba61]"
              >
                Get a Quote
                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/254733669260"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp Us
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-7 sm:p-9">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MapPin size={19} className="text-[#C9A24A]" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Visit us
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Ndovu Close, Ndovu Road,
                  <br />
                  Karen, Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <a
              href="tel:+254733669260"
              className="flex items-center gap-4 transition hover:text-[#C9A24A]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Phone size={19} className="text-[#C9A24A]" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Call us
                </p>
                <p className="mt-2 text-sm font-bold">
                  +254 733 669 260
                </p>
              </div>
            </a>

            <div className="my-6 h-px bg-white/10" />

            <a
              href="mailto:info@maybaninsurance.com"
              className="flex items-center gap-4 transition hover:text-[#C9A24A]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Mail size={19} className="text-[#C9A24A]" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Email us
                </p>
                <p className="mt-2 text-sm font-bold">
                  info@maybaninsurance.com
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
