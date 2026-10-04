import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus Life", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Tulas International School home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <span className="font-serif text-lg font-semibold text-white">
              T
            </span>
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.18em] text-white">
              TULAS
            </p>
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/60">
              International School
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#admissions"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1f33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a45c] lg:flex"
        >
          Enquire Now
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <Menu size={21} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mx-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1f33]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={handleLinkClick}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#c9a45c] px-4 py-3 text-sm font-semibold text-[#0b1f33]"
            >
              Enquire Now
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
