import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Task {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
  createdAt: string;
}

type TaskInput = Omit<Task, '_id' | 'createdAt' | 'isFinished'>

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (task: TaskInput) => Promise<void>;
}

const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    api.get('/tasks')
      .then(response => setTasks(response.data))
  })

  async function createTask(taskInput: TaskInput) {
    const response = await api.post('/tasks/new', {
      ...taskInput,
      isFinished: false,
      createdAt: new Date()
    })

    const { task } = response.data
    
    setTasks([...tasks, task])
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)

  return context
}