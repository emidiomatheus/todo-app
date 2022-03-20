import { ReactNode } from "react";
import { FiPlus } from "react-icons/fi";
import { Container, NewTaskButton } from "./styles";

interface TasksProps {
  children: ReactNode;
  openModal: () => void;
}

export function TaskList({ children , openModal }: TasksProps) {
  
  return (
    <Container>
      <div className="header">
        <span>Tasks</span>
        <NewTaskButton onClick={openModal}>
            New
          <FiPlus color="#fff" />
        </NewTaskButton>
      </div>
      {children}
    </Container>
  )
}