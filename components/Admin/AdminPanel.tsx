
import React, { useState } from 'react';
import { LayoutDashboard, FolderKanban, UserCog, LogOut, ChevronLeft } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import AdminProjects from './AdminProjects';
import AdminSettings from './AdminSettings';

interface AdminPanelProps {
  onLogout: () => void;
  onExit: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout, onExit }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'settings'>('dashboard');

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0f172a] flex flex-col">
        <div className="p-6 flex items-center gap-2 border-b border-white/10">
          <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center font-black">L</div>
          <span className="font-bold tracking-tight">Admin Lanc</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-[#3B82F6] text-white' : 'text-slate-400 hover:bg-white/5'}`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'projects' ? 'bg-[#3B82F6] text-white' : 'text-slate-400 hover:bg-white/5'}`}
          >
            <FolderKanban size={20} />
            Projetos
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-[#3B82F6] text-white' : 'text-slate-400 hover:bg-white/5'}`}
          >
            <UserCog size={20} />
            Perfil
          </button>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <button 
            onClick={onExit}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 transition-all"
          >
            <ChevronLeft size={20} />
            Voltar ao Site
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut size={20} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        {activeTab === 'dashboard' && <AdminDashboard />}
        {activeTab === 'projects' && <AdminProjects />}
        {activeTab === 'settings' && <AdminSettings />}
      </main>
    </div>
  );
};

export default AdminPanel;
