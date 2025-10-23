import React from 'react';

export const GerenciamentoComponentesCurriculares: React.FC = () => {
  return (
    <div className="componentes-curriculares-container">
      <h1 className="text-[2.4rem]">Gerenciamento de Componentes Curriculares</h1>
      <p>
        Este fluxo descreve como um Coordenador adiciona disciplinas (componentes
        curriculares) aos níveis de ensino e como gerencia o plano curricular de
        cada disciplina.
      </p>

      <h3>Adicionar Componente:</h3>
      <ol>
        <li>No painel do coordenador, clique em “Componentes Curriculares”.</li>
        <img 
            src="/imgs/coordenador/componentes-curriculares/opc-componentes.png" 
            alt="" 
        />
        <li>O sistema exibe os níveis de ensino.</li>
        <img 
            src="/imgs/coordenador/componentes-curriculares/exibir-niveis.png" 
            alt="" 
        />
        <li>
          Ao selecionar um nível, o sistema mostra os anos (ex.: 2º Ano) e um
          botão “Adicionar Componente”.
        </li>
        <img 
            src="/imgs/coordenador/componentes-curriculares/btn-add-componente.png" 
            alt="" 
        />
        <li>
          Ao clicar em “Adicionar Componente”, uma janela “Novo Componente”
          solicita o nome da disciplina.
        </li>
        <img 
            src="/imgs/coordenador/componentes-curriculares/janela-novo-componente.png" 
            alt="" 
        />
        <li>
          Após preencher e clicar no botão “Salvar”, a disciplina é adicionada e
          listada.
        </li>
        <img 
            src="/imgs/coordenador/componentes-curriculares/componente-listado.png" 
            alt="" 
        />
      </ol>

      <h3>Gerenciar Componente e Plano Curricular:</h3>
      <ol>
        <li>Ao lado da disciplina lista, clique no botão “Detalhes”.</li>
        <img 
            src="/imgs/coordenador/componentes-curriculares/btn-detalhes.png" 
            alt="" 
        />
        <li>
          Na tela “Detalhes do Componente”, o coordenador pode:
          <ul>
            <li>
              <strong>2.1. Atualizar/Excluir Componente:</strong> O coordenador
              pode editar ou excluir a disciplina. Ao excluir o componente, uma
              mensagem de sucesso irá aparecer.
            </li>
            <img 
            src="/imgs/coordenador/componentes-curriculares/btn-atualizar.png" 
            alt="" 
            />
            <li>
              <strong>2.2. Criar plano curricular:</strong> Ao clicar no botão
              “Criar Plano Curricular”, uma janela irá abrir solicitando o
              conteúdo da turma e os objetivos da turma. Após preencher e salvar,
              o “Plano Curricular” é criado com sucesso. Uma vez criado o plano
              pode ser modificado ou removido.
            </li>
            <img 
            src="/imgs/coordenador/componentes-curriculares/btn-criar-plano-curricular.png" 
            alt="" 
            />
            <img 
            src="/imgs/coordenador/componentes-curriculares/forms-criar-plano.png" 
            alt="" 
            />
          </ul>
        </li>
      </ol>
    </div>
  );
}
