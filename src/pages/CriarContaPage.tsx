import React from 'react';

export const CriarContaPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none">
      <h1>Criar Conta</h1>
      <p>
        Esta página explica o processo de criação de uma nova conta no sistema
        SiGPEI.
      </p>
      <h2>Quem pode criar uma conta</h2>
      <p>
        O sistema SiGPEI permite a criação de contas para diferentes perfis de
        usuários:
      </p>
      <ul>
        <li>
          <strong>Coordenadores:</strong> Contas criadas exclusivamente pelo
          administrador do sistema
        </li>
        <li>
          <strong>Professores:</strong> Contas criadas pelos coordenadores ou
          pelo administrador
        </li>
        <li>
          <strong>Pais/Responsáveis:</strong> Podem criar suas próprias contas
          através do formulário de registro
        </li>
      </ul>
      <h2>Processo de criação de conta</h2>
      <p>
        Para criar uma nova conta como pai/responsável, siga os passos abaixo:
      </p>
      <ol>
        <li>Acesse a página inicial do SiGPEI</li>
        <li>Clique no botão "Registrar-se"</li>
        <li>Preencha o formulário com seus dados pessoais</li>
        <li>
          Crie uma senha segura (mínimo de 8 caracteres, incluindo letras,
          números e caracteres especiais)
        </li>
        <li>Leia e aceite os termos de uso e política de privacidade</li>
        <li>Clique em "Criar Conta"</li>
        <li>Verifique seu e-mail para confirmar a criação da conta</li>
      </ol>
      <h2>Após a criação da conta</h2>
      <p>
        Após confirmar sua conta através do link enviado por e-mail, você poderá
        acessar o sistema com suas credenciais. Como pai/responsável, você
        poderá vincular-se aos seus dependentes utilizando os códigos de
        vinculação fornecidos pela instituição de ensino.
      </p>
    </div>;
};