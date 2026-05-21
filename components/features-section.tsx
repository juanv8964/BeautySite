const features = [
  {
    title: "Online booking",
    description:
      "Connect your booking software so clients can schedule without back-and-forth messages.",
  },
  {
    title: "Service menu with pricing",
    description:
      "Clearly display your services, pricing, and booking options so clients know exactly what to choose.",
  },
  {
    title: "Portfolio showcase",
    description:
      "Showcase your best work and build trust before a client ever messages you.",
  },
  {
    title: "Contact form",
    description:
      "Collect inquiries from people who want details before they book.",
  },
  {
    title: "Google Maps/location section",
    description:
      "Help clients find your salon, service area, or studio location with confidence.",
  },
  {
    title: "Mobile-friendly design",
    description:
      "Give visitors a smooth experience on the device they use most: their phone.",
  },
];

export function FeaturesSection() {
  return (
    <section>
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Features
          </p>
          <h2 className="section-heading">Everything clients need before they book</h2>
          <p className="section-copy">
            This is more than a scheduler. Your website shows your work, explains
            your services, answers common questions, and guides visitors toward booking.
          </p>
          <div className="mt-8 rounded-[1.75rem] border border-gold/20 bg-gold/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Booking Platform Integration Included
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We connect your preferred booking software to your website. If you
              do not have one yet, we can help you choose and set one up.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
              Third-party booking software fees are separate and paid directly by client.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card flex items-start gap-4 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-blush">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
