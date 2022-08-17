import { SwitchRoot, SwitchThumb } from "./styles";

interface SwitchProps {
  checked: boolean;
  toggleTheme: () => void;
}

export function Switch({ checked, toggleTheme }: SwitchProps) {
  return (
    <SwitchRoot checked={checked} onCheckedChange={toggleTheme}>
      <SwitchThumb />
    </SwitchRoot>
  )
}