import { ReactNode } from "react";
import { TaskType } from "../../pages/dashboard";
import { ModalAddTask } from "../ModalAddTask";
import { Container } from "./styles";

interface TasksProps {
  children: ReactNode;
  handleAddTask: (data: TaskType) => void;
}

export function TaskList({ children , handleAddTask }: TasksProps) {
  
  return (
    <Container>
      <div className="header">
        <span>Tarefas pendentes</span>
        <ModalAddTask handleAddTask={handleAddTask} />
      </div>
      {children}
    </Container>
  )
}