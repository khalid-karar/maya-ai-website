import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeroVideoProps {
  poster: string;
  videoSrc: string;
}

export default function HeroVideo({ poster, videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { direction } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log('Autoplay prevented or failed:', error);
            setIsPlaying(false);
          });
      }
    }
  }, [shouldLoad]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    // We replaced the <div> wrapper with <> so the button can escape and float over the Home.tsx boxes!
    <>
      {/* Navy Base Background */}
      <div className="absolute inset-0 bg-maya-navy z-0" />
      
      {/* Poster fallback */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* Video */}
      <video
        ref={videoRef}
        className={`
          absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0
          ${isPlaying ? 'opacity-100' : 'opacity-0'}
        `}
        poster={poster}
        muted={isMuted}
        autoPlay
        loop
        playsInline
        preload="none"
      >
        {shouldLoad && <source src={videoSrc} type="video/mp4" />}
      </video>

      {/* Overlays (Kept at z-0 so they stay behind your text and boxes) */}
      <div className="absolute inset-0 bg-gradient-to-t from-maya-navy/40 via-maya-navy/10 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none z-0" />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Sound toggle - Floating safely at the top corner */}
      <button
        type="button"
        onClick={toggleMute}
        className={`
          absolute z-[100] pointer-events-auto
          top-6 md:top-8
          ${direction === 'rtl' ? 'left-4 md:left-8' : 'right-4 md:right-8'}
          w-12 h-12 md:w-14 md:h-14 flex items-center justify-center
          rounded-full
          bg-[#0b0816]/78 backdrop-blur-md
          border border-maya-gold/55
          text-maya-gold
          shadow-[0_0_0_1px_rgba(201,162,39,0.12),0_0_24px_rgba(201,162,39,0.18)]
          hover:scale-105 hover:bg-[#120d22]/88 hover:border-maya-gold
          transition-all duration-300
          group
        `}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted && (
          <span className="absolute inset-0 rounded-full border border-maya-gold/40 animate-ping pointer-events-none" />
        )}

        {isMuted ? (
          <VolumeX className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </>
  );
}