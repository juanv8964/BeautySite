const bookingOnlyPoints = [
  "Basic scheduling page",
  "Limited branding",
  "Minimal trust-building",
  "Generic template look",
];

const builderPoints = [
  "Fully branded website",
  "Luxury design tailored to your business",
  "SEO and mobile-first optimization",
  "Portfolio, testimonials, policies, and FAQs",
  "Integrated booking flow inside a premium client experience",
];

export function MoreThanBookingSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Positioning
          </p>
          <h2 className="section-heading">More Than Just a Booking Link</h2>
          <p className="section-copy mx-auto">
            Booking platforms handle scheduling. We build the premium online
            experience around it, designed to impress visitors, build trust, and
            convert more clients.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-[2.2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Booking Software Only
            </p>
            <h3 className="mt-4 font-display text-4xl text-white">
              Useful for scheduling, limited for branding
            </h3>
            <ul className="mt-6 space-y-3">
              {bookingOnlyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/40" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card rounded-[2.2rem] border-blush/40 bg-white/10 p-8 shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
              BeautySite Builders
            </p>
            <h3 className="mt-4 font-display text-4xl text-white">
              A premium website with booking built into the experience
            </h3>
            <ul className="mt-6 space-y-3">
              {builderPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blush" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
