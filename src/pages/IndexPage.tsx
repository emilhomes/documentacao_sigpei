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