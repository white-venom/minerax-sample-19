export function Footer() {
  return (
    <footer className="bg-[#020408] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm">
              <span className="font-display font-bold text-minerax-dark text-sm leading-none">M</span>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-widest uppercase">
              Minerax
            </span>
          </div>
          
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest text-center md:text-right">
            &copy; {new Date().getFullYear()} Minerax Engineering LLC. All Rights Reserved.
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
