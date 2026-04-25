const plans = [
  {
    name: "Plan A",
    price: "$500 setup + $50/month",
    description:
      "Ideal for salon owners who want a professionally built website with a lower ongoing cost.",
  },
  {
    name: "Plan B",
    price: "$99/month, no upfront cost",
    description:
      "A flexible subscription option for beauty pros who want to launch quickly without a setup payment.",
    featured: true,
  },
  {
    name: "Plan C",
    price: "Custom package",
    description:
      "Best for larger salons or brands that need custom pages, extra integrations, or unique features.",
  },
];

export function PricingSection() {
  return (
    <section id="pricing">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
            Pricing
          </p>
          <h2 className="section-heading">Simple pricing built for growing salons</h2>
          <p className="section-copy mx-auto">
            Choose a starting point that fits your business now, with room to
            upgrade later as your bookings grow.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`glass-card rounded-[2.2rem] p-8 ${
                plan.featured ? "border-blush/50 bg-white/10 shadow-glow" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-4xl text-white">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-base">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-2xl font-semibold text-gold">{plan.price}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{plan.description}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-blush/50 hover:bg-white/10"
              >
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
