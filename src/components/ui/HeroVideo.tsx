import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface HeroVideoProps {
  poster: string;
  videoSrc: string;
}

export default function HeroVideo({ poster, videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
      // Important: When adding sources dynamically, we must call load()
      videoRef.current.load();
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log('Autoplay prevented or failed:', error);
            // Fallback is handled by the poster remaining visible (opacity-0 on video)
            setIsPlaying(false);
          });
      }
    }
  }, [shouldLoad]);

  return (
    <div className="absolute inset-0 z-0 bg-maya-navy overflow-hidden">
      {/* 
        LCP Optimization: 
        The poster image is rendered immediately as a background div.
        This ensures the Largest Contentful Paint is the image, not the video.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${poster})` }}
      />

      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 z-10 relative ${isPlaying ? 'opacity-90' : 'opacity-0'}`}
        poster={poster}
        muted
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
      <div className="absolute inset-0 bg-gradient-to-t from-maya-navy/70 via-maya-navy/20 to-transparent z-20" />
      
      {/* Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-20 mix-blend-overlay" />
      <div className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
    </div>
  );
}
