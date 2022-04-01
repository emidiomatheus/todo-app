import { ReactNode } from "react";
import { Container } from "./styles";

interface TasksProps {
  children: ReactNode;
}

export function FinishedTasksList({ children }: TasksProps) {
  
  return (
    <Container>
      <div className="header">
        <span>Tarefas concluídas</span>
      </div>
      {children}
    </Container>
  )
}