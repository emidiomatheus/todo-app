import { Container } from "./styles";

interface Card {
  title: string;
  metrics?: number;
}

export function Card({ title, metrics }: Card) {
  return (
    <Container>
      <div className="header">
        <p>{title}</p>
      </div>
      <span>{metrics}</span>
    </Container>
  )
}