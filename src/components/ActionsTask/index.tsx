import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiCheck, FiEdit, FiTrash, FiMoreVertical } from 'react-icons/fi';
import { ModalDeleteTask } from '../ModalDeleteTask';
import { DropdownContent, DropdownTrigger, Option } from './styles';

interface ActionsTaskProps {
  markAsFinished: () => void;
  handleDelete: () => void;
  handleEditTask: () => void;
}

export function ActionsTask({ markAsFinished, handleDelete, handleEditTask }: ActionsTaskProps) {
  return (
    <DropdownMenu.Root>
      <DropdownTrigger>
        <FiMoreVertical />
      </DropdownTrigger>

      <DropdownMenu.Portal>
        <DropdownContent side="top" sideOffset={4} align="end">
          <DropdownMenu.Item onSelect={markAsFinished}>
            <Option>
              Marcar como concluída
              <FiCheck />
            </Option>
          </DropdownMenu.Item>

          <DropdownMenu.Item onSelect={handleEditTask}>
            <Option>
              Editar Tarefa
              <FiEdit />
            </Option>
          </DropdownMenu.Item>

          <ModalDeleteTask handleDeleteTask={handleDelete}>
            <AlertDialogTrigger asChild>
              <Option>
                Excluir Tarefa
                <FiTrash />
              </Option>
            </AlertDialogTrigger>
          </ModalDeleteTask>
        </DropdownContent>
      </DropdownMenu.Portal>

    </DropdownMenu.Root>
  )
}