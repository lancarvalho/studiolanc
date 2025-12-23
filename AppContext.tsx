
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Profile } from './types';
import { INITIAL_PROFILE, INITIAL_PROJECTS } from './constants';

interface AppContextType {
  profile: Profile;
  projects: Project[];
  updateProfile: (profile: Profile) => void;
  updateProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  editProject: (project: Project) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inicialização do perfil com tentativa de carregamento do localStorage
  const [profile, setProfile] = useState<Profile>(() => {
    try {
      const saved = localStorage.getItem('lanc_profile');
      if (saved) {
        return { ...INITIAL_PROFILE, ...JSON.parse(saved) };
      }
      return INITIAL_PROFILE;
    } catch (e) {
      console.error("Erro ao carregar perfil do localStorage", e);
      return INITIAL_PROFILE;
    }
  });

  // Inicialização dos projetos com tentativa de carregamento do localStorage
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('lanc_projects');
      if (saved) {
        return JSON.parse(saved);
      }
      return INITIAL_PROJECTS;
    } catch (e) {
      console.error("Erro ao carregar projetos do localStorage", e);
      return INITIAL_PROJECTS;
    }
  });

  // Efeito para salvar o perfil sempre que houver alteração
  useEffect(() => {
    try {
      localStorage.setItem('lanc_profile', JSON.stringify(profile));
    } catch (e) {
      console.error("Erro ao salvar perfil no localStorage", e);
    }
  }, [profile]);

  // Efeito para salvar os projetos sempre que houver alteração
  useEffect(() => {
    try {
      localStorage.setItem('lanc_projects', JSON.stringify(projects));
    } catch (e) {
      console.error("Erro ao salvar projetos no localStorage", e);
    }
  }, [projects]);

  const updateProfile = (newProfile: Profile) => {
    setProfile({ ...newProfile });
  };
  
  const updateProjects = (newProjects: Project[]) => {
    setProjects([...newProjects]);
  };
  
  const addProject = (project: Project) => {
    setProjects(prev => [...prev, project]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const editProject = (project: Project) => {
    setProjects(prev => prev.map(p => p.id === project.id ? { ...p, ...project } : p));
  };

  return (
    <AppContext.Provider value={{ 
      profile, 
      projects, 
      updateProfile, 
      updateProjects,
      addProject,
      deleteProject,
      editProject
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp deve ser usado dentro de um AppProvider');
  return context;
};
