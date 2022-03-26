import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { Header } from '../components/Header'
import { ModalAddTask } from '../components/ModalAddTask'
import { Summary } from '../components/Summary'
import { Task } from '../components/Task'
import { TaskList } from '../components/TaskList'
import { api } from '../services/api'
import { GlobalStyle } from '../styles/global'
import { connectToDatabase } from '../utils/mongodb'

ReactModal.setAppElement("#__next")

interface TaskType {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
}

interface HomeProps {
  data: TaskType[]
}

const Home: NextPage<HomeProps> = ({ data }: HomeProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [editingTask, setEditingTask] = useState({} as TaskType)
  const [isModalAddOpen, setIsModalAddOpen] = useState(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [deletingTask, setDeletingTask] = useState('')

  useEffect(() => {
    setTasks(data)
  }, [])

  async function handleAddTask(task: TaskType) {
    const response = await api.post('/tasks/new', {
      ...task,
      isFinished: false,
    })
    setTasks([...tasks, response.data])
  }

  async function handleEditTask() {
    
  }

  function toggleDeleteModal(id: string) {
    setIsModalDeleteOpen(!isModalDeleteOpen)
  }

  async function handleDelete(id: string) {
    await api.delete(`/tasks/${id}`)

    const tasksFiltered = tasks.filter(task => task._id !== id)

    setTasks(tasksFiltered)
  }

  function toggleModal() {
    setIsModalAddOpen(!isModalAddOpen)
  }

  return (
    <>
      <Header />
      <main>
        <Summary tasks={tasks} />
        <TaskList openModal={toggleModal}>
          {tasks && tasks.map(task => (
            <Task
              key={task._id}
              task={task}
              handleDelete={handleDelete}
              handleEditTask={handleEditTask}
            />
          ))}
        </TaskList>
      </main>
        <ModalAddTask
          isOpen={isModalAddOpen}
          setIsOpen={toggleModal}
          handleAddTask={handleAddTask}
        />
        {/* <DeleteTaskModal
          isOpen={isModalDeleteOpen}
          setIsOpen={toggleDeleteModal}
          handleDelete={handleDelete}
        /> */}
      <GlobalStyle /> 
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { db } = await connectToDatabase()
  const data = await db.collection('tasks').find({}).toArray()

  const tasks: TaskType[] = JSON.parse(JSON.stringify(data))

  const parsedTasks = tasks.map(task => {
    return { 
      _id: task._id,
      title: task.title,
      date: format(new Date(task.date), 'dd MMM yyyy', {locale: ptBR}),
      type: task.type,
      isFinished: task.isFinished
    }
  })

  return {
    props: {
      data: parsedTasks
    }
  }
}
