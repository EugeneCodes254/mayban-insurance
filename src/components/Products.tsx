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
    <section id="products" className="bg-[#F5F7F8] py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0FA79C]">
            Our Cover
          </p>
          <h2 className="mt-4 text-4xl font-serif font-bold leading-[1.08] tracking-[-0.035em] text-[#092B46] sm:text-5xl">
            Insurance built around you
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#647487]">
            Our core lines of cover, each designed to be simple to understand
            and quick to claim on.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <a
                key={product.title}
                href={product.href}
                className="group overflow-hidden rounded-xl border border-[#E2E7EA] bg-white shadow-[0_4px_16px_rgba(9,43,70,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(9,43,70,0.10)]"
              >
                <div className="relative h-[150px] overflow-hidden bg-[#DDE8E7]">
                  <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092B46]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#092B46]/95 text-white">
                    <Icon size={17} />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[17px] font-serif font-bold leading-tight text-[#092B46]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-[#66788A]">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-[11px] font-black text-[#0FA79C]">
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
