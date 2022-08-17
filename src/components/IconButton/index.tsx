import { IconType } from "react-icons";
import { Box } from "./styles";

interface IconButtonProps {
  icon: IconType
  onClick: () => void;
  title: string;
}

export function IconButton({ icon: Icon, onClick, title }: IconButtonProps) {
  return (
    <Box onClick={onClick} title={title} aria-label={title}>
      <Icon />
    </Box>
  )
}