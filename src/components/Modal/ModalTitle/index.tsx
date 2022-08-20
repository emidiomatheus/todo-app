import { ReactNode } from "react";
import { Title } from "./styles";

interface ModalTitleProps {
  children: ReactNode
}

export function ModalTitle({ children }: ModalTitleProps) {
  return (
    <Title>
      {children}
    </Title>
  )
}