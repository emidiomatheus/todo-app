import { Card } from "../Card";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div className="cards" >
        <Card title="Completed tasks" metrics={45} />
        <Card title="Non-completed tasks" metrics={13} />
        <Card title="Completed tasks" />
      </div>
    </Container>
  )
}