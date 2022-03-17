import { NewTaskButton } from "../NewTaskButton";
import { Task } from "../Task";
import { Container } from "./styles";

export function Tasks() {
  return (
    <Container>
      <div className="header">
        <span>Tasks</span>
        <NewTaskButton />
      </div>
      <Task />
      <Task />
    </Container>
  )
}