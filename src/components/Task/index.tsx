import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { Container } from "./styles";

interface TaskType {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
}

interface TaskProps {
  task: TaskType;
  handleDelete: (id: string) => void;
  handleEditTask: (task: TaskType) => void;
}

export function Task({ task, handleDelete, handleEditTask }: TaskProps) {

  const typeText = {
    important: 'Importante',
    urgent: 'Urgente',
    circumstantial: 'Circunstancial'
  }

  function setEditingTask(task: TaskType) {
    handleEditTask(task)
  }

  function handleDeleteTask(id: string) {
    handleDelete(id)
  }
  
  return (
    <Container type={task.type}>
      <p className="title">{task.title}</p>
      <time>{task.date}</time>
      <span>{typeText[task.type]}</span>
      <div className="actions">
        <i>
          <FiCheck aria-label="Marcar tarefa como concluída" title="Marcar tarefa como concluída" />
        </i>
        <i onClick={() => setEditingTask(task)}>
          <FiEdit aria-label="Editar tarefa" title="Editar tarefa" />
        </i>
        <i onClick={() => handleDeleteTask(task._id)}>
          <FiTrash aria-label="Exluir tarefa" title="Excluir tarefa" />
        </i>
      </div>
    </Container>
  )
}