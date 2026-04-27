const trustSignals = [
  {
    title: "Premium brand presentation",
    description:
      "Luxury visuals and beauty-focused copy help your business stand out above generic booking templates.",
  },
  {
    title: "Mobile-first design",
    description:
      "Your website is built for the screen your clients use most, so it feels polished and easy to browse and book from anywhere.",
  },
  {
    title: "Professional online presence",
    description:
      "Branded domains, contact forms, maps, social links, and trust sections make your business feel established online.",
  },
  {
    title: "Lead-ready structure",
    description:
      "Hero messaging, portfolios, pricing, policies, FAQs, and calls to action work together to move visitors toward booking.",
  },
];

export function TrustSignalsSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Why It Converts
          </p>
          <h2 className="section-heading">
            Built for beauty businesses that want to look professional online
          </h2>
          <p className="section-copy">
            A booking platform handles scheduling. Your website should handle the
            branding, trust-building, and conversion work around it.
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
