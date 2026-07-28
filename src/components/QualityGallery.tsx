import { motion } from 'framer-motion';
import { Microscope, ImagePlus, Shield, Scan, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const QUALITY_GALLERY = [
  {
    id: 'lab-1',
    title: '3D Laser Surface Measurement',
    tag: 'Metrology Lab',
    desc: 'High-speed sub-micron laser scanner mapping full 3D surface profiles against CAD models.',
    image: '/assets/quality_control_laser.png',
    metrics: ['Sub-Micron Laser', 'ISO 17025 Compliant']
  },
  {
    id: 'lab-2',
    title: 'Non-Destructive X-Ray Volumetric Testing',
    tag: 'NDT Suite',
    desc: 'Advanced digital radiography identifying internal voids, shrinkage, or porosity before dispatch.',
    image: '/assets/ndt_testing_facility.png',
    metrics: ['Real-Time Computed Tomography', 'ASTM E192 Standards']
  },
  {
    id: 'lab-3',
    title: 'Precision 5-Axis CNC Finish Milling',
    tag: 'Machining Floor',
    desc: 'Automated ultra-precision CNC finishing center for critical mating surfaces.',
    image: '/assets/cnc_machining_lab.png',
    metrics: ['5-Axis Simultaneous Milling', 'Ra 0.8 Surface Finish']
  },
  {
    id: 'lab-4',
    title: 'Spectrometer Induction Metal Pouring',
    tag: 'Melting Shop',
    desc: 'Real-time spark optical emission spectrometry checking chemistry prior to mold tap.',
    image: '/assets/furnace_melting.png',
    metrics: ['Dual 15MT Induction Units', 'Real-time Chemistry Analysis']
  }
];

export function QualityGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="quality" className="py-24 bg-[#010409] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Microscope className="w-3.5 h-3.5" />
              <span>Metallurgical Assurance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
              Quality & <span className="text-minerax-steel">Lab Inspection</span>
            </h2>
            <p className="text-slate-400 max-w-xl mt-3 text-sm leading-relaxed">
              Every cast part undergoes rigorous non-destructive testing, microstructural evaluation, and automated CMM inspection.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-white/[0.03] p-4 border border-white/10 rounded-lg">
            <Shield className="w-8 h-8 text-emerald-400" />
            <div>
              <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">Zero-Defect Standard</span>
              <span className="font-mono text-[11px] text-slate-400">100% Traceability & NDT Certification</span>
            </div>
          </div>
        </div>

        {/* Gallery Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {QUALITY_GALLERY.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#090f1d] border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 group flex flex-col sm:flex-row"
            >
              {/* Image side */}
              <div 
                onClick={() => setSelectedImage(item.image)}
                className="relative sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden cursor-pointer bg-black/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#090f1d]" />
                
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 border border-white/10 rounded font-mono text-[10px] text-emerald-400 uppercase">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 left-3 p-2 bg-black/60 backdrop-blur-md rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scan className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Text content side */}
              <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-display font-semibold text-white uppercase tracking-wider mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-[11px]">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative border border-white/20 rounded-xl overflow-hidden">
            <img src={selectedImage} alt="Expanded preview" className="max-w-full max-h-[85vh] object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded font-mono text-xs uppercase border border-white/20 hover:bg-white/20"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
