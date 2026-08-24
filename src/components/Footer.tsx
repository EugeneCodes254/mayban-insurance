import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#03271F] text-white">

      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">

          {/* BRAND */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-black text-[#063F32]">
                M
              </div>

              <div>
                <p className="text-lg font-black tracking-tight">
                  MAYBAN
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                  Insurance
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-[330px] text-sm leading-7 text-white/65">
              Insurance solutions designed to help individuals, families
              and businesses protect what matters most.
            </p>

            <div className="mt-6 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:bg-white/10 hover:text-white"
              >
                <span className="text-xs font-black">f</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:bg-white/10 hover:text-white"
              >
                <span className="text-xs font-black">ig</span>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:bg-white/10 hover:text-white"
              >
                <span className="text-xs font-black">in</span>
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A24A]">
              Company
            </p>

            <div className="mt-5 space-y-3">
              <a href="#about" className="block text-sm text-white/65 hover:text-white">
                About Us
              </a>

              <a href="#products" className="block text-sm text-white/65 hover:text-white">
                Insurance Products
              </a>

              <a href="#claims" className="block text-sm text-white/65 hover:text-white">
                Claims
              </a>

              <a href="#faq" className="block text-sm text-white/65 hover:text-white">
                FAQs
              </a>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A24A]">
              Products
            </p>

            <div className="mt-5 space-y-3">
              <a href="#products" className="block text-sm text-white/65 hover:text-white">
                Motor Insurance
              </a>

              <a href="#products" className="block text-sm text-white/65 hover:text-white">
                Health Insurance
              </a>

              <a href="#products" className="block text-sm text-white/65 hover:text-white">
                Life Insurance
              </a>

              <a href="#products" className="block text-sm text-white/65 hover:text-white">
                Business Insurance
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A24A]">
              Contact
            </p>

            <div className="mt-5 space-y-5">

              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#C9A24A]" />

                <p className="text-sm leading-6 text-white/65">
                  Ndovu Close, Ndovu Road,
                  <br />
                  Karen, Nairobi
                </p>
              </div>

              <a
                href="tel:+254733669260"
                className="flex items-center gap-3 text-sm text-white/65 hover:text-white"
              >
                <Phone size={17} className="text-[#C9A24A]" />
                +254 733 669 260
              </a>

              <a
                href="mailto:info@maybaninsurance.com"
                className="flex items-center gap-3 text-sm text-white/65 hover:text-white"
              >
                <Mail size={17} className="text-[#C9A24A]" />
                info@maybaninsurance.com
              </a>

            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Mayban Insurance. All rights reserved.
          </p>

          <p>
            IRA Agent Licence No. IRA/05/44057/2026
          </p>
        </div>

      </div>
    </footer>
  );
}
