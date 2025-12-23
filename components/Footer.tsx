
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useApp } from '../AppContext';

const Footer: React.FC = () => {
  const { profile } = useApp();

  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/10 bg-[#0B0F1A] scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center text-xl tracking-tighter mb-4">
            <span className="font-black text-white">
              <span className="text-[#3B82F6]">L</span>anc
            </span>
            <span className="font-light text-slate-400 ml-1">Studio</span>
          </div>
          <p className="text-slate-500 text-sm">
            ©2021-{new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={profile.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#3B82F6] transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href={profile.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#3B82F6] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${profile.email}`} 
            className="text-slate-400 hover:text-[#3B82F6] transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;