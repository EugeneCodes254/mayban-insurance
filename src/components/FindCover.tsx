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
    <section
      id="find-cover"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-[760px]">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#b4852d]">
            Find Cover
          </p>

          <h2 className="mt-3 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#063f32] sm:text-5xl">
            What matters most to you right now?
          </h2>

          <p className="mt-5 max-w-[650px] text-base leading-7 text-gray-500">
            We group our cover around real life moments, not paperwork
            categories — so it's easy to find what fits.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {covers.map((cover) => {
            const Icon = cover.icon;

            return (
              <a
                key={cover.title}
                href={`/?type=${cover.quoteType}#quote`}
                className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-[#f7faf8] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_60px_rgba(6,63,50,0.10)]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#d6a23a]/10 transition duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063f32] text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-[#063f32]">
                    {cover.title}
                  </h3>

                  <p className="mt-3 max-w-[300px] text-sm leading-6 text-gray-500">
                    {cover.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-black text-[#063f32]">
                    Get a quote

                    <ArrowRight
                      size={15}
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
