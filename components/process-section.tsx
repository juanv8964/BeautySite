const steps = [
  {
    title: "Book a Demo",
    description:
      "Start with a quick conversation about your business, goals, and the kind of website you need.",
  },
  {
    title: "Share Your Brand and Services",
    description:
      "We gather your service details, pricing, style direction, and any inspiration that fits your beauty brand.",
  },
  {
    title: "We Build Your Website",
    description:
      "Your site is designed and structured to feel premium, mobile-friendly, and ready to turn visits into inquiries.",
  },
  {
    title: "Launch and Support",
    description:
      "Once everything looks right, we launch your site and continue supporting updates, hosting, and maintenance.",
  },
];

export function ProcessSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
            How It Works
          </p>
          <h2 className="section-heading">A simple launch process built for busy beauty pros</h2>
          <p className="section-copy mx-auto">
            You focus on your clients and your craft. We handle the website build
            and help you get launched with confidence.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="glass-card p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-gold">
                {index + 1}
              </div>
              <h3 className="font-display text-3xl text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
