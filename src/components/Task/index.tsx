import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { Container } from "./styles";

interface TaskType {
  _id: string;
  title: string;
  date: string;
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

  const typeText = {
    important: 'Importante',
    urgent: 'Urgente',
    circumstantial: 'Circunstancial'
  }

  function setEditingTask(task: TaskType) {
    handleEditTask(task)
  }

  function handleDeleteTask(id: string, isFinished: boolean) {
    handleDelete(id, isFinished)
  }

  const formattedDate = format(new Date(task.date), 'dd MMM yyyy', {locale: ptBR})
  
  return (
    <Container type={task.type}>
      <p className="title">{task.title}</p>
      <time dateTime={task.date}>{formattedDate}</time>
      <span>{typeText[task.type]}</span>
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