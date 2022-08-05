import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { FiTrash } from "react-icons/fi";
import { Container } from "./styles";

interface TaskType {
  _id: string;
  title: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
}

interface TaskProps {
  task: TaskType;
  markAsFinished: (id: string) => void;
  handleDelete: (id: string, isFinished: boolean) => void;
}

export function FinishedTask({ task, handleDelete }: TaskProps) {
  function handleDeleteTask(id: string, isFinished: boolean) {
    handleDelete(id, isFinished)
  }

  return (
    <Container type={task.type} >
      <p className="title">{task.title}</p>
      <div className="actions">
        <i onClick={() => handleDeleteTask(task._id, task.isFinished)}>
          <FiTrash aria-label="Exluir tarefa" title="Excluir tarefa" />
        </i>
      </div>
    </Container>
  )
}