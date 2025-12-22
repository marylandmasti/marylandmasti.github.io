import boardImage from '../assets/board.JPG';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [textRef, textVisible] = useScrollAnimation(0.2);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={textRef}
            className={`transition-all duration-700 ${
              textVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="section-title text-white mb-8 relative inline-block">
              ABOUT MASTI
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[var(--accent)]" />
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Maryland Masti is an annual intercollegiate Garba/Raas competition held by the
              students at the University of Maryland, College Park. Our goals include spreading awareness of
              the traditional folk dance cultures of the West Indian State of Gujarat, providing an outlet for
              current students to express their passion for such dance, entertaining the guests at our show,
              and having a great weekend — staff, teams, and audience alike!
            </p>
          </div>

          <div 
            ref={imageRef}
            className={`relative transition-all duration-700 delay-200 ${
              imageVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden relative">
              <img 
                src={boardImage} 
                alt="Maryland Masti Board"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg -z-10 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
