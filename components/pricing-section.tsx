const plans = [
  {
    name: "Plan A - Ownership Package",
    price: "$500 setup + $50/month",
    description:
      "Perfect for business owners who want to own their website while keeping ongoing support and maintenance simple.",
    features: [
      "Custom website build",
      "You own the website after build completion",
      "Hosting included",
      "Ongoing maintenance and security updates",
      "Monthly support and edits",
      "Mobile responsive design",
      "Booking and contact integration",
    ],
    note: "If monthly hosting and maintenance is canceled, hosting and support end, but you retain website ownership and may transfer hosting elsewhere.",
  },
  {
    name: "Plan B - Subscription Website",
    price: "$99/month",
    note: "No upfront setup cost",
    description:
      "Launch your beauty business online without paying a large setup fee upfront.",
    featured: true,
    features: [
      "Full website build included",
      "Hosting + maintenance",
      "Mobile responsive design",
      "Contact and booking integration",
      "Ongoing support and updates",
    ],
    commitmentNote: [
      "12-month minimum commitment",
      "Website remains active while subscription is maintained",
    ],
  },
  {
    name: "Plan C",
    price: "Custom package",
    description:
      "Best for larger salons or brands that need a more custom online setup.",
    features: [
      "Custom pages",
      "Advanced integrations",
      "Booking platform setup",
      "Extra sections and features",
      "Brand-specific strategy",
      "Custom quote",
    ],
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
          <h2 className="section-heading">Clear pricing for beauty brands at every stage</h2>
          <p className="section-copy mx-auto">
            Choose the package that matches how you want to launch now, with room
            to scale as your business grows.
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
              {"note" in plan && plan.note ? (
                <p className="mt-2 text-sm font-medium text-blush">{plan.note}</p>
              ) : null}
              <p className="mt-4 text-sm leading-7 text-muted">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blush" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {"commitmentNote" in plan && plan.commitmentNote ? (
                <div className="mt-6 rounded-[1.4rem] border border-gold/20 bg-gold/10 px-4 py-4">
                  {plan.commitmentNote.map((item) => (
                    <p key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </p>
                  ))}
                </div>
              ) : null}
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-blush/50 hover:bg-white/10"
              >
                Book a Demo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
