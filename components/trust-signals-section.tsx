const trustSignals = [
  {
    title: "Professional brand presentation",
    description:
      "Your website can match your business style instead of looking like the same booking template everyone else uses.",
  },
  {
    title: "Mobile-first design",
    description:
      "The layout is built for phones first, so clients can browse services and book without pinching or guessing.",
  },
  {
    title: "Professional online presence",
    description:
      "A branded domain, contact form, map, social links, and trust sections help your business feel established.",
  },
  {
    title: "Clear path to booking",
    description:
      "Services, pricing, policies, FAQs, reviews, and calls to action work together so clients know what to do next.",
  },
];

export function TrustSignalsSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Why It Works
          </p>
          <h2 className="section-heading">
            Give clients more context before they book
          </h2>
          <p className="section-copy">
            A booking platform handles time slots. Your website explains who you
            are, what you offer, and why a new client should feel comfortable booking.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustSignals.map((signal) => (
            <article key={signal.title} className="glass-card p-7">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-gold/70 to-blush/80" />
              <h3 className="font-display text-3xl text-white">{signal.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{signal.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
