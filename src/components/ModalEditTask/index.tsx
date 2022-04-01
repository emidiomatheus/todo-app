import { FormHandles, SubmitHandler } from '@unform/core';
import { useEffect, useRef, useState } from 'react';
import Input from '../Input';
import { Modal } from '../Modal';
import { Form, RadioBox, TransactionTypeContainer } from './styles';


interface FormData {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
}

interface ModalEditTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingTask: FormData;
  handleUpdateTask: (data: FormData) => void;
}

export function ModalEditTask({ isOpen, setIsOpen, editingTask, handleUpdateTask }: ModalEditTaskProps) {
  const formRef = useRef<FormHandles>(null)
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>(editingTask.type)

  useEffect(() => {
    setType(editingTask.type)
  }, [editingTask])
  
  const handleSubmit: SubmitHandler<FormData> = data => {
    const task = {...data, type}

    handleUpdateTask(task);
    setIsOpen()
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingTask}>
        <h2>Editar tarefa</h2>
        <Input
          name="title"
          type="text"
          placeholder="Nome da tarefa"
        />

        <Input
          name="date"
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
          <button type="submit">Salvar alterações</button>
        </div>
      </Form>
    </Modal>
  )
}