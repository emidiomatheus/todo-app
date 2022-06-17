import { forwardRef } from "react";
import { ContainerInput, ErrorMessage, Label } from "./styles";

interface Props {
  name: string,
  label: string;
  error?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ name, label, error, ...rest }, ref) {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      {!!error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
      <ContainerInput name={name} {...rest} ref={ref} />
    </>
  );
});