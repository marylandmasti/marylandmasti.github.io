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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md' 
        : 'bg-transparent'
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
  );
}
