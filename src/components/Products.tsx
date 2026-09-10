import {
  ArrowRight,
  ArrowUpRight,
  Car,
  HeartPulse,
  LifeBuoy,
  Building2,
  Ship,
  FileCheck2,
  HandCoins,
} from "lucide-react";

const products = [
  {
    title: "Motor Insurance",
    description:
      "Comprehensive and third-party cover with 24/7 roadside assistance and a nationwide garage network.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Motor#quote",
    link: "Explore Motor Cover",
  },
  {
    title: "Health Insurance",
    description:
      "Individual and family medical cover including inpatient, outpatient, maternity and dental.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Health#quote",
    link: "Explore Health Cover",
  },
  {
    title: "Life Insurance",
    description:
      "Term life, endowment and education plans that secure your family's tomorrow, today.",
    icon: LifeBuoy,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Life#quote",
    link: "Explore Life Cover",
  },
  {
    title: "Property & Business",
    description:
      "Fire, theft, liability and business interruption cover for SMEs and enterprises.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Business#quote",
    link: "Explore Business Cover",
  },
  {
    title: "Marine Insurance",
    description:
      "Cargo and hull cover for imports, exports and vessels, including the cover required under Kenya's Marine Insurance Act.",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Business#quote",
    link: "Explore Marine Cover",
  },
  {
    title: "Performance Bond",
    description:
      "A guarantee that protects clients if a contractor fails to fulfil their obligations on a contracted project.",
    icon: FileCheck2,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Business#quote",
    link: "Explore Performance Bonds",
  },
  {
    title: "Advance Payment Guarantee",
    description:
      "Protects clients who make upfront payments to contractors or suppliers, guaranteeing a refund if obligations aren't met.",
    icon: HandCoins,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    href: "/?type=Business#quote",
    link: "Explore Payment Guarantees",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#087F6E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24A]" />
              Our insurance solutions
            </div>
            <h2 className="mt-4 font-serif text-[38px] font-bold leading-[1.04] tracking-[-0.04em] text-[#063F32] sm:text-5xl lg:text-[56px]">
              Cover designed around real life.
            </h2>
            <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-slate-500 sm:text-base">
              From everyday protection to business continuity, choose cover that fits what you own, who you care for and where you&apos;re going.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#063F32] px-5 py-3 text-xs font-extrabold text-white shadow-[0_10px_25px_rgba(6,63,50,0.12)] transition hover:-translate-y-0.5 hover:bg-[#03271F]"
          >
            Talk to Mayban
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            const featured = index === 0;

            return (
              <a
                key={product.title}
                href={product.href}
                className={`group overflow-hidden rounded-[28px] border bg-white shadow-[0_8px_28px_rgba(6,63,50,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_rgba(6,63,50,0.13)] ${
                  featured ? "border-[#BFD8CF] lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr]" : "border-[#E5ECE8]"
                }`}
              >
                <div className={`relative overflow-hidden bg-[#EAF2EE] ${featured ? "h-[255px] lg:h-full" : "h-[210px]"}`}>
                  <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03271F]/65 via-[#063F32]/5 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#03271F]/60 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E3C66B]" />
                    {featured ? "Most popular" : "Mayban cover"}
                  </div>
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#063F32] shadow-xl">
                    <Icon size={19} />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A24A]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-serif text-[22px] font-bold leading-tight text-[#063F32]">
                      {product.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EDF1EF] pt-4 text-[11px] font-black text-[#087F6E]">
                    {product.link}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F7F4] transition group-hover:bg-[#063F32] group-hover:text-white">
                      <ArrowUpRight size={15} className="transition group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
