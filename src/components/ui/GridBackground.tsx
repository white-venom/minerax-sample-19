import { motion } from 'motion/react';

export function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-minerax-dark" />
      <div className="absolute inset-0 bg-grid-blueprint-fine mix-blend-screen opacity-50" />
      <div className="absolute inset-0 bg-grid-blueprint mix-blend-screen" />
      
      {/* Radial gradient mask to fade out edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,#050a11_80%)]" />

      {/* Animated glowing lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-minerax-glow to-transparent opacity-30"
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-transparent via-minerax-glow to-transparent opacity-20"
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'linear',
          delay: 2,
        }}
      />
      
      {/* Horizontal scanning line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-minerax-glow to-transparent opacity-20 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        animate={{
          y: ['-300px', '300px'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 15,
          ease: 'linear',
        }}
      />
    </div>
  );
}
