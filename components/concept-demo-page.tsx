const portfolioItems = [
  { title: "Classic Set", tone: "from-[#3c1835] to-[#d08baa]" },
  { title: "Volume Set", tone: "from-[#2a142b] to-[#f0c27a]" },
  { title: "Lash Lift", tone: "from-[#4a2142] to-[#be6a98]" },
];

const services = [
  { name: "Classic Full Set", duration: "90 min", price: "Starting at $95" },
  { name: "Volume Full Set", duration: "110 min", price: "Starting at $135" },
  { name: "Lash Lift + Tint", duration: "60 min", price: "Starting at $85" },
];

const policies = [
  {
    title: "Deposit Policy",
    copy: "A non-refundable deposit secures each appointment and is applied toward your service total.",
  },
  {
    title: "Late Policy",
    copy: "Clients arriving more than 10 minutes late may need to reschedule so the experience stays on time.",
  },
  {
    title: "Cancellation Policy",
    copy: "Please provide at least 24 hours notice for changes or cancellations whenever possible.",
  },
];

const testimonials = [
  {
    quote:
      "The whole experience felt elevated before I even booked. Everything looked polished and easy to trust.",
    author: "Mia R.",
  },
  {
    quote:
      "I loved being able to browse services, see the work, and book in one place without guessing what to expect.",
    author: "Jasmine T.",
  },
];

export function ConceptDemoPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative bg-hero-glow">
        <div className="section-shell grid gap-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
              Sales concept demo for beauty brand websites
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
              Luxe Lash Studio
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              A premium booking experience built around your brand
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Keep your current booking system and upgrade the experience clients
              see before they schedule.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-blush px-7 py-4 text-center text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da]"
              >
                Book Now
              </a>
              <a
                href="#booking"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-base font-semibold text-white transition hover:border-blush/50 hover:bg-white/10"
              >
                View Booking Flow
              </a>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-4 shadow-glow">
            <div className="rounded-[2rem] border border-white/10 bg-panel p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-3xl text-white">Luxe Lash Studio</p>
                  <p className="text-sm text-muted">Luxury lash artistry in a polished online experience</p>
                </div>
                <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  Demo preview
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Portfolio", "Policies", "Testimonials", "Book Appointment"].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.2rem] border px-4 py-4 text-sm ${
                      index === 3
                        ? "border-blush/30 bg-gradient-to-r from-rose to-plum font-semibold text-white shadow-glow sm:col-span-2"
                        : "border-white/10 bg-white/5 text-white"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Brand message</p>
                <p className="mt-3 text-base leading-7 text-white">
                  Soft luxury styling, seamless booking, and a client journey that
                  feels premium from first click to confirmed appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Portfolio Preview
            </p>
            <h2 className="section-heading">Show the quality of your work before they book</h2>
            <p className="section-copy">
              A premium portfolio section helps clients picture your style,
              understand your specialty, and feel confident about scheduling.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.title} className="glass-card overflow-hidden">
                <div className={`flex h-72 items-end bg-gradient-to-br ${item.tone} p-6`}>
                  <div className="w-full rounded-[1.5rem] border border-white/15 bg-black/15 p-4 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      Portfolio
                    </p>
                    <p className="mt-2 font-display text-3xl text-white">{item.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
              Services Preview
            </p>
            <h2 className="section-heading">Clear services, pricing, and next steps</h2>
            <p className="section-copy">
              Give clients a polished menu that makes choosing and booking feel simple.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="glass-card rounded-[2.2rem] p-8">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">{service.duration}</p>
                <h3 className="mt-3 font-display text-4xl text-white">{service.name}</h3>
                <p className="mt-4 text-lg font-semibold text-gold">{service.price}</p>
                <a
                  href="#"
                  className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-blush/50 hover:bg-white/10"
                >
                  Book
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Policies Preview
            </p>
            <h2 className="section-heading">Set expectations in a polished, client-friendly way</h2>
            <p className="section-copy">
              Policy sections help your business feel more established and answer common questions before a client asks.
            </p>
          </div>
          <div className="grid gap-4">
            {policies.map((policy) => (
              <article key={policy.title} className="glass-card p-6">
                <h3 className="font-display text-3xl text-white">{policy.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{policy.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
              Testimonials Preview
            </p>
            <h2 className="section-heading">Trust-building copy that supports the booking decision</h2>
            <p className="section-copy">
              Social proof helps visitors feel reassured that your service matches the premium experience they expect.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="glass-card p-8">
                <p className="text-base leading-8 text-white">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  {testimonial.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking">
        <div className="section-shell">
          <div className="glass-card overflow-hidden rounded-[2.5rem] p-8 shadow-glow sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                  Booking Integration
                </p>
                <h2 className="mt-4 font-display text-5xl text-white sm:text-6xl">
                  Keep your current booking system and connect it here
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  Your current Calendly, Acuity, GlossGenius, or Square booking
                  link can be connected here as part of a more polished branded experience.
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex rounded-full bg-blush px-8 py-4 text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da]"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-shell pt-8">
          <div className="glass-card rounded-[2.5rem] p-8 text-center sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
              Final CTA
            </p>
            <h2 className="mt-4 font-display text-5xl text-white sm:text-6xl">
              Ready to turn your booking link into a premium client experience?
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex rounded-full bg-blush px-8 py-4 text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da]"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
