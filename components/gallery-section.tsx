const showcaseItems = [
  {
    title: "Service Menu / Pricing",
    description:
      "Clearly present your services, pricing, and booking options in a polished branded layout.",
    tone: "from-[#5c2346] to-[#d3799f]",
  },
  {
    title: "Before & After Results",
    description:
      "Highlight your best client transformations to build trust and drive bookings.",
    tone: "from-[#40203f] to-[#f0c27a]",
  },
  {
    title: "Meet Your Artist",
    description:
      "Tell your story and create a personal connection before clients ever book.",
    tone: "from-[#221630] to-[#b76595]",
  },
  {
    title: "Booking Policies",
    description:
      "Answer common questions upfront and reduce booking confusion.",
    tone: "from-[#49304d] to-[#e4a8b8]",
  },
  {
    title: "Testimonials / Reviews",
    description:
      "Display social proof to increase trust and conversions.",
    tone: "from-[#2c1733] to-[#f0c27a]",
  },
  {
    title: "Seamless Booking Flow",
    description:
      "Guide visitors from interest to appointment with clear booking calls-to-action.",
    tone: "from-[#49304d] to-[#e4a8b8]",
  },
];

export function GallerySection() {
  return (
    <section>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Portfolio
          </p>
          <h2 className="section-heading">Examples of What Your Website Can Showcase</h2>
          <p className="section-copy">
            Preview the kinds of branded sections included in a premium beauty website.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcaseItems.map((item) => (
            <div key={item.title} className="glass-card overflow-hidden">
              <div
                className={`flex min-h-72 items-end bg-gradient-to-br ${item.tone} p-6`}
              >
                <div className="w-full rounded-[1.5rem] border border-white/15 bg-black/15 p-4 backdrop-blur-sm">
                  <p className="mt-2 font-display text-3xl text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
          Concept examples shown for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
