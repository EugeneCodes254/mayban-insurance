"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type CoverType = "Motor" | "Health" | "Life" | "Business";

const tabs: CoverType[] = ["Motor", "Health", "Life", "Business"];

export function QuoteForm() {
  const [coverType, setCoverType] = useState<CoverType>("Motor");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    if (
      type === "Motor" ||
      type === "Health" ||
      type === "Life" ||
      type === "Business"
    ) {
      setCoverType(type);
    }
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleValue: "",
    dependents: "",
    coverAmount: "",
    turnover: "",
    coverOption: "",
    planType: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function changeCover(type: CoverType) {
    setCoverType(type);
    setSubmitted(false);
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coverType,
          ...form,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to submit your request."
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Quote submission error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setError("");

    setForm({
      name: "",
      email: "",
      phone: "",
      vehicleValue: "",
      dependents: "",
      coverAmount: "",
      turnover: "",
      coverOption: "",
      planType: "",
    });
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#063f32] focus:ring-2 focus:ring-[#063f32]/10";

  return (
    <div>
      {/* COVER TABS */}
      <div className="mb-6 grid grid-cols-4 gap-1 rounded-xl bg-[#eef2ef] p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => changeCover(tab)}
            className={`rounded-lg px-2 py-3 text-xs font-semibold transition sm:text-sm ${
              coverType === tab
                ? "bg-[#063f32] text-white shadow-sm"
                : "text-gray-500 hover:text-[#063f32]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-[#d8eadf] bg-[#f3faf5] px-6 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#063f32] text-white">
            <CheckCircle2 size={28} />
          </div>

          <h3 className="mt-5 text-xl font-black text-[#063f32]">
            Quote request received
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
            Thank you, {form.name || "there"}. Your request has been
            submitted successfully. Our team will get back to you using
            the contact details you provided.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-6 rounded-full border border-[#063f32] px-6 py-3 text-sm font-bold text-[#063f32] transition hover:bg-[#063f32] hover:text-white"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* FULL NAME */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-bold text-gray-700"
            >
              Full Name
            </label>

            <input
              id="name"
              required
              value={form.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              placeholder="e.g. Wanjiru Kamau"
              className={inputClass}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-bold text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              required
              type="email"
              value={form.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          {/* PHONE */}
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-xs font-bold text-gray-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              placeholder="07XX XXX XXX"
              className={inputClass}
            />
          </div>

          {/* MOTOR */}
          {coverType === "Motor" && (
            <>
              <div>
                <label
                  htmlFor="vehicleValue"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Vehicle Value (KES)
                </label>

                <input
                  id="vehicleValue"
                  required
                  type="number"
                  min="0"
                  value={form.vehicleValue}
                  onChange={(e) =>
                    updateField("vehicleValue", e.target.value)
                  }
                  placeholder="1,200,000"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="motorCover"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Cover Type
                </label>

                <select
                  id="motorCover"
                  required
                  value={form.coverOption}
                  onChange={(e) =>
                    updateField("coverOption", e.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Select cover type</option>
                  <option value="Comprehensive">
                    Comprehensive
                  </option>
                  <option value="Third Party">
                    Third Party
                  </option>
                </select>
              </div>
            </>
          )}

          {/* HEALTH */}
          {coverType === "Health" && (
            <>
              <div>
                <label
                  htmlFor="dependents"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Number of Dependents
                </label>

                <input
                  id="dependents"
                  required
                  type="number"
                  min="0"
                  value={form.dependents}
                  onChange={(e) =>
                    updateField("dependents", e.target.value)
                  }
                  placeholder="e.g. 3"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="coverAmount"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Cover Amount (KES)
                </label>

                <input
                  id="coverAmount"
                  required
                  type="number"
                  min="0"
                  value={form.coverAmount}
                  onChange={(e) =>
                    updateField("coverAmount", e.target.value)
                  }
                  placeholder="2,000,000"
                  className={inputClass}
                />
              </div>
            </>
          )}

          {/* LIFE */}
          {coverType === "Life" && (
            <>
              <div>
                <label
                  htmlFor="lifeDependents"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Number of Dependents
                </label>

                <input
                  id="lifeDependents"
                  required
                  type="number"
                  min="0"
                  value={form.dependents}
                  onChange={(e) =>
                    updateField("dependents", e.target.value)
                  }
                  placeholder="e.g. 3"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="planType"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Plan Type
                </label>

                <select
                  id="planType"
                  required
                  value={form.planType}
                  onChange={(e) =>
                    updateField("planType", e.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Select plan type</option>
                  <option value="Life Protection">
                    Life Protection
                  </option>
                  <option value="Education">
                    Education Plan
                  </option>
                  <option value="Retirement">
                    Retirement
                  </option>
                </select>
              </div>
            </>
          )}

          {/* BUSINESS */}
          {coverType === "Business" && (
            <>
              <div>
                <label
                  htmlFor="turnover"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Annual Business Turnover (KES)
                </label>

                <input
                  id="turnover"
                  required
                  type="number"
                  min="0"
                  value={form.turnover}
                  onChange={(e) =>
                    updateField("turnover", e.target.value)
                  }
                  placeholder="5,000,000"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="businessCover"
                  className="mb-1.5 block text-xs font-bold text-gray-700"
                >
                  Cover Required
                </label>

                <select
                  id="businessCover"
                  required
                  value={form.coverOption}
                  onChange={(e) =>
                    updateField("coverOption", e.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">
                    Select business cover
                  </option>
                  <option value="Property">
                    Property
                  </option>
                  <option value="Business Interruption">
                    Business Interruption
                  </option>
                  <option value="Liability">
                    Liability
                  </option>
                  <option value="All Risk">
                    All Risk
                  </option>
                </select>
              </div>
            </>
          )}

          {/* ERROR */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
              {error}
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#063f32] px-6 py-4 text-sm font-black text-white transition hover:bg-[#042d24] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Sending Request...
              </>
            ) : (
              <>
                Request a Quote
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-center text-[11px] leading-5 text-gray-400">
            Your information is submitted securely and will only be
            used to respond to your insurance enquiry.
          </p>
        </form>
      )}
    </div>
  );
}
