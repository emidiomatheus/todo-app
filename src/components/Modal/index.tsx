import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode
}

export function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
    >
      {children}
    </ReactModal>
  )
}