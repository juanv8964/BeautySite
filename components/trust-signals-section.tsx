const trustSignals = [
  {
    title: "Mobile-first design",
    description:
      "Your website is built for the screen your clients use most, so it feels polished and easy to book from anywhere.",
  },
  {
    title: "Premium brand presentation",
    description:
      "Elevated visuals, clean structure, and beauty-focused copy help your business look more established online.",
  },
  {
    title: "Lead-ready forms",
    description:
      "Inquiry and booking sections are designed to turn interest into real conversations with qualified clients.",
  },
  {
    title: "Ongoing support after launch",
    description:
      "You are not left on your own after go-live. Hosting, maintenance, and support stay part of the experience.",
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
            A great beauty website should feel luxurious, build trust fast, and
            make it obvious how a potential client takes the next step.
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
