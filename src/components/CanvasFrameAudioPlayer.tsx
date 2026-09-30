import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface CanvasFrameAudioPlayerProps {
  folderPath: string; // e.g. '/f/frames' or '/New folder/r'
  totalFrames: number; // e.g. 1811 or 302
  audioPath?: string; // e.g. '/f/3.mp3' or '/New folder/1.mp3'
  fps?: number; // default 30
  className?: string;
}

export const CanvasFrameAudioPlayer: React.FC<CanvasFrameAudioPlayerProps> = ({
  folderPath,
  totalFrames,
  audioPath,
  fps = 30,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const imageCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());

  // Handle Mute / Unmute
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
      if (!nextMuted) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    let animFrameId: number;
    let currentFrameIndex = 1;
    let lastTime = performance.now();
    const frameInterval = 1000 / fps;
    let isCleanedUp = false;

    const getFrameUrl = (index: number) => {
      const numStr = index.toString().padStart(5, '0');
      return `${folderPath}/frame_${numStr}.webp`;
    };

    const loadFrame = (idx: number) => {
      if (idx > totalFrames || imageCacheRef.current.has(idx)) return;
      const img = new Image();
      img.src = getFrameUrl(idx);
      imageCacheRef.current.set(idx, img);
    };

    // Initial RAM batch preloading
    for (let i = 1; i <= Math.min(25, totalFrames); i++) {
      loadFrame(i);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.play().catch(() => {});
    }

    const render = (now: number) => {
      if (isCleanedUp) return;

      const delta = now - lastTime;

      if (delta >= frameInterval) {
        lastTime = now - (delta % frameInterval);

        // Preload upcoming batch (25 frames ahead)
        for (let i = currentFrameIndex + 1; i <= Math.min(currentFrameIndex + 25, totalFrames); i++) {
          loadFrame(i);
        }

        // Rolling RAM memory management for large frame sets
        if (imageCacheRef.current.size > 120) {
          const keysToDelete: number[] = [];
          for (const key of imageCacheRef.current.keys()) {
            if (key < currentFrameIndex - 60 || key > currentFrameIndex + 60) {
              keysToDelete.push(key);
            }
          }
          keysToDelete.forEach(k => imageCacheRef.current.delete(k));
        }

        const img = imageCacheRef.current.get(currentFrameIndex);

        if (img && img.complete && img.naturalWidth > 0) {
          if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
          }

          ctx.drawImage(img, 0, 0);
        }

        currentFrameIndex = (currentFrameIndex % totalFrames) + 1;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      isCleanedUp = true;
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      imageCacheRef.current.clear();
    };
  }, [folderPath, totalFrames, fps]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block transform-gpu will-change-transform"
      />

      {audioPath && (
        <audio
          ref={audioRef}
          src={audioPath}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      )}

      {audioPath && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold border border-white/20 cursor-pointer"
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
          aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
              <span>Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-green-400" />
              <span>Mute</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
