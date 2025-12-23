
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useApp } from '../AppContext';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (view: 'landing' | 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { profile } = useApp();

  return (
    <footer id="contact" className="py-12 px-6 border-t border-white/10 bg-[#0B0F1A] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Linha Principal: Copyright | Logo | Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Copyright - Esquerda */}
          <div className="order-3 md:order-1 flex-1 flex justify-start">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>

          {/* Logo - Centro */}
          <div className="order-1 md:order-2 flex-1 flex justify-center">
            <div 
              className="flex items-center gap-3 text-xl tracking-tighter group cursor-pointer" 
              onClick={() => onNavigate('landing')}
            >
              <Logo className="w-7 h-7 transition-transform group-hover:scale-110" />
              <div className="flex items-center">
                <span className="font-black text-white">
                  <span className="text-[#3B82F6]">L</span>anc
                </span>
                <span className="font-light text-slate-400 ml-1">Studio</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais - Direita */}
          <div className="order-2 md:order-3 flex-1 flex justify-end items-center gap-6">
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#3B82F6] transition-colors hover:scale-110 transform"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={profile.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#3B82F6] transition-colors hover:scale-110 transform"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="text-slate-400 hover:text-[#3B82F6] transition-colors hover:scale-110 transform"
              title="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Linha Legal - Centralizada abaixo da logo */}
        <div className="flex items-center justify-center gap-4 text-[10px] md:text-xs font-semibold text-slate-600 tracking-widest uppercase border-t border-white/5 pt-8">
          <button 
            onClick={() => onNavigate('terms')}
            className="hover:text-[#3B82F6] transition-colors"
          >
            Termos de Uso
          </button>
          <span className="text-slate-800">•</span>
          <button 
            onClick={() => onNavigate('privacy')}
            className="hover:text-[#3B82F6] transition-colors"
          >
            Privacidade
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
