import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useState } from 'react'
import { FiTrash } from 'react-icons/fi';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogTitle, ButtonsContainer } from './styles'

interface ModalDeleteTaskProps {
  handleDeleteTask: () => void;
}

export function ModalDeleteTask({ handleDeleteTask }: ModalDeleteTaskProps) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  
  return (
    <AlertDialog.Root open={isModalDeleteOpen} onOpenChange={() => setIsModalDeleteOpen(!isModalDeleteOpen)}>
      <AlertDialog.Trigger asChild>
        <IconButton icon={FiTrash} title="Excluir tarefa" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>
            Teste
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso irá deletar a tarefa permanentemente.
          </AlertDialogDescription>
          <ButtonsContainer>
            <AlertDialogCancel asChild>
              <Button aria-label="Cancelar deleção da tarefa" type="button">
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button aria-label="Confirmar deleção da tarefa" type="button" onClick={handleDeleteTask}>
                Sim, deletar
              </Button>
            </AlertDialogAction>
          </ButtonsContainer>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}