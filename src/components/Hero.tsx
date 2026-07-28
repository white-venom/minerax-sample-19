import { motion } from 'framer-motion';
import { ChevronRight, Settings } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-minerax-dark">
      <GridBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <Settings className="w-4 h-4 text-minerax-glow" />
            <span className="text-xs font-mono text-minerax-glow tracking-widest uppercase">
              Minerax
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-[1.1]"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Absolute Precision
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed"
          >
            Aerospace-grade steel casting solutions. We deliver complex geometries with zero-defect tolerances for mission-critical industrial applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#specifications"
              className="w-full sm:w-auto px-8 py-4 bg-white text-minerax-dark font-semibold uppercase tracking-wider text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Explore Capabilities
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#process"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 font-semibold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              View Process
            </a>
          </motion.div>
        </div>
        
        {/* AI Generated Engineering Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="flex-1 relative w-full aspect-square max-w-lg mx-auto hidden md:block group"
        >
          {/* Tech Frame Border */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-sky-500/10 to-indigo-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative rounded-lg overflow-hidden border border-white/15 bg-[#080d1a] shadow-2xl">
            <img 
              src="/assets/hero_metal_casting.png" 
              alt="High Precision Superalloy Casting" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-minerax-dark via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
            
            {/* HUD Technical Overlays */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded font-mono text-[10px] text-minerax-glow tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>SUPERALLOY 7075-T6 // 0.002mm TOL</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end bg-black/70 backdrop-blur-md border border-white/10 p-3 rounded">
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Target Component</span>
                <span className="font-display font-semibold text-white text-sm">Aerospace Turbine Housing</span>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-minerax-glow uppercase tracking-wider block">Integrity Grade</span>
                <span className="font-mono font-bold text-white text-sm">CLASS A1 - 100% NDT</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
