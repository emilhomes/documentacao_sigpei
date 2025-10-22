import React from 'react';

export const LoginPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none">
      <h1>Login no Sistema</h1>
      <p>
        Esta página contém informações sobre como realizar o login no sistema
        SIGPEI.
      </p>
      <h2>Acessando a tela de login</h2>
      <p>
        Para acessar o sistema, visite o endereço{' '}
        <code>https://sigpei.apps.uern.br</code> e clique no botão "Entrar"
        localizado no canto superior direito da página inicial.
      </p>
      <h2>Credenciais de acesso</h2>
      <p>Você precisará dos seguintes dados para realizar o login:</p>
      <ul>
        <li>
          <strong>E-mail:</strong> O endereço de e-mail cadastrado no sistema
        </li>
        <li>
          <strong>Senha:</strong> A senha criada durante o cadastro ou fornecida
          pelo administrador
        </li>
      </ul>
      <h2>Problemas comuns</h2>
      <p>
        Se você estiver enfrentando dificuldades para acessar sua conta,
        verifique:
      </p>
      <ul>
        <li>Se o e-mail está digitado corretamente</li>
        <li>
          Se a senha está correta (atente-se às letras maiúsculas e minúsculas)
        </li>
        <li>Se o Caps Lock está ativado</li>
      </ul>
      <p>
        Caso ainda não consiga acessar, utilize a opção "Esqueci minha senha" na
        tela de login para redefinir sua senha.
      </p>
    </div>;
};