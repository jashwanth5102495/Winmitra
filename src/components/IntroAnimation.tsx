import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const TOTAL_FRAMES = 300;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animFrameId: number;
    let currentFrameIndex = 0;
    let lastTime = performance.now();
    const targetFPS = 45;
    const frameInterval = 1000 / targetFPS;
    let isCleanedUp = false;

    // Safety timeout: ensure site proceeds after max 4 seconds regardless of network speed
    const maxTimer = setTimeout(() => {
      if (!isCleanedUp) {
        onComplete();
      }
    }, 4000);

    const getFrameUrl = (index: number) => {
      const numStr = (index + 1).toString().padStart(5, '0');
      return `/frames/frame_${numStr}.webp`;
    };

    // Cache of loaded image elements in RAM
    const imageCache: Map<number, HTMLImageElement> = new Map();

    // Helper to load a frame if not already cached
    const loadFrame = (idx: number) => {
      if (idx >= TOTAL_FRAMES || imageCache.has(idx)) return;
      const img = new Image();
      img.src = getFrameUrl(idx);
      imageCache.set(idx, img);
    };

    // Preload first 20 frames immediately for instant zero-delay start
    for (let i = 0; i < Math.min(20, TOTAL_FRAMES); i++) {
      loadFrame(i);
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
      if (isCleanedUp) return;

      const delta = now - lastTime;

      if (delta >= frameInterval) {
        lastTime = now - (delta % frameInterval);

        // Preload next batch (15 frames ahead) progressively to avoid choking network
        for (let i = currentFrameIndex + 1; i <= Math.min(currentFrameIndex + 15, TOTAL_FRAMES - 1); i++) {
          loadFrame(i);
        }

        if (ctx && canvas) {
          const img = imageCache.get(currentFrameIndex);

          if (img && img.complete && img.naturalWidth > 0) {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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
          clearTimeout(maxTimer);
          onComplete();
          return;
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      isCleanedUp = true;
      clearTimeout(maxTimer);
      if (animFrameId) cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      imageCache.clear();
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-black overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block transform-gpu will-change-transform"
      />

      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 z-50 bg-black/60 hover:bg-black/90 text-white/90 hover:text-white px-5 py-2 rounded-full text-xs font-medium backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer"
      >
        Skip Intro →
      </button>
    </motion.div>
  );
}