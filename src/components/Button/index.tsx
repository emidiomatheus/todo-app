import { ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ((
  { loading, children, ...rest }: ButtonProps
) => {
  return (
    <Container {...rest}>
      {
        loading ? <Spinner /> : children
      }
    </Container>
  )
})