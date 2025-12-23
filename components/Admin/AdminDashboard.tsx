
import React from 'react';
import { useApp } from '../../AppContext';
import { FolderKanban, Eye, Zap } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { projects } = useApp();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
              <FolderKanban size={24} />
            </div>
            <span className="text-slate-400 font-medium">Total de Projetos</span>
          </div>
          <span className="text-4xl font-black">{projects.length}</span>
        </div>
        
        <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
              <Eye size={24} />
            </div>
            <span className="text-slate-400 font-medium">Status do Site</span>
          </div>
          <span className="text-2xl font-bold text-green-500 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </span>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
              <Zap size={24} />
            </div>
            <span className="text-slate-400 font-medium">Plano</span>
          </div>
          <span className="text-2xl font-bold">Pro Edition</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Atividade Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 font-bold">L</div>
            <div>
              <p className="text-sm font-medium">Site acessado com sucesso</p>
              <p className="text-xs text-slate-500">Há poucos minutos</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold">P</div>
            <div>
              <p className="text-sm font-medium">Projetos carregados via LocalStorage</p>
              <p className="text-xs text-slate-500">Sincronizado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
