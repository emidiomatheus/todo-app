import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Form, RadioBox, TransactionTypeContainer } from './styles';

interface FormData {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
  userId: string;
}

interface ModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTask: (data: FormData) => void;
}

export function ModalAddTask({ isOpen, setIsOpen, handleAddTask }: ModalAddTaskProps) {
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>('important')
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()
  const { data: session } = useSession()
  const userId = session?.user.id || ""

  const handleCreateTask: SubmitHandler<FormData> = data => {
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
        />

        <Input
          label="Data"
          {...register('date')}
          type="date"
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