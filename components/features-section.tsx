const features = [
  "Online booking",
  "Service menu with pricing",
  "Gallery/portfolio",
  "Contact form",
  "Google Maps/location section",
  "Mobile-friendly design",
];

export function FeaturesSection() {
  return (
    <section>
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Features
          </p>
          <h2 className="section-heading">Everything beauty clients expect in one polished site</h2>
          <p className="section-copy">
            From service menus to booking forms, the experience is built to look
            premium and feel simple on every screen.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="glass-card flex items-start gap-4 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-blush">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Designed to help visitors browse, trust your brand, and take action fast.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
