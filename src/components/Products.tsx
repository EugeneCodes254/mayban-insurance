import {
  ArrowRight,
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
    <section id="products" className="bg-[#F8F7F3] py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C9A24A]">
            Our Cover
          </p>
          <h2 className="mt-4 text-4xl font-serif font-bold leading-[1.06] tracking-[-0.04em] text-[#063F32] sm:text-5xl lg:text-[56px]">
            Insurance built around you
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#68736E]">
            Our core lines of cover, each designed to be simple to understand
            and quick to claim on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <a
                key={product.title}
                href={product.href}
                className="group overflow-hidden rounded-[24px] border border-[#E6E2D8] bg-white shadow-[0_8px_25px_rgba(6,63,50,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(6,63,50,0.12)]"
              >
                <div className="relative h-[205px] overflow-hidden bg-[#E9E5D9]">
                  <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063F32]/55 via-[#063F32]/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#063F32] text-white shadow-lg">
                    <Icon size={17} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[20px] font-serif font-bold leading-tight text-[#063F32]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-[#68736E]">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-[11px] font-black text-[#C9A24A]">
                    {product.link}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
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
