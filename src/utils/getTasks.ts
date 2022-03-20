import { connectToDatabase } from "./mongodb"

export async function getTasks() {
  try {
    const { db } = await connectToDatabase()
    const data = await db.collection('tasks').find({}).toArray()

    return data
  } catch (error) {
    return error
  }
}