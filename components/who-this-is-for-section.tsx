const audiences = [
  {
    title: "Nail Techs",
    description:
      "Showcase sets, pricing, policies, and booking links in one polished place.",
  },
  {
    title: "Lash Artists",
    description:
      "Turn lash menus, policies, and booking flows into a premium client experience.",
  },
  {
    title: "Brow Artists",
    description:
      "Present brow services, results, aftercare, and booking options with more clarity and style.",
  },
  {
    title: "Hair Stylists",
    description:
      "Present services, transformations, availability, and booking options clearly.",
  },
  {
    title: "Wig Installers",
    description:
      "Organize installs, deposits, policies, and direct booking links by service.",
  },
  {
    title: "Estheticians",
    description:
      "Build trust with service education, skincare results, FAQs, and booking CTAs.",
  },
  {
    title: "Makeup Artists",
    description:
      "Highlight portfolio work, packages, event bookings, and inquiry forms.",
  },
  {
    title: "Spa & Beauty Studios",
    description:
      "Create a professional online home for multiple services and client touchpoints.",
  },
];

export function WhoThisIsForSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
            Who This Is For
          </p>
          <h2 className="section-heading">Built for beauty professionals who want more than a basic booking link</h2>
          <p className="section-copy">
            Whether you already use a booking system or need help choosing one,
            these websites are designed for beauty brands that want to look more polished online.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="glass-card rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/10"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-gold/70 to-blush/80" />
              <h3 className="font-display text-3xl text-white">{audience.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
