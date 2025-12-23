
import React from 'react';
import { Settings } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo className="w-8 h-8 transition-transform group-hover:scale-110" />
          <div className="flex items-center text-2xl tracking-tighter">
            <span className="font-black text-white">
              <span className="text-[#3B82F6]">L</span>anc
            </span>
            <span className="font-light text-slate-400 ml-1">Studio</span>
            <div className="w-2.5 h-6 bg-[#3B82F6] ml-2 cursor-blink"></div>
          </div>
        </div>
        
        <nav className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-slate-300">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="hover:text-[#3B82F6] transition-colors whitespace-nowrap"
          >
            Início
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hover:text-[#3B82F6] transition-colors whitespace-nowrap"
          >
            Projetos
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-[#3B82F6] transition-colors whitespace-nowrap"
          >
            Contato
          </a>
          <button 
            onClick={onAdminClick}
            className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-[#3B82F6] transition-all ml-2"
            title="Painel Admin"
          >
            <Settings size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
