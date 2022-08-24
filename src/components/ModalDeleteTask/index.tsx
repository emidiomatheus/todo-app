import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { ReactNode } from 'react'
import { FiTrash } from 'react-icons/fi';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogTitle, ButtonsContainer } from './styles'

interface ModalDeleteTaskProps {
  handleDeleteTask: () => void;
  children?: ReactNode;
}

export function ModalDeleteTask({ handleDeleteTask, children }: ModalDeleteTaskProps) {
  return (
    <AlertDialog.Root>
      {
        children ? (
          children
        ) : (
          <AlertDialog.Trigger asChild>
            <IconButton icon={FiTrash} title="Excluir tarefa" />
          </AlertDialog.Trigger>
        )
      }
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>
            Excluir
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso irá excluir a tarefa permanentemente.
          </AlertDialogDescription>
          <ButtonsContainer>
            <AlertDialogCancel asChild>
              <Button aria-label="Cancelar deleção da tarefa" type="button">
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button aria-label="Confirmar deleção da tarefa" type="button" onClick={handleDeleteTask}>
                Sim, excluir
              </Button>
            </AlertDialogAction>
          </ButtonsContainer>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}