"use client";

import { useEffect, useState } from "react";

const beforePoints = [
  "Basic scheduling page",
  "Little room for your brand",
  "No portfolio or reviews",
  "Booking is the only focus",
];

const afterPoints = [
  "Brand-first website experience",
  "Services, proof, policies, and booking in one place",
  "Booking link built into a clear client flow",
];

const afterNavItems = ["Services", "Portfolio", "Reviews", "Book"];
const websitePreviewCards = [
  { title: "Classic Set", detail: "From $95" },
  { title: "Volume Set", detail: "Most booked" },
  { title: "Lash Lift", detail: "Low-maintenance beauty" },
];
const modalSections = [
  {
    title: "Service Menu",
    copy: "Simple pricing and service details so clients know what to choose.",
  },
  {
    title: "Portfolio",
    copy: "A polished place to show real results before clients book.",
  },
  {
    title: "Reviews",
    copy: "Social proof that builds confidence with new visitors.",
  },
  {
    title: "Policies",
    copy: "Deposit, late, and cancellation details explained clearly.",
  },
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
              Turn a Basic Booking Link Into a Full Website
            </h2>
            <p className="section-copy mx-auto">
              Booking platforms help clients schedule appointments. We build the
              website around that booking link, so visitors can see your work,
              understand your services, and feel ready to book.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start xl:grid-cols-[0.82fr_1.18fr]">
            <article className="glass-card h-fit overflow-hidden rounded-[1.75rem] border-white/5 bg-white/[0.03] p-4 sm:rounded-[2.2rem] sm:p-8">
              <div className="rounded-[1.45rem] border border-white/10 bg-[#120f14] p-4 saturate-50 sm:rounded-[1.8rem] sm:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Before
                </p>
                <h3 className="mt-3 font-display text-3xl text-white/90 sm:text-4xl">
                  Booking Link Only
                </h3>

                <div className="mt-5 rounded-[1.25rem] border border-dashed border-white/10 bg-white/[0.02] p-3 sm:mt-6 sm:rounded-[1.5rem] sm:p-4">
                  <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3 sm:rounded-[1.2rem] sm:p-4">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white/90">Glow Beauty Studio</p>
                        <p className="text-xs text-muted">Generic scheduler page</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                        Template
                      </div>
                    </div>
                    <div className="space-y-2.5 sm:space-y-3">
                      {[
                        "Select Service",
                        "Choose Date",
                        "Pick Time",
                        "Continue Booking",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-[0.9rem] border border-white/10 px-4 py-2.5 text-sm sm:py-3 ${
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

                <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                  {beforePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/30" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="group glass-card h-fit overflow-hidden rounded-[1.75rem] border-gold/35 bg-[radial-gradient(circle_at_top_left,rgba(255,151,199,0.34),transparent_34%),linear-gradient(135deg,#8b235f_0%,#51196a_48%,#16071f_100%)] p-4 shadow-[0_24px_90px_rgba(214,104,159,0.28)] transition duration-300 sm:rounded-[2.2rem] sm:p-6 lg:hover:scale-[1.018] lg:hover:border-gold/55 lg:hover:shadow-[0_30px_110px_rgba(240,194,122,0.2)] lg:active:scale-[1.01]">
              <div className="rounded-[1.45rem] border border-gold/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.03)_42%,rgba(0,0,0,0.18))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 sm:rounded-[1.8rem] sm:p-5 lg:group-hover:border-gold/40">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb4d2]">
                      After
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                      Full Website Experience
                    </h3>
                  </div>
                  <div className="w-fit rounded-full border border-gold/35 bg-gold/15 px-3 py-1 text-xs font-medium text-gold shadow-[0_0_20px_rgba(240,194,122,0.12)]">
                    Branded Website
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-gold/25 bg-[#130716] shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition duration-300 sm:mt-6 sm:rounded-[1.7rem] lg:group-hover:border-gold/40">
                  <div className="flex min-w-0 items-center gap-1.5 border-b border-white/10 bg-white/[0.07] px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff8ebe]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                    <span className="ml-1 max-w-[9.5rem] truncate rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[0.62rem] text-[#f7d8e6] sm:ml-2 sm:max-w-none sm:px-3 sm:text-[0.68rem]">
                      glowbeautylounge.com
                    </span>
                  </div>

                  <div className="bg-[radial-gradient(circle_at_20%_0%,rgba(255,142,190,0.28),transparent_32%),linear-gradient(150deg,#8f2f70_0%,#551d5f_46%,#220929_100%)] p-3 sm:p-5">
                    <div className="flex flex-col gap-3 border-b border-white/10 pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:pb-4">
                      <div>
                        <p className="font-display text-2xl leading-tight text-white sm:text-3xl">
                          Glow Beauty Lounge
                        </p>
                        <p className="mt-2 max-w-sm text-xs leading-5 text-[#f2d0df] sm:text-sm sm:leading-6">
                          Lash services, proof, policies, and booking in one polished place.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                        {afterNavItems.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-center text-[0.68rem] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-3 sm:text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 grid gap-3 sm:mt-4 md:grid-cols-[1fr_0.86fr] md:gap-4">
                      <div className="rounded-[1.05rem] border border-white/10 bg-black/15 p-3 sm:rounded-[1.2rem] sm:p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-gold">
                          Website preview
                        </p>
                        <h4 className="mt-2 font-display text-2xl leading-tight text-white">
                          From interest to booked
                        </h4>
                        <p className="mt-2 text-xs leading-5 text-[#f0d4df] sm:mt-3 sm:text-sm sm:leading-6">
                          Show your work, explain what to expect, and connect booking in one clear flow.
                        </p>
                        <div className="mt-3 inline-flex rounded-full bg-gradient-to-r from-[#ff8ebe] via-[#d6689f] to-[#f0c27a] px-4 py-2.5 text-sm font-semibold text-[#140713] shadow-[0_12px_30px_rgba(255,142,190,0.36)] sm:mt-4 sm:px-5 sm:py-3">
                          Book Appointment
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-1">
                        {websitePreviewCards.map((item) => (
                          <div
                            key={item.title}
                            className="rounded-[0.9rem] border border-white/12 bg-white/10 px-2.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:rounded-[1rem] sm:px-4 sm:py-3 lg:py-2.5"
                          >
                            <p className="text-[0.7rem] font-semibold leading-4 text-white sm:text-sm">
                              {item.title}
                            </p>
                            <p className="mt-1 hidden text-xs text-[#f2d0df] min-[390px]:block">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                      {["Portfolio", "Policies", "Reviews"].map((item) => (
                        <div
                          key={item}
                          className="rounded-[0.85rem] border border-white/10 bg-white/[0.08] px-2 py-2 text-center text-[0.68rem] font-medium text-[#ffe7f1] sm:rounded-[0.95rem] sm:px-3 sm:py-2.5 sm:text-xs"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="mt-4 inline-flex w-full animate-[pulse_2.8s_ease-in-out_infinite] items-center justify-center rounded-full border border-gold/35 bg-gradient-to-r from-[#ff8ebe] via-[#d6689f] to-[#f0c27a] px-5 py-3 text-sm font-semibold text-[#140713] shadow-[0_12px_34px_rgba(255,142,190,0.36)] transition duration-300 hover:shadow-[0_18px_44px_rgba(240,194,122,0.28)] focus:outline-none focus:ring-2 focus:ring-blush/50 sm:mt-5 sm:w-auto sm:px-6 lg:hover:scale-[1.02]"
                >
                  Tap to Preview Full Demo
                </button>

                <ul className="mt-4 grid gap-2 lg:grid-cols-3">
                  {afterPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs leading-5 text-[#ead4df] sm:text-sm lg:text-[0.78rem]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9ac4]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-6"
          onClick={() => setIsPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full demo preview"
        >
          <div
            className="relative mx-auto flex min-h-full w-full items-start justify-center py-2 sm:items-center sm:py-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-fuchsia-200/20 bg-gradient-to-br from-[#25102a] via-[#190d24] to-[#100713] p-4 pb-8 shadow-[0_25px_90px_rgba(0,0,0,0.45)] sm:p-6 sm:pb-10">
              <div className="sticky top-0 z-10 -mx-4 -mt-4 mb-4 flex justify-end bg-gradient-to-b from-[#25102a] via-[#25102a]/95 to-transparent px-4 pb-2 pt-4 sm:-mx-6 sm:-mt-6 sm:px-6 sm:pt-6">
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition hover:bg-white/15"
                  aria-label="Close preview"
                >
                  Close
                </button>
              </div>

              <div className="overflow-hidden rounded-[1.7rem] border border-gold/25 bg-[#130716] shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.07] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff8ebe]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                  <span className="ml-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.68rem] text-[#f7d8e6]">
                    glowbeautylounge.com
                  </span>
                </div>

                <div className="bg-[radial-gradient(circle_at_20%_0%,rgba(255,142,190,0.28),transparent_34%),linear-gradient(150deg,#8f2f70_0%,#551d5f_46%,#220929_100%)] p-5 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                        Glow Beauty Lounge
                      </p>
                      <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">
                        Full Website Experience Preview
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#e4bfd1] sm:text-base">
                        A branded website experience built around your services,
                        your proof, and a clear path into your booking software.
                      </p>
                    </div>
                    <div className="rounded-full border border-gold/35 bg-gold/15 px-4 py-2 text-sm font-medium text-gold">
                      Branded Website
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.4rem] border border-white/10 bg-black/15 p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">
                        Homepage
                      </p>
                      <h4 className="mt-3 font-display text-3xl text-white">
                        Lash work clients can understand and trust
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[#ead4df]">
                        A stronger first impression helps visitors see your style,
                        compare services, read what to expect, and book with confidence.
                      </p>
                      <div className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#ff8ebe] via-[#d6689f] to-[#f0c27a] px-5 py-3 text-sm font-semibold text-[#140713] shadow-[0_10px_28px_rgba(214,104,159,0.35)]">
                        Book Appointment
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                      {modalSections.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[1.1rem] border border-white/10 bg-white/10 px-4 py-4"
                        >
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="mt-2 text-xs leading-5 text-[#ead4df]">{item.copy}</p>
                        </div>
                      ))}
                    </div>
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
