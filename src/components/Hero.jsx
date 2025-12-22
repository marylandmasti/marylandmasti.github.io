import { useState, useEffect, useRef } from 'react';
import cityscape from '../assets/cityscape.png';
import batsignal from '../assets/batsignal.png';

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const batsignalRef = useRef(null);
  const beamRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  // spotlight beam
  useEffect(() => {
    const updateBeam = () => {
      if (!batsignalRef.current || !beamRef.current) return;
      
      const hero = batsignalRef.current.closest('section');
      const heroRect = hero.getBoundingClientRect();
      const signalRect = batsignalRef.current.getBoundingClientRect();
      
      const signalCenterX = signalRect.left - heroRect.left + signalRect.width / 2;
      const signalCenterY = signalRect.top - heroRect.top + signalRect.height / 2;
      
      const originX = -100;
      const originY = heroRect.height * 0.95;
      
      const beamSpread = signalRect.width / 3;
      
      const polygon = beamRef.current.querySelector('polygon');
      if (polygon) {
        polygon.setAttribute('points', `
          ${originX},${originY}
          ${signalCenterX - beamSpread},${signalCenterY - beamSpread}
          ${signalCenterX + beamSpread},${signalCenterY + beamSpread}
        `);
      }
      
      requestAnimationFrame(updateBeam);
    };
    
    const animationId = requestAnimationFrame(updateBeam);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <img 
        src={cityscape} 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        alt="Gotham cityscape" 
      />
      
      <svg 
        ref={beamRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 200, 0.25)" />
            <stop offset="100%" stopColor="rgba(255, 255, 200, 0)" />
          </linearGradient>
        </defs>
        <polygon 
          fill="url(#beamGradient)"
          style={{ mixBlendMode: 'screen' }}
        />
      </svg>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 10 }}>
        <img 
          ref={batsignalRef}
          src={batsignal}
          alt=""
          className="batsignal-animate absolute h-[25vh] w-auto object-contain opacity-80 mix-blend-screen"
          style={{
            top: '8%',
            right: '12%'
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" style={{ zIndex: 2 }} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 15 }}>
        <h1 className={`hero-title text-white text-center ${isGlitching ? 'glitch' : ''}`}>
          <span className="block">MARYLAND</span>
          <span className="block text-[var(--accent)]">MASTI</span>
        </h1>
        <p className="mt-6 text-white/60 text-xl tracking-[0.3em] batman-font">
          03.07.26
        </p>
      </div>

      <div 
        className={`absolute bottom-8 left-0 right-0 flex justify-center transition-opacity duration-500 ${
          showArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 20 }}
      >
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
          className="slow-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll down"
        >
          <svg 
            className="w-10 h-5 text-white/50 hover:text-white/70 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 12"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M2 2l10 8 10-8" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
