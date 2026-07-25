import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

const CERTS = [
  { icon: ShieldCheck, title: 'ISO 9001:2015', desc: 'Quality Management' },
  { icon: Award, title: 'AS9100D', desc: 'Aerospace Standard' },
  { icon: FileCheck, title: 'PED 2014/68/EU', desc: 'Pressure Equipment' },
  { icon: CheckCircle2, title: 'IATF 16949', desc: 'Automotive Quality' },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-[#02050a] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/3">
          <h2 className="text-sm font-mono text-minerax-steel uppercase tracking-[0.2em] mb-2">
            Global Compliance
          </h2>
          <p className="text-xl font-display font-semibold text-white uppercase tracking-wider">
            Certified Excellence
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
          {CERTS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
            >
              <cert.icon className="w-8 h-8 text-minerax-steel mb-3" />
              <h4 className="text-sm font-display font-bold text-white tracking-wider uppercase mb-1">
                {cert.title}
              </h4>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                {cert.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
