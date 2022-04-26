import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { FiTrash } from "react-icons/fi";
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
  markAsFinished: (id: string) => void;
  handleDelete: (id: string, isFinished: boolean) => void;
}

export function FinishedTask({ task, handleDelete }: TaskProps) {

  const typeText = {
    important: 'Importante',
    urgent: 'Urgente',
    circumstantial: 'Circunstancial'
  }

  function handleDeleteTask(id: string, isFinished: boolean) {
    handleDelete(id, isFinished)
  }

  const formattedDate = format(new Date(task.date), 'dd MMM yyyy', {locale: ptBR})
  
  return (
    <Container type={task.type} >
      <p className="title">{task.title}</p>
      <time>{formattedDate}</time>
      <span>{typeText[task.type]}</span>
      <div className="actions">
        <i onClick={() => handleDeleteTask(task._id, task.isFinished)}>
          <FiTrash aria-label="Exluir tarefa" title="Excluir tarefa" />
        </i>
      </div>
    </Container>
  )
}