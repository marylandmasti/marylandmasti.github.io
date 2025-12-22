import { useRef, useEffect, useState } from 'react';
import { sponsors } from '../data/sponsors';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Sponsors() {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const speedRef = useRef(1);
  const positionRef = useRef(0);
  const animationRef = useRef(null);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  
  const repeatedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const baseSpeed = 0.5;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      const targetSpeed = isHovered ? 0 : 1;
      const speedChange = isHovered ? 0.02 : 0.01;
      
      if (speedRef.current !== targetSpeed) {
        if (isHovered) {
          speedRef.current = Math.max(0, speedRef.current - speedChange);
        } else {
          speedRef.current = Math.min(1, speedRef.current + speedChange);
        }
      }

      positionRef.current += baseSpeed * speedRef.current * (deltaTime / 16);
      
      const halfWidth = track.scrollWidth / 2;
      
      if (positionRef.current >= halfWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(-${positionRef.current}px)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section id="sponsors" className="relative pt-12 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`section-title text-white text-center mb-10 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          OUR SPONSORS
        </h2>
      </div>

      <div 
        className={`relative transition-opacity duration-700 delay-200 ${
          titleVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        
        <div 
          ref={trackRef}
          className="flex gap-10 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {repeatedSponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-56 h-36 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-[var(--accent)]/50 hover:bg-white/[0.08] transition-all duration-300 hover:scale-105"
            >
              {sponsor.logo ? (
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-w-full max-h-full p-6 object-contain"
                />
              ) : (
                <span className="text-white/40 text-base batman-font tracking-wider text-center px-4">
                  {sponsor.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

