import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { ModalContent } from '../Modal/ModalContent';
import { ModalTitle } from '../Modal/ModalTitle';
import { Form, RadioBox, TransactionTypeContainer } from '../ModalAddTask/styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = yup.object({
  title: yup.string().required('Insira um título'),
})

export function ModalEditTask({ isOpen, setIsOpen, editingTask, handleUpdateTask }: ModalEditTaskProps) {
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>(editingTask.type)

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const {data: session} = useSession()
  const userId = session?.user.id || ""

  useEffect(() => {
    setValue('title', editingTask.title)
    setType(editingTask.type)
  }, [editingTask, setValue])
  
  const handleEditTask: SubmitHandler<FormData> = data => {
    const task = {...data, type, userId}
    handleUpdateTask(task)
    setIsOpen()
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalContent>
        <ModalTitle>Editar tarefa</ModalTitle>
        <Form onSubmit={handleSubmit(handleEditTask)}>
          <Input
            label="Título"
            {...register('title')}
            type="text"
            placeholder="Nome da tarefa"
            defaultValue={editingTask.title}
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
            <Button type="button" onClick={setIsOpen} disabled={isSubmitting}>
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Salvar
            </Button>
          </div>
        </Form>
      </ModalContent>
    </Modal>
  )
}