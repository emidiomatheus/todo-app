import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { Container } from "./styles";

interface TaskType {
  _id: string;
  title: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
  userId: string;
}

interface TaskProps {
  task: TaskType;
  markAsFinished: (id: string) => void;
  handleDelete: (id: string, isFinished: boolean) => void;
  handleEditTask: (task: TaskType) => void;
}

export function Task({ task, markAsFinished, handleDelete, handleEditTask }: TaskProps) {
  function setEditingTask(task: TaskType) {
    handleEditTask(task)
  }

  function handleDeleteTask(id: string, isFinished: boolean) {
    handleDelete(id, isFinished)
  }

  return (
    <Container type={task.type}>
      <p className="title">{task.title}</p>
      <div className="actions">
        <i onClick={() => markAsFinished(task._id)} aria-label="Marcar tarefa como concluída" title="Marcar tarefa como concluída">
          <FiCheck />
        </i>
        <i onClick={() => setEditingTask(task)} aria-label="Editar tarefa" title="Editar tarefa" >
          <FiEdit />
        </i>
        <i onClick={() => handleDeleteTask(task._id, task.isFinished)} aria-label="Exluir tarefa" title="Excluir tarefa">
          <FiTrash />
        </i>
      </div>
    </Container>
  )
}