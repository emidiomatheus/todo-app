import { getTasks } from '../lib/getTasks'
import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FinishedTask } from '../components/FinishedTask'
import { FinishedTasksList } from '../components/FinishedTasksList'
import { Summary } from '../components/Summary'
import { Task } from '../components/Task'
import { TaskList } from '../components/TaskList'
import { api } from '../services/api'
import { ModalEditTask } from '../components/ModalEditTask'

export interface TaskType {
  _id: string;
  title: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
  userId: string;
}

interface DashboardProps {
  data: TaskType[],
}

const Dashboard: NextPage<DashboardProps> = ({ data }: DashboardProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [finishedTasks, setFinishedTasks] = useState<TaskType[]>([])
  const [editingTask, setEditingTask] = useState({} as TaskType)
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)

  useEffect(() => {
    setTasks(data.filter(tasks => !tasks.isFinished))
    setFinishedTasks(data.filter(tasks => tasks.isFinished))
  }, [data])

  async function handleAddTask(task: TaskType) {
    const response = await api.post<TaskType>('/tasks/new', {
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
  function toggleEditModal() {
    setIsModalEditOpen(!isModalEditOpen)
  }

  function handleEditTask(task: TaskType) {
    setEditingTask({...task})
    setIsModalEditOpen(true)
  }

  return (
    <>
      <main>
        <Summary finishedTasks={finishedTasks} tasks={tasks} />
        <TaskList handleAddTask={handleAddTask}>
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const data = await getTasks(session.user.id)

  const tasks = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data: tasks
    }
  }
}
