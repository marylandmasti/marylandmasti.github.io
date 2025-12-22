import logo from '../assets/logo.png';

const socialLinks = [
  { name: "Email", url: "mailto:techsquad@marylandmasti.com", icon: "mail" },
  { name: "Instagram", url: "https://instagram.com/marylandmasti", icon: "instagram" },
  { name: "TikTok", url: "https://tiktok.com/@maryland.masti", icon: "tiktok" },
];

// Social media icons
const icons = {
  mail: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  tiktok: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto">
        {/* mobile */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <img 
            src={logo} 
            alt="Maryland Masti" 
            className="h-14 opacity-80"
          />
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--accent)] transition-colors duration-300"
                aria-label={link.name}
              >
                {icons[link.icon]}
              </a>
            ))}
          </div>
          <p className="text-white/30 text-xs tracking-wider batman-font">
            Copyright © Maryland Masti 2025
          </p>
        </div>

        {/* desktop */}
        <div className="hidden md:flex items-center justify-between">
          <p className="text-white/30 text-xs tracking-wider batman-font">
            Copyright © Maryland Masti 2025
          </p>

          <div className="absolute left-1/2 -translate-x-1/2">
            <img 
              src={logo} 
              alt="Maryland Masti" 
              className="h-14 opacity-80"
            />
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--accent)] transition-colors duration-300"
                aria-label={link.name}
              >
                {icons[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
