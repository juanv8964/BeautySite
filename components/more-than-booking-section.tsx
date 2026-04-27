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

export function MoreThanBookingSection() {
  return (
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
          <article className="glass-card overflow-hidden rounded-[2.2rem] p-6 sm:p-8">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#140d18] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                Before
              </p>
              <h3 className="mt-3 font-display text-4xl text-white">
                Generic Booking Page
              </h3>

              <div className="mt-6 rounded-[1.8rem] border border-dashed border-white/15 bg-white/[0.03] p-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Glow Beauty Studio</p>
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
                            ? "bg-white/10 font-medium text-white"
                            : "bg-white/5 text-muted"
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
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="glass-card overflow-hidden rounded-[2.2rem] border-blush/40 bg-white/10 p-6 shadow-glow sm:p-8">
            <div className="rounded-[1.8rem] border border-blush/20 bg-gradient-to-br from-[#2b1027] via-[#1f0f29] to-[#120815] p-5 shadow-[0_18px_50px_rgba(214,104,159,0.18)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
                    After
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-white">
                    BeautySite Builders Custom Website
                  </h3>
                </div>
                <div className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  Custom Brand
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-blush/20 bg-gradient-to-br from-[#4d1d45] via-[#2c1431] to-[#140a19] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-3xl text-white">Glow Beauty Lounge</p>
                      <p className="mt-1 text-sm text-muted">Luxury beauty website concept</p>
                    </div>
                    <div className="rounded-full border border-blush/25 bg-blush/10 px-3 py-1 text-xs text-blush">
                      Custom website
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Portfolio",
                      "About Me",
                      "Testimonials",
                      "Policies",
                      "Book Appointment",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-[1rem] border px-4 py-4 text-sm ${
                          index === 4
                            ? "border-blush/30 bg-gradient-to-r from-rose to-plum font-semibold text-white shadow-glow sm:col-span-2"
                            : "border-white/10 bg-white/5 text-white"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {afterPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blush" />
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
  );
}
