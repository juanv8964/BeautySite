const showcaseItems = [
  {
    title: "Service Menu / Pricing",
    description:
      "Clearly present your services, pricing, and booking options in a clean branded layout.",
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
      "Display reviews that help new clients feel more confident booking.",
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
            Preview the types of sections a custom beauty website can include.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <div key={item.title} className="glass-card overflow-hidden">
              <div
                className={`relative flex min-h-[15rem] flex-col justify-between overflow-hidden bg-gradient-to-br ${item.tone} p-5 sm:p-6`}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                    Website section
                  </span>
                  <span className="font-display text-4xl text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-8 w-full rounded-[1.5rem] border border-white/15 bg-black/20 p-5 backdrop-blur-sm">
                  <p className="font-display text-2xl leading-tight text-white sm:text-3xl">
                    {item.title}
                  </p>
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
