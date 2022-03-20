import { FormHandles, SubmitHandler } from '@unform/core';
import { useRef, useState } from 'react';
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

interface ModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTask: (data: FormData) => void;
}

export function ModalAddTask({ isOpen, setIsOpen, handleAddTask }: ModalAddTaskProps) {
  const formRef = useRef<FormHandles>(null)
  const [type, setType] = useState<'important' | 'urgent' | 'circumstantial'>('important')

  const handleSubmit: SubmitHandler<FormData> = data => {
    const task = {...data, type}
    
    handleAddTask(task);
    setIsOpen()
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Adicionar tarefa</h2>
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
          <button type="submit">Adicionar</button>
        </div>
      </Form>
    </Modal>
  )
}