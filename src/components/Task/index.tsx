import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { TaskType } from "../../pages/dashboard";
import { ActionsTask } from "../ActionsTask";
import { IconButton } from "../IconButton";
import { ModalDeleteTask } from "../ModalDeleteTask";
import { Container } from "./styles";

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

  const screenWidth = window.innerWidth;

  return (
    <Container type={task.type}>
      <p className="title">{task.title}</p>
      {
        screenWidth > 468 ? (
          <div className="actions">
            <IconButton
              onClick={() => markAsFinished(task._id)}
              icon={FiCheck}
              title="Marcar tarefa como concluída"
            />
            <IconButton
              onClick={() => setEditingTask(task)}
              icon={FiEdit}
              title="Editar tarefa"
            />
            <ModalDeleteTask handleDeleteTask={() => handleDeleteTask(task._id, task.isFinished)} />
          </div>
        ) : (
          <ActionsTask            
            markAsFinished={() => markAsFinished(task._id)}
            handleEditTask={() => setEditingTask(task)}
            handleDelete={() => handleDeleteTask(task._id, task.isFinished)}
          />
        )
      }
    </Container>
  )
}