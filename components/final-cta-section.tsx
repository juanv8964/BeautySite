export function FinalCtaSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="glass-card overflow-hidden rounded-[2.5rem] p-8 shadow-glow sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
                Final Step
              </p>
              <h2 className="mt-4 font-display text-5xl text-white sm:text-6xl">
                Ready to upgrade your beauty brand online?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Book a demo and let&apos;s build a website that helps clients trust
                you before they ever walk in.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex rounded-full bg-blush px-8 py-4 text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da]"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
