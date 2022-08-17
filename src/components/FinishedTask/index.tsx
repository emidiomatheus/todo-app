import { FiTrash } from "react-icons/fi";
import { TaskType } from "../../pages/dashboard";
import { IconButton } from "../IconButton";
import { Container } from "./styles";

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
        <IconButton
          onClick={() => handleDeleteTask(task._id, task.isFinished)}
          icon={FiTrash}
          title="Excluir tarefa"
        />
      </div>
    </Container>
  )
}