export function HeroSection() {
  return (
    <section id="home" className="relative bg-hero-glow">
      <div className="section-shell grid gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
            Premium websites for beauty businesses ready to grow
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
            Luxury Websites for Beauty Brands That Want More Bookings
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Premium, mobile-first beauty websites built to earn trust, showcase
            your work, and turn more visitors into booked appointments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-blush px-7 py-4 text-center text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da]"
            >
              Book a Demo
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-base font-semibold text-white transition hover:border-blush/50 hover:bg-white/10"
            >
              See Pricing
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ["Built for beauty", "Tailored to salons, nail techs, lash artists, and spas"],
              ["Mobile-first", "Optimized for the phones your clients actually use"],
              ["Conversion-ready", "Structured to turn visits into real inquiries and bookings"],
            ].map(([title, copy]) => (
              <div key={title} className="glass-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blush">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-4 shadow-glow">
            <div className="rounded-[2rem] border border-white/10 bg-panel p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-3xl text-white">Luxe Nail Studio</p>
                  <p className="text-sm text-muted">A booking-ready beauty website preview</p>
                </div>
                <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  Premium build
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ["Signature Gel Set", "$85", "75 min"],
                  ["Soft Glam Lash Fill", "$70", "60 min"],
                  ["Spa Pedicure Ritual", "$65", "55 min"],
                ].map(([service, price, time]) => (
                  <div
                    key={service}
                    className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div>
                      <p className="font-medium text-white">{service}</p>
                      <p className="text-sm text-muted">{time}</p>
                    </div>
                    <span className="text-sm font-semibold text-blush">{price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-gradient-to-r from-rose to-plum px-5 py-4 text-center text-sm font-semibold text-white">
                Clear services, polished branding, and a smoother path to booking
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-6 hidden h-24 w-24 rounded-full bg-rose/25 blur-2xl sm:block" />
          <div className="absolute -right-4 top-10 hidden h-28 w-28 rounded-full bg-gold/20 blur-2xl sm:block" />
        </div>
      </div>
    </section>
  );
}
