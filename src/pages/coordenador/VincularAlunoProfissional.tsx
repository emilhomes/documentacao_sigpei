import React from 'react';

export const VincularAlunoProfissional: React.FC = () => {
  return (
    <div className="vincular-aluno-container">
      <h1>Vincular Aluno ao Profissional</h1>
      <p>
        Este fluxo explica como um Coordenador gerencia os alunos e seus Planos
        Educacionais Individualizados (PEI) em uma escola e ano letivo
        específicos.
      </p>

      <ol>
        <li>No painel coordenador, selecione a opção "Alunos"</li>
        <img 
        src="/imgs/coordenador/vincular-aluno/pagina-alunos.png" 
        alt="" 
        />
        <li>Clique no botão "Criar/Vincular Aluno".</li>
        <img 
        src="/imgs/coordenador/vincular-aluno/botao-criar-vinculo.png" 
        alt="" 
        />
        <li>Digite o CPF do aluno e clique no botão "Buscar CPF".</li>
        <img 
        src="/imgs/coordenador/vincular-aluno/buscar-cpf.png" 
        alt="" 
        />
        <li>
          O sistema irá tratar quatro cenários:
          <ul>
            <li>
              <strong>4.1. Aluno não vinculado:</strong> Se o CPF não for
              encontrado, um formulário de "Novo aluno" é exibido. O coordenador
              preencherá nome, cpf, data de nascimento, responsável, laudo e
              caracterização. Ao salvar, o aluno aparecerá na lista de alunos
              vinculados à escola.
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/vincular-aluno.png" 
            alt="" 
            />
            <li>
              <strong>4.2. Aluno já vinculado:</strong> Se o aluno já possui um
              PEI vinculado à escola e ano letivo atuais, o sistema informa que é
              necessário desvincular primeiro para cadastrá-lo novamente.
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/aluno-vinculado.png" 
            alt="" 
            />
            <li>
              <strong>4.3. Aluno Vinculado (Sem Escola):</strong> Se o aluno já
              possui um PEI para o ano, mas não está vinculado a nenhuma escola,
              o sistema oferece a opção de vinculá-lo clicando em "Continuar"
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/aluno-vinculado-sem-escola.png" 
            alt="" 
            />
            <li>
              <strong>4.4. Aluno Vinculado (Outra Escola):</strong> Se o aluno
              existe, mas está vinculado a outra escola, o sistema pergunta se
              deseja vincular agora e criar o PEI correspondente.
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/aluno-vinculado-outra-escola.png" 
            alt="" 
            />
          </ul>
        </li>
        <li>
          Após o aluno estar listado, o coordenador poderá fazer algumas
          alterações, como:
          <ul>
            <li>
              <strong>5.1. Desvincular:</strong> Na tela de lista de alunos, ao
              clicar no botão "Desvincular" e em seguida em "Continuar" permite
              remover o vínculo do aluno com a escola para aquele ano letivo. Uma
              mensagem de sucesso confirma a desvinculação.
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/desvincular.png" 
            alt="" 
            />
            <li>
              <strong>5.2. Ver Detalhes:</strong> Ao clicar no nome do aluno,
              leva a página "Dados do Aluno".
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/ver-detalhes.png" 
            alt="" 
            />
            <li>
              <strong>5.3. Editar/Excluir:</strong> Na página dos dados do aluno o
              coordenador pode "Editar" os dados do aluno em um formulário ou
              "Excluir" o aluno do sistema, mediante confirmação.
            </li>
            <img 
            src="/imgs/coordenador/vincular-aluno/editar.png" 
            alt="" 
            />
            <img 
            src="/imgs/coordenador/vincular-aluno/excluir.png" 
            alt="" 
            />
          </ul>
        </li>
      </ol>
    </div>
  );
}