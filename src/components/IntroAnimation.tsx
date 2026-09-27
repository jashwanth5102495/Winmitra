import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    // Ultra-fast 0.7s duration for instant responsiveness
    const timer = setTimeout(() => {
      onComplete();
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center text-center px-4"
      >
        <img
          src="/l.webp"
          alt="WINMITRA AGRI TECH"
          className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4 drop-shadow-[0_10px_25px_rgba(34,197,94,0.35)]"
        />
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
          WINMITRA AGRI TECH
        </h1>
        <p className="text-green-400 text-sm italic font-medium mt-1">
          ...Way To Farmer's Growth
        </p>
      </motion.div>
    </motion.div>
  );
}