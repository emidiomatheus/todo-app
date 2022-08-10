import { yupResolver } from '@hookform/resolvers/yup';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TaskType } from '../../pages/dashboard';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Form, RadioBox, TransactionTypeContainer } from './styles';

interface ModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTask: (data: TaskType) => void;
}

const schema = yup.object({
  title: yup.string().required('Insira um título'),
})

export function ModalAddTask({ isOpen, setIsOpen, handleAddTask }: ModalAddTaskProps) {
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>('important')
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<TaskType>({
    resolver: yupResolver(schema)
  })
  const { data: session } = useSession()
  const userId = session?.user.id || ""

  const handleCreateTask: SubmitHandler<TaskType> = data => {
    const task = {...data, type, userId}
    
    handleAddTask(task);
    setIsOpen()
    setType('important')
    reset()
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(handleCreateTask)}>
        <h2>Adicionar tarefa</h2>
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
          <button type="button" onClick={setIsOpen}>Cancelar</button>
          <button type="submit">Adicionar</button>
        </div>
      </Form>
    </Modal>
  )
}