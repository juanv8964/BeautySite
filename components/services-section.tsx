const services = [
  {
    title: "Nail Salon Websites",
    description:
      "Showcase manicures, gel sets, and pedicures with clean menus, booking links, and a polished brand feel.",
  },
  {
    title: "Lash & Brow Websites",
    description:
      "Highlight fills, lifts, shaping, and transformations with elegant pages built to earn trust quickly.",
  },
  {
    title: "Hair Salon Websites",
    description:
      "Promote cuts, color services, extensions, and stylist expertise with conversion-focused layouts.",
  },
  {
    title: "Spa & Beauty Websites",
    description:
      "Create a calming online presence for facials, waxing, skincare, and self-care experiences.",
  },
];

export function ServicesSection() {
  return (
    <section id="services">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
            Website Packages
          </p>
          <h2 className="section-heading">Professional websites tailored to beauty businesses</h2>
          <p className="section-copy">
            Whether you run a solo studio or a growing salon, each package is
            designed to present your brand beautifully, support your marketing,
            and guide visitors into a polished booking experience.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-blush/40 hover:bg-white/10"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-blush/80 to-gold/70" />
              <h3 className="font-display text-3xl text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
