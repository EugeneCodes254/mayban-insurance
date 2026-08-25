import { ArrowRight, Award, BriefcaseBusiness, ShieldCheck, Users } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, value: "Trusted advice", label: "Clear guidance for every stage" },
  { icon: Users, value: "Client first", label: "Support built around your needs" },
  { icon: BriefcaseBusiness, value: "Business ready", label: "Protection for growing enterprises" },
  { icon: Award, value: "Professional", label: "Responsive and dependable service" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#159E98]">
              Why Us
            </p>

            <h2 className="mt-4 max-w-[650px] font-serif text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#092B49] sm:text-5xl lg:text-6xl">
              Insurance that feels clear, human and dependable.
            </h2>

            <p className="mt-6 max-w-[620px] text-base leading-8 text-gray-500">
              Mayban Insurance helps individuals, families and businesses make confident decisions about the risks they face. We focus on practical solutions, straightforward communication and support that stays with you.
            </p>

            <p className="mt-4 max-w-[620px] text-base leading-8 text-gray-500">
              From selecting cover to navigating a claim, our goal is simple: make insurance easier to understand and easier to use when it matters most.
            </p>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#092B49] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#0d3b60]">
              Talk to our team
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#092B49] p-7 text-white sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-8 top-16 h-40 w-40 rounded-full border border-[#17A9A1]/20" />

            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#43C7BF]">
                The Mayban difference
              </p>

              <h3 className="mt-4 max-w-[540px] font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Protection built around real life.
              </h3>

              <p className="mt-5 max-w-[560px] text-sm leading-7 text-white/55">
                We listen first, explain clearly and recommend cover that makes sense for your circumstances — without unnecessary complexity.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#43C7BF]">
                        <Icon size={19} />
                      </div>
                      <p className="mt-5 text-base font-black">{item.value}</p>
                      <p className="mt-1 text-xs leading-5 text-white/40">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-gray-100 pt-10 md:grid-cols-3 md:gap-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#159E98]">Our Mission</p>
            <h3 className="mt-3 text-xl font-black text-[#092B49]">Make protection easier to understand.</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">Simple explanations and practical guidance help our clients make informed protection decisions.</p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#159E98]">Our Approach</p>
            <h3 className="mt-3 text-xl font-black text-[#092B49]">Understand first. Recommend what fits.</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">We take time to understand individual, family and business needs before recommending suitable cover.</p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#159E98]">Our Commitment</p>
            <h3 className="mt-3 text-xl font-black text-[#092B49]">Be there when it matters.</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">Responsive service and dependable support from choosing your cover through to the claims process.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
