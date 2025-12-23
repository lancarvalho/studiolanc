
import React from 'react';
import ProjectCard from './ProjectCard';
import { useApp } from '../AppContext';

const ProjectGrid: React.FC = () => {
  const { projects } = useApp();
  
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="h-1.5 w-20 bg-[#3B82F6] rounded-full"></div>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-20 text-slate-500 italic">
            Nenhum projeto cadastrado ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;