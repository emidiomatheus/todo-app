import { ReactElement } from "react";
import { Container } from "./styles";

interface Card {
  title: string;
  metrics?: number;
  children?: ReactElement;
}

export function Card({ title, metrics, children }: Card) {
  return (
    <Container>
      <div className="header">
        <p>{title}</p>
      </div>
      <span>{metrics}</span>
      {children}
    </Container>
  )
}