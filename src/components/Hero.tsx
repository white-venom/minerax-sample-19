import { motion } from 'motion/react';
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
        
        {/* Abstract 3D/Technical Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="flex-1 relative w-full aspect-square max-w-md mx-auto hidden md:block"
        >
          {/* Circular structural elements mimicking a complex cast part */}
          <div className="absolute inset-0 border-[1px] border-minerax-glow/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-4 border-[1px] border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-12 border border-minerax-glow/30 rounded-full flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-minerax-glow/10 to-transparent" />
             <div className="w-full h-[1px] bg-minerax-glow/40 absolute top-1/2 -translate-y-1/2" />
             <div className="h-full w-[1px] bg-minerax-glow/40 absolute left-1/2 -translate-x-1/2" />
             
             {/* Data points */}
             <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
             <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-minerax-glow rounded-full shadow-[0_0_8px_#38bdf8]" />
             
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs text-minerax-glow/70 tracking-widest absolute bottom-4">SYS.ON // AL.7075</span>
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
