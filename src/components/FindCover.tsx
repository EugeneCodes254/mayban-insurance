import {
  ArrowRight,
  Car,
  HeartPulse,
  Home,
  GraduationCap,
  UsersRound,
  PiggyBank,
} from "lucide-react";

const covers = [
  {
    title: "My Vehicle",
    description:
      "Comprehensive and third-party motor cover with fast roadside assistance.",
    icon: Car,
    quoteType: "Motor",
  },
  {
    title: "My Family",
    description:
      "Health and life cover that protects the people who depend on you.",
    icon: UsersRound,
    quoteType: "Health",
  },
  {
    title: "My Home & Business",
    description:
      "Property, fire, theft and business interruption cover for what you've built.",
    icon: Home,
    quoteType: "Business",
  },
  {
    title: "My Health",
    description:
      "Inpatient, outpatient and maternity medical cover for individuals and groups.",
    icon: HeartPulse,
    quoteType: "Health",
  },
  {
    title: "My Child's Future",
    description:
      "Education and endowment plans that grow steadily over time.",
    icon: GraduationCap,
    quoteType: "Life",
  },
  {
    title: "My Retirement",
    description:
      "Pension and investment-linked plans for long-term peace of mind.",
    icon: PiggyBank,
    quoteType: "Life",
  },
];

export function FindCover() {
  return (
    <section id="find-cover" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-[680px]">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0FA79C]">
            Find Cover
          </p>
          <h2 className="mt-4 max-w-[620px] text-4xl font-serif font-bold leading-[1.08] tracking-[-0.035em] text-[#092B46] sm:text-5xl">
            What matters most to you right now?
          </h2>
          <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-[#647487]">
            We group our cover around real life moments, not paperwork categories
            — so it&apos;s easy to find what fits.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {covers.map((cover, index) => {
            const Icon = cover.icon;
            const featured = index === 0;

            return (
              <a
                key={cover.title}
                href={`/?type=${cover.quoteType}#quote`}
                className={`group relative min-h-[142px] overflow-hidden rounded-xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(9,43,70,0.09)] ${
                  featured
                    ? "border-[#27B9B0] bg-[#EAF8F7]"
                    : "border-[#E7ECEF] bg-[#F7F9FA] hover:border-[#B7DCD9] hover:bg-white"
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#092B46] text-white">
                  <Icon size={17} strokeWidth={2.1} />
                </div>

                <h3 className="mt-4 text-[15px] font-bold text-[#092B46]">
                  {cover.title}
                </h3>

                <p className="mt-2 max-w-[330px] text-xs leading-5 text-[#66788A]">
                  {cover.description}
                </p>

                <ArrowRight
                  size={15}
                  className="absolute bottom-5 right-5 text-[#0FA79C] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
