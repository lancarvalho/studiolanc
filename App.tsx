
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import Login from './components/Admin/Login';
import AdminPanel from './components/Admin/AdminPanel';
import Terms from './components/Legal/Terms';
import Privacy from './components/Legal/Privacy';

type ViewState = 'landing' | 'login' | 'admin' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('lanc_auth') === 'true';
  });

  useEffect(() => {
    if (view === 'admin' && !isAuthenticated) {
      setView('login');
    }
    // Scroll para o topo ao mudar de página
    window.scrollTo(0, 0);
  }, [view, isAuthenticated]);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('lanc_auth', 'true');
      setView('admin');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('lanc_auth');
    setView('landing');
  };

  const navigateTo = (newView: ViewState) => {
    setView(newView);
  };

  if (view === 'login') {
    return <Login onLogin={handleLogin} onBack={() => setView('landing')} />;
  }

  if (view === 'admin') {
    return <AdminPanel onLogout={handleLogout} onExit={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen text-slate-100 selection:bg-[#3B82F6] selection:text-white bg-[#0f172a] flex flex-col">
      <Header 
        onAdminClick={() => setView(isAuthenticated ? 'admin' : 'login')} 
        onHomeClick={() => setView('landing')}
      />
      <main className="flex-grow">
        {view === 'landing' && (
          <>
            <Hero />
            <ProjectGrid />
          </>
        )}
        {view === 'terms' && <Terms />}
        {view === 'privacy' && <Privacy />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
