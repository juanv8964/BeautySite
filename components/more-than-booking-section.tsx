"use client";

import { useEffect, useState } from "react";

const beforePoints = [
  "Basic scheduling template",
  "Limited branding",
  "Minimal trust-building",
  "Looks like everyone else",
];

const afterPoints = [
  "Fully branded premium design",
  "Luxury aesthetic tailored to your business",
  "Portfolio, FAQs, policies, and testimonials",
  "Integrated booking flow",
  "Built to convert visitors into booked clients",
];

const afterPreviewItems = [
  "Portfolio",
  "About Me",
  "Testimonials",
  "Policies",
  "Book Appointment",
];

export function MoreThanBookingSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    }

    if (isPreviewOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <section>
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Concept Demo
            </p>
            <h2 className="section-heading">
              Upgrade From Basic Booking Links to a Premium Online Experience
            </h2>
            <p className="section-copy mx-auto">
              Booking platforms help clients schedule appointments. We build the
              premium branded experience around it, designed to impress visitors,
              build trust, and convert more clients.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="glass-card overflow-hidden rounded-[2.2rem] border-white/5 bg-white/[0.03] p-6 sm:p-8">
              <div className="rounded-[1.8rem] border border-white/10 bg-[#120f14] p-5 saturate-50">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Before
                </p>
                <h3 className="mt-3 font-display text-4xl text-white/90">
                  Generic Booking Page
                </h3>

                <div className="mt-6 rounded-[1.8rem] border border-dashed border-white/10 bg-white/[0.02] p-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white/90">Glow Beauty Studio</p>
                        <p className="text-xs text-muted">Generic scheduler preview</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                        Template
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Select Service",
                        "Choose Date",
                        "Pick Time",
                        "Continue Booking",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-[1rem] border border-white/10 px-4 py-3 text-sm ${
                            index === 3
                              ? "bg-white/10 font-medium text-white/85"
                              : "bg-white/[0.04] text-muted"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {beforePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/30" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="group glass-card overflow-hidden rounded-[2.2rem] border-fuchsia-300/30 bg-gradient-to-br from-[#2a102a] via-[#261033] to-[#120815] p-6 shadow-[0_18px_60px_rgba(214,104,159,0.18)] transition duration-300 hover:scale-[1.015] hover:border-fuchsia-300/50 hover:shadow-[0_24px_80px_rgba(214,104,159,0.28)] active:scale-[1.01] sm:p-8">
              <div className="rounded-[1.8rem] border border-fuchsia-200/20 bg-gradient-to-br from-[#5b204f] via-[#34163d] to-[#190b24] p-5 shadow-[0_18px_50px_rgba(240,194,122,0.08)] transition duration-300 group-hover:border-fuchsia-200/35 group-hover:shadow-[0_22px_70px_rgba(240,194,122,0.16)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb4d2]">
                      After
                    </p>
                    <h3 className="mt-3 font-display text-4xl text-white">
                      BeautySite Builders Custom Website
                    </h3>
                  </div>
                  <div className="rounded-full border border-gold/35 bg-gold/15 px-3 py-1 text-xs font-medium text-gold shadow-[0_0_20px_rgba(240,194,122,0.12)]">
                    Custom Brand
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-fuchsia-200/20 bg-gradient-to-br from-[#7a245f] via-[#4b184a] to-[#1a0d24] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(97,27,83,0.28)] transition duration-300 group-hover:border-fuchsia-200/35">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(0,0,0,0.18))] p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-3xl text-white">Glow Beauty Lounge</p>
                        <p className="mt-1 text-sm text-[#e4bfd1]">
                          Luxury beauty website concept
                        </p>
                      </div>
                      <div className="rounded-full border border-fuchsia-200/25 bg-fuchsia-200/10 px-3 py-1 text-xs text-[#ffbad4]">
                        Custom website
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {afterPreviewItems.map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-[1rem] border px-4 py-4 text-sm transition duration-300 ${
                            index === 4
                              ? "border-fuchsia-200/30 bg-gradient-to-r from-[#ff8ebe] via-[#d6689f] to-[#7b3f8c] font-semibold text-white shadow-[0_10px_30px_rgba(214,104,159,0.35)] sm:col-span-2"
                              : "border-white/10 bg-white/8 text-white"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <ul className="space-y-3">
                    {afterPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#ead4df]">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#ff9ac4]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-fuchsia-200/30 bg-gradient-to-r from-[#ff8ebe] via-[#d6689f] to-[#7b3f8c] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(214,104,159,0.35)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(214,104,159,0.45)] focus:outline-none focus:ring-2 focus:ring-blush/50 animate-pulse"
                >
                  Tap to Preview Full Demo
                </button>
              </div>
            </article>
          </div>

          <div className="mt-6 flex flex-col items-center gap-5 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Demo concepts shown for illustrative purposes.
            </p>
            <div>
              <p className="text-lg font-medium text-white">
                Ready to upgrade your booking experience?
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex rounded-full bg-blush px-7 py-4 text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da]"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full demo preview"
        >
          <div
            className="relative w-full max-w-4xl rounded-[2rem] border border-fuchsia-200/20 bg-gradient-to-br from-[#25102a] via-[#190d24] to-[#100713] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:bg-white/10"
              aria-label="Close preview"
            >
              ×
            </button>

            <div className="rounded-[1.7rem] border border-fuchsia-200/20 bg-gradient-to-br from-[#7a245f] via-[#4b184a] to-[#1a0d24] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(97,27,83,0.28)] sm:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(0,0,0,0.18))] p-5 backdrop-blur-sm sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb4d2]">
                      Glow Beauty Lounge
                    </p>
                    <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">
                      Premium Website Concept Preview
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#e4bfd1] sm:text-base">
                      A richer branded experience built around trust, style, and a
                      seamless path into booking.
                    </p>
                  </div>
                  <div className="rounded-full border border-gold/35 bg-gold/15 px-4 py-2 text-sm font-medium text-gold">
                    Custom Brand
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/8 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f1c7d9]">
                      Hero Experience
                    </p>
                    <h4 className="mt-3 font-display text-3xl text-white">
                      Luxury lash artistry with a polished first impression
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[#ead4df]">
                      Portfolio, policies, testimonials, and clear calls to action
                      create a more complete client journey before the booking step.
                    </p>
                    <div className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#ff8ebe] via-[#d6689f] to-[#7b3f8c] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(214,104,159,0.35)]">
                      Book Appointment
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                    {["Portfolio", "About Me", "Testimonials", "Policies"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.1rem] border border-white/10 bg-white/8 px-4 py-4 text-sm text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
