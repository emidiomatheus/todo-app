import { TaskType } from "../../pages/dashboard";
import { ModalDeleteTask } from "../ModalDeleteTask";
import { FinishedTaskContainer } from "../Task/styles";

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
    <FinishedTaskContainer type={task.type} >
      <p className="title">{task.title}</p>
      <div className="actions">
        <ModalDeleteTask
          handleDeleteTask={() => handleDeleteTask(task._id, task.isFinished)}
        />
      </div>
    </FinishedTaskContainer>
  )
}