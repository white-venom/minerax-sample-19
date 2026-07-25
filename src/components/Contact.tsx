import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-minerax-dark relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Initiate <span className="text-minerax-steel">Project</span>
            </h2>
            <p className="text-slate-400 mb-12 max-w-md">
              Submit your engineering requirements, technical drawings, or material specifications. Our metallurgical team will review and provide a comprehensive feasibility and cost analysis within 48 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/[0.02]">
                  <Mail className="w-4 h-4 text-minerax-steel" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Email inquiries</div>
                  <a href="mailto:engineering@minerax.com" className="text-white hover:text-minerax-glow transition-colors">engineering@minerax.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/[0.02]">
                  <Phone className="w-4 h-4 text-minerax-steel" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Global Support</div>
                  <a href="tel:+18005550199" className="text-white hover:text-minerax-glow transition-colors">+1 (800) 555-0199</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/[0.02]">
                  <MapPin className="w-4 h-4 text-minerax-steel" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Headquarters</div>
                  <address className="text-white not-italic">
                    4000 Foundry Way, Sector 7<br />
                    Industrial Tech Park, TX 78701
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a111a] border border-white/10 p-8"
          >
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-minerax-glow animate-pulse" />
              <span className="text-xs font-mono text-minerax-glow uppercase tracking-widest">Secure Transmission</span>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-minerax-glow/50 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-minerax-glow/50 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Company / Organization</label>
                <input type="text" id="company" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-minerax-glow/50 transition-colors" placeholder="Acme Aerospace" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Corporate Email</label>
                <input type="email" id="email" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-minerax-glow/50 transition-colors" placeholder="j.doe@acme.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="details" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Project Requirements</label>
                <textarea id="details" rows={4} className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-minerax-glow/50 transition-colors resize-none" placeholder="Alloy grade, estimated volume, critical tolerances..."></textarea>
              </div>
              
              <button className="w-full group relative flex items-center justify-center px-6 py-4 text-sm font-semibold uppercase tracking-wider text-minerax-dark bg-white hover:bg-slate-200 transition-colors overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Submit Request
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
