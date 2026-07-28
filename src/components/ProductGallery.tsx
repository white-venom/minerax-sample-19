import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Eye, ShieldCheck, Cpu, ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';

interface ProductItem {
  id: string;
  title: string;
  category: 'Aerospace' | 'Mining & Energy' | 'Industrial Valves' | 'Special Alloys';
  material: string;
  tolerance: string;
  weight: string;
  image: string;
  description: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Aerospace Turbine Housing',
    category: 'Aerospace',
    material: 'Inconel 718 Superalloy',
    tolerance: '± 0.002 mm',
    weight: '45.8 kg',
    image: '/assets/aerospace_turbine_housing.png',
    description: 'High-temperature resistant precision casting designed for severe aerodynamic stress and high-pressure turbine assemblies.'
  },
  {
    id: 'prod-2',
    title: 'Heavy Mining Pump Impeller',
    category: 'Mining & Energy',
    material: 'High-Chromium Steel (27% Cr)',
    tolerance: '± 0.010 mm',
    weight: '320.0 kg',
    image: '/assets/heavy_duty_impeller.png',
    description: 'Ultra wear-resistant slurry impeller cast to withstand extreme abrasive environments in heavy mining and mineral processing.'
  },
  {
    id: 'prod-3',
    title: 'Precision Superalloy Cast Core',
    category: 'Special Alloys',
    material: 'Titanium Ti-6Al-4V Grade 5',
    tolerance: '± 0.003 mm',
    weight: '18.4 kg',
    image: '/assets/hero_metal_casting.png',
    description: 'Complex internal cooling geometry fabricated with zero ceramic residue using investment vacuum casting techniques.'
  },
  {
    id: 'prod-4',
    title: 'High-Pressure Subsea Valve Body',
    category: 'Industrial Valves',
    material: 'Duplex Stainless Steel 2205',
    tolerance: '± 0.005 mm',
    weight: '142.5 kg',
    image: '/assets/quality_control_laser.png',
    description: 'Class 2500 rated heavy wall pressure vessel casting engineered for deep-sea oil extraction manifolds.'
  }
];

const CATEGORIES = ['All', 'Aerospace', 'Mining & Energy', 'Industrial Valves', 'Special Alloys'] as const;

export function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<ProductItem | null>(null);

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-[#030712] relative border-t border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-minerax-glow uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>Precision Showcase</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
              Featured <span className="text-minerax-steel">Casting Components</span>
            </h2>
            <p className="text-slate-400 max-w-xl mt-3 text-sm leading-relaxed">
              Explore our AI-generated high-fidelity catalog of custom castings engineered for mission-critical industrial applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-minerax-dark/80 p-1.5 border border-white/10 rounded-lg">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all rounded ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group bg-minerax-dark/60 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-minerax-dark via-transparent to-transparent opacity-80" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 border border-white/10 rounded font-mono text-[10px] text-minerax-glow uppercase">
                  {product.category}
                </div>

                {/* Quick View Button */}
                <button
                  onClick={() => setActiveModalItem(product)}
                  className="absolute bottom-3 right-3 p-2.5 bg-blue-600/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 text-xs font-mono uppercase shadow-lg"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect</span>
                </button>
              </div>

              {/* Info Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider mb-2 group-hover:text-minerax-glow transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Alloy Grade</span>
                    <span className="text-slate-200 truncate block font-medium">{product.material}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Tolerance</span>
                    <span className="text-minerax-glow font-medium">{product.tolerance}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Inspector */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1329] border border-white/20 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-white/20 transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto bg-black">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-minerax-glow border border-blue-500/30 rounded font-mono text-[11px] uppercase tracking-wider mb-3">
                      {activeModalItem.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-4">
                      {activeModalItem.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {activeModalItem.description}
                    </p>

                    <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-500">Material Specification</span>
                        <span className="text-white font-semibold">{activeModalItem.material}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-500">Machining Tolerance</span>
                        <span className="text-minerax-glow font-semibold">{activeModalItem.tolerance}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Unit Mass / Weight</span>
                        <span className="text-white font-semibold">{activeModalItem.weight}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex gap-3">
                    <a
                      href="#contact"
                      onClick={() => setActiveModalItem(null)}
                      className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded text-center transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Inquire Specs</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
