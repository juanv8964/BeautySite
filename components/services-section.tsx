const services = [
  {
    title: "Nail Salon Websites",
    description:
      "Show manicures, gel sets, pedicures, pricing, policies, and booking links in one clean place.",
  },
  {
    title: "Lash & Brow Websites",
    description:
      "Highlight fills, lifts, shaping, and transformations with elegant pages built to earn trust quickly.",
  },
  {
    title: "Hair Salon Websites",
    description:
      "Present cuts, color, extensions, stylist details, transformations, and booking options clearly.",
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
          <h2 className="section-heading">Websites made for beauty businesses</h2>
          <p className="section-copy">
            Whether you run a solo studio or a growing salon, each package is
            built to show your services clearly, answer client questions, and
            connect visitors to your booking system.
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
