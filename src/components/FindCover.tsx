import {
  ArrowUpRight,
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
    tone: "dark",
  },
  {
    title: "My Family",
    description:
      "Health and life cover that protects the people who depend on you.",
    icon: UsersRound,
    quoteType: "Health",
    tone: "light",
  },
  {
    title: "My Home & Business",
    description:
      "Property, fire, theft and business interruption cover for what you've built.",
    icon: Home,
    quoteType: "Business",
    tone: "light",
  },
  {
    title: "My Health",
    description:
      "Inpatient, outpatient and maternity medical cover for individuals and groups.",
    icon: HeartPulse,
    quoteType: "Health",
    tone: "light",
  },
  {
    title: "My Child's Future",
    description:
      "Education and endowment plans that grow steadily over time.",
    icon: GraduationCap,
    quoteType: "Life",
    tone: "light",
  },
  {
    title: "My Retirement",
    description:
      "Pension and investment-linked plans for long-term peace of mind.",
    icon: PiggyBank,
    quoteType: "Life",
    tone: "gold",
  },
];

export function FindCover() {
  return (
    <section id="find-cover" className="relative overflow-hidden bg-[#F7FAF8] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-[-160px] top-[-180px] h-[420px] w-[420px] rounded-full border border-[#C9A24A]/10" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#087F6E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24A]" />
              Find your cover
            </div>
            <h2 className="mt-4 max-w-[680px] font-serif text-[38px] font-bold leading-[1.04] tracking-[-0.04em] text-[#17342E] sm:text-5xl lg:text-[56px]">
              Protection for the life you&apos;re building.
            </h2>
            <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-slate-500 sm:text-base">
              We group our cover around real life moments, not paperwork categories — so it&apos;s easier to find what fits.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8E4DE] bg-white px-5 py-3 text-xs font-extrabold text-[#063F32] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A24A]"
          >
            View all covers
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {covers.map((cover, index) => {
            const Icon = cover.icon;
            const dark = cover.tone === "dark";
            const gold = cover.tone === "gold";

            return (
              <a
                key={cover.title}
                href={`/?type=${cover.quoteType}#quote`}
                className={`group relative min-h-[235px] overflow-hidden rounded-[26px] border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(3,39,31,0.10)] sm:p-7 ${
                  dark
                    ? "border-[#063F32] bg-[#063F32] text-white"
                    : gold
                      ? "border-[#E7D7A8] bg-[#FBF6E8] text-[#17342E]"
                      : "border-[#E0EAE5] bg-white text-[#17342E] hover:border-[#BFD6CD]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      dark
                        ? "bg-white/10 text-[#E3C66B]"
                        : gold
                          ? "bg-[#C9A24A]/12 text-[#8B6A20]"
                          : "bg-[#EEF6F2] text-[#087F6E]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition duration-300 group-hover:rotate-45 ${
                      dark ? "bg-white/10 text-white" : "bg-[#F3F7F5] text-[#063F32]"
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="mt-9 max-w-[310px]">
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${dark ? "text-[#E3C66B]" : "text-[#087F6E]"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[19px] font-extrabold tracking-[-0.02em]">{cover.title}</h3>
                  <p className={`mt-2 text-xs leading-5 ${dark ? "text-white/60" : "text-slate-500"}`}>
                    {cover.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
