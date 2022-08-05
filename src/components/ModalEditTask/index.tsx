import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Form, RadioBox, TransactionTypeContainer } from './styles';

interface FormData {
  _id: string;
  title: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
  userId: string;
}

interface ModalEditTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingTask: FormData;
  handleUpdateTask: (data: FormData) => void;
}

export function ModalEditTask({ isOpen, setIsOpen, editingTask, handleUpdateTask }: ModalEditTaskProps) {
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>(editingTask.type)

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>()
  const {data: session} = useSession()
  const userId = session?.user.id || ""

  useEffect(() => {
    setValue('title', editingTask.title)
    setType(editingTask.type)
  }, [editingTask, setValue])
  
  const handleEditTask: SubmitHandler<FormData> = data => {
    const task = {...data, type, userId}
    handleUpdateTask(task);
    setIsOpen()
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(handleEditTask)}>
        <h2>Editar tarefa</h2>
        <Input
          label="Título"
          {...register('title')}
          type="text"
          placeholder="Nome da tarefa"
          defaultValue={editingTask.title}
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
          <button type="submit">Salvar alterações</button>
        </div>
      </Form>
    </Modal>
  )
}