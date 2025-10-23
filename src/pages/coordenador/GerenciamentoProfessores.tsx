import React from "react";

export const GerenciamentoProfessores: React.FC = () => {
  return (
    <div className="gerenciamento-professores-container">
      <h1>Gerenciamento de Professores</h1>
      <p>
        Esta seção descreve como um Coordenador gerencia os profissionais, como
        professores especiais, associados a uma escola em um ano letivo
        específico.
      </p>

      <ol>
        <li>No painel do coordenador, selecione a opção "Profissionais"</li>
        <li>Clique na escola que você quer gerenciar o professor.</li>
        <li>Selecione o ano letivo.</li>
        <li>
          Na tela "Profissionais da Escola" clique em "Criar/Vincular
          Profissional".
        </li>
        <li>Digite o CPF do profissional.</li>
        <li>
          O sistema irá tratar três cenários:
          <ul>
            <li>
              <strong>6.1. Novo profissional:</strong> Se o CPF não for
              encontrado, um formulário de "Novo profissional" é exibido para
              cadastrar seus dados de acesso e dados pessoais. Ao salvar, o
              profissional é criado e vinculado com sucesso.
            </li>
            <li>
              <strong>6.2. Profissional Existente (Não Vinculado):</strong> Se o
              profissional existe no sistema mas não está vinculado à
              escola/ano, o sistema pergunta "Deseja vincular agora?". Ao
              confirmar, o profissional é vinculado.
            </li>
            <li>
              <strong>6.3. Profissional Já Vinculado:</strong> Se o profissional
              já está vinculado à escola e ao ano letivo, o sistema apenas
              exibe uma mensagem informativa.
            </li>
          </ul>
        </li>
        <li>
          Com o profissional vinculado, clicar no nome dele irá levar à página
          "Dados do Profissional", em que o coordenador poderá fazer algumas
          alterações, como:
          <ul>
            <li>
              <strong>7.1. Editar:</strong> Clicar em "Editar" irá abrir um
              formulário e poderá alterar os dados como nome, cpf e categoria
              profissional.
            </li>
            <li>
              <strong>7.2. Excluir:</strong> Clicar em "Excluir" e confirmar a
              exclusão do profissional do sistema.
            </li>
            <li>
              <strong>7.3. Desvincular:</strong> Clicar em "Desvincular
              Profissional" para removê-lo da escola naquele ano letivo.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}