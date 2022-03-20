import { createContext, ReactNode, useState } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

type ModalContextData = {
  isOpen: boolean;
  openModal: (content?: string) => void;
  closeModal: () => void;
  modal: string;
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState('')

  function openModal(content?: string) {
    if (content) {
      setModal(content)
      setIsOpen(true)
    }
  }

  function closeModal() {
    setIsOpen(false)
  }
  
  return (
    <ModalContext.Provider value={{isOpen, openModal, closeModal, modal }}>
      {children}
    </ModalContext.Provider>
  )
}