'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const CursorTrail = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colors = [
    '#F472B6', // Pink
    '#EC4899', // Rose
    '#DDD6FE', // Lavender
    '#FBBF24', // Peach/Gold
    '#A855F7', // Purple
    '#F97316', // Orange
  ];

  useEffect(() => {
    let sparkleId = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create sparkles less frequently for better performance
      if (Math.random() < 0.3) {
        const newSparkle: Sparkle = {
          id: sparkleId++,
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.2,
        };

        setSparkles(prev => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    const throttledMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{
            x: sparkle.x,
            y: sparkle.y,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: sparkle.x + (Math.random() - 0.5) * 60,
            y: sparkle.y + (Math.random() - 0.5) * 60,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
            rotate: Math.random() * 360,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            delay: sparkle.delay,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}40`,
          }}
        />
      ))}

      {/* Main cursor trail */}
      <motion.div
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="absolute w-4 h-4 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.6) 0%, rgba(236,72,153,0.4) 50%, transparent 100%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Secondary cursor trail with delay */}
      <motion.div
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="absolute w-6 h-6 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(221,214,254,0.4) 0%, rgba(168,85,247,0.2) 50%, transparent 100%)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
};

export default CursorTrail;