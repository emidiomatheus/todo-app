import { forwardRef } from "react";
import { ContainerInput, Label } from "./styles";

interface Props {
  name: string,
  label: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, ...rest }, ref) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <ContainerInput name={name} {...rest} ref={ref} />
    </>
  );
});