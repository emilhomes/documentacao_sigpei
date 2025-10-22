export default function GerenciamentoSalasRecursos() {
  return (
    <div className="salas-recursos-container">
      <h1>Gerenciamento de Salas de Recursos</h1>
      <p>
        Esta seção descreve a criação de Salas de Recursos e a vinculação de
        alunos a elas para Atendimento Educacional Especializado (AEE).
      </p>

      <ol>
        <li>No painel do coordenador, clique em "Salas de Recursos".</li>
        <li>Na tela "Sala de Recursos", clique em "Nova Sala".</li>
        <li>Uma janela "Nova Sala de Recurso" irá aparecer e solicitará o nome da sala.</li>
        <li>Após preencher e salvar, a sala é criada com sucesso e aparece na lista.</li>
        <li>
          Após a sala ser listada, o coordenador poderá fazer algumas alterações:
          <ul>
            <li>
              <strong>5.1. Editar:</strong>
            </li>
            <li>
              <strong>5.2. Excluir:</strong>
            </li>
            <li>
              <strong>5.3. Ver Detalhes:</strong> Ao clicar no botão "Detalhes", o
              sistema exibe uma página da sala com o botão "Vincular aluno", ao
              clicar nele um formulário irá aparecer, em que o coordenador deve
              selecionar o aluno, frequência, tempo, composição e anexar o plano
              AEE. Após salvar, o aluno é vinculado com sucesso e listado na
              página da sala.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}