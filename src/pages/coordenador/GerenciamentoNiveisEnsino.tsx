import React from 'react';

export const GerenciamentoNiveisEnsino: React.FC = () => {
    return(
        <div className="niveis-ensino-container">
        <h1>Gerenciamento de Níveis de Ensino</h1>
        <p>
            Esta seção permite ao Coordenador definir a estrutura de ensino da
            escola, cadastrando os níveis, anos (séries) e turmas disponíveis.
        </p>

        <ol>
            <li>No painel do coordenador, clique em "Níveis de Ensino".</li>
            <li>Na tela "Níveis de Ensino", clique em "Criar Nível de Ensino".</li>
            <li>Uma janela "Novo Nível de Ensino" é aberta.</li>
            <li>
            O coordenador deve preencher os campos: Nível de Ensino, Ano
            Escolaridade e Turma.
            </li>
            <li>
            Ao clicar no botão "Salvar" os níveis e turmas já criados são
            exibidos na página principal.
            </li>
        </ol>
        </div>
    );
}