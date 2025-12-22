import prathamIcon from '../assets/pratham.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Pratham() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="pratham" className="relative py-12 px-6">
      <div 
        ref={sectionRef}
        className="max-w-4xl mx-auto text-center"
      >
        <div 
          className={`flex items-center justify-center gap-6 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <img 
            src={prathamIcon} 
            alt="Pratham" 
            className="h-12 w-auto hover:scale-110 transition-transform duration-300"
          />
          <h2 className="section-title text-white">
            PRATHAM
          </h2>
        </div>

        <div 
          className={`relative p-8 bg-white/5 border border-white/10 rounded-lg mb-8 transition-all duration-700 delay-200 hover:border-[var(--accent)]/30 hover:bg-white/[0.07] group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]/50 rounded-tl-lg transition-all duration-300 group-hover:w-12 group-hover:h-12" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)]/50 rounded-br-lg transition-all duration-300 group-hover:w-12 group-hover:h-12" />
          
          <p className="text-white/70 leading-relaxed text-lg">
            Pratham is an innovative learning organization created to improve the quality of
            education in India. As one of the largest non-governmental organizations in the country, Pratham
            focuses on high-quality, low-cost, and replicable interventions to address gaps in the education
            system. Established in 1995 to provide education to children in the slums of Mumbai, Pratham has
            grown both in scope and geographical coverage.
          </p>
        </div>

        <div 
          className={`flex justify-center gap-4 flex-wrap transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="https://www.pratham.org/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            ABOUT PRATHAM
          </a>
          <a 
            href="https://www.pratham.org/donation/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            DONATE
          </a>
        </div>
      </div>
    </section>
  );
}
