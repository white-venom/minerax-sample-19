import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { useState } from 'react';

const IMAGES = [
  {
    id: 1,
    title: 'Induction Furnaces',
    spec: 'Cap: 15,000 MT/Year',
    url: '/assets/ai_asset_2.jpg'
  },
  {
    id: 2,
    title: 'CNC Machining Center',
    spec: 'Tol: ±0.005mm',
    url: '/assets/ai_asset_2.jpg'
  },
  {
    id: 3,
    title: 'Quality Lab / Spectrometry',
    spec: 'ISO 17025 Certified',
    url: '/assets/ai_asset_2.jpg'
  },
  {
    id: 4,
    title: 'Automated Sand Molding',
    spec: 'Rate: 120 Molds/Hr',
    url: '/assets/ai_asset_2.jpg'
  }
];

export function FacilityShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="facilities" className="py-24 bg-[#02050a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Advanced <span className="text-minerax-steel">Facilities</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A state-of-the-art 150,000 sq.ft production floor equipped with automated molding lines, induction melting, and rigorous non-destructive testing labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGES.map((img) => (
            <motion.div
              key={img.id}
              className="relative aspect-[4/5] bg-minerax-dark overflow-hidden group cursor-pointer border border-white/10"
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: img.id * 0.1 }}
            >
              {/* Image with zoom effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 mix-blend-luminosity opacity-40 group-hover:opacity-60"
                style={{ backgroundImage: `url(${img.url})` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-minerax-dark via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-minerax-blue/10 mix-blend-color transition-opacity duration-300 group-hover:opacity-0" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs text-minerax-glow tracking-widest bg-minerax-dark/50 backdrop-blur-sm px-2 py-1 border border-white/10">
                    SEC.0{img.id}
                  </div>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-mono text-minerax-steel mb-1">{img.spec}</div>
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    {img.title}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="h-[2px] w-0 bg-minerax-glow mt-4 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
