
import React from 'react';
import { useApp } from '../AppContext';

const Hero: React.FC = () => {
  const { profile } = useApp();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B82F6]/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
          {profile.title.split(' ').length > 2 ? (
            <>
              {profile.title.split(' ').slice(0, -2).join(' ')} <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {profile.title.split(' ').slice(-2).join(' ')}
              </span>
            </>
          ) : (
            <span className="bg-gradient-to-r from-[#3B82F6] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {profile.title}
            </span>
          )}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {profile.bio}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={handleScrollToProjects}
            className="px-8 py-4 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Ver Projetos
          </button>
          <a 
            href={profile.githubUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            Github Oficial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
