import { motion } from 'framer-motion';
import { SlidersHorizontal, Layers, CheckCircle, Sparkles, ArrowLeftRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface ComparisonPair {
  id: string;
  name: string;
  alloy: string;
  rawImage: string;
  finishedImage: string;
  rawMetrics: { roughness: string; tolerance: string; status: string };
  finishedMetrics: { roughness: string; tolerance: string; status: string };
}

const COMPARISONS: ComparisonPair[] = [
  {
    id: 'turbine',
    name: 'Aerospace Turbine Housing',
    alloy: 'Inconel 718 Superalloy',
    rawImage: '/assets/hero_metal_casting.png',
    finishedImage: '/assets/aerospace_turbine_housing.png',
    rawMetrics: {
      roughness: 'Ra 12.5 μm',
      tolerance: '± 0.50 mm (Near Net)',
      status: 'As-Cast State'
    },
    finishedMetrics: {
      roughness: 'Ra 0.8 μm',
      tolerance: '± 0.002 mm (5-Axis CNC)',
      status: '100% NDT Certified'
    }
  },
  {
    id: 'impeller',
    name: 'Heavy-Duty Slurry Impeller',
    alloy: 'High-Cr Steel (27% Cr)',
    rawImage: '/assets/furnace_melting.png',
    finishedImage: '/assets/heavy_duty_impeller.png',
    rawMetrics: {
      roughness: 'Ra 16.0 μm',
      tolerance: '± 1.20 mm',
      status: 'Raw Foundry Mold'
    },
    finishedMetrics: {
      roughness: 'Ra 1.6 μm',
      tolerance: '± 0.010 mm',
      status: 'Dynamic Balance Passed'
    }
  },
  {
    id: 'valve',
    name: 'Subsea Manifold Valve Body',
    alloy: 'Duplex Stainless 2205',
    rawImage: '/assets/ndt_testing_facility.png',
    finishedImage: '/assets/quality_control_laser.png',
    rawMetrics: {
      roughness: 'Ra 12.5 μm',
      tolerance: '± 0.80 mm',
      status: 'Investment Cast'
    },
    finishedMetrics: {
      roughness: 'Ra 0.4 μm',
      tolerance: '± 0.005 mm',
      status: 'Hydrostatic Tested (15k PSI)'
    }
  }
];

export function InspectionSlider() {
  const [activeId, setActiveId] = useState<string>('turbine');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = COMPARISONS.find(c => c.id === activeId) || COMPARISONS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="inspection" className="py-24 bg-[#020611] relative border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Inspection Visualizer</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
              Raw Casting vs. <span className="text-minerax-steel">5-Axis Finish</span>
            </h2>
            <p className="text-slate-400 max-w-xl mt-3 text-sm leading-relaxed">
              Drag the interactive slider to inspect transformation from raw foundry casting to sub-micron finished aerospace superalloy components.
            </p>
          </div>

          {/* Component Tabs */}
          <div className="flex flex-wrap gap-2 bg-minerax-dark/80 p-1.5 border border-white/10 rounded-lg">
            {COMPARISONS.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setActiveId(comp.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all rounded ${
                  activeId === comp.id
                    ? 'bg-amber-500/90 text-black font-bold shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {comp.name}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Slider Frame */}
        <div className="relative bg-[#070e1c] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Main Comparison Container */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] select-none cursor-ew-resize overflow-hidden"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* Base Right Image: Finished CNC Component */}
            <div className="absolute inset-0 bg-black">
              <img
                src={activePair.finishedImage}
                alt={`${activePair.name} Finished`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-minerax-dark/90 via-transparent to-black/40" />

              {/* Finished Label & Metrics Overlay (Right Side) */}
              <div className="absolute top-6 right-6 bg-sky-950/80 backdrop-blur-md border border-sky-400/30 p-4 rounded-xl max-w-xs text-right hidden sm:block shadow-xl">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded font-mono text-[10px] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Finished CNC State</span>
                </div>
                <h4 className="text-sm font-display font-semibold text-white uppercase">{activePair.name}</h4>
                <div className="mt-2 space-y-1 font-mono text-xs text-slate-300">
                  <div>Roughness: <span className="text-sky-300 font-bold">{activePair.finishedMetrics.roughness}</span></div>
                  <div>Tolerance: <span className="text-sky-300 font-bold">{activePair.finishedMetrics.tolerance}</span></div>
                  <div className="text-[10px] text-emerald-400 font-bold uppercase mt-1">{activePair.finishedMetrics.status}</div>
                </div>
              </div>
            </div>

            {/* Clipped Left Image: Raw Molded Casting */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-black border-r-2 border-amber-400/80"
              style={{ width: `${sliderPosition}%` }}
            >
              <div 
                className="absolute inset-y-0 left-0"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              >
                <img
                  src={activePair.rawImage}
                  alt={`${activePair.name} Raw`}
                  className="w-full h-full object-cover filter contrast-125 saturate-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-minerax-dark/90 via-amber-950/20 to-black/40" />

                {/* Raw Label & Metrics Overlay (Left Side) */}
                <div className="absolute top-6 left-6 bg-amber-950/80 backdrop-blur-md border border-amber-400/30 p-4 rounded-xl max-w-xs hidden sm:block shadow-xl">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-mono text-[10px] uppercase tracking-wider mb-2">
                    <Layers className="w-3 h-3" />
                    <span>Raw Foundry State</span>
                  </div>
                  <h4 className="text-sm font-display font-semibold text-white uppercase">{activePair.name}</h4>
                  <div className="mt-2 space-y-1 font-mono text-xs text-slate-300">
                    <div>Roughness: <span className="text-amber-300 font-bold">{activePair.rawMetrics.roughness}</span></div>
                    <div>Tolerance: <span className="text-amber-300 font-bold">{activePair.rawMetrics.tolerance}</span></div>
                    <div className="text-[10px] text-amber-400 font-bold uppercase mt-1">{activePair.rawMetrics.status}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute inset-y-0 w-1 bg-amber-400 z-30 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 -translate-x-1/2 rounded-full bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.8)] flex items-center justify-center border-2 border-white pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Mobile Instructions overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 font-mono text-[11px] text-slate-300 pointer-events-none flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Drag handle left/right to compare</span>
            </div>

          </div>

          {/* Bottom Specifications Bar */}
          <div className="p-6 bg-minerax-dark/95 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 uppercase block text-[10px]">Component Name</span>
              <span className="text-white font-semibold text-sm">{activePair.name}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase block text-[10px]">Material Alloy</span>
              <span className="text-amber-400 font-semibold">{activePair.alloy}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase block text-[10px]">Machining Delta</span>
              <span className="text-sky-300 font-semibold">Ra 12.5 → Ra 0.8 μm</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 md:justify-end">
              <CheckCircle className="w-4 h-4" />
              <span className="uppercase text-[11px] font-bold">Ready for Aerospace Assembly</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
