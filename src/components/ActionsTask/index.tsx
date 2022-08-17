import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiCheck, FiEdit, FiTrash, FiMoreVertical } from 'react-icons/fi';
import { DropdownContent, IconButton, Option } from './styles';

interface ActionsTaskProps {
  markAsFinished: () => void;
  handleDelete: () => void;
  handleEditTask: () => void;
}

export function ActionsTask({ markAsFinished, handleDelete, handleEditTask }: ActionsTaskProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton aria-label="Ações da tarefa">
          <FiMoreVertical />
        </IconButton>
      </DropdownMenu.Trigger>

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

          <DropdownMenu.Item onSelect={handleDelete}>
            <Option>
              Excluir Tarefa
              <FiTrash />
            </Option>
          </DropdownMenu.Item>
        </DropdownContent>
      </DropdownMenu.Portal>

    </DropdownMenu.Root>
  )
}