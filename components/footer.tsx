export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-display text-2xl text-white">BeautySite Builder</p>
        <div className="flex flex-wrap gap-5">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
