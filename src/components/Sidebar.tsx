import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronRight, FiChevronDown, FiHome, FiLogIn, FiUserPlus, FiKey, FiUser, FiUsers, FiUserCheck, FiGithub, FiExternalLink } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

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
              <NavItem to="/coordenador/componentes-curriculares" icon={<></>} label="Componentes Curriculares" />
              <NavItem to="/coordenador/niveis-ensino" icon={<></>} label="Níveis de Ensino" />
              <NavItem to="/coordenador/gerenciamento-professores" icon={<></>} label="Gerenciamento de Professores" />
              <NavItem to="/coordenador/salas-recursos" icon={<></>} label="Gerenciamento de Salas de Recursos Especiais" />
              <NavItem to="/coordenador/vincular-aluno" icon={<></>} label="Vincular Aluno ao Profissional" />
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