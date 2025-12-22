import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Sponsors() {
  const [ref, visible] = useScrollAnimation(0.3);

  return (
    <section id="sponsors" className="relative py-20">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-6 flex items-center justify-center gap-4 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="text-white/80 text-lg tracking-wider">
          Interested in becoming a sponsor?
        </span>
        <a 
          href="/sponsorship-packet.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 text-lg tracking-wider border-b border-white/30 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
