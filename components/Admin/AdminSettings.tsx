
import React, { useState } from 'react';
import { useApp } from '../../AppContext';
import { Save, User, Laptop, Globe, Share2 } from 'lucide-react';

const AdminSettings: React.FC = () => {
  const { profile, updateProfile } = useApp();
  const [formData, setFormData] = useState(profile);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Configurações de Perfil</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Seção Identidade */}
        <section className="bg-slate-900 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-[#3B82F6]" />
            <h2 className="text-xl font-bold">Identidade</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Nome Público</label>
              <input 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">E-mail de Contato</label>
              <input 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>
        </section>

        {/* Seção Conteúdo */}
        <section className="bg-slate-900 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Laptop className="text-[#3B82F6]" />
            <h2 className="text-xl font-bold">Conteúdo do Hero</h2>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Título Principal (impactante)</label>
              <input 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Subtítulo (Profissão/Cargo)</label>
              <input 
                value={formData.subtitle}
                onChange={e => setFormData({...formData, subtitle: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Bio / Resumo Profissional</label>
              <textarea 
                rows={4}
                value={formData.bio}
                onChange={e => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6] resize-none"
              />
            </div>
          </div>
        </section>

        {/* Seção Links Sociais */}
        <section className="bg-slate-900 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="text-[#3B82F6]" />
            <h2 className="text-xl font-bold">Links & Redes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">GitHub URL</label>
              <input 
                value={formData.githubUrl}
                onChange={e => setFormData({...formData, githubUrl: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">LinkedIn URL</label>
              <input 
                value={formData.linkedinUrl}
                onChange={e => setFormData({...formData, linkedinUrl: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>
        </section>

        <div className="flex items-center justify-end gap-4">
          {isSaved && <span className="text-green-500 font-medium">Configurações salvas!</span>}
          <button type="submit" className="px-10 py-4 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
            <Save size={20} />
            Salvar Tudo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
