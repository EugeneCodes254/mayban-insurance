import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    value: "Trusted",
    label: "Insurance guidance",
  },
  {
    icon: Users,
    value: "Client First",
    label: "Personalised support",
  },
  {
    icon: BriefcaseBusiness,
    value: "Business",
    label: "Risk protection",
  },
  {
    icon: Award,
    value: "Reliable",
    label: "Professional service",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087F6E]/5 blur-[100px]" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* LEFT — COMPANY INTRODUCTION */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EF] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#063F32]">
              <ShieldCheck size={14} />
              About Mayban Insurance
            </div>

            <h2 className="mt-6 max-w-[620px] text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#063F32] sm:text-5xl lg:text-6xl">
              Insurance built around
              <span className="block text-[#9A762E]">
                what matters to you.
              </span>
            </h2>

            <p className="mt-6 max-w-[600px] text-base leading-8 text-gray-500">
              Mayban Insurance is committed to helping individuals, families
              and businesses protect the things that matter most. We combine
              practical insurance solutions with clear guidance and responsive
              service.
            </p>

            <p className="mt-4 max-w-[600px] text-base leading-8 text-gray-500">
              From choosing the right policy to navigating the claims process,
              our focus is on making insurance easier to understand and helping
              our clients make confident decisions about their protection.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#063F32] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#042D24]"
            >
              Talk to our team
              <ArrowRight size={17} />
            </a>
          </div>

          {/* RIGHT — BRAND PANEL */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#063F32] p-7 text-white sm:p-10">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -right-8 top-10 h-44 w-44 rounded-full border border-[#C9A24A]/20" />

            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C9A24A]">
                Why choose Mayban
              </p>

              <h3 className="mt-4 max-w-[520px] text-3xl font-black leading-tight sm:text-4xl">
                Protection with a human approach.
              </h3>

              <p className="mt-5 max-w-[540px] text-sm leading-7 text-white/55">
                We believe good insurance starts with understanding your
                needs. Our approach combines professional advice, clear
                communication and dependable support throughout your insurance
                journey.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#C9A24A]">
                        <Icon size={19} />
                      </div>

                      <p className="mt-5 text-lg font-black">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-16 grid gap-5 border-t border-gray-100 pt-10 md:grid-cols-3">

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9A762E]">
              Our Mission
            </p>

            <h3 className="mt-3 text-xl font-black text-[#063F32]">
              Make protection easier to understand.
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              We simplify insurance and provide practical guidance so our
              clients can make informed decisions about the risks they face.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9A762E]">
              Our Approach
            </p>

            <h3 className="mt-3 text-xl font-black text-[#063F32]">
              Understand first. Recommend what fits.
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              We take time to understand individual circumstances, family
              priorities and business needs before recommending suitable
              protection.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9A762E]">
              Our Commitment
            </p>

            <h3 className="mt-3 text-xl font-black text-[#063F32]">
              Be there when it matters.
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              We aim to provide responsive service and dependable support from
              the moment you choose your cover through to the claims process.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
