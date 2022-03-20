import { connectToDatabase } from "./mongodb";

export async function deleteTask(id: string) {
  const { db } = await connectToDatabase()

  await db.collection('tasks').deleteOne({id: id})
}