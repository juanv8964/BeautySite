const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most websites can be planned, built, and launched within a few weeks depending on your content and package.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Yes. Hosting and ongoing maintenance can be included so your site stays live, secure, and supported.",
  },
  {
    question: "Can I request edits after launch?",
    answer:
      "Yes. Ongoing support is available for updates, refinements, and routine changes after your site goes live.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. Existing beauty websites can be refreshed into a more modern, premium, and conversion-focused experience.",
  },
  {
    question: "Do I need professional photos?",
    answer:
      "No, but strong photos always help. If you have quality phone photos of your work, those can still be a great starting point.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payment depends on the package you choose. You can either pay an upfront setup plus a lower monthly fee, or choose the monthly option with no setup cost.",
  },
];

export function FaqSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            FAQ
          </p>
          <h2 className="section-heading">Common questions before you book</h2>
          <p className="section-copy">
            Clear answers help make the next step feel easier, especially if this
            is your first time investing in a professional website.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card p-7">
              <h3 className="font-display text-3xl text-white">{faq.question}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
