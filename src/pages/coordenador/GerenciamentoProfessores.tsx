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
        <img 
        src="/imgs/coordenador/gerenciamento-professores/opcao-profissionais.png" 
        alt="Opção 'Profissionais' no painel do coordenador" 
      />
        <li>
          Na tela "Profissionais da Escola" clique em "Criar/Vincular
          Profissional".
        </li>
        <img 
        src="/imgs/coordenador/gerenciamento-professores/criar-vinculo.png" 
        alt="" 
      />
        <li>Digite o CPF do profissional e clique no botão "Buscar CPF".</li>
        <img 
        src="/imgs/coordenador/gerenciamento-professores/buscar-cpf.png" 
        alt="" 
        />
        <li>
          O sistema irá tratar três cenários:
          <ul>
            <li>
              <strong>6.1. Novo profissional:</strong> Se o CPF não for
              encontrado, um formulário de "Novo profissional" é exibido para
              cadastrar seus dados de acesso e dados pessoais. Ao salvar, o
              profissional é criado e vinculado com sucesso.
            </li>
            <img 
            src="/imgs/coordenador/gerenciamento-professores/novo-profissional-forms.png" 
            alt="" 
            />
            <li>
              <strong>6.2. Profissional Existente (Não Vinculado):</strong> Se o
              profissional existe no sistema mas não está vinculado à
              escola/ano, o sistema pergunta "Deseja vincular agora?". Ao
              confirmar, o profissional é vinculado.
            </li>
            <img 
            src="/imgs/coordenador/gerenciamento-professores/profissional-existente-nao-vinculado.png" 
            alt="" 
            />
            <li>
              <strong>6.3. Profissional Já Vinculado:</strong> Se o profissional
              já está vinculado à escola e ao ano letivo, o sistema apenas
              exibe uma mensagem informativa.
            </li>
            <img 
            src="/imgs/coordenador/gerenciamento-professores/profissional-vinculado.png" 
            alt="" 
            />
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
            <img 
            src="/imgs/coordenador/gerenciamento-professores/editar-professor.png" 
            alt="" 
            />
            <li>
              <strong>7.2. Excluir:</strong> Clicar em "Excluir" e confirmar a
              exclusão do profissional do sistema.
            </li>
            <img 
            src="/imgs/coordenador/gerenciamento-professores/excluir-professor.png" 
            alt="" 
            />
            <li>
              <strong>7.3. Vincular Aluno:</strong> Clicar em "Vincular" e confirmar a
              vinculação do aluno ao profissional.
            </li>
            <img 
            src="/imgs/coordenador/gerenciamento-professores/vincular-aluno.png" 
            alt="" 
            />
            <li>
              <strong>7.4. Desvincular Aluno:</strong> Clicar em "Desvincular" 
              para remover o aluno vinculado ao profissional.
            </li>
            <img 
            src="/imgs/coordenador/gerenciamento-professores/desvincular-aluno.png" 
            alt="" 
            />
          </ul>
        </li>
      </ol>
    </div>
  );
}