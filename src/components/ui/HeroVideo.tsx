import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface HeroVideoProps {
  poster: string;
  videoSrc: string;
}

export default function HeroVideo({ poster, videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
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
    if (!shouldLoad || !videoRef.current) return;

    const video = videoRef.current;
    video.load();

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log('Autoplay prevented or failed:', error);
          setIsPlaying(false);
        });
    }
  }, [shouldLoad]);

  const toggleMute = () => {
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="absolute inset-0 z-0 bg-maya-navy overflow-hidden">
      {/* Poster fallback */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* Video */}
      <video
        ref={videoRef}
        className={`
          relative z-10 w-full h-full object-cover transition-opacity duration-1000
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

      {/* Lighter internal overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-maya-navy/40 via-maya-navy/10 to-transparent z-20 pointer-events-none" />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] z-20 mix-blend-overlay pointer-events-none" />

      <div
        className="absolute inset-0 z-20 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Sound toggle */}
      <button
  type="button"
  onClick={toggleMute}
  className="
    absolute bottom-8 right-8 z-[60] pointer-events-auto
    w-14 h-14 flex items-center justify-center
    rounded-full
    bg-[#0b0816]/78 backdrop-blur-md
    border border-maya-gold/55
    text-maya-gold
    shadow-[0_0_0_1px_rgba(201,162,39,0.12),0_0_24px_rgba(201,162,39,0.18)]
    hover:scale-105 hover:bg-[#120d22]/88 hover:border-maya-gold
    transition-all duration-300
    group
  "
  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
>
  {isMuted && (
    <span className="absolute inset-0 rounded-full border border-maya-gold/40 animate-ping pointer-events-none" />
  )}

  {isMuted ? (
    <VolumeX size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
  ) : (
    <Volume2 size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
  )}
</button>
    </div>
  );
}