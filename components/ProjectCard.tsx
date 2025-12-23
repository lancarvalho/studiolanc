
import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-[#3B82F6]/30">
      <div className="aspect-video w-full overflow-hidden bg-slate-800 relative">
        <img 
          src={project.thumbnailUrl} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent opacity-60"></div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
          {project.name}
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center gap-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold text-white rounded-lg border border-white/5 transition-all"
          >
            <Github size={14} />
            Github
          </a>
          <a 
            href={project.deployUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 text-xs font-bold text-[#3B82F6] rounded-lg transition-all"
          >
            <ExternalLink size={14} />
            Vercel
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
