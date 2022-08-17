import { DialogContentProps, DialogPortal } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { Content, ModalOverlay } from "./styles";

interface ModalContentProps extends DialogContentProps {
  children: ReactNode;
}

export function ModalContent({ children, ...rest }: ModalContentProps) {
  return (
    <DialogPortal>
      <ModalOverlay />
      <Content {...rest}>
        {children}
      </Content>
    </DialogPortal>
  )
}