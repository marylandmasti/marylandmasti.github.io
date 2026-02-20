import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Pratham", href: "#pratham" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="ticket-bar bg-gradient-to-r from-[var(--accent)] via-[#ff2f57] to-[var(--accent)] border-b border-white/30 shadow-[0_0_24px_rgba(220,20,60,0.55)]">
        <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center relative z-10">
          <span className="text-white text-sm md:text-base uppercase tracking-[0.16em] batman-font text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
            Buy Masti Tickets Now
          </span>
          <a
            href="https://tix.marylandmasti.com/"
            target="_blank"
            rel="noreferrer"
            className="ticket-cta inline-flex items-center justify-center gap-2 rounded-md border border-white/80 bg-black/85 px-4 py-2 text-white text-xs md:text-sm font-semibold uppercase tracking-[0.14em] batman-font hover:bg-white hover:text-[var(--accent)] transition-all duration-200 shadow-[0_0_18px_rgba(0,0,0,0.45)]"
            aria-label="Buy Masti Tickets - Click Here"
          >
            <span>Click Here For Tickets</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <nav className={`transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
          : 'bg-black/30 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-5">
            <img
              src={logo}
              alt="Maryland Masti"
              className="h-10"
            />

            <span className="hidden md:block text-white font-bold text-sm tracking-wider batman-font">
              MARYLAND MASTI
            </span>
          </a>
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-[var(--accent)] transition-colors duration-300 text-xs uppercase tracking-[0.2em] batman-font"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
