import { yupResolver } from '@hookform/resolvers/yup';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiPlus } from "react-icons/fi";
import * as yup from 'yup';
import { TaskType } from '../../pages/dashboard';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { ModalContent } from '../Modal/ModalContent';
import { ModalTitle } from '../Modal/ModalTitle';
import { Form, RadioBox, TransactionTypeContainer } from './styles';

interface ModalAddTaskProps {
  handleAddTask: (data: TaskType) => void;
}

const schema = yup.object({
  title: yup.string().required('Insira um título'),
})

export function ModalAddTask({ handleAddTask }: ModalAddTaskProps) {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>('important')
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<TaskType>({
    resolver: yupResolver(schema)
  })
  const { data: session } = useSession()
  const userId = session?.user.id || ""

  const handleCreateTask: SubmitHandler<TaskType> = data => {
    const task = {...data, type, userId}
    
    handleAddTask(task)
    setIsModalAddOpen(false)
    setType('important')
    reset()
  }
  
  return (
    <Modal isOpen={isModalAddOpen} setIsOpen={() => setIsModalAddOpen(!isModalAddOpen)}>
      <DialogTrigger asChild>
        <Button type="button" aria-label="Nova tarefa" >
          Nova tarefa
          <FiPlus color="#FFF" />
        </Button>
      </DialogTrigger>
      <ModalContent>
        <ModalTitle>Adicionar tarefa</ModalTitle>
        <Form onSubmit={handleSubmit(handleCreateTask)}>
          <Input
            label="Título"
            {...register('title')}
            type="text"
            placeholder="Nome da tarefa"
            error={errors.title?.message}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              activeColor="green"
              isActive={type === 'important'}
              onClick={() => setType('important')}
            >
              <span>Importante</span>
            </RadioBox>
            <RadioBox
              type="button"
              activeColor="yellow"
              isActive={type === 'circumstantial'}
              onClick={() => setType('circumstantial')}
            >
              <span>Circunstancial</span>
            </RadioBox>
            <RadioBox
              type="button"
              activeColor="red"
              isActive={type ==='urgent'}
              onClick={() => setType('urgent')}
            >
              <span>Urgente</span>
            </RadioBox>
          </TransactionTypeContainer>

          <div className="buttons">
            <DialogTrigger asChild>
              <Button
                type="button"
                aria-label="Cancelar"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
            </DialogTrigger>
            <Button
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Adicionar
            </Button>
          </div>
        </Form>
      </ModalContent>
    </Modal>
  )
}