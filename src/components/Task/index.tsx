import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { Container } from "./styles";

export function Task() {
  return (
    <Container>
      <p className="title">Ler o livro "Arte da Guerra"</p>
      <div className="actions">
        <i>
          <FiCheck aria-label="Marcar tarefa como concluída" title="Marcar tarefa como concluída" />
        </i>
        <i>
          <FiEdit aria-label="Editar tarefa" title="Editar tarefa" />
        </i>
        <i>
          <FiTrash aria-label="Exluir tarefa" title="Excluir tarefa" />
        </i>
      </div>
    </Container>
  )
}