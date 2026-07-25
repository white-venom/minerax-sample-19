import { motion } from 'framer-motion';
import { Target, Scale, Beaker } from 'lucide-react';

const SPECS = [
  {
    icon: Beaker,
    title: 'Alloy Grades',
    value: 'Carbon & Stainless',
    description: 'Specialized in high-grade carbon steel, stainless steel (304/316), and custom wear-resistant alloys for extreme environments.',
    metrics: [
      { label: 'Tensile Strength', value: 'Up to 1500 MPa' },
      { label: 'Hardness', value: '150 - 600 BHN' }
    ]
  },
  {
    icon: Target,
    title: 'Tolerances',
    value: 'ISO 8062 CT7-CT9',
    description: 'Precision investment and sand casting ensuring near-net shape dimensions, reducing secondary machining requirements.',
    metrics: [
      { label: 'Linear Tolerance', value: '± 0.5% - 1.0%' },
      { label: 'Surface Finish', value: 'Ra 3.2 - 12.5 μm' }
    ]
  },
  {
    icon: Scale,
    title: 'Weight Range',
    value: '0.5kg — 5,000kg',
    description: 'Scalable production lines capable of manufacturing intricate micro-components up to massive industrial structural parts.',
    metrics: [
      { label: 'Max Dimensions', value: '3m x 3m x 2m' },
      { label: 'Production Vol.', value: '1 - 100k+ units' }
    ]
  }
];

export function Specifications() {
  return (
    <section id="specifications" className="py-24 bg-minerax-dark border-t border-white/5 relative">
      <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Technical <span className="text-minerax-steel">Specs</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Engineered to meet the most demanding industrial standards. Our casting parameters ensure structural integrity under extreme load and thermal stress.
            </p>
          </div>
          <div className="mt-8 md:mt-0 font-mono text-xs text-minerax-glow tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-minerax-glow animate-pulse" />
            Live Production Data // M-2024
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECS.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-minerax-glow/30 transition-colors group"
            >
              <spec.icon className="w-8 h-8 text-minerax-steel group-hover:text-minerax-glow transition-colors mb-6" />
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">
                {spec.title}
              </h3>
              <div className="text-2xl font-display font-bold text-white mb-4">
                {spec.value}
              </div>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                {spec.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-white/10">
                {spec.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{metric.label}</span>
                    <span className="text-sm font-mono text-minerax-glow">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
