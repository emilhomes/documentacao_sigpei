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