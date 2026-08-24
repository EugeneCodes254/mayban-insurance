import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team was very helpful throughout the process. They explained everything clearly and made getting our cover straightforward.",
    name: "Grace M.",
    role: "Private Client",
  },
  {
    quote:
      "What stood out for us was the level of support. We were able to get answers quickly whenever we needed clarification.",
    name: "David K.",
    role: "Business Owner",
  },
  {
    quote:
      "The process was simple and professional. I would recommend Mayban to anyone looking for reliable insurance support.",
    name: "Brian N.",
    role: "Motor Insurance Client",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">

        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9A762E]">
            Client Experience
          </p>

          <h2 className="mx-auto mt-3 max-w-[700px] text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#063F32] sm:text-5xl">
            Trusted to protect what matters.
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-gray-500">
            We're committed to giving every client clear advice,
            responsive support and insurance solutions that fit their needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-[28px] border border-gray-100 bg-[#F7FAF8] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="absolute right-6 top-6 text-[#C9A24A]/20">
                <Quote size={42} fill="currentColor" />
              </div>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    className="text-[#C9A24A]"
                  />
                ))}
              </div>

              <p className="mt-7 text-sm leading-7 text-gray-600">
                "{testimonial.quote}"
              </p>

              <div className="mt-7 border-t border-gray-200 pt-5">
                <p className="text-sm font-black text-[#063F32]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
