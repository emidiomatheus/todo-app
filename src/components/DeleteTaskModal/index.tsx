import { Modal } from "../Modal";
import { Button, ButtonsContainer, Container, DeleteButton } from "./styles";

interface DeleteTaskModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDelete: () => void;
}

export function DeleteTaskModal({ isOpen, setIsOpen, handleDelete }: DeleteTaskModalProps) {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h2>Excluir tarefa</h2>
        <p>Tem certeza que deseja excluir essa tarefa?</p>
        <ButtonsContainer>
          <Button onClick={setIsOpen}>Cancelar</Button>
          <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
        </ButtonsContainer>
      </Container>
    </Modal>
  )
}