import React from 'react';

export const RecuperarSenhaPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none">
      <h1>Recuperar Senha</h1>
      <p>
        Esta página explica como recuperar o acesso à sua conta caso tenha
        esquecido sua senha.
      </p>
      <h2>Processo de recuperação de senha</h2>
      <p>
        O SIGPEI oferece um processo seguro para recuperação de senha. Siga os
        passos abaixo:
      </p>
      <ol>
        <li>Na tela de login, clique na opção "Esqueci minha senha"</li>
        <li>Digite o e-mail associado à sua conta</li>
        <li>Clique em "Enviar link de recuperação"</li>
        <li>
          Verifique sua caixa de entrada (e a pasta de spam, se necessário)
        </li>
        <li>Clique no link recebido por e-mail</li>
        <li>Defina uma nova senha</li>
      </ol>
      <h2>Prazo de validade do link</h2>
      <p>
        O link de recuperação de senha enviado por e-mail tem validade de 24
        horas. Após esse período, será necessário solicitar um novo link.
      </p>
      <h2>Dicas para criar uma senha segura</h2>
      <p>Ao criar uma nova senha, recomendamos:</p>
      <ul>
        <li>Use no mínimo 8 caracteres</li>
        <li>Combine letras maiúsculas e minúsculas</li>
        <li>Inclua números e caracteres especiais (@, #, $, %, etc.)</li>
        <li>
          Evite informações pessoais óbvias (data de nascimento, nome, etc.)
        </li>
        <li>Não reutilize senhas de outros serviços</li>
      </ul>
      <h2>Problemas na recuperação</h2>
      <p>
        Se você não receber o e-mail de recuperação ou enfrentar outros
        problemas durante o processo, entre em contato com o suporte técnico
        através do e-mail suporte@sigpei.example.com.
      </p>
    </div>;
};