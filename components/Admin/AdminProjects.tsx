
import React, { useState } from 'react';
import { useApp } from '../../AppContext';
import { Plus, Trash2, Edit2, X, Check, Link as LinkIcon } from 'lucide-react';
import { Project } from '../../types';

const AdminProjects: React.FC = () => {
  const { projects, addProject, deleteProject, editProject } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    githubUrl: '',
    deployUrl: ''
  });

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        name: project.name,
        description: project.description,
        githubUrl: project.githubUrl,
        deployUrl: project.deployUrl
      });
    } else {
      setEditingProject(null);
      setFormData({
        name: '',
        description: '',
        githubUrl: '',
        deployUrl: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const thumbnail = `https://s0.wp.com/mshots/v1/${formData.deployUrl}?w=800`;
    
    if (editingProject) {
      editProject({ ...editingProject, ...formData, thumbnailUrl: thumbnail });
    } else {
      addProject({
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        thumbnailUrl: thumbnail
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold rounded-xl transition-all"
        >
          <Plus size={20} />
          Novo Projeto
        </button>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-400">Preview</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-400">Nome</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-400">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-400 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-white/2 transition-colors">
                <td className="px-6 py-4">
                  <div className="w-20 aspect-video rounded-lg overflow-hidden bg-slate-800 border border-white/10">
                    <img src={project.thumbnailUrl} className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-white">{project.name}</p>
                  <p className="text-xs text-slate-500 truncate max-w-[200px]">{project.description}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full">Publicado</span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => handleOpenModal(project)} className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => deleteProject(project.id)} className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0B0F1A]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-white/10 rounded-3xl w-full max-w-xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{editingProject ? 'Editar Projeto' : 'Novo Projeto'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/5 rounded-full"><X /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Nome do Projeto</label>
                <input 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#3B82F6] outline-none transition-all"
                  placeholder="Ex: Pauta Já"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Descrição Curta</label>
                <input 
                  required
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#3B82F6] outline-none transition-all"
                  placeholder="Uma frase sobre o projeto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Github URL</label>
                  <input 
                    required
                    value={formData.githubUrl}
                    onChange={e => setFormData({...formData, githubUrl: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#3B82F6] outline-none transition-all"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Deploy URL</label>
                  <input 
                    required
                    value={formData.deployUrl}
                    onChange={e => setFormData({...formData, deployUrl: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#3B82F6] outline-none transition-all"
                    placeholder="https://meu-app.vercel.app"
                  />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                <Check size={20} />
                {editingProject ? 'Salvar Alterações' : 'Criar Projeto'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
