const galleryItems = [
  {
    title: "Glossy Nude Set",
    tone: "from-[#5c2346] to-[#d3799f]",
  },
  {
    title: "Salon Interior",
    tone: "from-[#40203f] to-[#f0c27a]",
  },
  {
    title: "Lash Lift Results",
    tone: "from-[#221630] to-[#b76595]",
  },
  {
    title: "Spa Ritual Detail",
    tone: "from-[#49304d] to-[#e4a8b8]",
  },
];

export function GallerySection() {
  return (
    <section>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Gallery
          </p>
          <h2 className="section-heading">Styled previews for your portfolio and brand</h2>
          <p className="section-copy">
            Use these sections for nail photos, salon interiors, before-and-after
            sets, beauty treatments, or social-proof visuals.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div key={item.title} className="glass-card overflow-hidden">
              <div
                className={`flex h-72 items-end bg-gradient-to-br ${item.tone} p-6`}
              >
                <div className="w-full rounded-[1.5rem] border border-white/15 bg-black/15 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                    Gallery {index + 1}
                  </p>
                  <p className="mt-2 font-display text-3xl text-white">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
