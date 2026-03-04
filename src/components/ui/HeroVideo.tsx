import React, { useEffect, useRef, useState } from 'react';
// 1. Added Volume2 and VolumeX icons
import { Volume2, VolumeX } from 'lucide-react';

interface HeroVideoProps {
  poster: string;
  videoSrc: string;
}

export default function HeroVideo({ poster, videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 2. Added state to track if the video is muted
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

  // 3. Added a function to handle the toggle click
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="absolute inset-0 z-0 bg-maya-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${poster})` }}
      />

      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 z-10 relative ${isPlaying ? 'opacity-90' : 'opacity-0'}`}
        poster={poster}
        muted={isMuted} /* 4. Bound muted attribute to our new state */
        autoPlay
        loop
        playsInline
        preload="none"
      >
        {shouldLoad && (
          <source src={videoSrc} type="video/mp4" />
        )}
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-maya-navy/70 via-maya-navy/20 to-transparent z-20 pointer-events-none" />
      
      {/* Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* 5. Added the Volume Toggle Button overlay */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-30 p-3 bg-maya-navy/50 backdrop-blur-sm border border-maya-gold/30 rounded-full text-maya-gold hover:bg-maya-gold/20 transition-all duration-300 group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
}