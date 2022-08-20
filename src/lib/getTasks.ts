import { useSession } from "next-auth/react"
import { TaskType } from "../pages/dashboard"
import { connectToDatabase } from "./mongodb"

export async function getTasks(userId: string | undefined) {
  const { db } = await connectToDatabase()
  const data = await db.collection<TaskType>('tasks').find({ userId }).toArray()

  return data
}

export default getTasks;