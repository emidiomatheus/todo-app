import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { ActionsTask } from "../ActionsTask";
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

  const screenWidth = window.innerWidth;

  return (
    <Container type={task.type}>
      <p className="title">{task.title}</p>
      {
        screenWidth > 468 ? (
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