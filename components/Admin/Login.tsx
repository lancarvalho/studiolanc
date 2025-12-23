
import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldAlert, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: (success: boolean) => void;
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Credenciais definidas pelo usuário
    if (email === 'luizaugustobhz@gmail.com' && password === 'LStudio2@25/*') {
      onLogin(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
            <Lock size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Acesso Administrativo</h1>
          <p className="text-slate-400 font-light">Lanc Studio Control Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">E-mail</label>
              <div className="relative">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-[#3B82F6] transition-all`}
                  placeholder="seu@email.com"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Senha</label>
              <div className="relative">
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-[#3B82F6] transition-all`}
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs flex items-center gap-2 animate-pulse">
              <ShieldAlert size={14} /> 
              E-mail ou senha incorretos. Verifique suas credenciais.
            </p>
          )}

          <button type="submit" className="w-full py-4 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
            Entrar no Painel
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button type="button" onClick={onBack} className="w-full py-3 text-slate-500 hover:text-white transition-colors text-sm font-medium">
            Voltar para o Portfólio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
