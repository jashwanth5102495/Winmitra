import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const TOTAL_FRAMES = 300;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [, setIsReady] = useState(false);
  const [, setProgress] = useState(0);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let animFrameId: number;
    let currentFrameIndex = 0;
    let lastTime = performance.now();
    const targetFPS = 45; // Smooth video-like 45 FPS
    const frameInterval = 1000 / targetFPS;

    // Pad frame numbers to 5 digits (00001, 00002, ..., 00300)
    const getFrameUrl = (index: number) => {
      const numStr = (index + 1).toString().padStart(5, '0');
      return `/frames/frame_${numStr}.webp`;
    };

    // Preload frames in background
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount >= 10) {
          setIsReady(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
      };
      images.push(img);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = (now: number) => {
      const delta = now - lastTime;

      if (delta >= frameInterval) {
        lastTime = now - (delta % frameInterval);

        if (ctx && canvas) {
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          const img = images[currentFrameIndex];

          if (img && img.complete && img.naturalWidth > 0) {
            // Draw image scaled to cover canvas smoothly
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = canvas.width / canvas.height;
            let renderW = canvas.width;
            let renderH = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            if (canvasAspect > imgAspect) {
              renderH = canvas.width / imgAspect;
              offsetY = (canvas.height - renderH) / 2;
            } else {
              renderW = canvas.height * imgAspect;
              offsetX = (canvas.width - renderW) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
          }
        }

        currentFrameIndex++;

        if (currentFrameIndex >= TOTAL_FRAMES) {
          setTimeout(() => {
            onComplete();
          }, 150);
          return;
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-black overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block transform-gpu will-change-transform"
      />

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 z-50 bg-black/60 hover:bg-black/90 text-white/90 hover:text-white px-5 py-2 rounded-full text-xs font-medium backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer"
      >
        Skip Intro →
      </button>
    </motion.div>
  );
}