// ./src/main.tsx
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ./src/index.css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import "tailwindcss";

@layer base {
  /* Estilos base para a página */
  body {
    background-color: var(--background);
    color: var(--text-primary);
    font-family: 'Roboto', sans-serif;
    transition: color, background-color 0.3s ease;
  }
  
  /* Definição das variáveis de cor */
  :root {
    --background: #ffffff;
    --surface: #f9fafb;
    --border: #e5e7eb;
    --primary: #3b82f6;
    --primary-rgb: 59, 130, 246; /* Adicionado para opacidade */
    --text-primary: #111827;
    --text-secondary: #6b7280;
  }
  .dark {
    --background: #111827;
    --surface: #1f2937;
    --border: #374151;
    --primary: #60a5fa;
    --primary-rgb: 96, 165, 250; /* Adicionado para opacidade */
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
  }
}

@layer components {
  /* Botões de Ícone (Header, etc) */
  .icon-button {
    @apply p-2 rounded-md transition-colors;
    color: var(--text-secondary);
  }
  .icon-button:hover {
    background-color: var(--border);
    color: var(--text-primary);
  }

  /* Links de Navegação da Sidebar */
  .sidebar-nav-link {
    @apply flex items-center space-x-3 px-4 py-3 rounded-md transition-colors;
    color: var(--text-primary);
  }
  .sidebar-nav-link:hover {
    background-color: var(--surface);
  }
  
  /* Link de Navegação Ativo */
  .sidebar-nav-link-active {
    background-color: rgba(var(--primary-rgb), 0.1);
    color: var(--primary);
  }
  
  /* Input de Busca */
  .search-input {
    @apply w-full py-2 px-4 pl-10 rounded-md focus:outline-none focus:ring-2;
    background-color: var(--surface);
    color: var(--text-primary);
    --tw-ring-color: var(--primary); /* Define a cor do anel (ring) */
  }
}

// ./src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>;
}

// ./src/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
      </BrowserRouter>;
}

// ./src/components/Header.tsx
import React, { useState } from 'react';
import { FiMoon, FiSun, FiSearch, FiMenu, FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchVisible(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-surface border-b border-border shadow-sm lg:pl-64">
      <div className="h-16 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button className="icon-button lg:hidden" onClick={toggleSidebar}>
            <FiMenu size={20} />
          </button>
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">
              SiGPEI-DOCS
            </span>
          </div>
        </div>
        
        <div className="hidden md:block flex-grow max-w-md mx-4">
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              placeholder="Buscar na documentação..." 
              className="search-input" 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          </form>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={toggleSearch} className="icon-button md:hidden" title="Buscar">
            {isSearchVisible ? <FiX size={20} /> : <FiSearch size={20} />}
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-button" title="Repositório GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://sigpei.apps.uern.br" target="_blank" rel="noopener noreferrer" className="icon-button" title="Site em Produção">
              <FiExternalLink size={20} />
            </a>
            <div className="w-px h-6 bg-border mx-1"></div>
          </div>
          <button 
            onClick={toggleTheme} 
            className="icon-button" 
            title={theme === 'light' ? 'Alternar para tema escuro' : 'Alternar para tema claro'}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </div>

      {isSearchVisible && (
        <div className="md:hidden px-4 py-3 bg-surface border-b border-border shadow-inner">
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              placeholder="Buscar na documentação..." 
              className="search-input" 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
              autoFocus 
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          </form>
        </div>
      )}
    </header>
  );
};

// ./src/components/Layout.tsx
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Sumario, type Heading } from './Sumario'; // Supondo que você mantenha este componente

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    setTimeout(() => {
      const headingElements = Array.from(
        mainContent.querySelectorAll('h2, h3')
      ) as HTMLHeadingElement[];
      
      const newHeadings = headingElements.map((el) => {
        const id = el.innerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        el.id = id;
        return {
          id,
          text: el.innerText,
          level: Number(el.tagName.substring(1)),
        };
      });
      setHeadings(newHeadings);
    }, 100);
  }, [location]);

  return (
    // As classes de cor base vêm do body, este div não precisa delas
    <div className="min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <main className="pt-16 lg:pl-64 flex-grow">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
        <Sumario headings={headings} />
      </div>

      <footer className="lg:pl-64 py-6 px-4 bg-surface border-t border-border text-center text-sm text-text-secondary">
        <div className="max-w-7xl mx-auto">
          <p> © {new Date().getFullYear()} SiGPEI-DOCS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

// ./src/components/Sidebar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronRight, FiChevronDown, FiHome, FiLogIn, FiUserPlus, FiKey, FiUser, FiUsers, FiUserCheck, FiGithub, FiExternalLink } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Subcomponente para os itens de navegação
const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string; }> = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `sidebar-nav-link ${isActive ? 'sidebar-nav-link-active' : ''}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

// Subcomponente para os itens expansíveis
const ExpandableNavItem: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode; }> = ({ icon, label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-1">
      <button 
        className="sidebar-nav-link w-full justify-between" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </div>
        <span>{isExpanded ? <FiChevronDown /> : <FiChevronRight />}</span>
      </button>
      {isExpanded && (
        <div className="ml-9 mt-1 border-l-2 border-border pl-2">
          {children}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="lg:hidden fixed inset-0 bg-opacity-50 z-20" onClick={toggleSidebar} />}
      <aside className={`
          fixed top-0 bottom-0 left-0 z-30
          w-[85%] max-w-[300px] sm:w-64 bg-[var(--background)]
          border-r border-border
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
        <div className="h-16 flex items-center justify-between px-4 lg:hidden border-b border-border">
          <span className="text-xl font-bold text-primary">SIGPEI-DOCS</span>
        </div>
        
        <div className="p-4 pt-4 lg:pt-20">
          <nav className="space-y-1">
            <NavItem to="/" icon={<FiHome />} label="Introdução" />
            <NavItem to="/login" icon={<FiLogIn />} label="Login" />
            <NavItem to="/criar-conta" icon={<FiUserPlus />} label="Criar Conta" />
            <NavItem to="/recuperar-senha" icon={<FiKey />} label="Recuperar Senha" />

            <ExpandableNavItem icon={<FiUser />} label="Acesso do Coordenador">
              <NavItem to="/coordenador/dashboard" icon={<></>} label="Dashboard" />
              <NavItem to="/coordenador/projetos" icon={<></>} label="Projetos" />
              <NavItem to="/coordenador/usuarios" icon={<></>} label="Usuários" />
            </ExpandableNavItem>

            <ExpandableNavItem icon={<FiUsers />} label="Acesso do Professor">
              <NavItem to="/professor/dashboard" icon={<></>} label="Dashboard" />
              <NavItem to="/professor/projetos" icon={<></>} label="Projetos" />
              <NavItem to="/professor/alunos" icon={<></>} label="Alunos" />
            </ExpandableNavItem>

            <ExpandableNavItem icon={<FiUserCheck />} label="Acesso do Pai/Responsável">
              <NavItem to="/responsavel/dashboard" icon={<></>} label="Dashboard" />
              <NavItem to="/responsavel/alunos" icon={<></>} label="Alunos" />
              <NavItem to="/responsavel/projetos" icon={<></>} label="Projetos" />
            </ExpandableNavItem>
          </nav>
        </div>
      </aside>
    </>
  );
};

// ./src/components/Sumario.tsx
import React, { useState, useEffect } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface SumarioProps {
  headings: Heading[];
}

export const Sumario: React.FC<SumarioProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' } // Ativa quando o título está no topo da tela
    );

    const elements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
    elements.forEach(el => observer.observe(el!));

    return () => elements.forEach(el => observer.unobserve(el!));
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden xl:block fixed top-28 right-[max(0px,calc(50%-45rem))] w-64 text-sm">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Nesta página</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block transition-colors ${
                heading.level === 3 ? 'pl-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-primary-light dark:text-primary-dark font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ./src/context/ThemeContext.tsx
import React, { useEffect, useState, createContext } from 'react';
import type { Theme, ThemeContextType } from '../interfaces/theme';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    
    return 'light';
  });
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
      {children}
    </ThemeContext.Provider>;
};

// ./src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  //Validar possível erro aqui depois
  return context;
};

// ./src/interfaces/theme.ts
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// ./src/pages/IndexPage.tsx
import React from 'react';

export const IndexPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none">
      <h1>Bem-vindo ao SiGPEI-DOCS</h1>
      <p className="lead">
        Esta é a documentação oficial do Sistema de Gestão de Projetos de
        Iniciação Científica (SiGPEI).
      </p>
      <p>
        Aqui você encontrará informações detalhadas sobre como utilizar todas as
        funcionalidades do sistema, desde o cadastro inicial até as operações
        mais avançadas disponíveis para cada perfil de usuário.
      </p>
      <h2>Sobre o SiGPEI</h2>
      <p>
        O SiGPEI é uma plataforma desenvolvida para facilitar a gestão de
        projetos de iniciação científica, conectando coordenadores, professores,
        alunos e seus responsáveis em um ambiente digital integrado.
      </p>
      <p>
        Através do sistema, é possível acompanhar o desenvolvimento dos
        projetos, realizar avaliações, submeter relatórios e manter uma
        comunicação eficiente entre todos os envolvidos.
      </p>
      <h2>Como usar esta documentação</h2>
      <p>
        A documentação está organizada por perfis de acesso, facilitando a
        navegação conforme seu papel no sistema. Utilize o menu lateral para
        navegar entre as diferentes seções e encontrar as informações
        específicas para suas necessidades.
      </p>
      <p>
        Caso tenha dúvidas ou sugestões sobre a documentação, entre em contato
        com a equipe de suporte através do e-mail: suporte@sigpei.example.com
      </p>
    </div>;
};

// ./src/pages/CriarContaPage.tsx
// ./src/pages/LoginPage.tsx
// ./src/pages/NotFoundPage.tsx
// ./src/pages/RecuperarSenhaPage.tsx

//Todas acima seguem o mesmo layout de IndexPage, então vou ignorar

// ./src/routes/AppRouter.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { IndexPage } from '../pages//IndexPage';
import { LoginPage } from '../pages/LoginPage';
import { CriarContaPage } from '../pages/CriarContaPage';
import { RecuperarSenhaPage } from '../pages/RecuperarSenhaPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="criar-conta" element={<CriarContaPage />} />
        <Route path="recuperar-senha" element={<RecuperarSenhaPage />} />
        {/* Rotas do Coordenador */}
        <Route path="coordenador/dashboard" element={<div className="prose dark:prose-invert">
              <h1>Dashboard do Coordenador</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        <Route path="coordenador/projetos" element={<div className="prose dark:prose-invert">
              <h1>Projetos do Coordenador</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        <Route path="coordenador/usuarios" element={<div className="prose dark:prose-invert">
              <h1>Usuários do Coordenador</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        {/* Rotas do Professor */}
        <Route path="professor/dashboard" element={<div className="prose dark:prose-invert">
              <h1>Dashboard do Professor</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        <Route path="professor/projetos" element={<div className="prose dark:prose-invert">
              <h1>Projetos do Professor</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        <Route path="professor/alunos" element={<div className="prose dark:prose-invert">
              <h1>Alunos do Professor</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        {/* Rotas do Responsável */}
        <Route path="responsavel/dashboard" element={<div className="prose dark:prose-invert">
              <h1>Dashboard do Responsável</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        <Route path="responsavel/alunos" element={<div className="prose dark:prose-invert">
              <h1>Alunos do Responsável</h1>
              <p>Esta página está em construção.</p>
            </div>} />
        <Route path="responsavel/projetos" element={<div className="prose dark:prose-invert">
              <h1>Projetos do Responsável</h1>
              <p>Esta página está em construção.</p>
            </div>} />
            
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>;
};



