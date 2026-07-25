import { motion } from 'framer-motion';
import { Layers, ThermometerSun, ScanFace, Combine } from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Pattern & Tooling',
    icon: Layers,
    desc: 'Precision CNC machining of aluminum patterns and core boxes to exact CAD specifications, ensuring dimensional accuracy from the outset.'
  },
  {
    id: '02',
    title: 'Molding & Core Making',
    icon: Combine,
    desc: 'Automated chemically-bonded sand molding systems create high-integrity molds capable of withstanding extreme thermal shock.'
  },
  {
    id: '03',
    title: 'Melting & Pouring',
    icon: ThermometerSun,
    desc: 'Spectrometer-controlled induction melting guarantees exact alloy composition before controlled pouring into prepared molds.'
  },
  {
    id: '04',
    title: 'Finishing & NDT',
    icon: ScanFace,
    desc: 'Shot blasting, heat treatment, and rigorous Non-Destructive Testing (X-Ray, Mag-Particle) verify absolute internal soundness.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-minerax-dark border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-grid-blueprint-fine opacity-20 [mask-image:linear-gradient(to_left,black,transparent)]" />

      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Production <span className="text-minerax-steel">Process</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A meticulously controlled, four-stage manufacturing lifecycle designed to eliminate metallurgical defects and ensure absolute geometric fidelity.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Node on the line */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-minerax-dark border-2 border-minerax-steel group-hover:border-minerax-glow group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all z-10" />
                
                <div className="bg-[#0a111a] border border-white/5 p-8 relative z-20 group-hover:border-white/15 transition-colors">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-4xl font-mono font-light text-white/10 group-hover:text-minerax-glow/30 transition-colors">
                      {step.id}
                    </span>
                    <step.icon className="w-6 h-6 text-minerax-steel group-hover:text-minerax-glow transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-white uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
