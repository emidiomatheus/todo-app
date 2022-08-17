import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

export function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  return (
    <Dialog.Root modal open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Dialog.Root>
  )
}