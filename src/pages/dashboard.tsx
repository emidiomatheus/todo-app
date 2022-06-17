import { format } from 'date-fns'
import type { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { FinishedTask } from '../components/FinishedTask'
import { FinishedTasksList } from '../components/FinishedTasksList'
import { ModalAddTask } from '../components/ModalAddTask'
import { ModalEditTask } from '../components/ModalEditTask'
import { Summary } from '../components/Summary'
import { Task } from '../components/Task'
import { TaskList } from '../components/TaskList'
import { api } from '../services/api'
import { connectToDatabase } from '../utils/mongodb'

ReactModal.setAppElement("#__next")

interface TaskType {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
  userId: string;
}

interface DashboardProps {
  data: TaskType[],
  session: Session;
}

const Dashboard: NextPage<DashboardProps> = ({ data, session }: DashboardProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [finishedTasks, setFinishedTasks] = useState<TaskType[]>([])
  const [editingTask, setEditingTask] = useState({} as TaskType)
  const [isModalAddOpen, setIsModalAddOpen] = useState(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)

  useEffect(() => {    
    const filteredFinishedTasks = data.filter(task => task.isFinished === true)
    const filteredTasks = data.filter(task => task.isFinished !== true)
    setFinishedTasks(filteredFinishedTasks)
    setTasks(filteredTasks)
  }, [data])

  async function handleAddTask(task: TaskType) {
    const response = await api.post('/tasks/new', {
      ...task,
      isFinished: false,
    })
    setTasks([...tasks, response.data])
  }

  async function handleUpdateTask(task: TaskType) {
    try {
      const taskUpdated = await api.put(
        `/tasks/${editingTask._id}/edit`,
        {...editingTask, ...task}
      )

      const tasksUpdated = tasks.map(task => 
        task._id !== taskUpdated.data._id ? task : taskUpdated.data
      )

      setTasks(tasksUpdated)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete(id: string, isFinished: boolean) {
    await api.delete(`/tasks/${id}/delete`)

    if (isFinished) {
      const tasksFiltered = finishedTasks.filter(finishedTask => finishedTask._id !== id)
      setFinishedTasks(tasksFiltered)
      return
    }

    const tasksFiltered = tasks.filter(task => task._id !== id)
    setTasks(tasksFiltered)
  }

  async function handleMarkAsFinished(id: string) {
    const finishedTask = tasks.find(task => task._id === id) as TaskType
    const tasksFiltered = tasks.filter(task => task._id !== id)

    api.put(`/tasks/${id}/check`)

    setFinishedTasks([...finishedTasks, finishedTask])
    setTasks(tasksFiltered)
  }

  function toggleModal() {
    setIsModalAddOpen(!isModalAddOpen)
  }
  
  function toggleEditModal() {
    setIsModalEditOpen(!isModalEditOpen)
  }

  function handleEditTask(task: TaskType) {
    const date = format(new Date(task.date), 'yyyy-MM-dd')
    setEditingTask({...task, date})
    setIsModalEditOpen(true)
  }

  return (
    <>
      <main>
        <Summary finishedTasks={finishedTasks} tasks={tasks} />
        <TaskList openModal={toggleModal}>
          {tasks && tasks.map(task => (
            <Task
              key={task._id}
              task={task}
              markAsFinished={handleMarkAsFinished}
              handleDelete={handleDelete}
              handleEditTask={handleEditTask}
            />
          ))}
        </TaskList>
        
        {!!finishedTasks && (
          <FinishedTasksList>
            {finishedTasks && finishedTasks.map(finishedTask => (
              <FinishedTask
                key={finishedTask._id}
                task={finishedTask}
                markAsFinished={handleMarkAsFinished}
                handleDelete={handleDelete}
              />
            ))}
          </FinishedTasksList>
        )}
      </main>
        <ModalAddTask
          isOpen={isModalAddOpen}
          setIsOpen={toggleModal}
          handleAddTask={handleAddTask}
        />
        <ModalEditTask
          isOpen={isModalEditOpen}
          setIsOpen={toggleEditModal}
          editingTask={editingTask}
          handleUpdateTask={handleUpdateTask}
        />
    </>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end();
  }

  const { db } = await connectToDatabase()
  
  const userId = session?.user.id
  const data = await db.collection('tasks').find({userId: userId}).toArray()

  const tasks: TaskType[] = JSON.parse(JSON.stringify(data))

  const parsedTasks = tasks.map(task => {
    return { 
      _id: task._id,
      title: task.title,
      date: task.date,
      type: task.type,
      isFinished: task.isFinished,
      userId: task.userId,
    }
  })

  return {
    props: {
      data: parsedTasks,
      session
    }
  }
}
