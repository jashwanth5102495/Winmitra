import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showingFinalFrame, setShowingFinalFrame] = useState(false);
  const [frameError, setFrameError] = useState(false);

  // Format frame number to 5 digits with leading zeros
  const formatFrameNumber = (num: number) => {
    return num.toString().padStart(5, '0');
  };

  // Preload next few frames for smoother playback
  useEffect(() => {
    const preloadFrames = (startFrame: number, count: number = 20) => {
      for (let i = 0; i < count && startFrame + i <= 300; i++) {
        const frameNum = startFrame + i;
        const img = new Image();
        img.onload = () => {
          // Silent preloading
        };
        img.onerror = () => {
          console.warn(`Failed to preload frame ${frameNum}`);
        };
        img.src = `/frames/frame_${formatFrameNumber(frameNum)}.webp`;
      }
    };

    // Start preloading from current frame
    if (currentFrame <= 300) {
      preloadFrames(currentFrame);
    }
  }, [currentFrame]);

  // Test if first frame exists on component mount
  useEffect(() => {
    const testImage = new Image();
    testImage.onload = () => {
      setFrameError(false);
    };
    testImage.onerror = () => {
      console.error('❌ First intro frame failed to load. Skipping intro.');
      setFrameError(true);
      setTimeout(() => onComplete(), 1000);
    };
    testImage.src = `/frames/frame_${formatFrameNumber(1)}.webp`;
  }, [onComplete]);

  // Main animation loop
  useEffect(() => {
    if (!isPlaying || frameError || showingFinalFrame) return;

    const interval = setInterval(() => {
      setCurrentFrame(prev => {
        if (prev >= 300) {
          setIsPlaying(false);
          setShowingFinalFrame(true);
          return 300;
        }
        return prev + 2; // Skip every other frame for faster playback
      });
    }, 33); // ~30fps for smooth playback

    return () => clearInterval(interval);
  }, [isPlaying, frameError, showingFinalFrame]);

  // Handle final frame 3-second pause
  useEffect(() => {
    if (showingFinalFrame) {
      const finalTimeout = setTimeout(() => {
        onComplete();
      }, 1000); // 1 second pause on final frame

      return () => clearTimeout(finalTimeout);
    }
  }, [showingFinalFrame, onComplete]);

  // Show loading screen if frames are missing
  if (frameError) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
          <p className="text-sm text-white/60 mt-2">Preparing your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Fullscreen Frame Display - No UI Elements */}
      <img
        src={`/frames/frame_${formatFrameNumber(currentFrame)}.webp`}
        alt=""
        className="w-full h-full object-cover"
        style={{ 
          willChange: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
        onError={(e) => {
          console.warn(`⚠️ Failed to load frame ${currentFrame}`);
          // If current frame fails but we're not at frame 1, continue
          if (currentFrame > 10) {
            // Skip a few frames ahead
            setCurrentFrame(prev => Math.min(prev + 5, 300));
          } else {
            // If early frames fail, skip intro
            onComplete();
          }
        }}
      />
    </div>
  );
}